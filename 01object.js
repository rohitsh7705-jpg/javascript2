//singleton

//object literals
//Object.create
const mysym = Symbol("key1")

const jsuser= {
    name: "Divya",
    "full name": "Divya Singh",
    [mysym]: "mykey1",
    age: 18,
    location: "basti",
    email:
    "divyasingh.2611.gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"],
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])
jsuser.email="Rohitdivya@gmail.com"
//Object.freeze(jsuser)
jsuser.greeting = function(){
    console.log("I love you Divya")
}
console.log(jsuser.greeting())
jsuser.greetingtwo = function(){
    console.log(`hello my love ${Divya}`)
}
console.log(jsuser.greetingtwo())



