const axios = require('axios');
const {parse} = require('node-html-parser');

/**
 * @typedef {Object} SearchOptions
 * @property {string} [term] - A term or keyword to search for.
 * @property {string} [software_type] - The type of software being searched. [See Values](#software_type)
 * @property {string} [additional_features] - Extra features of the software. [See Values](#additional_features)
 * @property {string} [multiplayer] - Indicates if the software supports multiplayer. [See Values](#multiplayer)
 * @property {boolean} [only_specials] - Filter to show only special offers.
 * @property {boolean} [hide_free] - Option to hide free-to-play software.
 * @property {number} [max_price] - Maximum price limit for the search.
 * @property {string} [controller_support] - Support for various types of controllers. [See Values](#controller_support)
 * @property {string} [vr_support] - Virtual Reality support availability. [See Values](#vr_support)
 * @property {"mac"|"windows"|"linux"} [supported_os] - Operating systems that the software supports.
 * @property {"3"|"2"} [deck_compatibility] - Compatibility level with gaming decks. [See Values](#deck_compatibility)
 * @property {string} [supported_lang] - Languages supported by the software. [See Values](#supported_lang)
 * @property {string} [tags] - Tags associated with the software. [See Values](#tags)
 * @property {number} [count=25] - Count of games to load (minimum 25).
 */

/**
 * SteamStoreAPI class to interact with the Steam Store.
 */
class SteamStoreAPI {
  static FILTERS = require('./const.json');
  /**
   * Converts an input object into query parameters for the Steam store search.
   * @private
   * @param {Object} input - The input object containing search parameters.
   * @returns {Object} The converted object with appropriate query parameters.
   */
  static convertSearchParams(input) {
    const referenceTable = {
      term: 'term', //
      software_type: 'category1',
      additional_features: 'category2',
      multiplayer: 'category3',
      only_specials: 'specials',
      hide_free: 'hidef2p',
      max_price: 'maxprice',
      controller_support: 'controllersupport',
      vr_support: 'vrsupport',
      supported_os: 'os',
      deck_compatibility: 'deck_compatibility',
      supported_lang: 'supportedlang',
      tags: 'tags',
      count: 'count',
    };

    let output = {};

    for (let key in input) {
      if (input[key] !== undefined && referenceTable[key]) {
        if (typeof input[key] === 'boolean') {
          if (input[key]) {
            output[referenceTable[key]] = '1';
          }
        } else if (Array.isArray(input[key])) {
          output[referenceTable[key]] = input[key].join(',');
        } else {
          output[referenceTable[key]] = input[key];
        }
      }
    }

    if (output.count === undefined) {
      output.count = '25';
    }

    return output;
  }

  /**
   * Returns an object with image URLs for a given appid.
   * @private
   * @param {string} appid - The Steam application ID.
   * @returns {Object} An object containing image URLs.
   */
  static getImages(appid) {
    return {
      header: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`,
      img184x69: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_184x69.jpg`,
      img120x45: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_sm_120.jpg`,
    };
  }

  /**
   * Searches the Steam store and returns an array of game objects.
   * @param {SearchOptions} searchOptions - The input object containing search parameters.
   * @param {boolean} [getAllData=false] - If true, fetch detailed data for each game.
   * @returns {Promise<Array>} A promise that resolves to an array of game objects.
   * @example
   * const response = await SteamStoreAPI.searchSteam({ term: 'gta' });
   * console.log(response);
   */
  static async searchSteam(searchOptions, getAllData = false) {
    const query = this.convertSearchParams(searchOptions);
    const baseUrl = 'https://store.steampowered.com/search/results?';
    const queryString = Object.keys(query)
      .map((key) => key + '=' + encodeURIComponent(query[key]))
      .join('&');
    const url = baseUrl + queryString;

    const resp = await axios.get(url);
    const html = resp.data;
    const root = parse(html);

    // Select all game links
    const gameElements = root.querySelectorAll('a.search_result_row');
    // Extract information for each game
    const gamesPromises = gameElements.map(async (game) => {
      if (getAllData) {
        try {
          const data = await this.getGameDetails(game.getAttribute('data-ds-appid'));
          return data;
        } catch (error) {
          // Ignore error
        }
      } else {
        return {
          title: game.querySelector('.title').innerText.trim(),
          appid: game.getAttribute('data-ds-appid'),
          releaseDate: game.querySelector('.col.search_released').innerText.trim(),
          reviewSummary: game.querySelector('.search_review_summary')?.getAttribute('data-tooltip-html')?.trim(),
          price: game.querySelector('.discount_final_price')?.innerText.trim(),
          images: this.getImages(game.getAttribute('data-ds-appid')),
        };
      }
    });

    let games = await Promise.all(gamesPromises);
    games = games.filter((game) => game !== undefined);

    return games;
  }

  /**
   * Returns detailed data for a given appid.
   * @param {string} appid - The Steam application ID.
   * @returns {Promise<Object>} A promise that resolves to the game data object.
   * @example
   * const response = await SteamStoreAPI.getGameDetails('271590'); // AppID for GTA V
   * console.log(response);
   */
  static async getGameDetails(appid) {
    // Check if appid is a steam url
    if (appid.includes('https://store.steampowered.com/app/')) {
      const regex = /https:\/\/store\.steampowered\.com\/app\/(\d+)/;
      const match = appid.match(regex);
      if (match) {
        appid = match[1];
      }
    }

    const url = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
    const resp = await axios.get(url);
    if (resp.data[appid].success) {
      return resp.data[appid].data;
    } else {
      throw new Error('AppID not found');
    }
  }
  /**
   * Returns detailed data for a given appid.
   * @param {string} appid - The Steam application ID.
   * @returns {Promise<Object>} A promise that resolves to the game data object.
   * @example
   * const response = await SteamStoreAPI.getGameDetails('271590'); // AppID for GTA V
   * console.log(response);
   */
  static async getGameData(appid) {
    console.warn('getGameData is deprecated. Use getGameDetails instead.');
    return await this.getGameDetails(appid);
  }
}

module.exports = SteamStoreAPI;
