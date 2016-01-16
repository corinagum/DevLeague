// module.exports = (function() {
//   // function here

//   return {
//     all: _all,
//     add: _add,
//     getByTitle: _getByTitle,
//     editByTitle: _editByTitle
//   };
// })();

module.exports = (function(){
  var articleList = [];

  function _add (req, callback) {

    var title = req.title;
    var author = req.author;
    var urlTitle = title.replace(/ /g, "%20");

    for( var i = 0; i < articleList.length; i++ ) {
      if( articleList[i].title === title ) {
        var err = new Error("Could not create new article");
        return callback(err);
      }
    }

    var aObj = {
      'title' : title,
      'author' : author,
      'urlTitle' : urlTitle
    };

    articleList.push(aObj);
    console.log( articleList );
    return callback(null);
  }

  function _editByTitle (title, articleOptions, callback) {
    var updateA = null;
    console.log(articleOptions);
    for ( var i = 0; i < articleList.length; i++) {
      if( articleList[i].title === title ) {
        updateA = articleList[i];
        for(var key in articleOptions) {
          updateA[key] = articleOptions[key];
        }
          console.log(articleList);
          return callback(null);
      } else {
        callback(new Error("Can't find title"));
      }
    }
  }


  function _deleteByTitle (title, callback) {
    for ( var i = 0; i < articleList.length; i++) {
      if( articleList[i].title === title ) {
        articleList.splice(i,1);
        console.log(articleList);
        return callback(null);
      } else {
        callback(new Error("Can't find title"));
      }
    }
  }

  return {
    // all: _all,
    add: _add,
    // getByName: _getByName,
    editByTitle: _editByTitle,
    deleteByTitle: _deleteByTitle
  };
}());