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
const response = await searchSteam({term: 'gta'});
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

## Options

You can pass an options object to the searchSteam function to customize the search results. The following options are available:

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@JustZakary](https://www.github.com/justzakary)

```

```
