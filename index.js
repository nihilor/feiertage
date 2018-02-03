var FeiertageJS = function() {};

FeiertageJS.prototype.year = new Date().getFullYear();
FeiertageJS.prototype.state = 'DE';

FeiertageJS.prototype.createDate = function(day, month, year) {
  year = typeof year !== 'undefined' ? year : this.year;
  return new Date(Date.UTC(year, month - 1, day));
};

FeiertageJS.prototype.gaussianEaster = function(year, modifier) {
  modifier = typeof modifier !== 'undefined' ? modifier : 0;
  var a = year % 19,
    b = year % 4,
    c = year % 7,
    k = Math.floor(year / 100),
    p = Math.floor((8 * k + 13) / 25),
    q = Math.floor(k / 4),
    M = (15 + k - p - q) % 30,
    d = (19 * a + M) % 30,
    N = (4 + k - q) % 7,
    e = (2 * b + 4 * c + 6 * d + N) % 7,
    Ostern = 22 + d + e;
  return [Ostern + modifier, 3];
};

FeiertageJS.prototype.States = [
  'DE', // Deutschland
  'BW', // Baden-Württemberg
  'BY', // Bayern
  'BE', // Berlin
  'BB', // Brandenburg
  'HB', // Bremen
  'HH', // Hamburg
  'HE', // Hessen
  'NI', // Niedersachsen
  'MV', // Mecklenburg-Vorpommern
  'NW', // Nordrhein-Westfalen
  'RP', // Rheinland-Pfalz
  'SL', // Saarland
  'SN', // Sachsen
  'ST', // Sachsen-Anhalt
  'SH', // Schleswig-Holstein
  'TH' // Thüringen
];

FeiertageJS.prototype.getDate = function(holidayId, year) {
  year = typeof year !== 'undefined' ? year : this.year;

  var theHoliday = {};

  FeiertageJS.prototype.Holidays.forEach(function(holiday) {
    if (holiday.id == holidayId) {
      theHoliday = holiday;
    }
  });

  return theHoliday.calc(year);
};

