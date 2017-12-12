let mySingleton = (function () {
  let instance;
  function init () {
    let instId;
    function privateIdChecker (id) {
      return (typeof id === 'string')
    }
    return {
      getId: function () {
        return instId
      },
      setId: function (id) {
        if (!privateIdChecker(id)) {
          console.error('Invalid id');
          return;
        }
        instId = id;
      }
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})()

// Usage:
let myInstance = mySingleton.getInstance()
console.log(myInstance.getId()) // -- undefined
console.log(myInstance.setId()) // -- Invalid id
console.log(myInstance.setId('xxx123')) // -- undefined
console.log(myInstance.getId()) // -- xx123
