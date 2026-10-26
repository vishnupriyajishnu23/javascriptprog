import testData from  "./jsonobj.json" with {"type":"json"}
const testObj =JSON.stringify(testData);
const obj = JSON.parse(testObj);
console.log(obj.age);




const person={
fName:"John",
lName:"Doe",
age:50,
isEmployed:true,

}
console.log(person);
console.log(person.fName);//dot notation
console.log(person["lName"]);//bracket notation

person.city="New York"//adding new property to object
console.log(person.city);

//updating existing property
person.age=51
console.log(person.age);


//for in loop to print objects
for(const key in person){
    console.log(key);
}

//to get values of the objects
for(const key in person){
    console.log(key+":"+person[key]);
}


const student ={
    sName:"John",
    sAge:20,
    sClass:"10th",
    sStatus:"Pass",
    sSubjects:["Maths","Science","English"],
    sGetdetails:function(){
return `${this.sName} is ${this.sAge} years old and is in ${this.sClass} class.`;

    }//for concatination




}
//print object key and value using loop
for (const key in student){
    if(typeof student[key] == "function") {
        console.log(key + ": " + student[key]());
    } else {

    console.log(key+":"+student[key]);

}
}




