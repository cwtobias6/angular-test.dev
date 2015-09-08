"use strict";

(function() {
    var app = angular.module("controllerTest", []);

    app.controller("CartController", function() {
   
    	this.items = [];

    	this.newItem = {
    		qty: 1
    	};

    	this.addItem = function() {
	    	this.items.push(this.newItem);
	    	this.newItem = {qty: 1};

    	}

    	this.removeItem = function(index) {
	        this.items.splice(index, 1);
	    }

	    this.getSubtotal = function() {
	    	var subtotal = 0;

	    	for (var i = 0; i < this.items.length; i++) {

	    		subtotal+=this.items[i].price * this.items[i].qty;
	    	}

	    	return subtotal;
	    }

	    this.getShipping = function() {

	    	var shipping = this.items.length * 1.25;

	    	return shipping;

	    }




    });


})();