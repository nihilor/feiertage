module.exports = [
  {
    id: 'neujahr',
    type: 'full',
    label: 'Neujahr',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 0, 1));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'heiligedreikoenige',
    type: 'full',
    label: 'Heilige Drei Könige',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 0, 6));
    },
    valid: ['DE', 'BW', 'BY', 'ST']
  },
  {
    id: 'karfreitag',
    type: 'full',
    label: 'Karfreitag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day - 2)
      );
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'ostersonntag',
    type: 'full',
    label: 'Ostersonntag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, easter_date.month - 1, easter_date.day));
    },
    valid: ['DE', 'BB', 'HE']
  },
  {
    id: 'ostermontag',
    type: 'full',
    label: 'Ostermontag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 1)
      );
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'tagderarbeit',
    type: 'full',
    label: 'Tag der Arbeit',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 4, 1));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'christihimmelfahrt',
    type: 'full',
    label: 'Christi Himmelfahrt',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 39)
      );
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'pfingstsonntag',
    type: 'full',
    label: 'Pfingstsonntag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 49)
      );
    },
    valid: ['DE', 'BB', 'HE']
  },
  {
    id: 'pfingstmontag',
    type: 'full',
    label: 'Pfingstmontag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 50)
      );
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'fronleichnam',
    type: 'full',
    label: 'Fronleichnam',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 60)
      );
    },
    valid: ['DE', 'BW', 'BY', 'HE', 'NW', 'RP', 'SL'],
    comment:
      'Eingeschränkt gültig in SN und TH, siehe [](https://de.wikipedia.org/wiki/Gesetzliche_Feiertage_in_Deutschland).'
  },
  {
    id: 'augsburgerfriedensfest',
    type: 'full',
    label: 'Augsburger Hohes Friedensfest',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 7, 8));
    },
    valid: [],
    comment:
      'Nur im Augsburger Stadtgebiet gültig, nicht jedoch im angrenzenden Umland.'
  },
  {
    id: 'mariahimmelfahrt',
    type: 'full',
    label: 'Mariä Himmelfahrt',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 7, 15));
    },
    valid: ['DE', 'BY', 'SL']
  },
  {
    id: 'tagderdeutscheneinheit',
    type: 'full',
    label: 'Tag der dt. Einheit',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 9, 3));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'reformationstag',
    type: 'full',
    label: 'Reformationstag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 9, 31));
    },
    valid: ['DE', 'BB', 'MV', 'SN', 'ST', 'TH'],
    exceptions: {
      2017: [
        'DE',
        'BW',
        'BY',
        'BE',
        'BB',
        'HB',
        'HH',
        'HE',
        'MV',
        'NI',
        'NW',
        'RP',
        'SL',
        'SN',
        'ST',
        'SH',
        'TH'
      ]
    }
  },
  {
    id: 'allerheiligen',
    type: 'full',
    label: 'Allerheiligen',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 10, 1));
    },
    valid: ['DE', 'BW', 'BY', 'NW', 'RP', 'SL']
  },
  {
    id: 'bußundbettag',
    type: 'full',
    label: 'Buß- und Bettag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, 11, 25 - new Date(Date.UTC(year, 11, 25)).getDay() - 32)
      );
    },
    valid: ['DE', 'SN']
  },
  {
    id: 'heiligabend',
    type: 'half',
    label: 'Heiligabend',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 11, 24));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'ersterweihnachtsfeiertag',
    type: 'full',
    label: '1. Weihnachtsfeiertag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 11, 25));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'zweiterweihnachtsfeiertag',
    type: 'full',
    label: '2. Weihnachtsfeiertag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 11, 26));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  },
  {
    id: 'silvester',
    type: 'half',
    label: 'Silvester',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 11, 31));
    },
    valid: [
      'DE',
      'BW',
      'BY',
      'BE',
      'BB',
      'HB',
      'HH',
      'HE',
      'MV',
      'NI',
      'NW',
      'RP',
      'SL',
      'SN',
      'ST',
      'SH',
      'TH'
    ]
  }
];
