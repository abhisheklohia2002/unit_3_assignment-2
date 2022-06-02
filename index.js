

class Vehicle{



   constructor(brand,color,price,milege){
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.milege = milege;
    
    } 
    
}


let result =new FourWheeler("Audi","blue","$1.5Million","50km/hr")

let p = Object.create(result);


console.log(p);

class cars_1 extends Vehicle{

   

    constructor(brand,milege,price,color,logo){
        super(brand,color,milege,price);
        this.logo = logo;


    }
}

let cars= new cars_1("Tata","20km/hr",50,"blue","nexan");

console.log(cars)
