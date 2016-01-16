module.exports = (function(){
  var productList = [];

  function _add (req, callback) {

    var inventory = req.inventory;
    var name = req.name;
    var price = req.price;
    var id = productList.length + 1;

    for( var i = 0; i < productList.length; i++ ) {
      if( productList[i].name === name ) {
        var err = new Error("Could not create new product");
        return callback(err);
      }
    }

    var pObj = {
      'inventory' : inventory,
      'name' : name,
      'price' : price,
      'id' : id
    };

    productList.push(pObj);
    console.log( productList );
    return callback(null);
  }

  function _editById (id, productOptions, callback) {
    var updateP = null;
    console.log(productOptions);
    for ( var i = 0; i < productList.length; i++) {
      if( productList[i].id === parseInt(id) ) {
        updateP = productList[i];
        for(var key in productOptions) {
          updateP[key] = productOptions[key];
          console.log(productList[i]);
          return callback(null);
        }
      } else {
        callback(new Error("Can't find ID"));
      }
    }
  }

  return {
    // all: _all,
    add: _add,
    // getByName: _getByName,
    editById: _editById
  };
}());