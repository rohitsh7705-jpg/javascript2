const user = {
    username: "DIVYA",
    price: 999, 
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`)
console.log(this)
    }
}
// user.welcomemessage()
// user.username = "rohit"
// user.welcomemessage()       
//console.log(this)
// function chai(){
//     let username = "Rohit"
//     console.log(this.username)
// }
// chai()
const chai =() => {
    let username  = " DIvya"
    console.log(this)
}
//chai()
// const addtwo = (num1,num2) => {
//     return num1+num2
// }

//const addtwo = (num1,num2) =>   num1+num2

 const adddtwo = (num1,num2) => {username: "Divya"}

console.log(addtwo(3,4))