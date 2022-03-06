const fs = require('fs');
const path = require('path');
const json = require('big-json');
var XMLHttpRequest = require('xhr2');
Array.prototype.myFind = function(obj) {
    return this.filter(function(item) {
        for (var prop in obj)
            if (!(prop in item) || obj[prop] !== item[prop].toLowerCase())
                return false;
        return true;
    });
};
//Save Steam Apps
function updateSteamApps() {
    console.log("Updating Steam Database...")
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            fs.writeFile("steam.json", xhr.response, function writeJSON(err) {
                if (err) return console.log(err);
                console.log("Steam Updated...")
            });
        }
    };
}
//Search By Name
function searchItem(search, callback) {
    const readStream = fs.createReadStream('steam.json');
    const parseStream = json.createParseStream();
    var title = search
    parseStream.on('data', function(pojo) {
        var curSearch = "";
        var allTitles = [];
        for (var i = 0; i < title.length; i++) {
            curSearch += title.charAt(i)
            var found = pojo.applist.apps.myFind({ name: curSearch.toLowerCase() })
            if (found.length == 1) {
                allTitles.push(found)
            }
        }
        var final = allTitles[allTitles.length - 1]
        callback(final)
    });
    readStream.pipe(parseStream);
}
//Get Data by ID
function getByID(id, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://store.steampowered.com/api/appdetails?appids=' + id);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            if (JSON.parse(xhr.response)[id + ""].success) {
                callback(JSON.parse(xhr.response)[id + ""].data)
            }
        } else {
            callback(JSON.parse('{"' + id + '":{"success":false}}'))
        }
    };
}
module.exports = { getByID, searchItem, updateSteamApps }