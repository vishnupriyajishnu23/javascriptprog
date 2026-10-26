import { cars } from "./cars.js";

class honda extends cars{

constructor(model,price,colour){
    super(price,model)
    this.colour=colour;


}

hondaDetails(){

    console.log("model :" +  this.model  + "price :"+   this.price  + "colour :"+this.colour);
    
}
}
const honda1  = new honda("city",2000000,"red");
honda1.hondaDetails();
honda1.carsDetails();
const cars1=new cars(3000,"moto");
cars1.carsDetails();




