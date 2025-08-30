// function addtwonum(num1,num2){
//     console.log(num1+num2)
// }
function addtwonum(num1,num2){
let result = (num1+num2)
return result
}
const res = addtwonum(3,4)
//console.log(res)
// function loginusermessage(username){
//     if(!username){
//         console.log("please  enter a username")
//         return

//     }
//     return `${username} just logged in`
// }
// //console.log(loginusermessage("Divya"))


//function calculatecartprice(...num1){
   // return num1

//}
//console.log(calculatecartprice(200,300,400))4
const user = {
    username: "Divya",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is${anyobject.username} and price is ${anyobject.price} `)

}
handleobject(user)
const mynewarr =[200,300,400,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarr))