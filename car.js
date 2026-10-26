class car{
//letbrand=  
detailsDisplay(){
    console.log("car method");
    console.log("car brand is"+this.brand);
    console.log("car price is:" + this.price);


}
constructor(brand,price)
{

    console.log(" constructor method");
    this.brand = brand;
    this.price = price;
}
}
const car1 = new car("benz", 50000);//variable car1 is created for class car
car1.detailsDisplay();//calling method of class car


//constructor-value initialization method
