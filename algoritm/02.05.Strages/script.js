//1.Create a button,when you click that, it adds firstName:"Narmin",LastName:"Gasimova",age:"20" to localeStorage
const btn =document.querySelector(".btn")
const btn1 =document.querySelector(".btn1")
const empty =document.querySelector(".empty")
const myForm=document.querySelector("#myForm")
const exampleInputUsername=document.querySelector("#exampleInputUsername")
const exampleInputEmail=document.querySelector("#exampleInputEmail")
const exampleInputPassword1=document.querySelector("#exampleInputPassword1")
const exampleCheck1=document.querySelector("#exampleCheck1")

btn.addEventListener('click',function(){
    localStorage.setItem("firstName","Narmin")
    localStorage.setItem("lastName","Gasimova")
    localStorage.setItem("age","20")
    // document.getElementById("btn").innerHTML = localStorage.getItem("lastname");
})
// console.log(JSON.parse(localStorage.getItem("btn")));
//1.1

//2.Console localeStorage keys.
for (let i = 0; i < localStorage.length; i++) {
    // console.log(localStorage.key(i));
}

//3.Console localeStorage values.
for (let i = 0; i < localStorage.length; i++) {
    // console.log(localStorage.getItem(localStorage.key(i)));
}
//4.Console first key in localeStorage.
// console.log(localStorage.key(0));

//4.1.Console all keys in arr.
let array=[]
for (let i = 0; i < localStorage.length; i++) {
     array.push(localStorage.key(i))
}
// console.log(array);
//5.Console first value in localeStorage
// console.log(localStorage.getItem(localStorage.key(2)));
//5.1.Console all values in arr.
let arr=[]
for (let i = 0; i < localStorage.length; i++) {
     arr.push(localStorage.getItem(localStorage.key(i)))
}
// console.log(arr);
//6.Create other two buttons first one called 'delete' when you click it,it removes firstName.
btn1.addEventListener('click',function(){
    localStorage.removeItem("firstName");
      })

//6.1.Second button called 'empty' when it is clicked,it removes all info from localeStorage.
empty.addEventListener('click',function(){
    localStorage.clear()
})
//7.Create Sign Up Form

//8.Show console localeStorage 
const users=JSON.parse(localStorage.getItem('users')) || []
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user={
        username:exampleInputUsername.value,
        email:exampleInputEmail.value,
        password:exampleInputPassword1.value,
        check:exampleCheck1.checked
    }
    if(user.username && user.email){
        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
    }
})
