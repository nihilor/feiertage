var FeiertageJS = function() {};

FeiertageJS.prototype.year = new Date().getFullYear();

FeiertageJS.prototype.createDate = function(month, day) {
  return new Date(Date.UTC(this.year, month - 1, day));
};

FeiertageJS.prototype.GaussianEaster = function() {
  var a = this.year % 19,
    b = this.year % 4,
    c = this.year % 7,
    k = Math.floor(this.year / 100),
    p = Math.floor((8 * k + 13) / 25),
    q = Math.floor(k / 4),
    M = (15 + k - p - q) % 30,
    d = (19 * a + M) % 30,
    N = (4 + k - q) % 7,
    e = (2 * b + 4 * c + 6 * d + N) % 7,
    Ostern = 22 + d + e;
  return [3, Ostern];
};

FeiertageJS.prototype.setYear = function(newYear) {
  if (typeof newYear == 'number' && newYear > 1583 && newYear < 8202) {
    this.year = newYear;
  }
};

FeiertageJS.prototype.asList = function() {
  return {
    Neujahr: this.Neujahr(),
    HeiligeDreiKoenige: this.HeiligeDreiKoenige(),
    Karfreitag: this.Karfreitag(),
    Ostersonntag: this.Ostersonntag(),
    Ostermontag: this.Ostermontag(),
    TagDerArbeit: this.TagDerArbeit(),
    ChristiHimmelfahrt: this.ChristiHimmelfahrt(),
    Pfingstsonntag: this.Pfingstsonntag(),
    Pfingstmontag: this.Pfingstmontag(),
    Fronleichnam: this.Fronleichnam(),
    MariaHimmelfahrt: this.MariaHimmelfahrt(),
    TagDerDeutschenEinheit: this.TagDerDeutschenEinheit(),
    Reformationstag: this.Reformationstag(),
    Allerheiligen: this.Allerheiligen(),
    Heiligeabend: this.Heiligeabend(),
    ErsterWeihnachtsfeiertag: this.ErsterWeihnachtsfeiertag(),
    ZweiterWeihnachtsfeiertag: this.ZweiterWeihnachtsfeiertag(),
    Silvester: this.Silvester()
  };
};

FeiertageJS.prototype.Neujahr = function() {
  return this.createDate(1, 1);
};

FeiertageJS.prototype.HeiligeDreiKoenige = function() {
  return this.createDate(1, 6);
};

FeiertageJS.prototype.Karfreitag = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] - 2);
};

FeiertageJS.prototype.Ostersonntag = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1]);
};

FeiertageJS.prototype.Ostermontag = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] + 1);
};

FeiertageJS.prototype.TagDerArbeit = function() {
  return this.createDate(5, 1);
};

FeiertageJS.prototype.ChristiHimmelfahrt = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] + 39);
};

FeiertageJS.prototype.Pfingstsonntag = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] + 49);
};

FeiertageJS.prototype.Pfingstmontag = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] + 50);
};

FeiertageJS.prototype.Fronleichnam = function() {
  var easter = this.GaussianEaster();
  return this.createDate(easter[0], easter[1] + 60);
};

FeiertageJS.prototype.MariaHimmelfahrt = function() {
  return this.createDate(8, 15);
};

FeiertageJS.prototype.TagDerDeutschenEinheit = function() {
  return this.createDate(10, 3);
};

FeiertageJS.prototype.Reformationstag = function() {
  return this.createDate(10, 31);
};

FeiertageJS.prototype.Allerheiligen = function() {
  return this.createDate(11, 1);
};

FeiertageJS.prototype.BußUndBettag = function() {
  return new Date(
    Date.UTC(
      this.year,
      11,
      25 - new Date(Date.UTC(this.year, 11, 25)).getDay() - 32
    )
  );
};

FeiertageJS.prototype.Heiligeabend = function() {
  return this.createDate(12, 24);
};

FeiertageJS.prototype.ErsterWeihnachtsfeiertag = function() {
  return this.createDate(12, 25);
};

FeiertageJS.prototype.ZweiterWeihnachtsfeiertag = function() {
  return this.createDate(12, 26);
};

FeiertageJS.prototype.Silvester = function() {
  return this.createDate(12, 31);
};

module.exports = new FeiertageJS();
