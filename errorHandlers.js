try{let a=4;
let b=2;
if(b==0){
throw new Error("cannot enter a value less than 0")
}


let result = a/b;
console.log(result);
}
catch(error){
    console.log(error.message);


}
finally{
//if we need to print any important clauses
console.log("execution stopped")

}