function display() {
console.log("Hello World")

}
display()//used to call a functions

//functions with parameter
function add(a,b){
//let a =20
//let b=30
let c = a+b
console.log(c)


}
add(11,12)


//fn with return type and parameter
function sub(a,b){
    let c = a-b
    return c
}
console.log(sub(20,10))
const l=sub(30,20)//std way to do any other functions lessthan greater than
console.log(l)

//anonymous functions-perillatha fns
const multiply =function(a,b){
    return a*b
}
console.log(multiply(10,20))

//arrow function
//()=>{}
const square = (x) => { return x * x };
console.log(square(5));
