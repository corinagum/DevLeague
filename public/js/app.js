function loadBoard (data) {
    var dataChild = data.data.children;
    $(".block").html("");
  for ( var i = 0; i < dataChild.length; i ++ ) {
     var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
     var thumbnail = dataChild[i].data.thumbnail;
     var title = dataChild[i].data.title;
     var author = dataChild[i].data.author;
     var age = moment(dataChild[i].data.created, "X").fromNow();
     var views = dataChild[i].data.score;

     var reddit = "http://reddit.com";
     var link = document.createElement("a");
        $(link).addClass("permalink");
        link.setAttribute('href', reddit + dataChild[i].data.permalink);
        $(".block").append(link);

     var newDiv = document.createElement('div');
        $(newDiv).addClass('post');
        $(".permalink:last").append(newDiv);


     var image = document.createElement("div");
        $(image).css('background-image', 'url(' + thumbnail + ')');
        image.className = "post-image";

     var postTitle = document.createElement("h1");
        postTitle.className = "post-title";
        postTitle.innerHTML = title;

     var postSub = document.createElement("h2");
        postSub.className = "post-sub";
        postSub.innerHTML = author + " &#8226 " + age + " &#8226 " + views.toLocaleString() + " views";

     var postSnippet = document.createElement("p");
        postSnippet.className = "post-snippet";
        postSnippet.innerHTML = lorem;

    $(newDiv).append(image);
    $(newDiv).append(postTitle);
    $(newDiv).append(postSub);
    $(newDiv).append(postSnippet);
  }
  // console.log(dataChild);
}

window.onload = function() {
  $.getJSON("./api/get_the_app.json", function(data) { //JSON equivalent of linking
 //  the code - works just the same as adding src code for javascript
 //  or css
 // two parameters: 1) load the code, 2) then do something with it
  // console.log(data);
  loadBoard(data);
  });

  $('.buttons').click(function() {
    var link = $(this).data("link");
    if(link === "random") {
      $.getJSON("https://www.reddit.com/r/aww.json", function(data) { //JSON equivalent of linking
        loadBoard(data);
      });
    }
     else if(link === "myboards") {
      $.getJSON("./api/my_boards.json", function(data) { //JSON equivalent of linking
        loadBoard(data);
      });
    }
     else if(link === "getapp") {
      $.getJSON("./api/get_the_app.json", function(data) { //JSON equivalent of linking
        loadBoard(data);
      });
    }
  });
};

