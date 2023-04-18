 let names1 = ["Adam", "Sarah", "Malcolm"] //////////////////////////the first
 let names2 = ["Harry", "Newt", "Luna", "Cho"] 
 let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] 
//  let arr = names1.map((animal) => animal[0]).join('')
//  let arr1 = names2.map((animal) => animal[0]).join('')
//  let arr2 = names3.map((animal) => animal[0]).join('')
//  console.log(arr);
//  console.log(arr1);
//  console.log(arr2);
 const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male', },/////////the second
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female',},
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male', },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' ,},
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male', },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female', },
]
const result = users.find(item => item.age === "22");
// const result = users.find(item => item.age === "22");
console.log(result);
// const arr = ["a", "b", "c", "d", ];////the third
// const shuffle = arr.sort((a, b) => 0.5 - Math.random());
// console.log(arr);