// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node, array) {
  var node = node || document.body;
  var array = array || [];

  // check class Name
  if (node.classList/*nodeType === 1*/ && node.classList.contains(className)) {
    array.push(node);
  }
  // get node clildren

  var children = node.childNodes;

  // for loop on each node
  if (children) {
    for (let i=0; i<children.length; i++) {
      getElementsByClassName(className, children[i], array);
    }
  }
  return array;
}


/*
  var array = array || [];

  if (node.nodeType === 1 && node.className === className) {
    console.log(node);
    array.push(node);
  }
  if(node.firstChild){
    node = node.firstChild;
    getElementsByClassName(className, node, array);
  }
  else if (node.nextSibling){
    node = node.nextSibling;
    getElementsByClassName(className, node, array);
  }
  return array;
*/

// test commit with pomander
