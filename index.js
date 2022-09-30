//Created by Zakary Loney (September 2022)
const axios = require('axios');
const HTML = require('node-html-parser');


function search(options, callback) {
    var url = `https://store.steampowered.com/search/suggest?term=${options.search}&f=${options.type || 'games'}&cc=${options.country || 'US'}&l=${options.language || 'english'}`;
    axios.get(url).then(resp => {
        const root = HTML.parse(resp.data);
        var games = [];
        root.getElementsByTagName('a').forEach(element => {
            games.push({
                name: element.childNodes[0].rawText,
                link: element.getAttribute('href'),
                appid: parseFloat(element.getAttribute('data-ds-appid')),
                image: getImages(element.getAttribute('data-ds-appid')),
            });
        });
        if (games.length > 0) {
            callback({ games: games, success: true });
        } else {
            callback({ message: "No games found with that search.", success: false });
        }
    });
}

function getImages(appid) {
    return ({
        header: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`,
        img184x69: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_184x69.jpg`,
        img120x45: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_sm_120.jpg`,
    })
}

function getGameInfo(options, callback) {
    var url = `https://store.steampowered.com/api/appdetails?appids=${options.appid}&cc=${options.country || 'US'}&l=${options.language || 'english'}`;
    console.log(url);
    axios.get(url).then(resp => {
        callback(resp.data);
    });

}



module.exports = {
    search: search,
    getGameInfo: getGameInfo,
    getImages: getImages,
}