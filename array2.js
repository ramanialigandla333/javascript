let arr=[2,4,6,8]

let check=arr.every((value)=> value>1)
console.log(check)

.some()

let arr2=[2,5,-4,1,5,8]
let output=arr2.some((value)=> value<0)
console.log(output)

.flat()

let arr3=[1,2,[2,4],[4,5]]
//[1,2,2,4,4,5]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
let final=arr3.flat();
console.log(final)

.join()
let fname=["r","a","m","a","n","i"]
let output2 =fname.join("");
console.log(output2)

indexof

let names = ["Hi","hello", "bye"]
console.log (names.indexOf ("hello"))

fill()
let stundents = ["A1","B1","C1","D1"]
console.log(stundents.fill("F1"))