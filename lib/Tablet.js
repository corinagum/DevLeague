module.exports = Tablet;
function Tablet() {
  this.touch = function(x, y) {
    return {
      "x": x,
      "y": y
    };

  };
}