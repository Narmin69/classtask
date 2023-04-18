const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
function getUpper(item){
    return arr1.map(item=>item[0].toLocaleUpperCase()+item.slice[1,-1]+item.at(-1).toLocaleUpperCase())
}
console.log(getUpper());
// let vowels=['a','e','o','u','i']
// let arr=text.split("")
// let arr1=[]
// arr.map(item=>vowels.includes(item)?arr1.push(item):arr1)
// arr1.sort()
// let result=[]
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]!==arr1[i+1]){
// result.push(arr1[i])
//     }
// }
// console.log(result);