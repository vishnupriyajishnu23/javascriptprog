class students{
//letbrand=  
detailsDisplay(){
    console.log("ram mark is"+this.mark1);
    console.log("shyam mark is"+this.mark2);
    console.log("jyothi mark is"+this.mark3);
    console.log("nikki mark is"+this.mark4);
    console.log("average mark is"+this.averageMark);
    

}
constructor(mark1,mark2,mark3,mark4)
{

    console.log(" constructor method");
    this.mark1 = mark1;
    this.mark2 = mark2;
    this.mark3 = mark3;
    this.mark4 = mark4;
    this.averageMark = (mark1 + mark2 + mark3 + mark4) / 4;
}
}
const student1 = new students(80, 70, 90, 85);//variable student1 is created for class student
student1.detailsDisplay();//calling method of class student



//constructor-value initialization method
