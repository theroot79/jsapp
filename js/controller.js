'use strict';

var app = app || {};

app.controller = (function(){

	var Controller = function (data){
		this._data = data;
	};

	Controller.prototype.HomePage = (function (selector){
		$(selector).load('templates/homePage.html');
	});

	Controller.prototype.LoginPage = (function (selector){
		$(selector).load('templates/loginPage.html');
	});

	Controller.prototype.RegisterPage = (function (selector){
		$(selector).load('templates/registerPage.html');
	});

	Controller.prototype.BookmarksPage = (function (selector){
		return true;
	});


	return {
		init : function(data){
			return new Controller(data);
		}
	}
})();