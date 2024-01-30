const axios = require('axios');
const {parse} = require('node-html-parser');

function convertObject(input) {
  const referenceTable = {
    term: 'term',
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

function getImages(appid) {
  return {
    header: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`,
    img184x69: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_184x69.jpg`,
    img120x45: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_sm_120.jpg`,
  };
}

async function searchSteam(input, getAllData = false) {
  const query = convertObject(input);
  var baseUrl = 'https://store.steampowered.com/search/results?';
  var queryString = Object.keys(query)
    .map((key) => key + '=' + query[key])
    .join('&');
  var url = baseUrl + queryString;

  console.log(url);
  const resp = await axios.get(url);

  var html = resp.data;
  const root = parse(html);

  // Select all game links
  const gameElements = root.querySelectorAll('a.search_result_row');
  // Extract information for each game
  const gamesPromises = gameElements.map(async (game) => {
    if (getAllData) {
      return await getGameData(game.getAttribute('data-ds-appid'));
    } else {
      return {
        title: game.querySelector('.title').innerText.trim(),
        appid: game.getAttribute('data-ds-appid'),
        releaseDate: game.querySelector('.col.search_released').innerText.trim(),
        reviewSummary: game.querySelector('.search_review_summary')?.getAttribute('data-tooltip-html').trim(),
        price: game.querySelector('.discount_final_price')?.innerText.trim(),
        images: getImages(game.getAttribute('data-ds-appid')),
      };
    }
  });

  const games = await Promise.all(gamesPromises);

  var response = games;
  return response;
}

async function getGameData(appid) {
  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
  const resp = await axios.get(url);
  return resp.data;
}

module.exports = {
  searchSteam,
  getGameData,
};

//Examples:

//Search for games
async function main() {
  const input = {
    term: 'gta',
  };

  const response = await searchSteam(input);
  console.log(response);
  // Output:
  // [
  //   {
  //     title: 'Grand Theft Auto V',
  //     appid: '271590',
  //     releaseDate: '13 Apr, 2015',
  //     reviewSummary: 'Very Positive<br>86% of the 1,577,439 user reviews for this game are positive.',
  //     price: 'C$ 19.79',
  //     images: {
  //       header: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
  //       img184x69: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_184x69.jpg',
  //       img120x45: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_sm_120.jpg',
  //     },
  //   },
  //   ...
  // ];
}
main();
