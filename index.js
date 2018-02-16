var FeiertageJS = function() {};
FeiertageJS.prototype.Holidays = require('./model');

FeiertageJS.prototype.year = new Date().getFullYear();
FeiertageJS.prototype.state = 'DE';

/**
 * Creates a Date object.
 * @param {number} day - Day as a number.
 * @param {number} month - Month as a number (don't substract 1).
 * @param {number} year - Year as a number.
 * @returns {object} Date - Returns a Javascript Date object.
 * */
FeiertageJS.prototype.createDate = function(day, month, year) {
  year = typeof year !== 'undefined' ? year : this.year;
  return new Date(Date.UTC(year, month - 1, day));
};

/**
 * Calculate the easter date with Gaussian's formula.
 * @param {number} year - Overwrites the current year.
 * @returns {object} easter_date - Returns an object with month = 3 and the days as integer possibly bigger than 31.
 * */
FeiertageJS.prototype.gaussianEaster = function(year) {
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
    easter_date = 22 + d + e;
  return {
    day: easter_date,
    month: 3
  };
};

/**
 * Calculate the easter date with Gaussian's formula corrected by Lichtenberg.
 * @param {number} year - Overwrites the current year.
 * @returns {object} easter_date - Returns an object with month = 3 and the days as integer, possibly bigger than 31.
 * */
FeiertageJS.prototype.gaussianEasterByLichterberg = function(year) {
  var K = Math.floor(year / 100),
    M = 15 + Math.floor((3 * K + 3) / 4) - Math.floor((8 * K + 13) / 25),
    S = 2 - Math.floor((3 * K + 3) / 4),
    A = year % 19,
    D = (19 * A + M) % 30,
    R = Math.floor((D + Math.floor(A / 11)) / 29),
    OG = 21 + D - R,
    SZ = 7 - (year + Math.floor(year / 4) + S) % 7,
    OE = 7 - (OG - SZ) % 7,
    OS = OG + OE;
  return {
    day: OS,
    month: 3
  };
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
  'TH', // Thüringen
  'BY-FF', // Bayern, Friedensfest, Stadt Augsburg
  'BY-MH', // Bayern, überwiegend katholische Bevölkerung
  'SN-FL', // Sachsen, Bautzen
  'TH-FL' // Thüringen, Eichsfeld, Unstrut-Hainich, Wartburgkreis
];

/**
 * Returns the calculated non-business day identified by holidayId.
 * @param {string} holidayId - The identifier for the holiday.
 * @param {number} year - Overwrites the current year.
 * @returns {object} Date - The calculated date as a Date object.
 * */
FeiertageJS.prototype.getDate = function(holidayId, year) {
  year = typeof year !== 'undefined' ? year : this.year;

  var theHoliday = {};

  FeiertageJS.prototype.Holidays.forEach(function(holiday) {
    if (holiday.id == holidayId) {
      theHoliday = holiday;
    }
  });

  return theHoliday.calc(year, this.gaussianEasterByLichterberg(year));
};

/**
 * Creates a list the non-business days for all or a specific state.
 * @param {number} year - Overwrites the current year.
 * @param {string} state - An identifier for the state.
 * @return {array} dates - The list of the calculated non-business days.
 * */
FeiertageJS.prototype.asList = function(year, state) {
  year = typeof year !== 'undefined' ? year : this.year;
  state =
    typeof state !== 'undefined' &&
    FeiertageJS.prototype.States.indexOf(state.toUpperCase()) > -1
      ? state.toUpperCase()
      : this.state;

  var easter_date = this.gaussianEasterByLichterberg(year);
  var days = [];

  this.Holidays.forEach(function(holiday) {
    if (holiday.type != 'full') return;

    var generallyValid = false;
    var exceptionallyValid = false;

    generallyValid = holiday.valid.indexOf(state) > -1 ? true : generallyValid;
    if (
      holiday.hasOwnProperty('exceptions') &&
      holiday.exceptions.hasOwnProperty(year) &&
      holiday.exceptions[year].indexOf(state.toUpperCase()) > -1
    ) {
      exceptionallyValid = true;
    }

    if (generallyValid || exceptionallyValid) {
      days.push({
        id: holiday.id,
        label: holiday.label,
        date: holiday.calc(year, easter_date)
      });
    }
  });

  return days;
};

/**
 * Creates a list of the non-business days falling on monday to friday.
 * @param {number} year - Overwrites the current year.
 * @param {string} state - An identifier for the state.
 * @return {array} dates - The list of the non-business days on workdays.
 * */
FeiertageJS.prototype.asListOfWorkdays = function(year, state) {
  year = typeof year !== 'undefined' ? year : this.year;
  state =
    typeof state !== 'undefined' &&
    FeiertageJS.prototype.States.indexOf(state.toUpperCase()) > -1
      ? state.toUpperCase()
      : this.state;

  var holidays = this.asList(year, state);
  var workdays = [];

  holidays.forEach(function(holiday) {
    var weekday = holiday.date.getDay();
    if (weekday > 0 && weekday < 6) {
      workdays.push(holiday);
    }
  });

  return workdays;
};

/* Sugar for the user. */

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
