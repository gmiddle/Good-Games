'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Games', [
      {
          "name": "DEATHLOOP",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1252330/header.jpg?t=1631723461",
          "description": "DEATHLOOP is a next-gen FPS from Arkane Lyon, the award-winning studio behind Dishonored. In DEATHLOOP, two rival assassins are trapped in a mysterious timeloop on the island of Blackreef, doomed to repeat the same day for eternity.",
          "release_date": "Sep 13, 2021",
          "developer": "Arkane Studios",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Hades",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1624463563",
          "description": "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
          "release_date": "Sep 17, 2020",
          "developer": "Supergiant Games",
          "publisher": "Supergiant Games",
          "genre": "Action, Indie, RPG"
      },
      {
          "name": "The Forgotten City",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/874260/header.jpg?t=1632133326",
          "description": "The Forgotten City is a narrative-driven time loop adventure in ancient Rome. Discover the ruins of an ancient underground city, travel 2000 years in the past, and unravel the mystery of who destroyed it by cleverly exploiting the power to wind back time. The fate of the city is in your hands.",
          "release_date": "Jul 28, 2021",
          "developer": "Modern Storyteller",
          "publisher": "Dear Villagers",
          "genre": "Adventure, Indie, RPG"
      },
      {
          "name": "Factorio",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg?t=1620730652",
          "description": "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.",
          "release_date": "Aug 14, 2020",
          "developer": "Wube Software LTD.",
          "publisher": "Wube Software LTD.",
          "genre": "Casual, Indie, Simulation, Strategy"
      },
      {
          "name": "Resident Evil 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg?t=1608602727",
          "description": "A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you. Witness the return of Resident Evil 2.",
          "release_date": "24 ENE 2019",
          "developer": "CAPCOM Co., Ltd.",
          "publisher": "CAPCOM Co., Ltd.",
          "genre": "Action"
      },
      {
          "name": "Portal 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg?t=1610490805",
          "description": "The &quot;Perpetual Testing Initiative&quot; has been expanded to allow you to design co-op puzzles for you and your friends!",
          "release_date": "Apr 18, 2011",
          "developer": "Valve",
          "publisher": "Valve",
          "genre": "Action, Adventure"
      },
      {
          "name": "Dishonored",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/205100/header.jpg?t=1598321484",
          "description": "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored's flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal.",
          "release_date": "11 Oct, 2012",
          "developer": "Arkane Studios",
          "publisher": "Bethesda Softworks",
          "genre": "Action, Adventure"
      },
      {
          "name": "Subnautica",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg?t=1625546782",
          "description": "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
          "release_date": "23 Jan, 2018",
          "developer": "Unknown Worlds Entertainment",
          "publisher": "Unknown Worlds Entertainment",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Desperados III",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/610370/header.jpg?t=1631811822",
          "description": "Desperados III is a story-driven, hardcore tactical stealth game, set in a ruthless Wild West scenario. Play smart if you want to succeed. A good plan can make the difference between survival and finding yourself at the business end of a pistol.",
          "release_date": "16 JUN 2020",
          "developer": "Mimimi Games",
          "publisher": "THQ Nordic",
          "genre": "Stradegy"
      },
      {
          "name": "Hollow Knight",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925",
          "description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
          "release_date": "24 Feb, 2017",
          "developer": "Team Cherry",
          "publisher": "Team Cherry",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Portal",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/400/header.jpg?t=1608593358",
          "description": "Portal&trade; is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
          "release_date": "10 Oct, 2007",
          "developer": "Valve",
          "publisher": "Valve",
          "genre": "Action"
      },
      {
          "name": "BioShock",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/7670/header.jpg?t=1568739889",
          "description": "BioShock is a shooter unlike any you've ever played, loaded with weapons and tactics never seen. You'll have a complete arsenal at your disposal from simple revolvers to grenade launchers and chemical throwers, but you'll also be forced to genetically modify your DNA to create an even more deadly weapon: you.",
          "release_date": "21 Aug, 2007",
          "developer": "2K Boston, 2K Australia",
          "publisher": "2K",
          "genre": "Action, RPG"
      },
      {
          "name": "Outer Wilds",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg?t=1629751834",
          "description": "Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.",
          "release_date": "Jun 18, 2020",
          "developer": "Mobius Digital",
          "publisher": "Annapurna Interactive",
          "genre": "Action, Adventure"
      },
      {
          "name": "SOMA",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/282140/header.jpg?t=1617099755",
          "description": "From the creators of Amnesia: The Dark Descent comes SOMA, a sci-fi horror game set below the waves of the Atlantic ocean. Struggle to survive a hostile world that will make you question your very existence.",
          "release_date": "Sep 21, 2015",
          "developer": "Frictional Games",
          "publisher": "Frictional Games",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Google Earth VR",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/348250/header.jpg?t=1508799201",
          "description": "Google Earth VR lets you explore the world from totally new perspectives in virtual reality. Stroll the streets of Tokyo, soar over the Grand Canyon, or walk around the Eiffel Tower.",
          "release_date": "Nov 16, 2016",
          "developer": "Google",
          "publisher": "Google",
          "genre": "Adventure, Casual, Free to Play, Simulation"
      },
      {
          "name": "Chroma Lab",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/587470/header.jpg?t=1511812703",
          "description": "Chroma Lab is a VR particle physics sandbox. Surround yourself with hundreds of thousands of colorful particles that stick together like a fluid which you can interact with using a variety of tools.",
          "release_date": "Aug 22, 2017",
          "developer": "Sean Tann",
          "publisher": "Sean Tann",
          "genre": "Casual, Indie, Simulation"
      },
      {
          "name": "Life is Strange - Episode 1",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/319630/header.jpg?t=1592488448",
          "description": "Episode 1 now FREE! Life is Strange is an award-winning and critically acclaimed episodic adventure game that allows the player to rewind time and affect the past, present and future.",
          "release_date": "Jan 29, 2015",
          "developer": "DONTNOD Entertainment, Feral Interactive (Mac), Feral Interactive (Linux)",
          "publisher": "Square Enix, Feral interactive (Mac), Feral Interactive (Linux)",
          "genre": "Action, Adventure"
      },
      {
          "name": "SUPERHOT",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/322500/header.jpg?t=1627641414",
          "description": "SUPERHOT is the smash-hit FPS where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's you, alone, outnumbered and outgunned. Snatch weapons from fallen enemies to shoot, slice and dodge through a truly cinematic hurricane of slow-motion bullets.",
          "release_date": "Feb 25, 2016",
          "developer": "SUPERHOT Team",
          "publisher": "SUPERHOT Team",
          "genre": "Action, Indie"
      },
      {
          "name": "Stardew Valley",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324",
          "description": "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
          "release_date": "26 FEB 2016",
          "developer": "ConcernedApe",
          "publisher": "ConcernedApe",
          "genre": "Indie, RPG, Simulation"
      },
      {
          "name": "Mass Effect 2 (2010)",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/24980/header.jpg?t=1615504486",
          "description": "Recruit. Explore. Control.Two years after Commander Shepard repelled invading Reapers bent on the destruction of organic life, a mysterious new enemy has emerged. On the fringes of known space, something is silently abducting entire human colonies.",
          "release_date": "Jan 26, 2010",
          "developer": "BioWare",
          "publisher": "Electronic Arts",
          "genre": "RPG"
      },
      {
          "name": "Borderlands 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/49520/header.jpg?t=1590450074",
          "description": "The Ultimate Vault Hunter's Upgrade lets you get the most out of the Borderlands 2 experience.",
          "release_date": "Sep 17, 2012",
          "developer": "Gearbox Software, Aspyr (Mac), Aspyr (Linux)",
          "publisher": "2K, Aspyr (Mac), Aspyr (Linux)",
          "genre": "Action, RPG"
      },
      {
          "name": "Deep Rock Galactic",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/548430/header_alt_assets_12.jpg?t=1631782769",
          "description": "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
          "release_date": "May 13, 2020",
          "developer": "Ghost Ship Games",
          "publisher": "Coffee Stain Publishing",
          "genre": "Action"
      },
      {
          "name": "Garry's Mod",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/4000/header.jpg?t=1617307042",
          "description": "Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.",
          "release_date": "29 Nov, 2006",
          "developer": "Facepunch Studios",
          "publisher": "Valve",
          "genre": "Indie, Simulation"
      },
      {
          "name": "METAL GEAR SOLID V: THE PHANTOM PAIN",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/287700/header.jpg?t=1591740509",
          "description": "Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
          "release_date": "Sep 1, 2015",
          "developer": "Konami Digital Entertainment",
          "publisher": "Konami Digital Entertainment",
          "genre": "Action, Adventure"
      },
      {
          "name": "HITMAN",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/236870/header.jpg?t=1599823634",
          "description": "There is a world beyond ours. Beyond nations, justice, ethics. It never sleeps. It exists everywhere. And once you enter....there is no going back. Welcome to the World of Assassination. You are Agent 47, the world's ultimate assassin.",
          "release_date": "Mar 11, 2016",
          "developer": "IO Interactive A/S, Feral Interactive (Linux), Feral Interactive (Mac)",
          "publisher": "IO Interactive A/S, Feral Interactive (Linux), Feral Interactive (Mac)",
          "genre": "Action"
      },
      {
          "name": "HITMAN 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/863550/header.jpg?t=1598895956",
          "description": "Travel the globe and track your targets across exotic sandbox locations in HITMAN 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world's most creative assassin, Agent 47 in the ultimate spy thriller story.",
          "release_date": "Nov 13, 2018",
          "developer": "IO Interactive A/S",
          "publisher": "Warner Bros Interactive Entertainment",
          "genre": "Action"
      },
      {
          "name": "Infinifactory",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/300570/header.jpg?t=1618420442",
          "description": "Infinifactory is a sandbox puzzle game by Zachtronics, the creators of SpaceChem and Infiniminer. Build factories that assemble products for your alien overlords, and try not to die in the process.",
          "release_date": "Jun 30, 2015",
          "developer": "Zachtronics",
          "publisher": "Zachtronics",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Shadow Tactics: Blades of the Shogun",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/418240/header.jpg?t=1622130450",
          "description": "Shadow Tactics is a hardcore tactical stealth game set in Japan around the Edo period. A new Shogun seizes power over Japan and enforces nationwide peace. In his battle against conspiracy and rebellion, he recruits five specialists with extraordinary skills for assassination, sabotage and espionage.",
          "release_date": "Dec 6, 2016",
          "developer": "Mimimi Games",
          "publisher": "Daedalic Entertainment",
          "genre": "Indie, Strategy"
      },
      {
          "name": "BioShock Infinite",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/8870/header.jpg?t=1602794480",
          "description": "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia.",
          "release_date": "Mar 25, 2013",
          "developer": "Irrational Games, Virtual Programming (Linux)",
          "publisher": "2K",
          "genre": "Action"
      },
      {
          "name": "TowerFall Ascension",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/251470/header.jpg?t=1617131982",
          "description": "TowerFall Ascension is the definitive version of the hit archery combat game. Inspired by classics from the golden age of couch multiplayer, it's a 4-player local party game centering around hilarious, intense versus matches. The core mechanics are simple and accessible, but hard to master and combat is fierce.",
          "release_date": "Mar 11, 2014",
          "developer": "Extremely OK Games, Ltd.",
          "publisher": "Matt Makes Games Inc.",
          "genre": "Action, Indie"
      },
      {
          "name": "Subnautica: Below Zero",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/848450/header.jpg?t=1625546902",
          "description": "Dive into a freezing underwater adventure on an alien planet. Below Zero is set two years after the original Subnautica. Return to Planet 4546B to uncover the truth behind a deadly cover-up. Survive by building habitats, crafting tools, &amp; diving deeper into the world of Subnautica.",
          "release_date": "May 13, 2021",
          "developer": "Unknown Worlds Entertainment",
          "publisher": "Unknown Worlds Entertainment",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Wolfenstein: The New Order",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/201810/header.jpg?t=1630605243",
          "description": "Wolfenstein: The New Order reignites the series that created the first-person shooter genre. Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat.",
          "release_date": "May 19, 2014",
          "developer": "MachineGames",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Shadow Warrior",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/233130/header.jpg?t=1627918119",
          "description": "Shadow Warrior is a bold reimagining of the classic 3D Realms' shooter from independent developer Flying Wild Hog (Hard Reset) starring the legendary and quick-witted warrior Lo Wang.",
          "release_date": "Sep 26, 2013",
          "developer": "Flying Wild Hog",
          "publisher": "Devolver Digital",
          "genre": "Action, Adventure"
      },
      {
          "name": "METAL GEAR RISING: REVENGEANCE",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/235460/header.jpg?t=1581382081",
          "description": "Developed by Kojima Productions and PlatinumGames, METAL GEAR RISING: REVENGEANCE takes the renowned METAL GEAR franchise into exciting new territory with an all-new action experience. The game seamlessly melds pure action and epic story-telling that surrounds Raiden  a child soldier transformed into a half-human, half-cyborg ninja who...",
          "release_date": "Jan 9, 2014",
          "developer": "PlatinumGames",
          "publisher": "Konami Digital Entertainment",
          "genre": "Action"
      },
      {
          "name": "DOOM",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/379720/header.jpg?t=1593395083",
          "description": "Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.",
          "release_date": "12 May, 2016",
          "developer": "id Software",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Mark of the Ninja",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/214560/header.jpg?t=1602117639",
          "description": "In Mark of the Ninja, you'll know what it is to truly be a ninja. You must be silent, agile and clever to outwit your opponents in a world of gorgeous scenery and flowing animation. Marked with cursed tattoos giving you heightened senses, every situation presents you with options.",
          "release_date": "",
          "developer": "Klei Entertainment",
          "publisher": "Microsoft Studios",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "METAL GEAR SOLID V: GROUND ZEROES",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/311340/header.jpg?t=1581382125",
          "description": "World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?",
          "release_date": "Dec 18, 2014",
          "developer": "Konami Digital Entertainment",
          "publisher": "Konami Digital Entertainment",
          "genre": "Action, Adventure"
      },
      {
          "name": "The Stanley Parable",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/221910/header.jpg?t=1584652672",
          "description": "The Stanley Parable is a first person exploration game. You will play as Stanley, and you will not play as Stanley. You will follow a story, you will not follow a story. You will have a choice, you will have no choice. The game will end, the game will never end.",
          "release_date": "Oct 17, 2013",
          "developer": "Galactic Cafe",
          "publisher": "Galactic Cafe",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Transistor",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/237930/header.jpg?t=1601337924",
          "description": "Discover the world of Transistor, a sci-fi-themed action RPG from the creators of Bastion.",
          "release_date": "May 20, 2014",
          "developer": "Supergiant Games",
          "publisher": "Supergiant Games",
          "genre": "Action, Indie, RPG"
      },
      {
          "name": "Ori and the Blind Forest",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/261570/header.jpg?t=1590605540",
          "description": "Ori and the Blind Forest tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer crafted by Moon Studios for PC.",
          "release_date": "Mar 10, 2015",
          "developer": "Moon Studios GmbH",
          "publisher": "Xbox Game Studios",
          "genre": "Action"
      },
      {
          "name": "Hacknet",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/365450/header.jpg?t=1622564333",
          "description": "Hacknet is an immersive, terminal-based hacking simulator for PC. Dive down a rabbit hoIe as you follow the instructions of a recently deceased hacker, whose death may not have been the accident the media reports.",
          "release_date": "Aug 12, 2015",
          "developer": "Team Fractal Alligator",
          "publisher": "Fellow Traveller",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Hellblade: Senua's Sacrifice",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/414340/header.jpg?t=1561991834",
          "description": "From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior's brutal journey into myth and madness. Set in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover.",
          "release_date": "Aug 7, 2017",
          "developer": "Ninja Theory",
          "publisher": "Ninja Theory",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "SUPERHOT VR",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/617830/header.jpg?t=1627641439",
          "description": "Lose track of what's real. Commit yourself, body and mind. Confront the evocative, elegantly brutal world of SUPERHOT VR. Enemies pouring into the room from all sides, dozens of bullets coursing through the air... Wait. Something seems different in here...",
          "release_date": "May 25, 2017",
          "developer": "SUPERHOT Team",
          "publisher": "SUPERHOT Team",
          "genre": "Action, Indie"
      },
      {
          "name": "LIMBO",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg?t=1631282955",
          "description": "Uncertain of his sister's fate, a boy enters LIMBO",
          "release_date": "Aug 2, 2011",
          "developer": "Playdead",
          "publisher": "Playdead",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Half-Life 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg?t=1591063154",
          "description": "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named \"Best PC Game Ever\" by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide.",
          "release_date": "Nov 16, 2004",
          "developer": "Valve",
          "publisher": "Valve",
          "genre": "Action"
      },
      {
          "name": "Superliminal",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1049410/header.jpg?t=1624645687",
          "description": "Perception is reality. In this mind-bending first-person puzzler, you escape a surreal dream world through solving impossible puzzles using the ambiguity of depth and perspective.",
          "release_date": "Nov 5, 2020",
          "developer": "Pillow Castle",
          "publisher": "Pillow Castle",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Hitman: Blood Money",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/6860/header.jpg?t=1599829743",
          "description": "Money Talks. Silence Pays. Prepare to Make a Killing. When assassins from Agent 47's contract agency, The ICA, are eliminated in a series of hits, it seems a larger, more powerful agency has entered the fray. Sensing he may be a target, 47 travels to America, and prepares to make a killing.",
          "release_date": "Mar 15, 2007",
          "developer": "Io-Interactive A/S",
          "publisher": "Io-Interactive A/S",
          "genre": "Action"
      },
      {
          "name": "Hellblade: Senua's Sacrifice VR Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/747350/header.jpg?t=1556271112",
          "description": "The VR Edition of the critically acclaimed BAFTA award-winning Hellblade: Senua's Sacrifice. From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior's brutal journey into myth and madness.",
          "release_date": "Jul 31, 2018",
          "developer": "Ninja Theory",
          "publisher": "Ninja Theory",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Warframe",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg?t=1632155791",
          "description": "Warframe is a cooperative free-to-play third person online action game set in an evolving sci-fi world.",
          "release_date": "Mar 25, 2013",
          "developer": "Digital Extremes",
          "publisher": "Digital Extremes",
          "genre": "Action, Free to Play"
      },
      {
          "name": "Dishonored 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/403640/header.jpg?t=1603889340",
          "description": "Reprise your role as a supernatural assassin in Dishonored 2. Declared a masterpiece by Eurogamer and hailed a must-play revenge tale by Game Informer, Dishonored 2 is the follow up to Arkane's 1st-person action blockbuster &amp; winner of 100+ 'Game of the Year' awards, Dishonored.",
          "release_date": "Nov 11, 2016",
          "developer": "Arkane Studios",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Tabletop Simulator",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/286160/header.jpg?t=1620412025",
          "description": "Tabletop Simulator is the only simulator where you can let your aggression out by flipping the table! There are no rules to follow: just you, a physics sandbox, and your friends. Make your own online board games or play the thousands of community created mods. Unlimited gaming possibilities!",
          "release_date": "Jun 5, 2015",
          "developer": "Berserk Games",
          "publisher": "Berserk Games",
          "genre": "Casual, Indie, RPG, Simulation, Strategy"
      },
      {
          "name": "Ultimate Chicken Horse",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/386940/header.jpg?t=1631115842",
          "description": "Ultimate Chicken Horse is a party platformer game where you build the level as you play, placing traps and hazards to screw your friends over, but trying not to screw yourself.",
          "release_date": "Mar 4, 2016",
          "developer": "Clever Endeavour Games",
          "publisher": "Clever Endeavour Games",
          "genre": "Action, Casual, Indie"
      },
      {
          "name": "Mini Motorways",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1127500/header.jpg?t=1631584782",
          "description": "Mini Motorways is a strategy simulation game about designing the road map for a growing city. Build a traffic network, one road at a time, to create a bustling metropolis. Redesign your roads and place your motorways to get everyone where they need to go. How long can you keep the city moving?",
          "release_date": "Jul 20, 2021",
          "developer": "Dinosaur Polo Club",
          "publisher": "Dinosaur Polo Club",
          "genre": "Casual, Indie, Simulation, Strategy"
      },
      {
          "name": "The Jackbox Party Pack 7",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1211630/header.jpg?t=1606862201",
          "description": "Five new games: the hit threequel Quiplash 3, the collaborative chaos of The Devils and the Details, the fierce drawing game Champ'd Up, the speech game Talking Points and the guessing game Blather 'Round. Use phones or tablets as controllers and play with up to 8 players, and an audience of 10,000!",
          "release_date": "Oct 14, 2020",
          "developer": "Jackbox Games, Inc.",
          "publisher": "Jackbox Games, Inc.",
          "genre": "Casual, Indie"
      },
      {
          "name": "The Jackbox Party Pack 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/397460/header.jpg?t=1597699190",
          "description": "The sequel to the party game phenomenon The Jackbox Party Pack, featuring FIVE fresh, rib-tickling party games! Your phones or tablets are your controllers and no big mess of controllers needed. For up to 8 players plus an Audience of up to 10,000! It's a game-night riot in a box without the box!",
          "release_date": "Oct 13, 2015",
          "developer": "Jackbox Games, Inc.",
          "publisher": "Jackbox Games, Inc.",
          "genre": "Casual, Indie, Strategy"
      },
      {
          "name": "The Walking Dead: Saints & Sinners",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/916840/header.jpg?t=1594746141",
          "description": "Saints &amp; Sinners is a game unlike any other in The Walking Dead universe. Every challenge you face and decision you make is driven by YOU. Fight the undead, scavenge through the flooded ruins of New Orleans, and face gut-wrenching choices for you and the other survivors. Live The Walking Dead.",
          "release_date": "Jan 23, 2020",
          "developer": "Skydance Interactive",
          "publisher": "Skydance Interactive",
          "genre": "Action, Adventure, Indie, RPG, Simulation, Strategy"
      },
      {
          "name": "Museum of Other Realities",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/613900/header.jpg?t=1625160333",
          "description": "An immersive multiplayer art showcase in virtual reality, the Museum of Other Realities is a space to connect, share, and experience a growing collection of mind-bending VR art with others.",
          "release_date": "Feb 26, 2020",
          "developer": "MOR Museum Inc.",
          "publisher": "MOR Museum Inc.",
          "genre": "Casual, Simulation"
      },
      {
          "name": "PAYDAY 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg?t=1628754397",
          "description": "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.",
          "release_date": "Aug 13, 2013",
          "developer": "OVERKILL - a Starbreeze Studio.",
          "publisher": "Starbreeze Publishing AB",
          "genre": "Action, RPG"
      },
      {
          "name": "Distance",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/233610/header.jpg?t=1588966660",
          "description": "Distance is an atmospheric racing platformer. Fusing futuristic arcade racing with parkour, survive a deadly, mysterious, neon-drenched city by jumping, rotating, and flying.",
          "release_date": "Sep 18, 2018",
          "developer": "Refract",
          "publisher": "Refract",
          "genre": "Action, Indie, Racing"
      },
      {
          "name": "EXAPUNKS",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/716490/header.jpg?t=1618420440",
          "description": "The year is 1997. You used to be a hacker, but now you have the phage. You made a deal: one hack, one dose. There's nothing left to lose except your life.",
          "release_date": "Oct 22, 2018",
          "developer": "Zachtronics",
          "publisher": "Zachtronics",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Alien: Isolation",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/214490/header.jpg?t=1603026039",
          "description": "Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.",
          "release_date": "Oct 6, 2014",
          "developer": "Creative Assembly, Feral Interactive (Mac), Feral Interactive (Linux)",
          "publisher": "SEGA, Feral Interactive (Mac), Feral Interactive (Linux)",
          "genre": "Action"
      },
      {
          "name": "Broforce",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/274190/header.jpg?t=1622676636",
          "description": "When evil threatens the world, the world calls on Broforce - an under-funded, over-powered paramilitary organization dealing exclusively in excessive force. Brace your loins with up to four players to run and gun as dozens of different bros and eliminate the opposing terrorist forces that threaten our way of life.",
          "release_date": "Oct 15, 2015",
          "developer": "Free Lives",
          "publisher": "Devolver Digital",
          "genre": "Action, Adventure, Casual, Indie"
      },
      {
          "name": "Left 4 Dead 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg?t=1630686839",
          "description": "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
          "release_date": "Nov 16, 2009",
          "developer": "Valve",
          "publisher": "Valve",
          "genre": "Action"
      },
      {
          "name": "Metro 2033 Redux",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/286690/header.jpg?t=1600354146",
          "description": "In 2013 the world was devastated by an apocalyptic event, annihilating almost all mankind and turning the Earth's surface into a poisonous wasteland. A handful of survivors took refuge in the depths of the Moscow underground, and human civilization entered a new Dark Age. The year is 2033.",
          "release_date": "Aug 25, 2014",
          "developer": "4A Games",
          "publisher": "Deep Silver",
          "genre": "Action"
      },
      {
          "name": "Super Time Force Ultra",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/250700/header.jpg?t=1589331032",
          "description": "Super Time Force Ultra is an insane platformer filled with robots and dinosaurs and fun and time travel... sometimes all at the same time!",
          "release_date": "Aug 25, 2014",
          "developer": "Capybara Games",
          "publisher": "Capybara Games",
          "genre": "Action, Indie"
      },
      {
          "name": "FEZ",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg?t=1572375251",
          "description": "Gomez is a 2D creature living in a 2D world. Or is he? When the existence of a mysterious 3rd dimension is revealed to him, Gomez is sent out on a journey that will take him to the very end of time and space. Use your ability to navigate 3D structures from 4 distinct classic 2D perspectives.",
          "release_date": "May 1, 2013",
          "developer": "Polytron Corporation",
          "publisher": "Trapdoor",
          "genre": "Indie"
      },
      {
          "name": "GORN",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/578620/header.jpg?t=1627580804",
          "description": "GORN is a ludicrously violent VR gladiator simulator, made by Free Lives, the developers of Broforce and Genital Jousting.",
          "release_date": "Jul 18, 2019",
          "developer": "Free Lives",
          "publisher": "Devolver Digital",
          "genre": "Action, Indie"
      },
      {
          "name": "The Vanishing of Ethan Carter",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/258520/header.jpg?t=1591617818",
          "description": "The Vanishing of Ethan Carter is a first-person story-driven mystery. Purchase this game to get both the original and the Unreal Engine 4 remaster called The Vanishing of Ethan Carter Redux.",
          "release_date": "Sep 25, 2014",
          "developer": "The Astronauts",
          "publisher": "The Astronauts",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Scanner Sombre",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/475190/header.jpg?t=1586359715",
          "description": "Inspired by Gone Home and Dear Esther, Scanner Sombre is a cave exploration experience. With stunning visuals and a terrifying theme, it is the 6th major video game released by Introversion Software - creators of the BAFTA award winning Prison Architect as well as Uplink, Darwinia and DEFCON.",
          "release_date": "Apr 26, 2017",
          "developer": "Introversion Software",
          "publisher": "Introversion Software",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Gone Home",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/232430/header.jpg?t=1589995154",
          "description": "June 7th, 1995. 1:15 AM. You arrive home after a year abroad. You expect your family to greet you, but the house is empty. Something's not right. Where is everyone? And what's happened here? Unravel the mystery for yourself in Gone Home, a story exploration game from The Fullbright Company.",
          "release_date": "Aug 15, 2013",
          "developer": "Fullbright",
          "publisher": "Fullbright",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Rocket League",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg?t=1628814130",
          "description": "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special Mutators that let you change the rules entirely, hockey and...",
          "release_date": "Jul 6, 2015",
          "developer": "Psyonix LLC",
          "publisher": "Psyonix LLC",
          "genre": "Action, Indie, Racing, Sports"
      },
      {
          "name": "Awesomenauts - the 2D moba",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/204300/header.jpg?t=1575970562",
          "description": "Use your power, show your might! Play this Multiplayer Online Battle Arena (MOBA) game for FREE now! AWESOMENAUTS combines 2D platforming with team-based strategy and hero based action. Whether you are a new recruit or an intergalactic legend, play AWESOMENAUTS!",
          "release_date": "Aug 1, 2012",
          "developer": "Ronimo Games",
          "publisher": "Ronimo Games",
          "genre": "Action, Free to Play, Indie, Strategy"
      },
      {
          "name": "Watch_Dogs",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/243470/header.jpg?t=1602605619",
          "description": "In today's hyper-connected world, Chicago operates under ctOS, the most advanced computer network in America.",
          "release_date": "May 26, 2014",
          "developer": "Ubisoft",
          "publisher": "Ubisoft",
          "genre": "Action, Adventure"
      },
      {
          "name": "Divinity: Original Sin 2 - Definitive Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg?t=1631177562",
          "description": "The critically acclaimed RPG that raised the bar, from the creators of Baldur's Gate 3. Gather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God.",
          "release_date": "Sep 14, 2017",
          "developer": "Larian Studios",
          "publisher": "Larian Studios",
          "genre": "Adventure, RPG, Strategy"
      },
      {
          "name": "Besiege",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/346010/header.jpg?t=1624452450",
          "description": "Besiege is a physics based building game in which you construct medieval siege engines. Battle your way through a 54 level singleplayer campaign, unleash chaos with your friends in multiplayer, create your own worlds with the level editor, customize your game with mods through the workshop.",
          "release_date": "Feb 18, 2020",
          "developer": "Spiderling Studios",
          "publisher": "Spiderling Studios",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Dying Light: Enhanced Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/239140/header.jpg?t=1630495463",
          "description": "First-person action survival game set in a post-apocalyptic open world overrun by flesh-hungry zombies. Roam a city devastated by a mysterious virus epidemic. Scavenge for supplies, craft weapons, and face hordes of the infected.",
          "release_date": "Jan 26, 2015",
          "developer": "Techland",
          "publisher": "Techland",
          "genre": "Action, RPG"
      },
      {
          "name": "DmC: Devil May Cry",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/220440/header.jpg?t=1626479454",
          "description": "In this retelling of Dante's origin story which is set against a contemporary backdrop, DmC Devil May Cry retains the stylish action.",
          "release_date": "Jan 24, 2013",
          "developer": "Ninja Theory",
          "publisher": "Capcom",
          "genre": "Action, Adventure"
      },
      {
          "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/20920/header.jpg?t=1621936593",
          "description": "A time of untold chaos has come. Mighty forces clash behind the scenes in a struggle for power and influence. The Northern Kingdoms mobilize for war. But armies on the march are not enough to stop a bloody conspiracy...",
          "release_date": "Apr 16, 2012",
          "developer": "CD PROJEKT RED",
          "publisher": "CD PROJEKT RED, 1C-SoftClub",
          "genre": "RPG"
      },
      {
          "name": "Dungeon Defenders",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/65800/header.jpg?t=1617394709",
          "description": "Create a hero from one of four classes to save Etheria in this 4-player coop Tower Defense Action-RPG. Includes Steam exclusive Portal gun &amp; TF2 familiars!",
          "release_date": "Oct 18, 2011",
          "developer": "Trendy Entertainment",
          "publisher": "Trendy Entertainment",
          "genre": "Action, Indie, RPG, Strategy"
      },
      {
          "name": "Magicka",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/42910/header.jpg?t=1615973729",
          "description": "Magicka is a satirical action-adventure game set in a rich fantasy world based on Norse mythology. The player assumes the role of a wizard from a sacred order tasked with stopping an evil sorcerer who has thrown the world into turmoil, his foul creations besieging the forces of good.",
          "release_date": "Jan 25, 2011",
          "developer": "Arrowhead Game Studios",
          "publisher": "Paradox Interactive",
          "genre": "Action, RPG"
      },
      {
          "name": "The Elder Scrolls V: Skyrim",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/72850/header.jpg?t=1590590362",
          "description": "EPIC FANTASY REBORN The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose.",
          "release_date": "Nov 10, 2011",
          "developer": "Bethesda Game Studios",
          "publisher": "Bethesda Softworks",
          "genre": "RPG"
      },
      {
          "name": "Crysis 2 - Maximum Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/108800/header.jpg?t=1614961356",
          "description": "Aliens are decimating New York City, only you have the technology to survive. Be The Weapon.",
          "release_date": "Mar 22, 2011",
          "developer": "Crytek Studios",
          "publisher": "Electronic Arts",
          "genre": "Action"
      },
      {
          "name": "Far Cry 4",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/298110/header.jpg?t=1602602982",
          "description": "Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother's dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.",
          "release_date": "Nov 2014",
          "developer": "Ubisoft Montreal, Red Storm, Shanghai, Toronto, Kiev",
          "publisher": "Ubisoft",
          "genre": "Action, Adventure"
      },
      {
          "name": "Batman: Arkham Knight",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/208650/header.jpg?t=1591738126",
          "description": "Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile.",
          "release_date": "Jun 23, 2015",
          "developer": "Rocksteady Studios",
          "publisher": "Warner Bros. Interactive Entertainment",
          "genre": "Action, Adventure"
      },
      {
          "name": "Tom Clancy's Splinter Cell Blacklist",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/235600/header.jpg?t=1617126226",
          "description": "The United States has a military presence in two-thirds of countries around the world, and some of them have had enough. A group of terrorists calling themselves The Engineers initiate a terror ultimatum called the Blacklist - a deadly countdown of escalating attacks on U.S. interests.",
          "release_date": "Aug 20, 2013",
          "developer": "Ubisoft Toronto",
          "publisher": "Ubisoft",
          "genre": "Action, Adventure"
      },
      {
          "name": "Sleeping Dogs",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/202170/header.jpg?t=1592493319",
          "description": "As Wei Shen, an undercover cop trying to take down the Triads, you'll have to fight your way up the organization without blowing your cover.",
          "release_date": "",
          "developer": "United Front Games",
          "publisher": "Square Enix",
          "genre": "Action, Adventure"
      },
      {
          "name": "The Forest",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg?t=1590522045",
          "description": "As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.",
          "release_date": "Apr 30, 2018",
          "developer": "Endnight Games Ltd",
          "publisher": "Endnight Games Ltd",
          "genre": "Action, Adventure, Indie, Simulation"
      },
      {
          "name": "Middle-earth: Shadow of War",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/356190/header.jpg?t=1575317164",
          "description": "Experience an epic open-world brought to life by the award-winning Nemesis System. Forge a new Ring of Power, conquer Fortresses in massive battles and dominate Mordor with your personal orc army in Middle-earth: Shadow of War.",
          "release_date": "Oct 9, 2017",
          "developer": "Monolith Productions  ",
          "publisher": "WB Games",
          "genre": "Action, Adventure, RPG"
      },
      {
          "name": "BONEWORKS",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/823500/header.jpg?t=1581381377",
          "description": "BONEWORKS is an Experimental Physics VR Adventure. Use found physics weapons, tools, and objects to fight across dangerous playscapes and mysterious architecture.",
          "release_date": "Dec 10, 2019",
          "developer": "Stress Level Zero",
          "publisher": "Stress Level Zero",
          "genre": "Action, Adventure, Indie, Simulation"
      },
      {
          "name": "Prey",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/480490/header.jpg?t=1594910513",
          "description": "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.",
          "release_date": "May 4, 2017",
          "developer": "Arkane Studios",
          "publisher": "Bethesda Softworks",
          "genre": "Action, Adventure"
      },
      {
          "name": "Hot Dogs, Horseshoes & Hand Grenades",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/450540/header.jpg?t=1576960750",
          "description": "Do you like hot dogs? How about horseshoes? Hand grenades? (everyone likes hand grenades) Anyway, we've got all that, and guns. SO MANY GUNS. So if you like ordnance, meat, and far too many groan-worthy puns, this is the VR sandbox game for you.",
          "release_date": "Apr 5, 2016",
          "developer": "RUST LTD.",
          "publisher": "RUST LTD.",
          "genre": "Action, Indie, Simulation, Early Access"
      },
      {
          "name": "Warhammer: Vermintide 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/552500/header.jpg?t=1622818059",
          "description": "The critically acclaimed Vermintide 2 is a visually stunning and groundbreaking melee action game pushing the boundaries of the first person co-op genre. Join the fight now!",
          "release_date": "Mar 8, 2018",
          "developer": "Fatshark",
          "publisher": "Fatshark",
          "genre": "Action, Indie"
      },
      {
          "name": "Tomb Raider",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/203160/header.jpg?t=1617888669",
          "description": "Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.",
          "release_date": "Mar 4, 2013",
          "developer": "Crystal Dynamics, Eidos-Montreal, Feral Interactive (Mac), Feral Interactive (Linux), Nixxes",
          "publisher": "Square Enix, Feral Interactive (Mac), Feral Interactive (Linux)",
          "genre": "Action, Adventure"
      },
      {
          "name": "Slime Rancher",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/433340/header_alt_assets_3.jpg?t=1624904229",
          "description": "Slime Rancher is the tale of Beatrix LeBeau, a plucky, young rancher who sets out for a life a thousand light years away from Earth on the Far, Far Range' where she tries her hand at making a living wrangling slimes.",
          "release_date": "Aug 1, 2017",
          "developer": "Monomi Park",
          "publisher": "Monomi Park",
          "genre": "Action, Adventure, Indie, Simulation"
      },
      {
          "name": "Opus Magnum",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/558990/header.jpg?t=1630191501",
          "description": "Opus Magnum is the latest open-ended puzzle game from Zachtronics, the creators of SpaceChem, Infinifactory, and SHENZHEN I/O. Design and build machines that assemble potions, poisons, and more using the alchemical engineer's most advanced tool: the transmutation engine!",
          "release_date": "Dec 7, 2017",
          "developer": "Zachtronics",
          "publisher": "Zachtronics",
          "genre": "Indie, Simulation"
      },
      {
          "name": "The Elder Scrolls V: Skyrim VR",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/611670/header.jpg?t=1564002443",
          "description": "A true, full-length open-world game for VR has arrived from Bethesda Game Studios. Skyrim VR reimagines the complete epic fantasy masterpiece with an unparalleled sense of scale, depth, and immersion. Skyrim VR also includes all official add-ons.",
          "release_date": "Apr 2, 2018",
          "developer": "Bethesda Game Studios",
          "publisher": "Bethesda Softworks",
          "genre": "RPG"
      },
      {
          "name": "Far Cry 3 - Blood Dragon",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/233270/header.jpg?t=1617126646",
          "description": "Far Cry 3: Blood Dragon is THE Kick-Ass Cyber Shooter.Welcome to an 80's vision of the future. The year is 2007 and you are Sargent Rex Colt, a Mark IV Cyber Commando. Your mission: get the girl, kill the baddies, and save the world.",
          "release_date": "May 1, 2013",
          "developer": "Ubisoft Montreal",
          "publisher": "Ubisoft",
          "genre": "Action, Adventure"
      },
      {
          "name": "Halo: The Master Chief Collection",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/976730/header.jpg?t=1624467656",
          "description": "The Master Chief's iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you're a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
          "release_date": "Dec 3, 2019",
          "developer": "343 Industries, Splash Damage, Ruffian Games, Bungie, Saber Interactive",
          "publisher": "Xbox Game Studios",
          "genre": "Action"
      },
      {
          "name": "FTL: Faster Than Light",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/212680/header.jpg?t=1589331228",
          "description": "This &quot;spaceship simulation roguelike-like&quot; allows you to take your ship and crew on an adventure through a randomly generated galaxy filled with glory and bitter defeat.",
          "release_date": "Sep 14, 2012",
          "developer": "Subset Games",
          "publisher": "Subset Games",
          "genre": "Indie, Simulation, Strategy"
      },
      {
          "name": "Black Mesa",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/362890/header.jpg?t=1631726058",
          "description": "Relive Half-Life.",
          "release_date": "Mar 6, 2020",
          "developer": "Crowbar Collective",
          "publisher": "Crowbar Collective",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Mad Max",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/234140/header.jpg?t=1609425539",
          "description": "Play as Mad Max, a reluctant hero and survivor who wants nothing more than to leave the madness behind and find solace.",
          "release_date": "Sep 1, 2015",
          "developer": "Avalanche Studios",
          "publisher": "Warner Bros. Interactive Entertainment",
          "genre": "Action, Adventure"
      },
      {
          "name": "Max Payne 3",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/204100/header.jpg?t=1619108680",
          "description": "No longer a New York City cop, Max Payne moves to Sao Paulo to protect a wealthy family in an effort to finally escape his troubled past. This complete edition of Max Payne 3 includes the complete original game and all previously released downloadable content.",
          "release_date": "May 31, 2012",
          "developer": "Rockstar Studios",
          "publisher": "Rockstar Games",
          "genre": "Action"
      },
      {
          "name": "Dishonored: Death of the Outsider",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/614570/header.jpg?t=1603891882",
          "description": "From the award-winning developers at Arkane Studios comes Dishonored: Death of the Outsider, the next standalone adventure in the critically-acclaimed Dishonored series.",
          "release_date": "Sep 14, 2017",
          "developer": "Arkane Studios",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Hyper Light Drifter",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/257850/header.jpg?t=1586549625",
          "description": "Explore a beautiful, vast and ruined world riddled with dangers and lost technologies.",
          "release_date": "Mar 31, 2016",
          "developer": "Heart Machine",
          "publisher": "Heart Machine",
          "genre": "Action, Adventure, Indie, RPG"
      },
      {
          "name": "Super Meat Boy",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/40800/header.jpg?t=1579204284",
          "description": "The infamous, tough-as-nails platformer comes to Steam with a playable Head Crab character (Steam-exclusive)!",
          "release_date": "Nov 30, 2010",
          "developer": "Team Meat",
          "publisher": "",
          "genre": "Indie"
      },
      {
          "name": "Wolfenstein II: The New Colossus",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/612880/header.jpg?t=1574183403",
          "description": "America, 1961. The assassination of Nazi General Deathshead was a short-lived victory. The Nazis maintain their stranglehold on the world. You are BJ Blazkowicz, aka Terror-Billy, member of the Resistance, scourge of the Nazi empire, and humanity's last hope for liberty.",
          "release_date": "Oct 26, 2017",
          "developer": "Machine Games",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Heat Signature",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/268130/header.jpg?t=1584742422",
          "description": "Heat Signature is a game from the developers of Gunpoint where you break into spaceships, make terrible mistakes, and think of clever ways out of them. You take a mission, fly to the target ship, sneak inside, and make clever use of your gadgets to distract, ambush and take out the crew.",
          "release_date": "Sep 21, 2017",
          "developer": "Suspicious Developments",
          "publisher": "Suspicious Developments",
          "genre": "Action, Adventure, Indie, Strategy"
      },
      {
          "name": "Gunpoint",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/206190/header.jpg?t=1585250076",
          "description": "Gunpoint is a stealth puzzle game that lets you rewire its levels to trick people. You play a freelance spy who takes jobs from his clients to break into high security buildings and steal sensitive data.",
          "release_date": "Jun 3, 2013",
          "developer": "Suspicious Developments",
          "publisher": "Suspicious Developments",
          "genre": "Action, Indie, Strategy"
      },
      {
          "name": "The Lab",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/450390/header.jpg?t=1567099772",
          "description": "Welcome to The Lab, a compilation of Valve's room-scale VR experiments set in a pocket universe within Aperture Science. Fix a robot, defend a castle, adopt a mechanical dog, and more. Still not sold? It's free!",
          "release_date": "Apr 5, 2016",
          "developer": "Valve",
          "publisher": "Valve",
          "genre": "Free to Play"
      },
      {
          "name": "Human: Fall Flat",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/477160/header.jpg?t=1631948654",
          "description": "Human: Fall Flat is a hilarious, light-hearted platformer set in floating dreamscapes that can be played solo or with up to 8 players online. Free new levels keep its vibrant community rewarded.",
          "release_date": "Jul 22, 2016",
          "developer": "No Brakes Games",
          "publisher": "Curve Digital",
          "genre": "Adventure, Casual, Indie, Simulation"
      },
      {
          "name": "Space Pirate Trainer",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/418650/header.jpg?t=1572335811",
          "description": "Space Pirate Trainer is the official trainer for wannabe space pirates in VR. Pick up your blasters, put on your sneakers, and dance your way into the Space Pirate Trainer hall of fame.",
          "release_date": "Oct 12, 2017",
          "developer": "I-Illusions",
          "publisher": "I-Illusions",
          "genre": "Action"
      },
      {
          "name": "Golf With Your Friends",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/431240/header.jpg?t=1628161430",
          "description": "Why have friends if not to play Golf... With Your Friends! Nothing is out of bounds as you take on courses filled with fast paced, exciting, simultaneous mini golf for up to 12 players!",
          "release_date": "May 19, 2020",
          "developer": "Blacklight Interactive",
          "publisher": "Team17",
          "genre": "Casual, Indie, Sports"
      },
      {
          "name": "Guacamelee! Gold Edition",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/214770/header.jpg?t=1616784585",
          "description": "Guacamelee! Gold Edition is a Metroidvania-style action-platformer set in a magical Mexican-inspired world. The game draws its inspiration from traditional Mexican culture and folklore, and features many interesting and unique characters.",
          "release_date": "Aug 8, 2013",
          "developer": "DrinkBox Studios",
          "publisher": "DrinkBox Studios",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Bayonetta",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/460790/header.jpg?t=1606505664",
          "description": "PlatinumGames' universally acclaimed action masterpiece finally comes to PC. Experience the over-the-top stylish action in 60fps at unlocked HD resolutions. The definitive way to play: being bad never felt so good.",
          "release_date": "Apr 11, 2017",
          "developer": "PlatinumGames",
          "publisher": "SEGA",
          "genre": "Action, Adventure"
      },
      {
          "name": "Bridge Constructor Portal",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/684410/header.jpg?t=1626944088",
          "description": "Enter the Aperture Science Enrichment Center and experience Bridge Constructor Portal  the unique merging of the classic Portal and Bridge Constructor games.",
          "release_date": "Dec 20, 2017",
          "developer": "ClockStone",
          "publisher": "Headup, Whisper Games",
          "genre": "Simulation, Strategy"
      },
      {
          "name": "Audioshield",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/412740/header.jpg?t=1568409238",
          "description": "Block the beats! Audioshield puts you at the point of impact for every hit in your songs. Block incoming orbs with your shields and feel the music. Works with any song!",
          "release_date": "Apr 5, 2016",
          "developer": "Dylan Fitterer",
          "publisher": "Dylan Fitterer",
          "genre": "Indie"
      },
      {
          "name": "Little Inferno",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/221260/header.jpg?t=1587490117",
          "description": "Throw your toys into your fire, and play with them as they burn. An adventure that takes place almost entirely in front of a fireplace - about looking up up up out of the chimney, and the cold world just on the other side of the wall. From the creators of World of Goo and Human Resource Machine.",
          "release_date": "Nov 19, 2012",
          "developer": "Tomorrow Corporation",
          "publisher": "Tomorrow Corporation",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "Mirror's Edge",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/17410/header.jpg?t=1615390591",
          "description": "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, &amp; you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
          "release_date": "Jan 14, 2009",
          "developer": "DICE",
          "publisher": "Electronic Arts",
          "genre": "Action, Adventure"
      },
      {
          "name": "Wolfenstein: The Old Blood",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/350080/header.jpg?t=1574181755",
          "description": "Wolfenstein: The Old Blood is a standalone prequel to the critically acclaimed first-person action-adventure shooter, Wolfenstein: The New Order. This adventure spans eight chapters and features the hallmarks of MachineGames  thrilling action, immersive story, and intense FPS combat.",
          "release_date": "May 4, 2015",
          "developer": "MachineGames",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Grow Home",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/323320/header.jpg?t=1447363659",
          "description": "Experience the freedom of unbounded climbing as you take control of BUD, a procedurally animated robot on a quest to save his planet. Create your own path through an alien world as you control and ride a giant plant on a vertical journey to the stars.",
          "release_date": "Feb 4, 2015",
          "developer": "Reflections, a Ubisoft Studio",
          "publisher": "Ubisoft",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "theBlu",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/451520/header.jpg?t=1517617172",
          "description": "Experience the wonder and majesty of the ocean through a series of habitats and come face to face with some of the most awe inspiring species on the planet.",
          "release_date": "Apr 5, 2016",
          "developer": "Wevr, Inc.",
          "publisher": "Wevr, Inc.",
          "genre": "Adventure, Casual, Indie, Simulation"
      },
      {
          "name": "Manifold Garden",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/473950/header.jpg?t=1603220474",
          "description": "Rediscover gravity and explore an Escher-esque world of impossible architecture. Witness infinity in first-person and master its rules to solve physics-defying puzzles. Cultivate a garden to open new paths forward, where an eternal expanse awaits.",
          "release_date": "Oct 20, 2020",
          "developer": "William Chyr Studio",
          "publisher": "William Chyr Studio",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Alan Wake",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/108710/header.jpg?t=1616438999",
          "description": "A Dark Presence stalks the small town of Bright Falls, pushing Alan Wake to the brink of sanity in his fight to unravel the mystery and save his love.",
          "release_date": "Feb 16, 2012",
          "developer": "Remedy Entertainment",
          "publisher": "Remedy Entertainment",
          "genre": "Action, Adventure"
      },
      {
          "name": "Lightmatter",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/994140/header.jpg?t=1592321640",
          "description": "A first-person puzzler where shadows kill you. Watch your step or be swallowed by the darkness.",
          "release_date": "Jan 15, 2020",
          "developer": "Tunnel Vision Games",
          "publisher": "Aspyr",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Brothers - A Tale of Two Sons",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/225080/header.jpg?t=1620123682",
          "description": "Guide two brothers on an epic fairy tale journey from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios. Control both brothers at once as you experience co-op play in single player mode, like never before.",
          "release_date": "Sep 3, 2013",
          "developer": "Starbreeze Studios AB",
          "publisher": "505 Games",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Panoptic",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/541930/header.jpg?t=1613494458",
          "description": "Panoptic is a local multiplayer VR game that pits you against a friend, where you play as either the giant Overseer or tiny Challenger in a stealthy game of cat and mouse. Will the Challenger slip away undetected through the crowds, or will the Overseer track them down with their powerful laser eye?",
          "release_date": "Oct 8, 2020",
          "developer": "Team Panoptes",
          "publisher": "Team Panoptes",
          "genre": "Action, Indie"
      },
      {
          "name": "FAR: Lone Sails",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/609320/header.jpg?t=1623927877",
          "description": "Traverse a dried-out seabed littered with the remains of a decaying civilization. Keep your unique vessel going, overcome numerous obstacles and withstand the hazardous weather conditions. How far can you make it? What will you find?",
          "release_date": "May 17, 2018",
          "developer": "Okomotive",
          "publisher": "Mixtvision",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Pony Island",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/405640/header.jpg?t=1597273688",
          "description": "Pony Island is a suspense puzzle game in disguise. You are in limbo, trapped in a malevolent and malfunctioning arcade machine devised by the devil himself. It is not a game about ponies.",
          "release_date": "Jan 4, 2016",
          "developer": "Daniel Mullins Games",
          "publisher": "Daniel Mullins Games",
          "genre": "Indie"
      },
      {
          "name": "What Remains of Edith Finch",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/501300/header.jpg?t=1629750661",
          "description": "What Remains of Edith Finch is a collection of strange tales about a family in Washington state. As Edith, you'll explore the colossal Finch house, searching for stories as she explores her family history and tries to figure out why she's the last one in her family left alive.",
          "release_date": "Apr 24, 2017",
          "developer": "Giant Sparrow",
          "publisher": "Annapurna Interactive",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Accounting+",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/927270/header.jpg?t=1580316632",
          "description": "Accounting+ is a NIGHTMARE ADVENTURE COMEDY. Experience classic virtual reality gameplay: clean up your office, take the battery out of the cooling machine, play the skeleton xylophone, and summon thousands upon thousands of demons.",
          "release_date": "Oct 18, 2018",
          "developer": "Crows Crows Crows, Squanch Games",
          "publisher": "Crows Crows Crows",
          "genre": "Action, Adventure, Casual, Indie, Simulation"
      },
      {
          "name": "Accounting (Legacy)",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/518580/header.jpg?t=1540209057",
          "description": "The modern field of Accountancy is a serious and honorable profession. Many human beings have spent their lives toiling over the hard science of numbers. Thousands have died so that we may get to the level of understanding that we have today. Thousands have died.",
          "release_date": "Oct 18, 2016",
          "developer": "Crows Crows Crows, Squanch Games",
          "publisher": "Crows Crows Crows",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Size Matters",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/976700/header.jpg?t=1631958514",
          "description": "You play as a scientist who is shrinking every second in a race against time! Find all the ingredients and formulas scattered around the laboratory, which are necessary for producing the life-saving antidote.",
          "release_date": "Mar 12, 2021",
          "developer": "Mazen Games",
          "publisher": "GrabTheGames",
          "genre": "Action, Adventure, Casual, Indie, Racing, Simulation"
      },
      {
          "name": "PUBG: BATTLEGROUNDS",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1631074279",
          "description": "PUBG: BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing.",
          "release_date": "Dec 21, 2017",
          "developer": "KRAFTON, Inc.",
          "publisher": "KRAFTON, Inc.",
          "genre": "Action, Adventure, Massively Multiplayer"
      },
      {
          "name": "SpeedRunners",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/207140/header.jpg?t=1631522005",
          "description": "Cut-throat multiplayer running game that pits 4 players against each other, locally and/or online. Run, jump, swing around, and use devious weapons and pick-ups to knock opponents off-screen! One of the most competitive games you'll ever play.",
          "release_date": "Apr 19, 2016",
          "developer": "DoubleDutch Games",
          "publisher": "tinyBuild",
          "genre": "Action, Casual, Indie, Racing, Sports"
      },
      {
          "name": "THE CORRIDOR",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1347030/header.jpg?t=1607104864",
          "description": "THE CORRIDOR is a 20-30 minute experience about the relationship between player and game.",
          "release_date": "Dec 4, 2020",
          "developer": "Thomas Mackinnon",
          "publisher": "Thomas Mackinnon",
          "genre": "Adventure, Indie"
      },
      {
          "name": "DOOM Eternal",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg?t=1631811902",
          "description": "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
          "release_date": "Mar 19, 2020",
          "developer": "id Software",
          "publisher": "Bethesda Softworks",
          "genre": "Action"
      },
      {
          "name": "Mortal Kombat X",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/307780/header.jpg?t=1588110604",
          "description": "Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.",
          "release_date": "Apr 13, 2015",
          "developer": "NetherRealm Studios, QLOC",
          "publisher": "Warner Bros. Interactive Entertainment",
          "genre": "Action"
      },
      {
          "name": "Agents of Mayhem",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/304530/header.jpg?t=1620292667",
          "description": "In Agents of MAYHEM, you run a no-holds barred operation against a shadowy super-villain organization known only as LEGION and their mysterious leader, the Morningstar. Explore the city of Seoul as a variety of Super Agents to thwart LEGION's vile plans to take over the world!",
          "release_date": "Aug 15, 2017",
          "developer": "Deep Silver Volition",
          "publisher": "Deep Silver",
          "genre": "Action"
      },
      {
          "name": "Sairento VR",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/555880/header.jpg?t=1592675082",
          "description": "VR was made for this. Perform triple jumps, wall runs, power slides and slow time down while blasting away at a foe before landing to deliver a blade attack on another. Kit yourself with katanas, firearms, bows, throwing glaives and legendary relics. Keep upgrading as you play. PURE CYBER NINJA FUN.",
          "release_date": "Feb 6, 2018",
          "developer": "Mixed Realms Pte Ltd, Swag Soft Holdings Pte Ltd",
          "publisher": "Mixed Realms Pte Ltd",
          "genre": "Action, Indie, RPG, Strategy"
      },
      {
          "name": "MOLEK-SYNTEZ",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1168880/header.jpg?t=1618420445",
          "description": "Use the MOLEK-SYNTEZ to create small molecules with various pharmacological effects from the comfort of your small Romanian apartment.",
          "release_date": "Nov 19, 2019",
          "developer": "Zachtronics",
          "publisher": "Zachtronics",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Oxygen Not Included",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/457140/header.jpg?t=1628295550",
          "description": "Oxygen Not Included is a space-colony simulation game. Deep inside an alien space rock your industrious crew will need to master science, overcome strange new lifeforms, and harness incredible space tech to survive, and possibly, thrive.",
          "release_date": "30 Jul, 2019",
          "developer": "Klei Entertainment",
          "publisher": "Klei Entertainment",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Arizona Sunshine",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/342180/header.jpg?t=1618084000",
          "description": "Built exclusively for VR, Arizona Sunshine puts you and up to 3 fellow survivors in the midst of a zombie apocalypse. Survive solo or in co-op, handle weapons with real-life movements, and explore a post-apocalyptic world in VR. Putting the undead back to rest is more thrilling than ever before.",
          "release_date": "Dec 6, 2016",
          "developer": "Vertigo Games, Jaywalkers Interactive",
          "publisher": "Vertigo Games",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Octodad: Dadliest Catch",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/224480/header.jpg?t=1579035625",
          "description": "Octodad: Dadliest Catch is a game about destruction, deception, and fatherhood. The player controls Octodad, a dapper octopus masquerading as a human, as he goes about his life. Octodad's existence is a constant struggle, as he must master mundane tasks with his unwieldy boneless tentacles while simultaneously keeping his cephalopodan...",
          "release_date": "Jan 30, 2014",
          "developer": "Young Horses",
          "publisher": "Young Horses",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "ABZU",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/384190/header.jpg?t=1592989692",
          "description": "From the art director of Journey, ABZU is a beautiful underwater adventure that evokes the dream of diving. Immerse yourself in a vibrant hidden world bursting with color and life as you descend into the heart of the ocean. But beware as you swim deeper as dangers lurk in the depths.",
          "release_date": "Aug 2, 2016",
          "developer": "Giant Squid",
          "publisher": "505 Games",
          "genre": "Action, Adventure, Casual, Indie, Simulation"
      },
      {
          "name": "FORM",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/408520/header.jpg?t=1608594690",
          "description": "Enter a surreal adventure where puzzles are built from dreams and memories. Solve the mystery behind an ancient artifact. Advance through a world that transforms around you. Transcend this existence.",
          "release_date": "Jun 1, 2017",
          "developer": "Charm Games",
          "publisher": "Charm Games",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "Intake",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/237760/header.jpg?t=1447357812",
          "description": "Intake is the new retro-futuristic drugstep arcade shooter from Cipher Prime. In this polychromatic love child of Dr. Mario and Ikaruga, you battle a never-ending barrage of pills, pushing your skill and reflexes to the limit to avoid a lethal dosage.",
          "release_date": "Nov 6, 2013",
          "developer": "Cipher Prime Studios",
          "publisher": "Cipher Prime Studios",
          "genre": "Action, Indie"
      },
      {
          "name": "The Floor is Jelly",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/295750/header.jpg?t=1597604868",
          "description": "The Floor is Jelly is a game that answers the question: what if everything you touched was made of jello?",
          "release_date": "May 30, 2014",
          "developer": "Auren Snyder",
          "publisher": "Auren Snyder",
          "genre": "Indie"
      },
      {
          "name": "Chivalry: Medieval Warfare",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/219640/header.jpg?t=1589576854",
          "description": "Besiege castles and raid villages in Chivalry: Medieval Warfare, a fast-paced medieval first person slasher with a focus on multiplayer battles",
          "release_date": "Oct 16, 2012",
          "developer": "Torn Banner Studios",
          "publisher": "Torn Banner Studios",
          "genre": "Action, Indie"
      },
      {
          "name": "Starbound",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/211820/header.jpg?t=1611668796",
          "description": "You've fled your home, only to find yourself lost in space with a damaged ship. Your only option is to beam down to the planet below, repair your ship and set off to explore the universe...",
          "release_date": "Jul 22, 2016",
          "developer": "Chucklefish",
          "publisher": "Chucklefish",
          "genre": "Action, Adventure, Casual, Indie, RPG"
      },
      {
          "name": "The Witness",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg?t=1598383120",
          "description": "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you.",
          "release_date": "Jan 26, 2016",
          "developer": "Thekla, Inc.",
          "publisher": "Thekla, Inc.",
          "genre": "Adventure, Indie"
      },
      {
          "name": "XCOM: Enemy Unknown",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/200510/header.jpg?t=1587584126",
          "description": "The XCOM: Enemy Unknown - Slingshot Pack is Now Available!",
          "release_date": "Oct 8, 2012",
          "developer": "Firaxis Games, Feral Interactive (Linux)",
          "publisher": "2K, Feral Interactive (Linux)",
          "genre": "Strategy"
      },
      {
          "name": "Assassin's Creed IV Black Flag",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/242050/header.jpg?t=1616174462",
          "description": "The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.",
          "release_date": "",
          "developer": "Ubisoft Montreal",
          "publisher": "Ubisoft",
          "genre": "Action, Adventure"
      },
      {
          "name": "Onward",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/496240/header.jpg?t=1629147965",
          "description": "Become fully immersed in the firefight! Onward is a Mil-sim multiplayer first person shooter built for virtual reality. Work closely with your team in the heat of battle and engage in the most realistic combat experience available in gaming today.",
          "release_date": "Aug 29, 2016",
          "developer": "Downpour Interactive",
          "publisher": "",
          "genre": "Action, Indie, Simulation, Strategy, Early Access"
      },
      {
          "name": "Don't Starve",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1602117150",
          "description": "Don't Starve is an uncompromising wilderness survival game full of science and magic. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style.",
          "release_date": "",
          "developer": "Klei Entertainment",
          "publisher": "Klei Entertainment",
          "genre": "Adventure, Indie, Simulation"
      },
      {
          "name": "No Man's Sky",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_5.jpg?t=1630512567",
          "description": "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.",
          "release_date": "Aug 12, 2016",
          "developer": "Hello Games",
          "publisher": "Hello Games",
          "genre": "Action, Adventure"
      },
      {
          "name": "Raw Data",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/436320/header.jpg?t=1565043373",
          "description": "Built from the ground up for VR, Raw Data's action gameplay, intuitive controls, challenging enemies, and sci-fi atmosphere will completely immerse you within the surreal world of Eden Corp. Go solo or team up and become the adrenaline-charged heroes of your own futuristic technothriller.",
          "release_date": "Oct 5, 2017",
          "developer": "Survios",
          "publisher": "Survios",
          "genre": "Action, Indie, Strategy"
      },
      {
          "name": "Deus Ex: Mankind Divided",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/337000/header.jpg?t=1593165236",
          "description": "Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.",
          "release_date": "Aug 23, 2016",
          "developer": "Eidos Montreal, Feral Interactive (Linux), Feral Interactive (Mac)",
          "publisher": "Square Enix, Feral Interactive (Linux), Feral Interactive (Mac)",
          "genre": "Action, RPG"
      },
      {
          "name": "Rise of the Tomb Raider",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/391220/header.jpg?t=1617888747",
          "description": "Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new Blood Ties story, then defend it against a zombie invasion in Lara's Nightmare.",
          "release_date": "Feb 9, 2016",
          "developer": "Crystal Dynamics, Eidos-Montreal, Feral Interactive (Mac), Feral Interactive (Linux), Nixxes",
          "publisher": "Square Enix, Feral Interactive (Mac), Feral Interactive (Linux)",
          "genre": "Action, Adventure"
      },
      {
          "name": "Cities: Skylines",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1632144308",
          "description": "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
          "release_date": "Mar 10, 2015",
          "developer": "Colossal Order Ltd.",
          "publisher": "Paradox Interactive",
          "genre": "Simulation, Strategy"
      },
      {
          "name": "Surgeon Simulator",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/233720/header.jpg?t=1630614452",
          "description": "Surgeon Simulator is an over-the-top operation sim, stitching together pitch-black humour with life-saving surgery. Become Dr. Burke, a would-be surgeon with a less than conventional toolkit, as he performs procedures on patients including the Heavy from TF2! ...is that a hammer?",
          "release_date": "Apr 19, 2013",
          "developer": "Bossa Studios",
          "publisher": "Bossa Studios",
          "genre": "Action, Indie, Simulation"
      },
      {
          "name": "Sniper Elite 3",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/238090/header.jpg?t=1601483606",
          "description": "Sniper Elite 3 is a tactical third-person shooter that combines stealth, gameplay choice and genre-defining ballistics with huge, open levels and the exotic terrain of World War 2 North Africa.",
          "release_date": "Jun 27, 2014",
          "developer": "Rebellion",
          "publisher": "Rebellion",
          "genre": "Action, Adventure"
      },
      {
          "name": "MORDHAU",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/629760/header.jpg?t=1631033079",
          "description": "MORDHAU is a multiplayer medieval slasher. Create your mercenary and fight in brutal battles where you will experience fast paced combat, castle sieges, cavalry charges, and more.",
          "release_date": "Apr 29, 2019",
          "developer": "Triternion",
          "publisher": "Triternion",
          "genre": "Action, Indie"
      },
      {
          "name": "Spelunky",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/239350/header.jpg?t=1569449064",
          "description": "Spelunky is a unique platformer with randomized levels that offer a challenging new experience each time you play. Journey deep underground and explore fantastic places filled with all manner of monsters, traps, and treasure. You'll have complete freedom while you navigate the fully-destructible environments and master their many secrets.",
          "release_date": "Aug 8, 2013",
          "developer": "Mossmouth",
          "publisher": "Mossmouth",
          "genre": "Indie"
      },
      {
          "name": "Life is Strange: Before the Storm",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/554620/header.jpg?t=1592492510",
          "description": "Life is Strange: Before the Storm is a new three part standalone story adventure set three years before the events of the first game. This time play as Chloe Price, a rebel who forms an unlikely friendship with Rachel Amber in a dramatic new story in the BAFTA award winning franchise.",
          "release_date": "Aug 31, 2017",
          "developer": "Deck Nine, Feral Interactive (Mac), Feral Interactive (Linux)",
          "publisher": "Square Enix, Feral Interactive (Mac), Feral Interactive (Linux)",
          "genre": "Action, Adventure"
      },
      {
          "name": "Bastion",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/107100/header.jpg?t=1601950406",
          "description": "Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.",
          "release_date": "Aug 16, 2011",
          "developer": "Supergiant Games",
          "publisher": "Supergiant Games",
          "genre": "Action, Indie, RPG"
      },
      {
          "name": "Magicka 2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/238370/header.jpg?t=1615973723",
          "description": "The world's most irreverent co-op action adventure returns! In the next chapter of Magicka, players ascend from the ruins of Aldrheim to experience a Midgard almost wiped free of Wizards after the Wizard Wars, with the few that do remain having either gone mad or extremely hostile toward all others",
          "release_date": "May 26, 2015",
          "developer": "Pieces Interactive",
          "publisher": "Paradox Interactive",
          "genre": "Action, Adventure"
      },
      {
          "name": "We Were Here Together",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/865360/header.jpg?t=1626339549",
          "description": "As we explore these frozen wastes, misfortune strikes once again. Through the fierce blizzard, a flare lights the sky, followed by a cry for help over the radio - broken, dying... No one else can come to their rescue. Can we make it back - together?",
          "release_date": "Oct 10, 2019",
          "developer": "Total Mayhem Games",
          "publisher": "Total Mayhem Games",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "Autonauts",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/979120/header.jpg?t=1613412550",
          "description": "In Autonauts you must build, create, and automate. Start by establishing a colony, crafting bots and teaching them via Scratch-style programming to build an ever evolving autonomous paradise of agriculture, industry and enlightenment.",
          "release_date": "Oct 17, 2019",
          "developer": "Denki",
          "publisher": "Curve Digital",
          "genre": "Casual, Indie, Simulation"
      },
      {
          "name": "Monster Hunter: World",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1623978557",
          "description": "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
          "release_date": "9 AGO 2018",
          "developer": "CAPCOM Co., Ltd.",
          "publisher": "CAPCOM Co., Ltd.",
          "genre": "Action"
      },
      {
          "name": "Aragami",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/280160/header.jpg?t=1627661803",
          "description": "Aragami is a third person stealth game that casts you as an undead assassin with the power to control the shadows. Teleport to any shadow, become invisible, materialize weapons or even summon a shadow dragon to infiltrate the enemy ranks and dispose of your targets.",
          "release_date": "Oct 4, 2016",
          "developer": "Lince Works",
          "publisher": "Lince Works",
          "genre": "Action, Adventure, Indie"
      },
      {
          "name": "Spec Ops: The Line",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/50300/header.jpg?t=1569016017",
          "description": "A Third-Person modern military Shooter designed to challenge players' morality by putting them in the middle of unspeakable situations.",
          "release_date": "Jun 25, 2012",
          "developer": "YAGER",
          "publisher": "2K, Missing Link Games",
          "genre": "Action, Adventure"
      },
      {
          "name": "My Friend Pedro",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/557340/header.jpg?t=1628150118",
          "description": "My Friend Pedro is a violent ballet about friendship, imagination, and one man's struggle to obliterate anyone in his path at the behest of a sentient banana.",
          "release_date": "Jun 20, 2019",
          "developer": "DeadToast Entertainment",
          "publisher": "Devolver Digital",
          "genre": "Action, Indie"
      },
      {
          "name": "Ghostrunner",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/1139900/header.jpg?t=1630603502",
          "description": "Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.",
          "release_date": "Oct 27, 2020",
          "developer": "One More Level, 3D Realms, Slipgate Ironworks, All in! Games",
          "publisher": "505 Games",
          "genre": "Action"
      },
      {
          "name": "Grow Up",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/426790/header.jpg?t=1471334692",
          "description": "Leaping from mind-boggling heights, bouncing off Champolines, soaring inches from floating islands, BUD can do it all - that look of mild terror, that's his daredevil face. Help the adorable little robot collect MOM's scattered ship parts and return them to the moon.",
          "release_date": "Aug 16, 2016",
          "developer": "Reflections, a Ubisoft Studio",
          "publisher": "Ubisoft",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "Tacoma",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/343860/header.jpg?t=1596651493",
          "description": "Tacoma is a sci-fi narrative adventure from the creators of Gone Home. Set aboard a high-tech space station in the year 2088, explore every detail of how the station's crew lived and worked, finding the clues that add up to a gripping story of trust, fear, and resolve in the face of disaster.",
          "release_date": "Aug 1, 2017",
          "developer": "Fullbright",
          "publisher": "Fullbright",
          "genre": "Adventure, Indie"
      },
      {
          "name": "Tick Tock: A Tale for Two",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/790740/header.jpg?t=1624522059",
          "description": "You and your friend are trapped in a mystical world. As time ebbs away you must solve increasingly complex puzzles to escape. Cooperation is key as neither of you have the full picture! Play on two devices, local or remotely, all you need is a voice connection.",
          "release_date": "Mar 7, 2019",
          "developer": "Other Tales Interactive",
          "publisher": "Other Tales Interactive",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "A Story About My Uncle",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/278360/header.jpg?t=1589403981",
          "description": "A Story About My Uncle is a first person platforming adventure game about a boy who searches for his lost uncle, and ends up in a world he couldn't imagine existed. The movement is a crucial part of the games core gameplay  focusing on swinging through the world with a grappling hook that gives the player a wonderful sense of speed and...",
          "release_date": "May 28, 2014",
          "developer": "Gone North Games",
          "publisher": "Coffee Stain Publishing",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "Donut County",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/702670/header.jpg?t=1629751127",
          "description": "Donut County is a story-based physics puzzle game where you play as an ever-growing hole in the ground. Meet cute characters, steal their trash, and throw them in a hole.",
          "release_date": "Aug 28, 2018",
          "developer": "Ben Esposito",
          "publisher": "Annapurna Interactive",
          "genre": "Adventure, Casual, Indie"
      },
      {
          "name": "We Were Here",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/582500/header.jpg?t=1615367902",
          "description": "Lost in a frozen wasteland and split up from your partner inside an abandoned castle, the only possession you have left is a walkie-talkie with a familiar voice on the other end. Can the two of you find your way out in time?",
          "release_date": "Feb 3, 2017",
          "developer": "Total Mayhem Games",
          "publisher": "Total Mayhem Games",
          "genre": "Action, Adventure, Free to Play, Indie"
      },
      {
          "name": "Poly Bridge",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/367450/header.jpg?t=1567634023",
          "description": "Unleash your engineering creativity with an engaging and fresh bridge-building simulator with all the bells and whistles. Enjoy hours of physics-based puzzle solving in the Campaign and then jump in the Sandbox to create your own bridge designs and puzzles!",
          "release_date": "Jul 12, 2016",
          "developer": "Dry Cactus",
          "publisher": "Dry Cactus",
          "genre": "Indie, Simulation"
      },
      {
          "name": "Bomb Squad Academy",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/591380/header.jpg?t=1546009501",
          "description": "Save the world one wire at a time with Bomb Squad Academy, a puzzle game where you have to defuse bombs under a time constraint.",
          "release_date": "Mar 27, 2017",
          "developer": "Systemic Games",
          "publisher": "Systemic Games",
          "genre": "Casual, Indie, Simulation, Strategy"
      },
      {
          "name": "Sniper Elite V2",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/63380/header.jpg?t=1601483610",
          "description": "In the dark days of the end of World War Two amidst the ruins of Berlin, one bullet can change history.",
          "release_date": "",
          "developer": "Rebellion",
          "publisher": "Rebellion",
          "genre": "Action"
      },
      {
          "name": "Vampyr",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/427290/header.jpg?t=1604502986",
          "description": "London, 1918. You are newly-turned Vampyr Dr. Jonathan Reid. As a doctor, you must find a cure to save the city's flu-ravaged citizens. As a Vampyr, you are cursed to feed on those you vowed to heal.",
          "release_date": "Jun 4, 2018",
          "developer": "DONTNOD Entertainment",
          "publisher": "Focus Home Interactive",
          "genre": "Action, RPG"
      },
      {
          "name": "Fallout 4",
          "game_img": "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1588615523",
          "description": "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4, their most ambitious game ever, and the next generation of open-world gaming.",
          "release_date": "Nov 9, 2015",
          "developer": "Bethesda Game Studios",
          "publisher": "Bethesda Softworks",
          "genre": "RPG"
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
