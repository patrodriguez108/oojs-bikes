var Station = function(name, location, bikes = []) {
	this.name = name;
	this.location = location;
	this.bikes = bikes
}

Station.prototype.newestBike = function() {
	var newestBike
	for(var i = 0; i < this.bikes.length; i++) {
		if (this.bikes[i].modelYear > this.bikes[i + 1].modelYear) {
			return this.bikes[i]
		};
	};
};