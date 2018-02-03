module.exports = [
  {
    id: 'neujahr',
    type: 'static',
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
    type: 'static',
    label: 'Hl. Drei Könige',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 0, 6));
    },
    valid: ['DE', 'BW', 'BY', 'ST']
  },
  {
    id: 'karfreitag',
    type: 'easterbased',
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
    type: 'easterbased',
    label: 'Ostersonntag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, easter_date.month - 1, easter_date.day));
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
    id: 'ostermontag',
    type: 'easterbased',
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
    type: 'static',
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
    type: 'easterbased',
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
    type: 'easterbased',
    label: 'Pfingstsonntag',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 49)
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
    id: 'pfingstmontag',
    type: 'easterbased',
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
    type: 'easterbased',
    label: 'Fronleichnam',
    calc: function(year, easter_date) {
      return new Date(
        Date.UTC(year, easter_date.month - 1, easter_date.day + 60)
      );
    },
    valid: ['DE', 'BW', 'BY', 'HE', 'NW', 'RP', 'SL', 'TH']
  },
  {
    id: 'mariahimmelfahrt',
    type: 'static',
    label: 'Mariä Himmelfahrt',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 7, 15));
    },
    valid: ['DE', 'BY', 'SL']
  },
  {
    id: 'tagderdeutscheneinheit',
    type: 'static',
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
    type: 'static',
    label: 'Reformationstag',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 9, 31));
    },
    valid: ['DE', 'BB', 'MV', 'SN', 'ST', 'TH']
  },
  {
    id: 'allerheiligen',
    type: 'static',
    label: 'Allerheiligen',
    calc: function(year, easter_date) {
      return new Date(Date.UTC(year, 10, 1));
    },
    valid: ['DE', 'BW', 'BY', 'NW', 'RP', 'SL']
  },
  {
    id: 'bußundbettag',
    type: 'variable',
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
    type: 'static',
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
    type: 'static',
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
    type: 'static',
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
    type: 'static',
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
