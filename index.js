//https://store.steampowered.com/search/suggest?term=csgo&f=games&cc=CA&l=english
//https://store.steampowered.com/search/suggest?
//term=csgo
//&f=games
//&cc=CA
//&l=english
//Outputs HTML, must be parsed

const axios = require('axios');
const HTML = require('node-html-parser');


function search(options, callback) {
    axios.get(`https://store.steampowered.com/search/suggest?term=${options.search}&f=${options.type || 'games'}&cc=${options.country || 'CA'}&l=${options.language || 'english'}`).then(resp => {
        const root = HTML.parse(resp.data);
        var games = [];
        root.getElementsByTagName('a').forEach(element => {
            games.push({
                name: element.childNodes[0].rawText,
                link: element.getAttribute('href'),
                appid: element.getAttribute('data-ds-appid'),
                image: `https://cdn.akamai.steamstatic.com/steam/apps/${element.getAttribute('data-ds-appid')}/header.jpg`,
                price: {
                    currentPrice: "",
                    originalPrice: "",
                    discount: "",
                    onsale: false,
                    currency: "",
                }
            });
        });
        if (games.length > 0) {
            callback({ games: games, success: true });
        } else {
            callback({ games: games, success: false });
            throw new Error("No games found with that search.");
        }
    });
}

function getGameInfo(options, callback) {

}

search({
    search: "csgo",
    type: "games",
    country: "CA",
}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
