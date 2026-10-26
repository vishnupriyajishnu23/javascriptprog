//async await
function displayResult(result){

    console.log(result);
}
async  function add(a,b){

    let c =a+b;
    await displayResult(c);
    console.log("execution stopped");
}
add(1,2);//starts from this line...for line by line execution this is used..async and awit always comes together