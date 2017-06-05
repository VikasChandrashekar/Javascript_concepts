function fruit(){
	this.country="USA";
	this.isHybrid=true;
}

fruit.prototype.PrintNameandColor = function(){
	console.log(this.name);
	console.log(this.color);
}

function plant(name,color){
	this.name = name;
	this.color=color;
}

fruit.prototype.HybridDetails = function(){
	if(this.isHybrid){
		console.log("Im hybrid Baby!");
	}
}

plant.prototype = new fruit;

var apple = new plant("apple","red");

apple.PrintNameandColor();
apple.HybridDetails();
