const myConfig = {
  counter: 11,
  useCache: false
}
let myModule = (function (config) {
  let counter = config.counter || 0;
  let _increate = function () {
    return ++counter;
  }
  let _decrease = function () {
    return --counter;
  }
  return {
    increate: _increate,
    decrease: _decrease
  }
})(myConfig || {})

// Usage:
console.log(myModule.decrease())
