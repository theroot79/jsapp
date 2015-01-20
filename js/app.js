/**
 * Created by Vasil Tsintsev on 01/20/2015.
 */
'use strict';

var app = app || {};

var runJsApp = (function (){

	var baseUrl = 'https://api.parse.com/1/';
	var wrapper = '#wrapper';

	var requester = app.requester.init();
	var data = app.data.init(baseUrl, requester);
	var controller = app.controller.init(data);

	app.router = $.sammy(function(){

		this.get('#/', function () {
			controller.HomePage(wrapper);
		});

		this.get('#/login', function () {
			controller.LoginPage(wrapper);
		});

		this.get('#/register', function () {
			controller.RegisterPage(wrapper);
		});

		this.get('#/bookmarks', function () {
			controller.BookmarksPage(wrapper);
		});

	});



});

$(document).ready(function() {
	runJsApp();
	app.router.run('#/');
});