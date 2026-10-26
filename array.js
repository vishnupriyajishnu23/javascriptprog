let fruits=["apple","banana","mango","grapes"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits[3])
fruits.push("mango","orange")
console.log(fruits)
//end remove
fruits.pop()
console.log(fruits)
//element added to front
fruits.unshift("kiwi")
console.log(fruits)
//shift to remove ele in front
fruits.shift()
console.log(fruits)
//slice to create subarray
let slicearray=fruits.slice(1,3)
console.log(slicearray)
//splice
fruits.splice(1,2,"kiwi","papaya")
console.log(fruits)

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
for(let num of fruits){
    console.log(num)
}