const SteamStoreAPI = require('../SteamStoreAPI');

test('searching for gta', () => {
  SteamStoreAPI.searchSteam({term: 'gta', count: 1}).then((response) => {
    expect(response[0].appid == '271590');
  });
});

test('searching for sales', () => {
  SteamStoreAPI.searchSteam(
    {
      term: 'gta',
      count: 1,
      only_specials: true,
    },
    true
  ).then((response) => {
    expect(response[0].discount_percent != 0);
  });
});

test('searching for vr games', () => {
  SteamStoreAPI.searchSteam(
    {
      term: 'vr',
      count: 1,
      vr_support: [SteamStoreAPI.FILTERS.VR_SUPPORT.VR_ONLY, SteamStoreAPI.FILTERS.VR_SUPPORT.VR_SUPPORTED],
    },
    true
  ).then((response) => {
    expect(response[0].categories).toEqual(expect.arrayContaining([expect.objectContaining({id: 53, description: 'VR Supported'})]));
  });
});
