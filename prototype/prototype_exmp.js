function Print(newdocument){
	this.document=newdocument;
}


Print.prototype.print=function(){
	console.log(this.document);
}

var newObj = new Print("Document i want to print");
console.log(newObj.hasOwnProperty("document"));//true
console.log(newObj.hasOwnProperty("print"));//false
newObj.print();

