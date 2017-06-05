var person = "xyz"
var another_person = person 
person = "abc"

console.log(person);//abc
console.log(another_person);//xyz


var man ={name:"abc"};
var another_man = man;
man.name="xyz";

console.log(man.name); //xyz
console.log(another_man.name); //xyz

