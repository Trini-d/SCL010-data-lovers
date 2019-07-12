global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataExampleFilter =  [ 
{"id": 1,
"num": "001",
"name": "Bulbasaur",
"egg": "2 km",
"next_evolution": [{
  "num": "002",
  "name": "Ivysaur"
}, {
  "num": "003",
  "name": "Venusaur"
}]
}, {
"id": 2,
"num": "002",
"name": "Ivysaur",
"egg": "Not in Eggs",
"prev_evolution": [{
  "num": "001",
  "name": "Bulbasaur"
}],
"next_evolution": [{
  "num": "003",
  "name": "Venusaur"
}]
}, {
"id": 3,
"num": "003",
"name": "Venusaur",
"egg": "Not in Eggs",
"prev_evolution": [{
  "num": "001",
  "name": "Bulbasaur"
}, {
  "num": "002",
  "name": "Ivysaur"
}]
}];

describe('filterData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('debería retornar el objeto Bulbasaur al filtrar por huevo 2 km', () => {
    assert.equal(window.filterData(dataExampleFilter, "2 km"), [ 
      {"id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "egg": "2 km",
      "next_evolution": [{
        "num": "002",
        "name": "Ivysaur"
      }, {
        "num": "003",
        "name": "Venusaur"
      }]
      }]);
  });
})