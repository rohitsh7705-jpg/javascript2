//const tinderuser =new Object()
const tinderuser= {}
tinderuser.id = "rohit2611"
tinderuser.name = "Rohit"
tinderuser.isLoggedIn = false
//console.log(tinderuser)
const regularuser ={
    email: "xyz@gmsil.com",
    fullname : {
        username:{
            firstname:"DIvya",
            lastname:"singh",
        }
    }
    
}
const obj1 ={1: "a", 2: "b"}
const obj2 ={ 3: "c",4: "d"}
const obj4 = {5: "e",6: "f" }
//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}
//console.log(obj3)
const users =[
    {
        id:1,
        email:"rohit.sh2630@gmail.com",
    },
    {

    },
      {

    },
      {

    },
      {

    },
( users[1].email)

]
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))