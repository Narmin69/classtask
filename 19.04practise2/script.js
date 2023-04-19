/////////////////////////////////////////the first
function filterArray(arr) {
    return arr.filter(el => typeof el === "number");
}
console.log(filterArray([1, 'c', 2, "a", "b"]));
console.log(filterArray(['4', 1, "a", "b", 0, 15]));
///////////////////////////////////////////the second
function sliceSum(arr, n) {
    return arr.slice(0, n).reduce((acc, curr) => acc + curr, 0)
}
console.log(sliceSum([9, 8, 7, 6], 3));  //24
console.log(sliceSum([1, 3, 2], 2));//4
console.log(sliceSum([3, 6, 2], 0)); //0
///////////////////////////////////////////the third
////////////////////////////////////////////the first way
function spelling(str) {
    let str1 = [];
    let n = 0;
    for (c in str)
        str1.push(str.slice(0, ++n));
    return str1;
}
console.log(spelling('bee'));
console.log(spelling("happy"));
/////////////////////////////////////////////the second way
function spelling(str) {
    return str.split("").map((el,i)=>str.slice(0,i+1))
}
console.log(spelling('bee'));
console.log(spelling("happy"));
////////////////////////////////////////////the fourth
///////////////////////////////////////////the first way
function hashPlusCount(str) {
    let hashes = 0;
    let pluses = 0;
    Array.from(str).forEach(function (ch) {
        if (ch === "#") {
            hashes++;
        }
        if (ch === "+") {
            pluses++;
        }
    });
    return [hashes, pluses];
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));
//////////////////////////////////////////////////the second way
function hashPlusCount(str) {
    let hashes = 0;
    let pluses = 0;
    str.split``.map((item)=>item==='#'?hashes++:++pluses)
    return [hashes,pluses]
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));
/////////////////////////////////////////////the fifth
///////////////////////the first way
function reverseCase(str) {
    let newstr = str.split('');
    let newarr = [];
    for (i = 0; i < newstr.length; i++) {
        if (newstr[i] == newstr[i].toLowerCase()) {
            newarr.push(newstr[i].toUpperCase());
        } else
            if (newstr[i] == newstr[i].toUpperCase()) {
                newarr.push(newstr[i].toLowerCase());
            }
    } return newarr.join('');
}
console.log(reverseCase("Happy Birthday"))
console.log(reverseCase("MANY THANKS"));
/////////////////////////////////the second way
function reverseCase(str){
    return str.split("").map((el,i)=>{
        if(el==el.toLowerCase()){
            return el.toUpperCase();
        }else{
            return el.toLowerCase();
        }
    }).join("");
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));