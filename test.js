var feiertage = require('./index');

var testdata = [];

function toDate(year, month, day) {
  return new Date(Date.UTC(year, month - 1, day));
}

testdata.push({
  validation: {
    Neujahr: toDate(2018, 1, 1),
    HeiligeDreiKoenige: toDate(2018, 1, 6),
    Ostermontag: toDate(2018, 4, 2),
    Pfingstmontag: toDate(2018, 5, 21),
    BußUndBettag: toDate(2018, 11, 21)
  },
  test: {
    Neujahr: feiertage.Neujahr(),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(),
    Ostermontag: feiertage.Ostermontag(),
    Pfingstmontag: feiertage.Pfingstmontag(),
    BußUndBettag: feiertage.BußUndBettag()
  }
});

testdata.push({
  validation: {
    Neujahr: toDate(2019, 1, 1),
    HeiligeDreiKoenige: toDate(2019, 1, 6),
    Ostermontag: toDate(2019, 4, 22),
    Pfingstmontag: toDate(2019, 6, 10),
    BußUndBettag: toDate(2019, 11, 20)
  },
  test: {
    Neujahr: feiertage.Neujahr(2019),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(2019),
    Ostermontag: feiertage.Ostermontag(2019),
    Pfingstmontag: feiertage.Pfingstmontag(2019),
    BußUndBettag: feiertage.BußUndBettag(2019)
  }
});

testdata.push({
  validation: {
    Neujahr: toDate(2020, 1, 1),
    HeiligeDreiKoenige: toDate(2020, 1, 6),
    Ostermontag: toDate(2020, 4, 13),
    Pfingstmontag: toDate(2020, 6, 1),
    BußUndBettag: toDate(2020, 11, 18)
  },
  test: {
    Neujahr: feiertage.Neujahr(2020),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(2020),
    Ostermontag: feiertage.Ostermontag(2020),
    Pfingstmontag: feiertage.Pfingstmontag(2020),
    BußUndBettag: feiertage.BußUndBettag(2020)
  }
});

testdata.forEach(function(dataset) {
  var keys = [
    'Neujahr',
    'HeiligeDreiKoenige',
    'Ostermontag',
    'Pfingstmontag',
    'BußUndBettag'
  ];

  keys.forEach(function(key) {
    console.log('--- ' + key);
    console.log('    Validation: ' + JSON.stringify(dataset.validation[key]));
    console.log('    Test: ' + JSON.stringify(dataset.test[key]));
    var passed =
      Date.parse(dataset.validation[key]) == Date.parse(dataset.test[key]);
    console.log('    Passed: ' + JSON.stringify(passed));
  }, dataset);

  console.log('');
});

var feiertageAll = feiertage.asList(2021);
console.log('Feiertage 2021 (deutschlandweit): ' + feiertageAll.length);
var feiertageBY = feiertage.asList(2021, 'BY');
console.log('Feiertage 2021 (Bayern): ' + feiertageBY.length);
var feiertageBE = feiertage.asList(2021, 'BE');
console.log('Feiertage 2021 (Berlin): ' + feiertageBE.length);
