let input=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")
let li=document.querySelector("li")
button.addEventListener('click',function(){
   if(input.value){
    let liElement=document.createElement("li")
    liElement.innerText=input.value;
    ul.append(liElement);
    input.value="";
   } else{
    alert("can't be empty")
   }
})