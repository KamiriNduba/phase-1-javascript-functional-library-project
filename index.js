// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, function (element) {
    result.push(callback(element));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  myEach(collection, function (element) {
    if (acc === undefined) {
      acc = element;
    } else {
      acc = callback(acc, element, collection);
    }
  });
  return acc;
}

function myFind(collection, predicate) {
  for (let key in collection) {
    if (predicate(collection[key])) {
      return collection[key];
    }
  }
  return undefined; // Return undefined if no matching value is found
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, function (element) {
    if (predicate(element)) {
      result.push(element);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  }
  return undefined;
}

// Array Functions
function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return array.slice().sort(function (a, b) {
    const aValue = callback(a);
    const bValue = callback(b);
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow, newArr = []) {
  myEach(array, function (element) {
    if (Array.isArray(element) && !shallow) {
      myFlatten(element, shallow, newArr);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}

// Object Functions
function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  const values = [];
  myEach(object, function (value) {
    values.push(value);
  });
  return values;
}

// Exporting the functions for testing
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  mySortBy,
  myFlatten,
  myKeys,
  myValues,
};
