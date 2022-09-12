# Steam Store API

This NPM module is a API wrapper that makes the steam unoffical API easier to use.

## Installation

Install steamstoreapi with npm

```bash
  npm install steamstoreapi
```

## API Reference

#### Search Steam

```javascript
steamstoreapi.search(options, callback);
```

options Parameters:
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Required**. Search Query |
| `language` | `string` | Language you want the results in: `english`, `french`, `spanish`, etc (Default `english`) |
| `country` | `string` | Country you want to search from. Example: `US`, `CA`, `CH`, etc. (Default `US`) |

Example:

```javascript
var options = {
  search: "csgo",
  country: "FR", //optional  (Default 'US')
  language: "french", //optional (Default 'english')
};

steamstoreapi.search(options, function (data) {
  if (!data.success) {
    console.log(data);
  } else {
    console.log(data);
  }
});
```

##

#### Get game details by App ID

```javascript
steamstoreapi.getGameInfo(options, callback);
```

options Parameters:
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `appid` | `number` | **Required**. Game App ID |
| `language` | `string` | Language you want the results in: `english`, `french`, `spanish`, etc (Default `english`) |
| `country` | `string` | Country you want to search from. Example: `US`, `CA`, `CH`, etc. (Default `US`) |

Example:

```javascript
var options = {
  appid: 730,
  country: "FR", //optional  (Default 'US')
  language: "french", //optional (Default 'english')
};

steamstoreapi.getGameInfo(options, function (data) {
  console.log(data);
});
```

##

#### Get game images

```javascript
steamstoreapi.getImages(appid);
```

options Parameters:
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `appid` | `number` | **Required**. Game App ID |

Example:

```javascript
console.log(steamstoreapi.getImages(730));
```

## Usage/Examples

Get game details by search:

```javascript
const steamstoreapi = require("steamstoreapi");

steamstoreapi.search(
  {
    search: "csgo",
    type: "games",
  },
  function (data) {
    if (!data.success) {
      console.log(data);
    } else {
      steamstoreapi.getGameInfo(
        {
          appid: data.games[0].appid,
        },
        function (data) {
          console.log(data);
        }
      );
    }
  }
);
```

Get games by search:

```javascript
const steamstoreapi = require("steamstoreapi");

steamstoreapi.search(
  {
    search: "csgo",
    type: "games",
  },
  function (data) {
    if (!data.success) {
      console.log(data);
    } else {
      console.log(data);
    }
  }
);
```

Get games by App ID:

```javascript
const steamstoreapi = require("steamstoreapi");

steamstoreapi.getGameInfo(
  {
    appid: `730`,
  },
  function (data) {
    console.log(data);
  }
);
```

## Roadmap

- Add more parameters to search (software type, price filters, category, etc)

- Better error handling

## Feedback

If you have any feedback, please reach out to us at zakaryloney@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@JustZakary](https://www.github.com/justzakary)
