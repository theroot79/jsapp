'use strict';

var app = app || {};

app.data = (function(){

	var Bookmarks = (function (baseUrl, requester){

		function Users () {
			this._serviceUrl = baseUrl + 'users/';
			this._requester = requester;
		}

		Bookmarks.prototype.getAll = function (){

		};

		Bookmarks.prototype.add = function (){

		};

		Bookmarks.prototype.delete = function (){

		};

		return Bookmarks;
	});

	var Users = (function (baseUrl, requester){

		function Users () {
			this._serviceUrl = baseUrl + 'users/';
			this._requester = requester;
		}

		Users.prototype.login = function (){

		};

		Users.prototype.register = function (){

		};

		Users.prototype.logout = function (){

		};

		Users.prototype.validateToken = function (){

		};

		return Users;
	});

	var Data = (function(baseUrl, requester){
		this.users = new Users(baseUrl, requester);
		this.bookmarks = new Bookmarks(baseUrl, requester);
	});

	return {
		init: function(baseUrl, requester){
			return new Data(baseUrl, requester);
		}
	}
})();