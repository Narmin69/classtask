// let firstName="leyelae"
// console.log(firstName.split('e').length-1);
// console.log(firstName.split``.reduce((acc,curr)=>curr==='e'?acc+=1:acc,0));
// let fullName='Narmin Gasimova'
// let newText=[...fullName]
// console.log(newText);
// let [firstName,surname]=fullName.split``
// let newArr=[surname,firstName]
// console.log(newArr);
// function myFun(str) {
//     let count = 0;
//     let letters = []
//     str.split("").map((el) => {
//         count=str.split(el).length - 1
//         letters.push([el,count])
//     })
//     return Object.fromEntries(letters)
// }
// console.log(myFun('hello world'));
//     console.log(myFun('Nermin'));
//     console.log(myFun('Gasimova'));
///////////////////////////////////////////////////////
// function numberSplit(n){
//     const arr=[]
//     if(n%2==0){
//         arr.push(n/2,n/2)
//     }
//     else{
//         arr.push((n-1)/2,(n-1)/2+1)
//     }
//     return arr
// }
// function numberSplit(n){
//     const arr=[]
// if(n%2==0){
//     arr.push((n/2),(n/2))
// }
// else{
//     arr.push(Math.floor(n/2),Math.ceil(n/2))
// }
// return arr
// }
//     console.log(numberSplit(4));
//     console.log(numberSplit(11));
//     console.log(numberSplit(-9));
///////////////////////////////////////////////////////////////////
function reorderDigits(arr, direction) {
    arr.map(item => {
        if (direction === "asc") {
           return +(String(item).split``.sort());
        } else {

          return +(String(item).split``.sort(a,b));
        }
    })
    }
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));
    console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));