| Option              | Key Reference       | Value Type                    | Description                                                                 |
| ------------------- | ------------------- | ----------------------------- | --------------------------------------------------------------------------- |
| Term                | term                | String                        | A term or keyword to search for.                                            |
| Software Type       | software_type       | String                        | The type of software being searched. [See Values](#software_type)           |
| Additional Features | additional_features | String                        | Extra features of the software. [See Values](#additional_features)          |
| Multiplayer         | multiplayer         | String                        | Indicates if the software supports multiplayer. [See Values](#multiplayer)  |
| Only Specials       | only_specials       | Boolean                       | Filter to show only special offers.                                         |
| Hide Free           | hide_free           | Boolean                       | Option to hide free-to-play software.                                       |
| Max Price           | max_price           | Number                        | Maximum price limit for the search.                                         |
| Controller Support  | controller_support  | String                        | Support for various types of controllers. [See Values](#controller_support) |
| VR Support          | vr_support          | String                        | Virtual Reality support availability. [See Values](#vr_support)             |
| Supported OS        | supported_os        | "mac" \| "windows" \| "linux" | Operating systems that the software supports.                               |
| Deck Compatibility  | deck_compatibility  | "3" \| "2"                    | Compatibility level with gaming decks. [See Values](#deck_compatibility)    |
| Supported Language  | supported_lang      | String                        | Languages supported by the software. [See Values](#supported_lang)          |
| Tags                | tags                | String                        | Tags associated with the software. [See Values](#tags)                      |
| Count               | count               | number                        | Count of games to load (min 25)                                             |

## To use multiple separate them by commas. Example: `998,10`

### <a name="software_type">`software_type`</a>

| Title                | Value |
| -------------------- | ----- |
| Games                | `998` |
| Software             | `994` |
| Downloadable Content | `21`  |
| Demos                | `10`  |
| Soundtracks          | `990` |
| Playtests            | `989` |
| Videos               | `992` |
| Mods                 | `997` |
| Hardware             | `993` |
| Include Bundles      | `996` |

---

### <a name="additional_features">`additional_features`</a>

| Title                         | Value |
| ----------------------------- | ----- |
| Additional High-Quality Audio | `50`  |
| Steam Achievements            | `22`  |
| Tracked Controller Support    | `52`  |
| Steam Trading Cards           | `29`  |
| Captions available            | `13`  |
| Steam Workshop                | `30`  |
| SteamVR Collectibles          | `40`  |
| Steam Cloud                   | `23`  |
| Valve Anti-Cheat enabled      | `8`   |
| Includes Source SDK           | `16`  |
| Remote Play on Phone          | `41`  |
| Remote Play on Tablet         | `42`  |
| Remote Play on TV             | `43`  |
| Remote Play Together          | `44`  |
| HDR available                 | `61`  |

---

### <a name="multiplayer">`multiplayer`</a>

| Title                      | Value |
| -------------------------- | ----- |
| Single-player              | `2`   |
| Multi-player               | `1`   |
| PvP                        | `49`  |
| Online PvP                 | `36`  |
| LAN PvP                    | `47`  |
| Shared/Split Screen PvP    | `37`  |
| Co-op                      | `9`   |
| Online Co-op               | `38`  |
| LAN Co-op                  | `48`  |
| Shared/Split Screen Co-op  | `39`  |
| Shared/Split Screen        | `24`  |
| Cross-Platform Multiplayer | `27`  |

---

### <a name="controller_support">`controller_support`</a>

| Title                        | Value |
| ---------------------------- | ----- |
| Gamepad Preferred            | `60`  |
| Full Controller Support      | `28`  |
| Xbox Controller Support      | `18`  |
| DualShock Controller Support | `55`  |
| DualSense Controller Support | `57`  |
| Steam Input API Support      | `59`  |

---

### <a name="vr_support">`vr_support`</a>

| Title        | Value |
| ------------ | ----- |
| VR Only      | `401` |
| VR Supported | `402` |

---

### <a name="deck_compatibility">`deck_compatibility`</a>

| Title    | Value |
| -------- | ----- |
| Verified | `3`   |
| Playable | `2`   |

---

### <a name="supported_lang">`supported_lang`</a>

| Title                   | Value           |
| ----------------------- | --------------- |
| Simplified Chinese      | `schinese`      |
| Traditional Chinese     | `tchinese`      |
| Japanese                | `japanese`      |
| Korean                  | `koreana`       |
| Thai                    | `thai`          |
| Bulgarian               | `bulgarian`     |
| Czech                   | `czech`         |
| Danish                  | `danish`        |
| German                  | `german`        |
| Spanish - Spain         | `spanish`       |
| Spanish - Latin America | `latam`         |
| Greek                   | `greek`         |
| French                  | `french`        |
| Italian                 | `italian`       |
| Indonesian              | `indonesian`    |
| Hungarian               | `hungarian`     |
| Dutch                   | `dutch`         |
| Norwegian               | `norwegian`     |
| Polish                  | `polish`        |
| Portuguese - Portugal   | `portuguese`    |
| Portuguese - Brazil     | `brazilian`     |
| Romanian                | `romanian`      |
| Russian                 | `russian`       |
| Finnish                 | `finnish`       |
| Swedish                 | `swedish`       |
| Turkish                 | `turkish`       |
| Vietnamese              | `vietnamese`    |
| Ukrainian               | `ukrainian`     |
| Arabic                  | `arabic`        |
| Afrikaans               | `afrikaans`     |
| Albanian                | `albanian`      |
| Amharic                 | `amharic`       |
| Armenian                | `armenian`      |
| Assamese                | `assamese`      |
| Azerbaijani             | `azerbaijani`   |
| Bangla                  | `bangla`        |
| Basque                  | `basque`        |
| Belarusian              | `belarusian`    |
| Bosnian                 | `bosnian`       |
| Catalan                 | `catalan`       |
| Cherokee                | `cherokee`      |
| Croatian                | `croatian`      |
| Dari                    | `dari`          |
| Estonian                | `estonian`      |
| Filipino                | `filipino`      |
| Galician                | `galician`      |
| Georgian                | `georgian`      |
| Gujarati                | `gujarati`      |
| Punjabi (Gurmukhi)      | `gurmukhi`      |
| Hausa                   | `hausa`         |
| Hebrew                  | `hebrew`        |
| Hindi                   | `hindi`         |
| Icelandic               | `icelandic`     |
| Igbo                    | `igbo`          |
| Irish                   | `irish`         |
| Kannada                 | `kannada`       |
| Kazakh                  | `kazakh`        |
| Khmer                   | `khmer`         |
| K'iche'                 | `kiche`         |
| Kinyarwanda             | `kinyarwanda`   |
| Konkani                 | `konkani`       |
| Kyrgyz                  | `kyrgyz`        |
| Latvian                 | `latvian`       |
| Lithuanian              | `lithuanian`    |
| Luxembourgish           | `luxembourgish` |
| Macedonian              | `macedonian`    |
| Malay                   | `malay`         |
| Malayalam               | `malayalam`     |
| Maltese                 | `maltese`       |
| Maori                   | `maori`         |
| Marathi                 | `marathi`       |
| Mongolian               | `mongolian`     |
| Nepali                  | `nepali`        |
| Odia                    | `odia`          |
| Persian                 | `persian`       |
| Quechua                 | `quechua`       |
| Scots                   | `scots`         |
| Serbian                 | `serbian`       |
| Punjabi (Shahmukhi)     | `shahmukhi`     |
| Sindhi                  | `sindhi`        |
| Sinhala                 | `sinhala`       |
| Slovak                  | `slovak`        |
| Slovenian               | `slovenian`     |
| Sorani                  | `sorani`        |
| Sotho                   | `sotho`         |
| Swahili                 | `swahili`       |
| Tajik                   | `tajik`         |
| Tamil                   | `tamil`         |
| Tatar                   | `tatar`         |
| Telugu                  | `telugu`        |
| Tigrinya                | `tigrinya`      |
| Tswana                  | `tswana`        |
| Turkmen                 | `turkmen`       |
| Urdu                    | `urdu`          |
| Uyghur                  | `uyghur`        |
| Uzbek                   | `uzbek`         |
| Valencian               | `valencian`     |
| Welsh                   | `welsh`         |
| Wolof                   | `wolof`         |
| Xhosa                   | `xhosa`         |
| Yoruba                  | `yoruba`        |
| Zulu                    | `zulu`          |

---

### <a name="tags">`tags`</a>

| Title                             | Value     |
| --------------------------------- | --------- |
| Utilities                         | `87`      |
| Design & Illustration             | `84`      |
| Software                          | `8013`    |
| Animation & Modeling              | `872`     |
| Education                         | `1036`    |
| VR                                | `21978`   |
| Game Development                  | `13906`   |
| Video Production                  | `784`     |
| Early Access                      | `493`     |
| Software Training                 | `1445`    |
| Indie                             | `492`     |
| Audio Production                  | `1027`    |
| Singleplayer                      | `4182`    |
| Simulation                        | `599`     |
| Casual                            | `597`     |
| Photo Editing                     | `809`     |
| Web Publishing                    | `1038`    |
| 3D                                | `4191`    |
| 2D                                | `3871`    |
| Anime                             | `4085`    |
| Free to Play                      | `113`     |
| Music                             | `1621`    |
| Sandbox                           | `3810`    |
| Family Friendly                   | `5350`    |
| Programming                       | `5432`    |
| Strategy                          | `9`       |
| Action                            | `19`      |
| Adventure                         | `21`      |
| RPG                               | `122`     |
| Massively Multiplayer             | `128`     |
| Racing                            | `699`     |
| Sports                            | `701`     |
| Trains                            | `1616`    |
| Platformer                        | `1625`    |
| Metroidvania                      | `1628`    |
| Dog                               | `1638`    |
| Building                          | `1643`    |
| Driving                           | `1644`    |
| Tower Defense                     | `1645`    |
| Hack and Slash                    | `1646`    |
| Western                           | `1647`    |
| GameMaker                         | `1649`    |
| Satire                            | `1651`    |
| Relaxing                          | `1654`    |
| Zombies                           | `1659`    |
| Survival                          | `1662`    |
| FPS                               | `1663`    |
| Puzzle                            | `1664`    |
| Match 3                           | `1665`    |
| Card Game                         | `1666`    |
| Horror                            | `1667`    |
| Moddable                          | `1669`    |
| 4X                                | `1670`    |
| Superhero                         | `1671`    |
| Aliens                            | `1673`    |
| Typing                            | `1674`    |
| RTS                               | `1676`    |
| Turn-Based                        | `1677`    |
| War                               | `1678`    |
| Heist                             | `1680`    |
| Pirates                           | `1681`    |
| Fantasy                           | `1684`    |
| Co-op                             | `1685`    |
| Stealth                           | `1687`    |
| Ninja                             | `1688`    |
| Classic                           | `1693`    |
| Open World                        | `1695`    |
| Third Person                      | `1697`    |
| Point & Click                     | `1698`    |
| Crafting                          | `1702`    |
| Tactical                          | `1708`    |
| Surreal                           | `1710`    |
| Psychedelic                       | `1714`    |
| Roguelike                         | `1716`    |
| Hex Grid                          | `1717`    |
| MOBA                              | `1718`    |
| Comedy                            | `1719`    |
| Dungeon Crawler                   | `1720`    |
| Psychological Horror              | `1721`    |
| Action RTS                        | `1723`    |
| Sokoban                           | `1730`    |
| Voxel                             | `1732`    |
| Unforgiving                       | `1733`    |
| Fast-Paced                        | `1734`    |
| LEGO                              | `1736`    |
| Hidden Object                     | `1738`    |
| Turn-Based Strategy               | `1741`    |
| Story Rich                        | `1742`    |
| Fighting                          | `1743`    |
| Basketball                        | `1746`    |
| Comic Book                        | `1751`    |
| Rhythm                            | `1752`    |
| Skateboarding                     | `1753`    |
| MMORPG                            | `1754`    |
| Space                             | `1755`    |
| Great Soundtrack                  | `1756`    |
| Perma Death                       | `1759`    |
| Board Game                        | `1770`    |
| Arcade                            | `1773`    |
| Shooter                           | `1774`    |
| PvP                               | `1775`    |
| Steampunk                         | `1777`    |
| Based On A Novel                  | `3796`    |
| Side Scroller                     | `3798`    |
| Visual Novel                      | `3799`    |
| Real Time Tactics                 | `3813`    |
| Third-Person Shooter              | `3814`    |
| Exploration                       | `3834`    |
| Post-apocalyptic                  | `3835`    |
| First-Person                      | `3839`    |
| Local Co-Op                       | `3841`    |
| Online Co-Op                      | `3843`    |
| Lore-Rich                         | `3854`    |
| Multiplayer                       | `3859`    |
| Precision Platformer              | `3877`    |
| Competitive                       | `3878`    |
| Old School                        | `3916`    |
| Cooking                           | `3920`    |
| Immersive                         | `3934`    |
| Sci-fi                            | `3942`    |
| Gothic                            | `3952`    |
| Character Action Game             | `3955`    |
| Roguelite                         | `3959`    |
| Pixel Graphics                    | `3964`    |
| Epic                              | `3965`    |
| Physics                           | `3968`    |
| Survival Horror                   | `3978`    |
| Historical                        | `3987`    |
| Combat                            | `3993`    |
| Retro                             | `4004`    |
| Vampire                           | `4018`    |
| Difficult                         | `4026`    |
| Parkour                           | `4036`    |
| Dragons                           | `4046`    |
| Magic                             | `4057`    |
| Thriller                          | `4064`    |
| Minimalist                        | `4094`    |
| Combat Racing                     | `4102`    |
| Action-Adventure                  | `4106`    |
| Cyberpunk                         | `4115`    |
| Funny                             | `4136`    |
| Transhumanism                     | `4137`    |
| Cinematic                         | `4145`    |
| World War II                      | `4150`    |
| Class-Based                       | `4155`    |
| Beat 'em up                       | `4158`    |
| Real-Time                         | `4161`    |
| Atmospheric                       | `4166`    |
| Military                          | `4168`    |
| Medieval                          | `4172`    |
| Realistic                         | `4175`    |
| Chess                             | `4184`    |
| Addictive                         | `4190`    |
| Cartoony                          | `4195`    |
| Trading                           | `4202`    |
| Action RPG                        | `4231`    |
| Short                             | `4234`    |
| Loot                              | `4236`    |
| Episodic                          | `4242`    |
| Stylized                          | `4252`    |
| Shoot 'Em Up                      | `4255`    |
| Spaceships                        | `4291`    |
| Futuristic                        | `4295`    |
| Colorful                          | `4305`    |
| Turn-Based Combat                 | `4325`    |
| City Builder                      | `4328`    |
| Dark                              | `4342`    |
| Gore                              | `4345`    |
| Grand Strategy                    | `4364`    |
| Assassin                          | `4376`    |
| Abstract                          | `4400`    |
| JRPG                              | `4434`    |
| CRPG                              | `4474`    |
| Choose Your Own Adventure         | `4486`    |
| Co-op Campaign                    | `4508`    |
| Farming                           | `4520`    |
| Quick-Time Events                 | `4559`    |
| Cartoon                           | `4562`    |
| Alternate History                 | `4598`    |
| Dark Fantasy                      | `4604`    |
| Swordplay                         | `4608`    |
| Top-Down Shooter                  | `4637`    |
| Violent                           | `4667`    |
| Wargame                           | `4684`    |
| Economy                           | `4695`    |
| Movie                             | `4700`    |
| Replay Value                      | `4711`    |
| Cute                              | `4726`    |
| 2D Fighter                        | `4736`    |
| Character Customization           | `4747`    |
| Politics                          | `4754`    |
| Twin Stick Shooter                | `4758`    |
| Spectacle fighter                 | `4777`    |
| Top-Down                          | `4791`    |
| Mechs                             | `4821`    |
| 6DOF                              | `4835`    |
| 4 Player Local                    | `4840`    |
| Capitalism                        | `4845`    |
| Political                         | `4853`    |
| Parody                            | `4878`    |
| Bullet Hell                       | `4885`    |
| Romance                           | `4947`    |
| 2.5D                              | `4975`    |
| Naval Combat                      | `4994`    |
| Dystopian                         | `5030`    |
| eSports                           | `5055`    |
| Narration                         | `5094`    |
| Procedural Generation             | `5125`    |
| Kickstarter                       | `5153`    |
| Score Attack                      | `5154`    |
| Dinosaurs                         | `5160`    |
| Cold War                          | `5179`    |
| Psychological                     | `5186`    |
| Blood                             | `5228`    |
| Sequel                            | `5230`    |
| God Game                          | `5300`    |
| Games Workshop                    | `5310`    |
| Mod                               | `5348`    |
| Destruction                       | `5363`    |
| Conspiracy                        | `5372`    |
| 2D Platformer                     | `5379`    |
| World War I                       | `5382`    |
| Time Attack                       | `5390`    |
| 3D Platformer                     | `5395`    |
| Benchmark                         | `5407`    |
| Beautiful                         | `5411`    |
| Hacking                           | `5502`    |
| Puzzle Platformer                 | `5537`    |
| Arena Shooter                     | `5547`    |
| RPGMaker                          | `5577`    |
| Emotional                         | `5608`    |
| Mature                            | `5611`    |
| Detective                         | `5613`    |
| Collectathon                      | `5652`    |
| Modern                            | `5673`    |
| Remake                            | `5708`    |
| Team-Based                        | `5711`    |
| Mystery                           | `5716`    |
| Baseball                          | `5727`    |
| Robots                            | `5752`    |
| Gun Customization                 | `5765`    |
| Science                           | `5794`    |
| Bullet Time                       | `5796`    |
| Isometric                         | `5851`    |
| Walking Simulator                 | `5900`    |
| Tennis                            | `5914`    |
| Dark Humor                        | `5923`    |
| Reboot                            | `5941`    |
| Mining                            | `5981`    |
| Drama                             | `5984`    |
| Horses                            | `6041`    |
| Noir                              | `6052`    |
| Logic                             | `6129`    |
| Birds                             | `6214`    |
| Inventory Management              | `6276`    |
| Diplomacy                         | `6310`    |
| Crime                             | `6378`    |
| Choices Matter                    | `6426`    |
| 3D Fighter                        | `6506`    |
| Pinball                           | `6621`    |
| Time Manipulation                 | `6625`    |
| Nudity                            | `6650`    |
| 1990's                            | `6691`    |
| Mars                              | `6702`    |
| PvE                               | `6730`    |
| Hand-drawn                        | `6815`    |
| Nonlinear                         | `6869`    |
| Naval                             | `6910`    |
| Martial Arts                      | `6915`    |
| Rome                              | `6948`    |
| Multiple Endings                  | `6971`    |
| Golf                              | `7038`    |
| Real-Time with Pause              | `7107`    |
| Party                             | `7108`    |
| Crowdfunded                       | `7113`    |
| Party Game                        | `7178`    |
| Female Protagonist                | `7208`    |
| Linear                            | `7250`    |
| Skiing                            | `7309`    |
| Bowling                           | `7328`    |
| Base Building                     | `7332`    |
| Local Multiplayer                 | `7368`    |
| Sniper                            | `7423`    |
| Lovecraftian                      | `7432`    |
| Illuminati                        | `7478`    |
| Controller                        | `7481`    |
| Grid-Based Movement               | `7569`    |
| Offroad                           | `7622`    |
| Narrative                         | `7702`    |
| 1980s                             | `7743`    |
| Cult Classic                      | `7782`    |
| Artificial Intelligence           | `7926`    |
| Soundtrack                        | `7948`    |
| TrackIR                           | `8075`    |
| Minigames                         | `8093`    |
| Level Editor                      | `8122`    |
| Music-Based Procedural Generation | `8253`    |
| Investigation                     | `8369`    |
| Well-Written                      | `8461`    |
| Runner                            | `8666`    |
| Resource Management               | `8945`    |
| Hentai                            | `9130`    |
| Underwater                        | `9157`    |
| Immersive Sim                     | `9204`    |
| Trading Card Game                 | `9271`    |
| Demons                            | `9541`    |
| Dating Sim                        | `9551`    |
| Hunting                           | `9564`    |
| Dynamic Narration                 | `9592`    |
| Snow                              | `9803`    |
| Experience                        | `9994`    |
| Life Sim                          | `10235`   |
| Transportation                    | `10383`   |
| Memes                             | `10397`   |
| Trivia                            | `10437`   |
| Time Travel                       | `10679`   |
| Party-Based RPG                   | `10695`   |
| Supernatural                      | `10808`   |
| Split Screen                      | `10816`   |
| Interactive Fiction               | `11014`   |
| Boss Rush                         | `11095`   |
| Vehicular Combat                  | `11104`   |
| Mouse only                        | `11123`   |
| Villain Protagonist               | `11333`   |
| Vikings                           | `11634`   |
| Tutorial                          | `12057`   |
| Sexual Content                    | `12095`   |
| Boxing                            | `12190`   |
| Warhammer 40K                     | `12286`   |
| Management                        | `12472`   |
| Solitaire                         | `13070`   |
| America                           | `13190`   |
| Tanks                             | `13276`   |
| Archery                           | `13382`   |
| Sailing                           | `13577`   |
| Experimental                      | `13782`   |
| Turn-Based Tactics                | `14139`   |
| Dungeons & Dragons                | `14153`   |
| Nostalgia                         | `14720`   |
| Intentionally Awkward Controls    | `14906`   |
| Flight                            | `15045`   |
| Conversation                      | `15172`   |
| Philosophical                     | `15277`   |
| Documentary                       | `15339`   |
| Fishing                           | `15564`   |
| Motocross                         | `15868`   |
| Silent Protagonist                | `15954`   |
| Mythology                         | `16094`   |
| Gambling                          | `16250`   |
| Space Sim                         | `16598`   |
| Time Management                   | `16689`   |
| Werewolves                        | `17015`   |
| Strategy RPG                      | `17305`   |
| Lemmings                          | `17337`   |
| Tabletop                          | `17389`   |
| Asynchronous Multiplayer          | `17770`   |
| Cats                              | `17894`   |
| Pool                              | `17927`   |
| FMV                               | `18594`   |
| Cycling                           | `19568`   |
| Submarine                         | `19780`   |
| Dark Comedy                       | `19995`   |
| Underground                       | `21006`   |
| Tactical RPG                      | `21725`   |
| Agriculture                       | `22602`   |
| Mini Golf                         | `22955`   |
| Word Game                         | `24003`   |
| NSFW                              | `24904`   |
| Touch-Friendly                    | `25085`   |
| Political Sim                     | `26921`   |
| Voice Control                     | `27758`   |
| Snowboarding                      | `28444`   |
| 3D Vision                         | `29363`   |
| Souls-like                        | `29482`   |
| Ambient                           | `29855`   |
| Nature                            | `30358`   |
| Fox                               | `30927`   |
| Text-Based                        | `31275`   |
| Otome                             | `31579`   |
| Deckbuilding                      | `32322`   |
| Mahjong                           | `33572`   |
| Job Simulator                     | `35079`   |
| Jump Scare                        | `42089`   |
| Coding                            | `42329`   |
| Action Roguelike                  | `42804`   |
| LGBTQ+                            | `44868`   |
| Wrestling                         | `47827`   |
| Rugby                             | `49213`   |
| Foreign                           | `51306`   |
| On-Rails Shooter                  | `56690`   |
| Electronic Music                  | `61357`   |
| Spelling                          | `71389`   |
| Farming Sim                       | `87918`   |
| Shop Keeper                       | `91114`   |
| Jet                               | `92092`   |
| Skating                           | `96359`   |
| Cozy                              | `97376`   |
| 8-bit Music                       | `117648`  |
| Bikes                             | `123332`  |
| ATV                               | `129761`  |
| Electronic                        | `143739`  |
| Gaming                            | `150626`  |
| Cricket                           | `158638`  |
| Tile-Matching                     | `176733`  |
| Battle Royale                     | `176981`  |
| Faith                             | `180368`  |
| Instrumental Music                | `189941`  |
| Mystery Dungeon                   | `198631`  |
| Motorbike                         | `198913`  |
| Colony Sim                        | `220585`  |
| Feature Film                      | `233824`  |
| BMX                               | `252854`  |
| Automation                        | `255534`  |
| Musou                             | `323922`  |
| Hockey                            | `324176`  |
| Rock Music                        | `337964`  |
| Steam Machine                     | `348922`  |
| Looter Shooter                    | `353880`  |
| Snooker                           | `363767`  |
| Clicker                           | `379975`  |
| Traditional Roguelike             | `454187`  |
| Wholesome                         | `552282`  |
| Hardware                          | `603297`  |
| Idler                             | `615955`  |
| Hero Shooter                      | `620519`  |
| Social Deduction                  | `745697`  |
| Escape Room                       | `769306`  |
| 360 Video                         | `776177`  |
| Card Battler                      | `791774`  |
| Volleyball                        | `847164`  |
| Asymmetric VR                     | `856791`  |
| Creature Collector                | `916648`  |
| Roguevania                        | `922563`  |
| Boomer Shooter                    | `1023537` |
| Auto Battler                      | `1084988` |
| Roguelike Deckbuilder             | `1091588` |
| Outbreak Sim                      | `1100686` |
| Automobile Sim                    | `1100687` |
| Medical Sim                       | `1100688` |
| Open World Survival Craft         | `1100689` |
| Extraction Shooter                | `1199779` |
| Hobby Sim                         | `1220528` |
| Football (Soccer)                 | `1254546` |
| Football (American)               | `1254552` |
