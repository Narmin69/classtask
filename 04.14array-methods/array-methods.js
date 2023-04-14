///////////////////////////////////////////1.Splice method:
const arr1=['a','b','c','d','e']
// arr1.splice(1,1)//the first
// console.log(arr1);
// arr1.splice(2,2) //the second
// console.log(arr1);
// arr1.splice(arr1.length-1)//the third
// console.log(arr1);
// arr1.splice(arr1.length-3)//the fourth
// console.log(arr1);
// arr1.splice(3,0,'3','4')//the fifth
// console.log(arr1);
// arr1.splice(0,2,'A','B')//the sixth
// console.log(arr1);
/////////////////////////////////////////////2.Slice method
const arr2=['user1','user2','user3',11,3,5]
// const newArr=arr2.slice(0)//the first
// console.log(newArr);
// const newArr=arr2.slice(1,5)//the second
// console.log(newArr);
// const newArr=arr2.slice(2)//the third
// console.log(newArr);
//////////////////////////////////////////////3.Concat method:
const arr3=[1,2,3]
// const arr33=[4,5,6]
// const numbers=arr3.concat(arr33)//the first
// console.log(numbers);
// const numbers=arr3.concat('a','b')//the second
// console.log(numbers);
///////////////////////////////////////////////4.forEach method
// const arr4=['name','surname',10,'age','city','uni',80,20]//the first
// arr4.forEach(about=>console.log(about))

///////////////////////////////////////////////5.Map method
const arr5=[4,5,6,'2',6,true,undefined,'55']
// const result=arr5.map((arr5)=>arr5)//the first
// console.log(result);
// const result=arr5.map((item)=> typeof item=='number'? item*5: item)//the second
// console.log(result);
// const result=arr5.map(String)//the third
// console.log(result);
//  const result=arr5.map(Boolean)//the fourth
//  console.log(result);
// const result=arr5.map(Number)//the sixth
// console.log(result);
/////////////////////////////////////////////6.Filter method
const mixArray=['1',2,4,'a',false,'9',12,'42',undefined,3,true,null]
// const result=mixArray.filter(item=>typeof item =='number')//the first
// console.log(result);
// const result=mixArray.filter(item=>typeof item =='string')//the second
// console.log(result);
// const result=mixArray.filter(item=>typeof item =='boolean')//the third
// console.log(result);
// const result=mixArray.filter(item=>!item)//the fourth
// console.log(result);