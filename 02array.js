const marvelheroes = ["thor","ironman","spiderman"]
const dc= ["superman", "flash", "spiderman", "batman"]
//marvelheroes.push(dc)
// console.log(marvelheroes)
// console.log(marvelheroes[3][1])
// const allheroes =marvelheroes.concat(dc)
// console.log(allheroes)
//const allnewheros ={...marvelheroes,...dc}
//console.log(allnewheros)
// const anotherarr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realarr =anotherarr.flat(Infinity)
// console.log(realarr)
console.log(Array.isArray("DIvya"))
console.log(Array.from("DIvya"))
console.log(Array.from({name :"DIvya"}))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
let original = [1,2,3]
let copy1 = [...original];// copy of an array\
let copy2 = Array.from(copy1) 
console.log(copy2)
//merging
let arr = [1,2,3]
let merged = [...arr,4,5, ...arr]
console.log(merged)
function sum(a, b, c) { return a + b + c; }
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6