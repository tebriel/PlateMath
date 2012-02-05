var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

function PlateObject(weight, isPounds) {
	if (weight) {
		this.weight = weight;
	} else {
		this.weight = 0;
	}
	
	if (isPounds) {
		this.isPounds = isPounds;
	} else {
		this.isPounds = true;
	}

	this.quantity = 0;
	
	this.setWeight = __bind(this.setWeight, this);
	this.getWeight = __bind(this.getWeight, this);
	
	this.setIsPounds = __bind(this.setIsPounds, this);
	this.getIsPounds = __bind(this.getIsPounds, this);
	
	this.setQuantity = __bind(this.setQuantity, this);
	this.getQuantity = __bind(this.getQuantity, this);
}

PlateObject.prototype.setWeight = function(weight) {
	if (!weight) {
		return;
	}
	this.weight = weight;
}

PlateObject.prototype.getWeight = function() {
	return this.weight;
}

PlateObject.prototype.setIsPounds = function(isPounds) {
	if (!isPounds) {
		return;
	}
	this.isPounds = isPounds;
}

PlateObject.prototype.getIsPounds = function() {
	return this.isPounds;
}

PlateObject.prototype.setQuantity = function(quantity) {
	if (!quantity) {
		return;
	}
	this.quantity = quantity;
}

PlateObject.prototype.getQuantity = function() {
	return this.quantity;
}
