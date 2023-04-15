// // let arr=[2,4,-3,-43,41,-3]
// // function findPositive(arr){////////////////////////////////the first
// //     return arr.filter((el,index)=>el>0);
// // }
// // console.log(findPositive(arr));
// // function isRectangle(a,b,c){//the second
// // if(a**2+b**2==c**2||a**2+c**2==b**2||c**2+b**2==a**2
// //     ){
// //     return"yes";
// //     }else{
// //         return"no" ;
// //   } 
// // } 
// // console.log(isRectangle(3,4,5));
// // console.log(isRectangle(3,6,5));
// // console.log(isRectangle(4,5,3));
// // function isFactorial(n){/////////////////////////////////////the second
// //     let fact=1;
// //     for(let i=1;i<=n;i++){
// //         fact=fact*i;
// //     }
// //     return fact;
// // }
// // console.log(isFactorial(5));
// // const countries=["Finland","Denmark","Sweden","Azerbaijan","Norway","Iceland"]
// // function findMaxLength(arr){//////////////////////////////////////////////////the third
// //     let lengthsArr =countries.map((el)=>el.length)
// //     return arr.find((el)=>el.length===Math.max(...lengthsArr))
// // }
// // console.log(findMaxLength(countries));
// // const webTechs=["html","CSS","js","REACT","Redux","Node","MongDB"]/////////////////////the fourth
// // console.log(webTechs.find((el)=>el===el.toLocaleUpperCase()));
// // console.log(webTechs.filter((el)=>el===el.toLocaleUpperCase()));
// let arr2=[
//     {
//         name:"test",
//         key:9,
//     },
//     {
//         name:"task",
//         key:4,
//     },   {
//         name:"tanqo",
//         key:3,
//     },   {
//         name:"like",
//         key:2,
//     },   {
//         name:"task",
//         key:5,
//     },   {
//         name:"Trust",
//         key:8,
//     },   {
//         name:"test",
//         key:12,
//     },   {
//         name:"last",
//         key:6,
//     },   {
//         name:"tanqo",
//         key:1,
//     },   {
//         name:"elephant",
//         key:13,
//     },   {
//         name:"Love",
//         key:11,
//     },   {
//         name:"small",
//         key:7,
//     },   {
//         name:"Little",
//         key:10,
//     },
// ]
// console.log(arr2.filter((item)=>item.name[0]=="t"));
// // console.log(arr2.filter((item)=>item.name.startsWith("t")));
// console.log(
//     arr2.filter(
//         (item=>item.name[0]=="t"&&item.name.endsWith("t"))
//     )
// );
// let lengthsArr=arr2.map((el)=>el.name.length);
// let maxLength=Math.max(...lengthsArr)
// console.log(arr2.find((el)=>el.name.length===maxLength));
// // console.log(
// //     arr2.filter(
// //         (item)=>
// //         item.name.toLocaleLowerCase().startsWith("t"))
      
// // );
// function findElem(array){
//     return array.filter((item)=>item.key>10 && item.name.toLocaleLowerCase().startsWith("l"))
// }
// console.log(findElem(arr2));
// // function findMaxKey(array){
// // let keys=array.map((item)=>item.key)
// // let max=Math.max(...keys)
// // return array.filter((item)=>item.key==max)[0]
// // }
// // console.log(findMaxKey(arr2));
// let arr=[0,1,2,3,4]
// arr.unshift(arr.pop());
// arr.unshift(arr.pop());
// console.log(arr);
// function findLetterT(array){
//     let keys=array
// }