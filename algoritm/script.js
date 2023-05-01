const arr=['6',8,NaN,'0',5,4,'true',false,7,'a',undefined,8,true]
//1.Show only falsy values in'arr'
// function falsyValues(arr){
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
// if(!arr[i]){
//     newArr.push(arr[i])
// }}
// return newArr
// }
// console.log(falsyValues(arr));

//2.Show only string values
// function stringValues(arr){
//     let newArr=[]
// for (let i = 0; i < arr.length; i++) {
//    if(typeof arr[i]==="string"){
//     newArr.push(arr[i])
//    }
// }
//    return newArr
// }

// console.log(stringValues(arr));
//3.Slice array from index 3 to 7(includes both indexs)
// function sliceArr(arr){
//     let newArr=[]
//     for (let i = 3; i < 8; i++) {
//         newArr.push(arr[i])  
//     }
//     return newArr
// }
// console.log(sliceArr(arr));

//4.Sum only number values
// function sumArr(arr){
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i]==="number"&& arr[i]){
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumArr(arr));

//5.Find last 8's index in 'arr'
// function findLastIndex(arr){
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]){
//             newArr.push(arr[i])
//     }}
//     return newArr
// }
// console.log(findLastIndex(arr));

//6.Reverse 'arr'
// function reverseArr(arr){
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
// if(arr[i]){
//     newArr.push(arr[i])
// }
//     }
//     return newArr
// }
// console.log(reverseArr(arr));

//7.Sort 'arrNum' ascending
// const arrNum=[3,1,22,0,12,11,9,8,10,14,41,55,51]
// const sortArr=(array)=>{
//     for (let i = 1; i < array.length; i++) {
//         for(let j=0;j<i;j++ ){
// if(array[i]>array[j]){
//    let x=array[i]
//    array[i]=array[j]
//    array[j]=x
// }
//     }
//     }
//     return newArr
// }
// console.log(sortArr(arrNum));

//8.Sort 'arrLetters' ascending
// const arrLetters=['g','d','a','c','j','b','e']
// function sortLetters(arrLetters){
//     let newArr=[]
//     for (let i = 0; i < arrLetters.length; i++) {
//        if(){
// newArr.push(arrLetters[i])
//        }
//     }
//     return newArr
// }
// console.log(sortLetters(arrLetters));
//9.Flat 'arr9'
// const arr9=[[1,2],[3,4,5],[6,7,8,9]]
// function flatArr(arr9){
//     let newArr=[]
//     for (let i = 0; i < arr9.length; i++) {
//     if(){
//         newArr.push(arr9[i])
//     }     
//     }
//     return newArr
// }
// console.log(flatArr(arr9));

// function calculator(num1,operator,num2){////////the first way
// const opertations={
//     "+":(a,b)=>a+b,
//     "-":(a,b)=>a-b,
//     "*":(a,b)=>a*b,
//     "/":(a,b)=>a/b,
// }
// if(num2===0 && operator==="/"){
//     return "Can't divide by 0!"
// }else{
//     return opertations[operator](num1,num2)
// }
// }
// console.log(calculator(2,"+",2));//4
// console.log(calculator(4,"/",2));//2
// console.log(calculator(2,"/",0));

// function calculator(num1,operator,num2){/////////the second way
//     const opertations={
//         "+":(a,b)=>a+b,
//         "-":(a,b)=>a-b,
//         "*":(a,b)=>a*b,
//         "/":(a,b)=>b===0 ? "Can't divide by 0!":a/b,
//     }
// const opertationsFun=opertations[operator];
// return opertationsFun(num1,num2)
// }
// console.log(calculator(2,"+",2));//4
// console.log(calculator(4,"/",2));//2
// console.log(calculator(2,"/",0));

// function calculator(num1,operator,num2){/////////the third way
//     const opertations={
//         "+":()=>num1+num2,
//         "-":()=>num1-num2,
//         "*":()=>num1*num2,
//         "/":()=>(num2 ? num1/num2: "Can't divide by 0!"),
//     }
// return opertations[operator]()
// }
// console.log(calculator(2,"+",2));//4
// console.log(calculator(4,"/",2));//2
// console.log(calculator(2,"/",0));