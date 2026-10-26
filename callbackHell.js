/*function displayResult(a,cb){
    console.log("display fn invoked")
    cb(a)
    
}
function callback1(cb2){
    console.log("callback fn invoked")
    cb2()

}
function end(){
    console.log("end fn invoked")
}
displayResult("hello",(receive)=>{
    console.log(receive)
    callback1(()=>
        {end()})})*/


    //promise-javascript object(pending,fullfill,reject)
   
const displayResult =()=>{

return new Promise((resolve,reject)=>{
    console.log("display executed")
    resolve()
})
    }
    const callback1=()=>{
        return new Promise((resolve,reject)=>{
            console.log("call back1 executed")
            let pass=false
            if(pass){
                resolve("completed")
            }
            else{
                reject("failed")
            }
        })
    }
        const end=()=>{
            return new Promise((resolve,reject)=>{
                console.log("end executed")
                resolve()
            })

        
    }
    //passakunna fn then use cheyyum ,fail akunna function catch use cheyyum
    displayResult().then(()=>
        callback1().then(()=>
            end().then(()=>{
                console.log("execution completed")
            })
        )
    ).catch((error)=>{
        console.log("the error messegeis " + error)
    })
    


