'use strict';

var app = app || {};

app.requester = (function(){

	var Requester = function (){
		this.get = getRequest;
		this.post = postRequest;
		this.put = putRequest;
		this.delete = deleteRequest;
	};

	var header = {

	};

	var getRequest = function(url, header){
		return new request(url, 'GET', header, {});
	};
	var postRequest = function(url, header, data){
		return new request(url, 'POST', header, data);
	};
	var putRequest = function(url, header, data){
		return new request(url, 'PUT', header, data);
	};
	var deleteRequest = function(url, header){
		return new request(url, 'DELETE', header, {});
	};


	var request = (function(url, method, header, data){
		var defer = Q.defer();
		$.ajax({
			url : url,
			method : method,
			contentType : 'application/json',
			data : JSON.stringify(data),
			success: function (data) {
				defer.resolve(data);
			},
			error: function (error) {
				defer.reject(error);
			}
		});
		return defer.promised;
	});

	return {
		init: function (){
			return new Requester();
		},
		get: getRequest,
		post: postRequest,
		put: putRequest,
		delete: deleteRequest
	}
}());