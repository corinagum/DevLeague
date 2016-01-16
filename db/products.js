module.exports = (function(){
  var productList = [];

  function _add (req, res) {

    var inventory = req.inventory;
    var name = req.name;
    var price = req.price;
    var id = productList.length + 1;

    var pObj = {
      'inventory' : inventory,
      'name' : name,
      'price' : price,
      'id' : id
    };

    productList.push(pObj);
    console.log( productList );
  }

  function _editByName (req, res) {
    console.log("hello");
  }

  return {
    // all: _all,
    add: _add,
    // getByName: _getByName,
    editByName: _editByName
  };
}());