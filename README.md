# Steam Store API Wrapper

NodeJS module for searching and getting Steam store listings.

## Installation


```bash
npm i steamstoreapi
```

## Usage

### Get app ID by title
Scans the ``steam.json`` file for the title
```javascript
var SteamStoreAPI = require("steamstoreapi")

var title = "Golf With Your Friends" //case insensitive
SteamStoreAPI.searchItem(title, function(data) {
    console.log(data);
    // Outputs => [ { appid: 431240, name: 'Golf With Your Friends' } ]
})
```

### Get data by ID
Get app data by ID. [Example](https://store.steampowered.com/api/appdetails?appids=431240)

Get Data Like:
- Type (Game, Music, DLC, etc)
- Game title
- Game price
- DLC IDs
- Description
- System requirements
- Promo images
- Screenshots
- Platforms
- Genres
- Achievements
- Recommendations
- Categories
- etc

```javascript
var SteamStoreAPI = require("steamstoreapi")

var id = "431240"
SteamStoreAPI.getByID(id, function(data) {
    console.log(data);
    /*

    Output:

    {
        "type":"game",
        "name":"Golf With Your Friends",
        "steam_appid":431240,
        "required_age":0,
        "is_free":false,
        "dlc":[
           564170,
           1277570
        ],
        "detailed_description":"...",
        "about_the_game":"...",
        "short_description":"...",
        "supported_languages":"...",
        "header_image":"...",
        "website":"https://www.team17.com/",
        "price_overview":{
           "currency":"CAD",
           "initial":1749,
           "final":577,
           "discount_percent":67,
           "initial_formatted":"CDN$ 17.49",
           "final_formatted":"CDN$ 5.77"
        },
    }
    */
})
```

### Update ``steam.json``
Updates the onfile json object from this [URL](https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json)
```javascript
var SteamStoreAPI = require("steamstoreapi")

SteamStoreAPI.updateSteamApps()
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)