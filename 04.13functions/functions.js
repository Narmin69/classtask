// function findDigits(num) {
//     let x = num % 10;
//     let y = (num - (num % 100)) / 100;
//     let z = (num % 100 - x) / 10;
//     console.log(x);
//     console.log(z);
//     console.log(y);
// }
// findDigits(123);
// the first
const arr1=['a','b','c','d','e','f','j','k','y','u']
function getRandomLetter(){
return arr1[Math.floor(Math.random()*arr1.length)]
}
console.log(getRandomLetter());
// the second
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8]
let sum = 0;
function calcSum() {
    for (let i = 0; i < arr2.length; i++) {
        if(arr2[i]%2==0){
            sum+=arr2[i]
        }
   }
   return sum
}
console.log(calcSum());
//  the third
function getPositiveNam(){
    let arr=[]
    let arr3=[-3,-5,-9,3,0,true,false,-22]
    for (let i = 0; i < arr3.length; i++) {
      arr.push(Math.abs(arr3[i]))
    }
    return arr
}
console.log(getPositiveNam());
//the fourth
function calcSquareRoot(){
    let arr=[]
    let arr4=[4,9,16,20,24,43,81,100]
    for (let i = 0; i < arr4.length; i++) {
        arr.push(Math.floor(Math.sqrt(arr4[i])))
        }
        return arr
}
console.log(calcSquareRoot());
// the fifth
const arr5=[
{
    name:'my name',
    surname:'my surname',
    city:'my city'
},
{
    name:'my name',
    surname:'my surname',
    city:'my city'
},
{
    name:'my name',
    surname:'my surname',
    city:'my city'
}
]
function fillInfo(){
    for(let item of arr5){
        item.name="Narmin"
        item.surname="Gasimova"
        item.city="Samux"
    }
    return arr5
}
console.log(fillInfo());
