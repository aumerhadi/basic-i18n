var _lang = null;
var _filePath = null;
var _locale = null;
var _translation = null;


module.exports = function(lang, filePath) {
  _lang = lang;
  _filePath = filePath;
  _locale = require(_filePath);
  return {
    __ : function(key) {
  		_translation = _locale[lang][key];
  		if(_locale[lang][key]){
        _translation = _locale[lang][key];
      }else{
          _translation = key;
      };
  		return _translation;
  	}
  }
};
