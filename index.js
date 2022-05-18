// Implement an inheritance model for four wheeler automobiles.
// Implement using both object.create() and constructor functions().
// Think of properties of what can be inherited.


function FourWheeler(brand,color,price,milege){
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.milege = milege;

} 


let automobiles =new FourWheeler("Audi","blue","$1.5Million","50km/hr")

let p1 = Object.create(automobiles);
console.log(p1);










