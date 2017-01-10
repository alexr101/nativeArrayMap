//Get properties from an array of objects
function mapObjectProperties(arr, property){
	return arr.map(function(element){
		return element[property];
	});
};

Array.prototype.map = function(projection){
	var results = [];

	this.forEach(function(item){
		results.push(projection(item));
	})

	return results;
}

var stockInfo = [
	{symbol:"APPL", price:142.23},
	{symbol:"WAL", price:12.53},
	{symbol:"OFF", price:34.88},
]

console.log(mapObjectProperties(stockInfo, "symbol"));


