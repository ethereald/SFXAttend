// Google Apps Script functions

function encodeString(sourceString) {  
    var base64Encoded = Utilities.base64Encode(sourceString);
    var prefix = getPrefix();
    return prefix + base64Encoded.split('').reverse().join('');
  }
  
  function getPrefix() {
    var prefix = Math.random().toString(36).substring(2, 11).toUpperCase();
    return prefix;
  }