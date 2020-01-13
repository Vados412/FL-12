const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
const maxtostar = 30;
const date = new Date(2019, 0, 2);
const msperday = 86400000;
const convert = function() {
  let data = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      data.push(`${arguments[i]}`);
    } else if (typeof arguments[i] === 'string') {
      data.push(parseInt(arguments[i]));
    }
  }
  return data;
};
const executeforEach = function(data, func) {
  for (let i = 0; i < data.length; i++) {
    func(data[i]);
  }
};
const mapArray = function(data, func) {
  let datarezult = [];
  executeforEach(data, function(el) {
    datarezult.push(func(parseInt(el)));
  });
  return datarezult;
};
const filterArray = function(data, func) {
  let filterData = [];
  executeforEach(data, function(el) {
    if (func(el)) {
      filterData.push(el);
    }
  });
  return filterData;
};
const flipOver = function(data) {
  let flipData = '';
  for (let i = data.length - 1; i >= 0; i--) {
    flipData += data[i];
  }
  return flipData;
};
const makeListFromRange = function(data) {
  let range = [];
  for (let i = data[0]; i <= data[1]; i++) {
    range.push(i);
  }
  return range;
};
const getArrayOfKeys = function(data, key) {
  let datakeys = [];
  executeforEach(data, obj => datakeys.push(obj[key]));
  return datakeys;
};
const substitute = function(data) {
  return mapArray(data, function(el) {
    if (el < maxtostar) {
      return '*';
    } else {
      return el;
    }
  });
};
const getPastDay = function(date, dayspast) {
  return new Date(date.getTime() - dayspast * msperday).getDate();
};
function formatDate(date) {
  const a = 10;
  let data = new Date(date);
  let minutes = data.getMinutes();
  let hours = data.getHours();
  let month = '' + (data.getMonth() + 1);
  let day = '' + data.getDate();
  let year = data.getFullYear();
  if (hours < a) {
    hours = '0' + hours;
  }
  if (minutes < a) {
    minutes = '0' + minutes;
  }
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
