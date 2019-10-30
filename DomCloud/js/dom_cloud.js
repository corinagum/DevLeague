window.onload = function () {
  var tagArray = [];
  var body = document.body;
  function recursive (node) {
    var child = node.children;
    for (var i = 0; i < child.length; i++) {
      if(child[i] === undefined) {
        continue;
      } else {
        tagArray.push(child[i].tagName);
        for(var j = 0; j < child[i].attributes.length; j++) {
          tagArray.push(child[i].attributes[j].name);
        }
        if(child[i].children) {
          recursive(child[i]);
        }
      }
    }

  }
  recursive(body);
  // console.log(tagArray);
  var countingObject = {};
  // console.log(countingObject);
  for(var k = 0; k < tagArray.length; k++ )  {
    var key = tagArray[k];
    if ( !(key in countingObject) ) {
      countingObject[key] = 1;
    } else {
      countingObject[key] ++;

    }
  }
    var sorting = [];
    for (var keys in countingObject) {
      sorting.push(keys, countingObject[keys]);
      // document.getElementById('dom_cloud_container').textContent += countingObject[keys];
    }
      console.log(sorting);
};


