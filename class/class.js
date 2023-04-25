// let firstName="leyelae"
// console.log(firstName.split('e').length-1);
// console.log(firstName.split``.reduce((acc,curr)=>curr==='e'?acc+=1:acc,0));
let fullName='Narmin Gasimova'
// let newText=[...fullName]
// console.log(newText);
let [firstName,surname]=fullName.split``
let newArr=[surname,firstName]
console.log(newArr);