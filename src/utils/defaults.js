const default_commands = [
  '!229',
  '!command',
  '!alias',
  '!permission',
  '!cooldown',
  '!counter',
  '!choose',
  // '!data', (prob not fixing)
  '!docs',
  '!expr',
  '!isredbar',
  '!metronome',
  '!pb',
  '!pinballslots',
  // '!quote', (needs evaluation of db)
  '!randmon',
  '!randrunner',
  '!randstats',
  '!roll',
  '!setgame',
  '!setrunner',
  '!slots',
  // '!src', -> TODO
  '!torrent',
  '!weather',
  '!wr'
];

const default_permission_of_commands = {
  '!229': 3,
  '!command': 2,
  '!alias': 2,
  '!permission': 2,
  '!cooldown': 2,
  '!counter': 2,
  '!choose': 0,
  // '!data': 0,
  '!docs': 0,
  '!expr': 1, // avoid misusage, can be dowgraded
  '!isredbar': 0,
  '!metronome': 0,
  '!pinballslots': 3,
  '!pb': 0,
  // '!quote': 0,
  '!randmon': 0,
  '!randrunner': 0,
  '!randstats': 0,
  '!roll': 0,
  '!setgame': 2,
  '!setrunner': 2,
  '!slots': 0,
  // '!src': 0,
  '!torrent': 0,
  '!weather': 2,
  '!wr': 0,
}

const default_cooldown_of_commands = {
  '!229': 10,
  '!command': 0,
  '!alias': 0,
  '!permission': 0,
  '!cooldown': 0,
  '!counter': 0,
  '!choose': 10,
  // '!data': 0,
  '!docs': 0,
  '!expr': 15, // avoid misusage, can be lowered
  '!isredbar': 0,
  '!metronome': 10,
  '!pinballslots': 600,
  '!pb': 0,
  // '!quote': 0,
  '!randmon': 10,
  '!randrunner': 10,
  '!randstats': 10,
  '!roll': 10,
  '!setgame': 0,
  '!setrunner': 0,
  '!slots': 600,
  // '!src': 10,
  '!torrent': 10,
  '!weather': 15,
  '!wr': 30,
}

const non_permission_downgrade = [
  '!command',
  '!alias',
  '!permission',
  '!cooldown',
  '!counter',
  '!weather',
  '!setgame',
  '!setrunner'
];

const non_aliasable = [
  '!command',
  '!alias',
  '!permission',
  '!cooldown',
  '!counter',
  '!slots',
  '!expr',
  '!quote',
];

module.exports = {
  default_commands,
  non_permission_downgrade,
  non_aliasable,
  default_permission_of_commands,
  default_cooldown_of_commands
};
