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
    output.count = '50';
  }

  return output;
}

function searchSteamGames(input) {
  const query = convertObject(input);
  var baseUrl = 'https://store.steampowered.com/search/results?snr=1_7_7_230_7&infinite=1';
  var queryString = Object.keys(query)
    .map((key) => key + '=' + query[key])
    .join('&');
  var url = baseUrl + queryString;
  console.log(url);

  axios.get(url).then((resp) => {
    var games = [];
    //parse html
    var html = resp.data.results_html;
    //console.log(html);
  });
}

searchSteamGames({
  term: 'action',
  multiplayer: '2',
});
