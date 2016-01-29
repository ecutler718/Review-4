function Pizza(size, cheese, topping) {
	this.size = size;
	this.cheese = cheese;
	this.topping = topping;
}

Ticket.prototype.price = function() {


	var pizzaPrice = 8;


	if (
		this.size === "small" ||
		this.size === "medium" ||
		this.size === "large" ||
		this.size === "xlarge"
		) {
		pizzaPrice += 4;
	} else if (this.size === "slice") {
		pizzaPrice += 0;
	}


	if (this.cheese === "real" ) {
		pizzaPrice += 3;
	} else if (this.cheese ==="vegan") {
		pizzaPrice += 0;
	}

	if (this.topping === true) {
		pizzaPrice +=5;
	} else if (this.topping === false) {
		pizzaPrice += 0;
	}

	return pizzaPrice;
};
