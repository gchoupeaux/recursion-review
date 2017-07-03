// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
  var result = '';
  if(typeof(obj)=== 'number' || typeof(obj) === 'boolean' || (typeof(obj)==='object' && obj === null)){
    result += ''+obj;
  } else if (typeof(obj)==='string'){
    result += '"'+obj+'"';
  } else if (Array.isArray(obj) && obj.length===0){
    result += "[]";
  } else if(Array.isArray(obj)){
    result += '[';
    for (var i=0; i<obj.length; i++){
      result += stringifyJSON(obj[i]);  
      if (i!== obj.length-1){
          result += ',';
        }
    }
    result += ']';
  } else if (typeof(obj) === 'object') {
    result += '{';
    var val = 0;
    for (var key in obj){
      val+=1;
      if(typeof(obj[key])!== 'function' && typeof(obj[key]) !== 'undefined') {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        if (val !== Object.keys(obj).length) {
          result += ',';
        }
      }
    }
    result += '}';
  }
  return result;
};
