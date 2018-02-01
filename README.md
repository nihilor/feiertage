# feiertage

Tiny, simple and pure module to calculate the german non-business days.

## How To Use

Simply download the package or install it from npm with `npm install feiertage`.

```js
var feiertage = require('feiertage');

// non-business days for the current year
// returns a Date object
// full list of all non-business days
feiertage.Neujahr();
feiertage.HeiligeDreiKoenige();
feiertage.Karfreitag();
feiertage.Ostersonntag();
feiertage.Ostermontag();
feiertage.TagDerArbeit();
feiertage.ChristiHimmelfahrt();
feiertage.Pfingstsonntag();
feiertage.Pfingstmontag();
feiertage.Fronleichnam();
feiertage.MariaHimmelfahrt();
feiertage.TagDerDeutschenEinheit();
feiertage.Reformationstag();
feiertage.Allerheiligen();
feiertage.BußUndBettag();
feiertage.Heiligabend();
feiertage.ErsterWeihnachtsfeiertag();
feiertage.ZweiterWeihnachtsfeiertag();
feiertage.Silvester();

// non-business days for the current year as an object
// e.g. list.Neujahr.label
//      list.Neujahr.date
feiertage.asList();

// non-business days for a specific year as an object
feiertage.asList(2021);

// sets the year once for every subsequent calculation
feiertage.setYear(2019);
feiertage.Neujahr();
feiertage.HeiligeDreiKoenige();

// explicitly set the year for every calculation
feiertage.Neujahr(2020);
feiertage.HeiligeDreiKoenige(2020);
```
