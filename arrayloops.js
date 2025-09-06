//for of

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
    
// }
// const greeting = "helo world"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
    
// }



// Maps => unique, ordered
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('FR', "france")
console.log(map)
for (const [key, value] of  map) {
    console.log(key)
    
}
const myobject = {
    'games':'NFS',
    'game2': 'spiderman',
}
for (const [key,value] of myobject) {
    console.log(key, ':-', value)

    




const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} }