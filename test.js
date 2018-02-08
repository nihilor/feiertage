var feiertage = require('./index');

var testdata = [];

function toDate(year, month, day) {
  return new Date(Date.UTC(year, month - 1, day));
}

for (var year = 2000; year <= 2040; year++) {
  console.log(feiertage.Ostersonntag(year).toDateString());
}

testdata.push({
  validation: {
    Ostersonntag: toDate(1981, 4, 19)
  },
  test: {
    Ostersonntag: feiertage.Ostersonntag(1981)
  }
});

testdata.push({
  validation: {
    Ostersonntag: toDate(1954, 4, 18)
  },
  test: {
    Ostersonntag: feiertage.Ostersonntag(1954)
  }
});

testdata.push({
  validation: {
    Neujahr: toDate(2018, 1, 1),
    Ostermontag: toDate(2018, 4, 2),
    Pfingstmontag: toDate(2018, 5, 21),
    BußUndBettag: toDate(2018, 11, 21)
  },
  test: {
    Neujahr: feiertage.Neujahr(),
    Ostermontag: feiertage.Ostermontag(),
    Pfingstmontag: feiertage.Pfingstmontag(),
    BußUndBettag: feiertage.BußUndBettag()
  }
});

testdata.push({
  validation: {
    Neujahr: toDate(2019, 1, 1),
    Ostermontag: toDate(2019, 4, 22),
    Pfingstmontag: toDate(2019, 6, 10),
    BußUndBettag: toDate(2019, 11, 20)
  },
  test: {
    Neujahr: feiertage.Neujahr(2019),
    Ostermontag: feiertage.Ostermontag(2019),
    Pfingstmontag: feiertage.Pfingstmontag(2019),
    BußUndBettag: feiertage.BußUndBettag(2019)
  }
});

testdata.push({
  validation: {
    Neujahr: toDate(2020, 1, 1),
    Ostermontag: toDate(2020, 4, 13),
    Pfingstmontag: toDate(2020, 6, 1),
    BußUndBettag: toDate(2020, 11, 18)
  },
  test: {
    Neujahr: feiertage.Neujahr(2020),
    Ostermontag: feiertage.Ostermontag(2020),
    Pfingstmontag: feiertage.Pfingstmontag(2020),
    BußUndBettag: feiertage.BußUndBettag(2020)
  }
});

testdata.forEach(function(dataset) {
  var keys = [
    'Neujahr',
    'HeiligeDreiKoenige',
    'Ostersonntag',
    'Ostermontag',
    'Pfingstmontag',
    'BußUndBettag'
  ];

  keys.forEach(function(key) {
    if (dataset.validation.hasOwnProperty(key)) {
      console.log(
        '--- ' + key + ': ' + JSON.stringify(dataset.validation[key])
      );
      var passed =
        Date.parse(dataset.validation[key]) == Date.parse(dataset.test[key]);
      if (passed) {
        console.log('    OK');
      } else {
        console.error('    ERROR: ' + JSON.stringify(dataset.test[key]));
      }
    }
  }, dataset);

  console.log('');
});

var feiertageDE2021 = feiertage.asList(2021);
console.log('Feiertage 2021 (deutschlandweit): ' + feiertageDE2021.length);

var feiertageBY2017 = feiertage.asList(2017, 'BY');
console.log('Feiertage 2017 (Bayern): ' + feiertageBY2017.length);

var feiertageBY2021 = feiertage.asList(2021, 'BY');
console.log('Feiertage 2021 (Bayern): ' + feiertageBY2021.length);

var feiertageBE2017 = feiertage.asList(2017, 'BE');
console.log('Feiertage 2017 (Berlin): ' + feiertageBE2017.length);

var feiertageBE2021 = feiertage.asList(2021, 'BE');
console.log('Feiertage 2021 (Berlin): ' + feiertageBE2021.length);

var feiertageBY2016 = feiertage.asList(2016, 'BY');
console.log('Feiertage 2016 (Bayern): ' + feiertageBY2016.length);

var werktageBY2016 = feiertage.asListOfWorkdays(2016, 'BY');
console.log('Feiertage an Werktagen 2016 (Bayern): ' + werktageBY2016.length);

console.log(JSON.stringify(werktageBY2016, null, 2));
