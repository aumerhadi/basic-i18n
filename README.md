#Basic-i18n
Very simple and basic way to use i18n, this node module simplify the process of localization for web and node apps

##Install
`npm instal basic-i18n --save`


##Usage
In your code add the following


    var lang = "fr";
    var langFile= "./../../local.json";
    var basici18n = require('basic-i18n')(lang, langFile);
    console.log(basici18n.__('_welcome'));

Your language file should look like this

    {
    "en": {
    	"_welcome": "Welcome",
    	"_name": "What is your name?"
    },"fr": {
    	"_welcome": "Bienvenue",
    	"_name": "Comment vous appelez-vous?"
    	}
    }

##License
[MIT](https://opensource.org/licenses/MIT)