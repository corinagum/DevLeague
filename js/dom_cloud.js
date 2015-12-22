window.onload = function () {

  var node = document.body.childNodes;
console.log(node, 'hi');
  function recurs (node) {
    if ( node.hasChildNodes === true ) {
      console.log(node, 'woo');
      recurs( this );
    } else {
      var str = this.node.innerHTML;
      var wordArray = [];
      wordArray = str.split();
      var wordCount = {};
      // for ( var i = 0; i <= wordArray.length; i++ ) {
      //   if
      // }
      console.log(wordArray);
    }
}
// iterate thru DOM
// ... getElementByTagName... body

// function recursion (on body)
// if (this.childNodes) {
  //recursion(this)
//}
// else {
  //this.innerHTML
  // var str = '';
  // str = this.innerHTML;z
  //set to variable and iterate through that variable as a string... use string.length
  //
// for in loop...
// object wordCount {word: 1}
//word ++

// else create key, set val 1




// list words by count...


recurs(node);

};


