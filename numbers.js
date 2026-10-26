let numarray=[1,2,3,4,5,6,7,8,9,10]
console.log(numarray)
/*console.log(numarray.length)
console.log(numarray[3])
numarray.push(12,13)
console.log(numarray)
//end remove
numarray.pop()
console.log(numarray)
//element added to front
numarray.unshift("kiwi")
console.log(numarray)
//shift to remove ele in front
numarray.shift()
console.log(numarray)
//slice to create subarray
let slicearray=numarray.slice(1,3)
console.log(slicearray)
//splice
numarray.splice(1,2,"mango","orange")
console.log(numarray)

for(let i=0;i<numarray.length;i++){
    console.log(numarray[i])
}
//for of loop 
for(let num of numarray){
    console.log(num)
}


console.log("reduce using for of loop")
let sum=0
for(let num of numarray){
    sum=sum+num
    //console.log(num)
}
console .log(sum)


//reduce method-reduce whole array to single value
//used for giving grace marks to students
console.log("reduce function")
const reduceElement=numarray.reduce((total,value)=>total+value,4)
console.log(reduceElement)


//filter method-to filter out what we needed
 const evenArray=numarray.filter((a)=>a%4==0)
console.log(evenArray)


//map method-multiply each element by 2 and return new array
console.log("map method")
const mapArray=numarray.map((a)=>a*2)
console.log(mapArray)*/


let mark=[24,48,47,32,33]
let newMark=mark.filter((a)=>a%2!=0).map((a)=>a*5).reduce((total,value)=>total+value)
console.log(newMark)

//ternary operator-used instead of if else
let p=50
const votingResult=(p>=18)?"elegible for voting":"not elegible for voting"
console.log(votingResult)
