var feiertage = require('./index');

var testdata = [];

function toDate(year, month, day) {
  return new Date(Date.UTC(year, month - 1, day));
}

testdata.push({
  validation: {
    Neujahr: toDate(2018, 1, 1),
    HeiligeDreiKoenige: toDate(2018, 1, 6),
    Ostersonntag: toDate(2018, 4, 1),
    Pfingstsonntag: toDate(2018, 5, 20),
    BußUndBettag: toDate(2018, 11, 21)
  },
  test: {
    Neujahr: feiertage.Neujahr(),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(),
    Ostersonntag: feiertage.Ostersonntag(),
    Pfingstsonntag: feiertage.Pfingstsonntag(),
    BußUndBettag: feiertage.BußUndBettag()
  }
});

feiertage.setYear(2019);
testdata.push({
  validation: {
    Neujahr: toDate(2019, 1, 1),
    HeiligeDreiKoenige: toDate(2019, 1, 6),
    Ostersonntag: toDate(2019, 4, 21),
    Pfingstsonntag: toDate(2019, 6, 9),
    BußUndBettag: toDate(2019, 11, 20)
  },
  test: {
    Neujahr: feiertage.Neujahr(),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(),
    Ostersonntag: feiertage.Ostersonntag(),
    Pfingstsonntag: feiertage.Pfingstsonntag(),
    BußUndBettag: feiertage.BußUndBettag()
  }
});

feiertage.setYear(2020);
testdata.push({
  validation: {
    Neujahr: toDate(2020, 1, 1),
    HeiligeDreiKoenige: toDate(2020, 1, 6),
    Ostersonntag: toDate(2020, 4, 12),
    Pfingstsonntag: toDate(2020, 5, 31),
    BußUndBettag: toDate(2020, 11, 18)
  },
  test: {
    Neujahr: feiertage.Neujahr(),
    HeiligeDreiKoenige: feiertage.HeiligeDreiKoenige(),
    Ostersonntag: feiertage.Ostersonntag(),
    Pfingstsonntag: feiertage.Pfingstsonntag(),
    BußUndBettag: feiertage.BußUndBettag()
  }
});

testdata.forEach(function(dataset) {
  var keys = [
    'Neujahr',
    'HeiligeDreiKoenige',
    'Ostersonntag',
    'Pfingstsonntag',
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
