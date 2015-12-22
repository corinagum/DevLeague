window.onload = function() {
  $.getJSON("./api/get_the_app.json", function(data) { //JSON equivalent of linking
  //the code - works just the same as adding src code for javascript
  //or css
 // two parameters: 1) load the code, 2) then do something with it
   var thumbnail = data.data.children[0].data.thumbnail;
   var title = data.data.children[0].data.title;
  // $('.post').append('<img src="' + thumbnail + '" />');
  // $('.post').append('<h1>' + title + '</h1>');
  });

};

// '/api' + boardName + '.json',