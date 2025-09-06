const useremail = []
if(useremail){
    console.log("got useremail")
}
else{
    console.log("don't have user email")
}
// falsey value 
//false , 0, -0 , BigInt 0n, "" , null  , undefined , NaN
// truthy value
// "0" , "false", " " , {},[] , function(){}
// if(useremail.length===0){
//     console.log("Array is empty")
//}

// nullish coaleshing operator(??) : null undefined
let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)
// terniary operator
// condition ?true : false
const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than100"): console.log("more than 80")