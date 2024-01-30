# Steam Store API

This NPM module is a API wrapper that makes the steam unofficial API easier to use.

## Installation

Install steamstoreapi with npm

```bash
  npm install steamstoreapi
```

## Function: searchSteam

This function takes an input object and returns a promise that resolves to an array of game objects. Each game object contains the following properties:

- `title`: The title of the game.
- `appid`: The application ID of the game.
- `releaseDate`: The release date of the game.
- `reviewSummary`: A summary of the game's reviews.
- `price`: The price of the game.
- `images`: An object containing URLs to various images of the game.

### Usage

```javascript
const steamstoreapi = require('steamstoreapi');
const response = await steamstoreapi.searchSteam({term: 'gta'});
console.log(response);
```

Example Output

```js
[
  {
    title: 'Grand Theft Auto V',
    appid: '271590',
    releaseDate: '13 Apr, 2015',
    reviewSummary: 'Very Positive<br>86% of the 1,577,439 user reviews for this game are positive.',
    price: 'C$ 19.79',
    images: {
      header: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
      img184x69: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_184x69.jpg',
      img120x45: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_sm_120.jpg',
    },
  },
  ...
];
```

Note: To get the full list of properties for each game object, you can set the second parameter of the searchSteam function to true. (This may take longer to resolve)

```javascript
const steamstoreapi = require('steamstoreapi');
const response = await steamstoreapi.searchSteam({term: 'gta'}, true);
console.log(response);
```

Example Output

```js
[
  {
    type: 'game',
    name: 'Grand Theft Auto V',
    steam_appid: 271590,
    required_age: '17',
    is_free: false,
    controller_support: 'full',
    dlc: [Array],
    detailed_description: '',
    about_the_game: '',
    short_description:
      'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond.',
    supported_languages: 'English, French, Italian, German, Spanish, Korean, Polish, Portuguese - Brazil, Russian, Chinese, Japanese, Spanish - Latin America',
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1706131787',
    capsule_image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1706131787',
    website: 'http://www.rockstargames.com/V/',
    pc_requirements: [Object],
    mac_requirements: [Object],
    linux_requirements: [Object],
    legal_notice: '',
    ext_user_account_notice: 'Rockstar Games Social Club',
    developers: [Array],
    publishers: [Array],
    packages: [Array],
    package_groups: [Array],
    platforms: [Object],
    metacritic: [Object],
    categories: [Array],
    genres: [Array],
    screenshots: [Array],
    movies: [Array],
    recommendations: [Object],
    achievements: [Object],
    release_date: [Object],
    support_info: [Object],
    background: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/page_bg_generated_v6b.jpg?t=1706131787',
    background_raw: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/page_bg_generated.jpg?t=1706131787',
    content_descriptors: [Object],
  },
  ...
];
```

## Function: searchSteam

This function takes an appId and returns a promise that resolves to the game object.

```js
const steamstoreapi = require('steamstoreapi');
const response = await steamstoreapi.getGameData('271590'); //Appid for GTA V
console.log(response);
```

Example Output

```js
{
  type: 'game',
  name: 'Grand Theft Auto V',
  steam_appid: 271590,
  required_age: '17',
  is_free: false,
  controller_support: 'full',
  dlc: [Array],
  detailed_description: '',
  about_the_game: '',
  short_description:
    'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond.',
  supported_languages: 'English, French, Italian, German, Spanish, Korean, Polish, Portuguese - Brazil, Russian, Chinese, Japanese, Spanish - Latin America',
  header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1706131787',
  capsule_image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1706131787',
  website: 'http://www.rockstargames.com/V/',
  pc_requirements: [Object],
  mac_requirements: [Object],
  linux_requirements: [Object],
  legal_notice: '',
  ext_user_account_notice: 'Rockstar Games Social Club',
  developers: [Array],
  publishers: [Array],
  packages: [Array],
  package_groups: [Array],
  platforms: [Object],
  metacritic: [Object],
  categories: [Array],
  genres: [Array],
  screenshots: [Array],
  movies: [Array],
  recommendations: [Object],
  achievements: [Object],
  release_date: [Object],
  support_info: [Object],
  background: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/page_bg_generated_v6b.jpg?t=1706131787',
  background_raw: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/page_bg_generated.jpg?t=1706131787',
  content_descriptors: [Object],
}

```

## Options

You can pass an options object to the searchSteam function to customize the search results. [View the full list of options](https://github.com/JustZakary/steamstoreapi/blob/main/OPTIONS.MD)

Eamples:

```javascript
const steamstoreapi = require('steamstoreapi');
//Get VR games
steamstoreapi.searchSteam({vr_support: '402'});

//Get games on sale
steamstoreapi.searchSteam({only_specials: true});

// Get Games for windows and mac
steamstoreapi.searchSteam({supported_os: 'windows,mac'});

// Steam Deck Compatible Games
steamstoreapi.searchSteam({deck_compatibility: '3,2'});

// You can also combine options
steamstoreapi.searchSteam({term: 'Gorilla Tag', only_specials: true, vr_support: '402'}); //
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@JustZakary](https://www.github.com/justzakary)
