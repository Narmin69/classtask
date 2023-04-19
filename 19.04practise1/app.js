//reverse string
function reverseString(str){
    return str.split("").reverse("").join("")
}
console.log(reverseString("hello"));
console.log(reverseString("gdu"));
function reverseString2(str){
    let result="";
    for (let i = str.length-1; i>=0;i--) {
        result=result=str[i]
    }
    return result;
}
//polidrom
function isPolidrom(str){
if(str===str.split("").reverse("").join("")){
    return `${str} is polidrom`
}else{
    return`No,${str} is not polidrom`
}
}
console.log(isPolidrom("hello"));
console.log(isPolidrom("refer"));
//remove dublicated
let arr=[1,2,2,2,4,3,3,2,4,7,5,7,6]///////the first way
function removeDublicates(array){
  return array.filter((element,index)=>array.indexOf(element)===index)
}
console.log(removeDublicates(arr));

function removeDublicates2(array){/////the second way
    let result=[];
      array.forEach((element)=>!result.includes(element)&&result.push(element))
      return result;
}
console.log(removeDublicates2(arr));
//generate otp
function generateOtp() {//////////////////////////the first way
let digits = '0123456789';
    let otp = "";
    for (let i = 0; i < 4; i++ ) {
    otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
    }
console.log(generateOtp());
function generateOtp2() {/////////////////////////the second way
let otp = "";
    for (let i = 0; i < 4; i++ ) {
    otp += Math.floor(Math.random() * 10);
    }
    return otp;
    }
console.log(generateOtp2());
//find all truth values
let myArr=[1,4,true,false,0,5,"hello",NaN,undefined]
console.log(myArr.filter(Boolean));