FeiertageJS.prototype.Holidays = [
  {
    id: 'neujahr',
    type: 'static',
    label: 'Neujahr',
    calc: function(year) {
      return FeiertageJS.prototype.createDate(1, 1, year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(6, 1, year);
    },
    valid: ['DE', 'BW', 'BY', 'ST']
  },
  {
    id: 'karfreitag',
    type: 'variable',
    label: 'Karfreitag',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, -2);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    type: 'variable',
    label: 'Ostersonntag',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    type: 'variable',
    label: 'Ostermontag',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, 1);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(1, 5, year);
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
    type: 'variable',
    label: 'Christi Himmelfahrt',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, 39);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    type: 'variable',
    label: 'Pfingstsonntag',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, 49);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    type: 'variable',
    label: 'Pfingstmontag',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, 50);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
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
    type: 'variable',
    label: 'Fronleichnam',
    calc: function(year) {
      var date = FeiertageJS.prototype.gaussianEaster(year, 60);
      return FeiertageJS.prototype.createDate(date[0], date[1], year);
    },
    valid: ['DE', 'BW', 'BY', 'HE', 'NW', 'RP', 'SL', 'TH']
  },
  {
    id: 'mariahimmelfahrt',
    type: 'static',
    label: 'Mariä Himmelfahrt',
    calc: function(year) {
      return FeiertageJS.prototype.createDate(15, 8, year);
    },
    valid: ['DE', 'BY', 'SL']
  },
  {
    id: 'tagderdeutscheneinheit',
    type: 'static',
    label: 'Tag der dt. Einheit',
    calc: function(year) {
      return FeiertageJS.prototype.createDate(3, 10, year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(31, 10, year);
    },
    valid: ['DE', 'BB', 'MV', 'SN', 'ST', 'TH']
  },
  {
    id: 'allerheiligen',
    type: 'static',
    label: 'Allerheiligen',
    calc: function(year) {
      return FeiertageJS.prototype.createDate(1, 11, year);
    },
    valid: ['DE', 'BW', 'BY', 'NW', 'RP', 'SL']
  },
  {
    id: 'bußundbettag',
    type: 'variable',
    label: 'Buß- und Bettag',
    calc: function(year) {
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(24, 12, year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(25, 12, year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(26, 12, year);
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
    calc: function(year) {
      return FeiertageJS.prototype.createDate(31, 12, year);
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

FeiertageJS.prototype.asList = function(year, state) {
  year = typeof year !== 'undefined' ? year : this.year;
  state =
    typeof state !== 'undefined' &&
    FeiertageJS.prototype.States.indexOf(state.toUpperCase()) > -1
      ? state.toUpperCase()
      : this.state;

  var dates = [];

  this.Holidays.forEach(function(holiday) {
    if (holiday.valid.indexOf(state) > -1) {
      dates.push({
        id: holiday.id,
        label: holiday.label,
        date: holiday.calc(year)
      });
    }
  });

  return dates;
};

FeiertageJS.prototype.Neujahr = function(year) {
  return FeiertageJS.prototype.getDate('neujahr', year);
};

FeiertageJS.prototype.HeiligeDreiKoenige = function(year) {
  return FeiertageJS.prototype.getDate('heiligedreikoenige', year);
};

FeiertageJS.prototype.Karfreitag = function(year) {
  return FeiertageJS.prototype.getDate('karfreitag', year);
};

FeiertageJS.prototype.Ostersonntag = function(year) {
  return FeiertageJS.prototype.getDate('ostersonntag', year);
};

FeiertageJS.prototype.Ostermontag = function(year) {
  return FeiertageJS.prototype.getDate('ostermontag', year);
};

FeiertageJS.prototype.TagDerArbeit = function(year) {
  return FeiertageJS.prototype.getDate('tagderarbeit', year);
};

FeiertageJS.prototype.ChristiHimmelfahrt = function(year) {
  return FeiertageJS.prototype.getDate('christihimmelfahrt', year);
};

FeiertageJS.prototype.Pfingstsonntag = function(year) {
  return FeiertageJS.prototype.getDate('pfingstsonntag', year);
};

FeiertageJS.prototype.Pfingstmontag = function(year) {
  return FeiertageJS.prototype.getDate('pfingstmontag', year);
};

FeiertageJS.prototype.Fronleichnam = function(year) {
  return FeiertageJS.prototype.getDate('fronleichnam', year);
};

FeiertageJS.prototype.MariaHimmelfahrt = function(year) {
  return FeiertageJS.prototype.getDate('mariahimmelfahrt', year);
};

FeiertageJS.prototype.TagDerDeutschenEinheit = function(year) {
  return FeiertageJS.prototype.getDate('tagderdeutscheneinheit', year);
};

FeiertageJS.prototype.Reformationstag = function(year) {
  return FeiertageJS.prototype.getDate('reformationstag', year);
};

FeiertageJS.prototype.Allerheiligen = function(year) {
  return FeiertageJS.prototype.getDate('allerheiligen', year);
};

FeiertageJS.prototype.BußUndBettag = function(year) {
  return FeiertageJS.prototype.getDate('bußundbettag', year);
};

FeiertageJS.prototype.Heiligabend = function(year) {
  return FeiertageJS.prototype.getDate('heiligabend', year);
};

FeiertageJS.prototype.ErsterWeihnachtsfeiertag = function(year) {
  return FeiertageJS.prototype.getDate('ersterweihnachtsfeiertag', year);
};

FeiertageJS.prototype.ZweiterWeihnachtsfeiertag = function(year) {
  return FeiertageJS.prototype.getDate('zweiterweihnachtsfeiertag', year);
};

FeiertageJS.prototype.Silvester = function(year) {
  return FeiertageJS.prototype.getDate('silvester', year);
};

module.exports = new FeiertageJS();
