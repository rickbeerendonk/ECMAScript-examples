/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Immutable deep update.

function update(obj, keyArray, value) {
  if (keyArray.length === 0) {
    return value;
  }

  const first = keyArray.shift();
  return {
    ...obj,
    [first]: update(obj[first], keyArray, value)
  };
}

const obj1 = {
  data: 0,
  level1: {
    data: 1,
    level2: {
      data: 2,
      level3: {
        data: 3
      }
    }
  }
};

const obj2 = update(obj1, 'level1.level2.data'.split('.'), 99);

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
