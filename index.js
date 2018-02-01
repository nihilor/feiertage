var FeiertageJS = function() {};

FeiertageJS.prototype.year = new Date().getFullYear();

FeiertageJS.prototype.createDate = function(day, month, year) {
  year = typeof year !== 'undefined' ? year : this.year;
  return new Date(Date.UTC(year, month - 1, day));
};

FeiertageJS.prototype.GaussianEaster = function(year) {
  year = typeof year !== 'undefined' ? year : this.year;
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
  return [Ostern, 3];
};

FeiertageJS.prototype.setYear = function(year) {
  if (typeof year == 'number' && year > 1583 && year < 8202) {
    this.year = year;
  }
};

FeiertageJS.prototype.asList = function(year) {
  year = typeof year !== 'undefined' ? year : this.year;
  return {
    Neujahr: {
      label: 'Neujahr',
      date: this.Neujahr(year)
    },
    HeiligeDreiKoenige: {
      label: 'Hl. Drei Könige',
      date: this.HeiligeDreiKoenige(year)
    },
    Karfreitag: { label: 'Karfreitag', date: this.Karfreitag(year) },
    Ostersonntag: { label: 'Ostersonntag', date: this.Ostersonntag(year) },
    Ostermontag: { label: 'Ostermontag', date: this.Ostermontag(year) },
    TagDerArbeit: { label: 'Tag der Arbeit', date: this.TagDerArbeit(year) },
    ChristiHimmelfahrt: {
      label: 'Christi Himmelfahrt',
      date: this.ChristiHimmelfahrt(year)
    },
    Pfingstsonntag: {
      label: 'Pfingstsonntag',
      date: this.Pfingstsonntag(year)
    },
    Pfingstmontag: { label: 'Pfingstmontag', date: this.Pfingstmontag(year) },
    Fronleichnam: { label: 'Fronleichnam', date: this.Fronleichnam(year) },
    MariaHimmelfahrt: {
      label: 'Mariä Himmelfahrt',
      date: this.MariaHimmelfahrt(year)
    },
    TagDerDeutschenEinheit: {
      label: 'Tag der dt. Einheit',
      date: this.TagDerDeutschenEinheit(year)
    },
    Reformationstag: {
      label: 'Reformationstag',
      date: this.Reformationstag(year)
    },
    Allerheiligen: { label: 'Allerheiligen', date: this.Allerheiligen(year) },
    Heiligabend: { label: 'Heiligabend', date: this.Heiligabend(year) },
    ErsterWeihnachtsfeiertag: {
      label: '1. Weihnachtsfeiertag',
      date: this.ErsterWeihnachtsfeiertag(year)
    },
    ZweiterWeihnachtsfeiertag: {
      label: '2. Weihnachtsfeiertag',
      date: this.ZweiterWeihnachtsfeiertag(year)
    },
    Silvester: { label: 'Silvester', date: this.Silvester(year) }
  };
};

FeiertageJS.prototype.Neujahr = function(year) {
  return this.createDate(1, 1, year);
};

FeiertageJS.prototype.HeiligeDreiKoenige = function(year) {
  return this.createDate(6, 1, year);
};

FeiertageJS.prototype.Karfreitag = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] - 2, easter[1], year);
};

FeiertageJS.prototype.Ostersonntag = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0], easter[1], year);
};

FeiertageJS.prototype.Ostermontag = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] + 1, easter[1], year);
};

FeiertageJS.prototype.TagDerArbeit = function(year) {
  return this.createDate(1, 5, year);
};

FeiertageJS.prototype.ChristiHimmelfahrt = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] + 39, easter[1], year);
};

FeiertageJS.prototype.Pfingstsonntag = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] + 49, easter[1], year);
};

FeiertageJS.prototype.Pfingstmontag = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] + 50, easter[1], year);
};

FeiertageJS.prototype.Fronleichnam = function(year) {
  var easter = this.GaussianEaster(year);
  return this.createDate(easter[0] + 60, easter[1], year);
};

FeiertageJS.prototype.MariaHimmelfahrt = function(year) {
  return this.createDate(15, 8, year);
};

FeiertageJS.prototype.TagDerDeutschenEinheit = function(year) {
  return this.createDate(3, 10, year);
};

FeiertageJS.prototype.Reformationstag = function(year) {
  return this.createDate(31, 10, year);
};

FeiertageJS.prototype.Allerheiligen = function(year) {
  return this.createDate(1, 11, year);
};

FeiertageJS.prototype.BußUndBettag = function(year) {
  year = typeof year !== 'undefined' ? year : this.year;
  return new Date(
    Date.UTC(year, 11, 25 - new Date(Date.UTC(year, 11, 25)).getDay() - 32)
  );
};

FeiertageJS.prototype.Heiligabend = function(year) {
  return this.createDate(24, 12, year);
};

FeiertageJS.prototype.ErsterWeihnachtsfeiertag = function(year) {
  return this.createDate(25, 12, year);
};

FeiertageJS.prototype.ZweiterWeihnachtsfeiertag = function(year) {
  return this.createDate(26, 12, year);
};

FeiertageJS.prototype.Silvester = function(year) {
  return this.createDate(31, 12, year);
};

module.exports = new FeiertageJS();
