function loadBoard (data) {
    var dataChild = data.data.children;
    $(".block").html("");
  for ( var i = 0; i < dataChild.length; i ++ ) {
     var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
       var thumbnail = dataChild[i].data.url;
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


      var imageHolder = document.createElement("div");
        imageHolder.className = "post-image";

      var image = document.createElement("img");
        $(image).attr('src', thumbnail);


      var postTitle = document.createElement("h1");
        postTitle.className = "post-title";
        postTitle.innerHTML = title;

      var postSub = document.createElement("h2");
        postSub.className = "post-sub";
        postSub.innerHTML = author + " &#8226 " + age + " &#8226 " + views.toLocaleString() + " views";

      var postSnippet = document.createElement("p");
        postSnippet.className = "post-snippet";
        postSnippet.innerHTML = lorem;

    $(newDiv).append(imageHolder);
    $(newDiv).append(postTitle);
    $(newDiv).append(postSub);
    $(newDiv).append(postSnippet);
    $(imageHolder).append(image);
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
      $.getJSON("https://www.reddit.com/r/dogpictures.json", function(data) { //JSON equivalent of linking
        loadBoard(data);
      });
    }
     else if(link === "getapp") {
      $.getJSON("https://www.reddit.com/r/AnimalsBeingDerps.json", function(data) { //JSON equivalent of linking
        loadBoard(data);
      });
    }
  });
};

