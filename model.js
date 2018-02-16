module.exports = [
  {
    id: 'neujahr',
    type: 'full',
    label: 'Neujahr',
    short: 'NJ',
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
    short: 'DK',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 0, 6));
    },
    valid: ['DE', 'BW', 'BY', 'ST']
  },
  {
    id: 'karfreitag',
    type: 'full',
    label: 'Karfreitag',
    short: 'KF',
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
    short: 'OS',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, easter_date.month - 1, easter_date.day));
    },
    valid: ['DE', 'BB', 'HE']
  },
  {
    id: 'ostermontag',
    type: 'full',
    label: 'Ostermontag',
    short: 'OM',
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
    short: 'TA',
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
    short: 'CH',
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
    short: 'PS',
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
    short: 'PM',
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
    short: 'FL',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 60)
      );
    },
    valid: ['DE', 'BW', 'BY', 'HE', 'NW', 'RP', 'SL', 'SN-FL', 'TH-FL'],
    comment:
      'Eingeschränkt gültig in SN und TH, siehe [](https://de.wikipedia.org/wiki/Gesetzliche_Feiertage_in_Deutschland).'
  },
  {
    id: 'augsburgerfriedensfest',
    type: 'full',
    label: 'Augsburger Hohes Friedensfest',
    short: 'FF',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 7, 8));
    },
    valid: ['BY-FF'],
    comment:
      'Nur im Augsburger Stadtgebiet gültig, nicht jedoch im angrenzenden Umland.'
  },
  {
    id: 'mariahimmelfahrt',
    type: 'full',
    label: 'Mariä Himmelfahrt',
    short: 'MH',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 7, 15));
    },
    valid: ['DE', 'BY-MH', 'BY-FF', 'SL']
  },
  {
    id: 'tagderdeutscheneinheit',
    type: 'full',
    label: 'Tag der dt. Einheit',
    short: 'EH',
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
    short: 'RF',
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
    short: 'AH',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 10, 1));
    },
    valid: ['DE', 'BW', 'BY', 'NW', 'RP', 'SL']
  },
  {
    id: 'bußundbettag',
    type: 'full',
    label: 'Buß- und Bettag',
    short: 'BB',
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
    short: 'HA',
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
    short: 'EW',
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
    short: 'ZW',
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
    short: 'SI',
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
