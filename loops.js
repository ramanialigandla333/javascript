//for ...of - usedto loop over the values of an array:

//for...in - used to loop over the keys (indexes) of an array and objects

let veg=["tomato","potato","brinjal"]
//         0         1        2

for(let  x of veg ) {
    console.log(x)
}


// for in loop used for mainly objects
// rare in arrays

let person = {
    fname:"ramani",
    age: 14,
    city: "hyd"
}
    for (let key in person) {
        console.log(key, person[key])
    }