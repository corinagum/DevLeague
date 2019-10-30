
(function() {
  var classSaver = {};
  var idSaver = {};

  function classFinder (className) {
    if (classSaver.hasOwnProperty(className)) {
      return classSaver(className);
    } else {
      var classPush = document.querySelector(className);
      classSaver.className = classPush;
    }
  }

  function idFinder (idName) {
    if (idSaver.hasOwnProperty(idName)) {
      return idSaver(idName);
    } else {
      var idPush = document.querySelector(idName);
      idSaver.idName = idPush;
    }
  }
})();

// extend Prototype
//