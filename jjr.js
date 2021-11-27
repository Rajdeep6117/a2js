function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("Rohit","Vikash","Amanl , Noida");
var p2 = new person("Bavan","Kalyan","Daudpur , Noida");
var p3 = new person("Pavi","Beja","Machibowli, Noida");

console.log(p1);
console.log(p2);
console.log(p3);
