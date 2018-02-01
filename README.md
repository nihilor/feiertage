# feiertagejs

Tiny, simple and pure module to calculate the german non-business days.

## How To Use

Simply download or install the package and import the module.

```js
var feiertage = require('feiertage');
feiertage.asList();

// non-business days for current year
feiertage.Neujahr();
feiertage.HeiligeDreiKoenige();

// all non-business days for 2019
feiertage.setYear(2019);
feiertage.Neujahr();
feiertage.HeiligeDreiKoenige();

// all non-business days for 2019
feiertage.Neujahr(2020);
feiertage.HeiligeDreiKoenige(2020);
```
