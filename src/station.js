var Station = function(name, location, bikes = []) {
	this.name = name;
	this.location = location;
	this.bikes = bikes
}

Station.prototype.newestBike = function() {
	var newestBike
	for(var i = 0; i < this.bikes.length; i++) {
		if (this.bikes[i].modelYear > this.bikes[i + 1].modelYear) {
			return this.bikes[i];
		} else if (this.bikes[i + 1] > this.bikes[i]) {
			return this.bikes[i + 1]
		};
	};
};

Station.prototype.take = function(bike) {
	this.bikes.push(bike);
};

Station.prototype.takeMultiple = function(bicycles) {
	return this.bikes = this.bikes.concat(bicycles)
}