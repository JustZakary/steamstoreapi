# SteamStoreAPI
[![npm downloads](https://img.shields.io/npm/d18m/steamstoreapi.svg?label=npm%20downloads&logo=npm&style=flat-square)](https://www.npmjs.com/package/steamstoreapi)

An unofficial Node.js module to interact with the Steam Store, allowing you to search for games and retrieve detailed game data programmatically.

## Installation

```bash
npm install steamstoreapi
```

## Usage

### Search for Games

```javascript
const SteamStoreAPI = require('steamstoreapi');

(async () => {
  const searchOptions = {
    term: 'gta',
    max_price: 30,
  };

  const games = await SteamStoreAPI.searchSteam(searchOptions);
  console.log(games);
})();
```

### Get Game Details

```javascript
const SteamStoreAPI = require('steamstoreapi');

(async () => {
  const appid = '271590'; // GTA V AppID
  const gameData = await SteamStoreAPI.getGameDetails(appid);
  console.log(gameData);
})();
```

## API Reference

### Methods

`searchSteam(searchOptions, getAllData = false)`

Searches the Steam store and returns an array of game objects.

- Parameters:
  - `searchOptions` (`SearchOptions`): The input object containing search parameters.
  - `getAllData` (`boolean`, optional): If `true`, retrieves all available data for each game. Default is `false`.
- Returns:
  - `Promise<Array>`: A promise that resolves to an array of game objects.
- Example:

  ```javascript
  const searchOptions = {
    term: 'gta',
    max_price: 30,
  };

  const games = await SteamStoreAPI.searchSteam(searchOptions);
  console.log(games);
  ```

`getGameDetails(appid)`

Retrieves detailed information about a game.

- Parameters:
  - `appid` (`string`): The AppID of the game.
- Returns:
  - `Promise<Object>`: A promise that resolves to an object containing detailed game data.
- Example:

  ```javascript
  const appid = '271590'; // GTA V AppID
  const gameData = await SteamStoreAPI.getGameDetails(appid);
  console.log(gameData);
  ```

### Types

`SearchOptions`

An object containing search parameters.
| Option | Key Reference | Value Type | Description |
| ------------------- | ------------------- | ----------------------------- | --------------------------------------------------------------------------- |
| Term | term | String | A term or keyword to search for. |
| Software Type | software_type | String | The type of software being searched.|
| Additional Features | additional_features | String | Extra features of the software.|
| Multiplayer | multiplayer | String | Indicates if the software supports multiplayer.|
| Only Specials | only_specials | Boolean | Filter to show only special offers. |
| Hide Free | hide_free | Boolean | Option to hide free-to-play software. |
| Max Price | max_price | Number | Maximum price limit for the search. |
| Controller Support | controller_support | String | Support for various types of controllers.|
| VR Support | vr_support | String | Virtual Reality support availability.|
| Supported OS | supported_os | "mac" \| "windows" \| "linux" | Operating systems that the software supports.|
| Deck Compatibility | deck_compatibility | "3" \| "2" | Compatibility level with gaming decks. |
| Supported Language | supported_lang | String | Languages supported by the software.|
| Tags | tags | String | Tags associated with the software. |
| Count | count | number | Count of games to load (min 25) |

[Full list of search options](https://github.com/JustZakary/steamstoreapi/blob/main/OPTIONS.MD)

## License

[Mit License](https://github.com/JustZakary/steamstoreapi/tree/main?tab=MIT-1-ov-file#readme)

## Contributing

Contributions are welcome! Please open a pull request to contribute to this project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## Disclaimer

This is an unofficial project and is not affiliated with or endorsed by Valve Corporation or Steam.
