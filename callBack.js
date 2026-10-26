function displayResult(result){
    console.log(result);

}

function sum(a,b,callback){
    let c = a+b;
    callback(c);
}
function subResult(d,e,callback){

    let f=d-e;
    callback(f);
}

sum(5,2,displayResult)//java script is asynchronous and we need to run each line by line
subResult(77,11,displayResult)