let check=document.querySelector("#checked")
// function myFunction(element) {
//     element.style.background = "green";
//   }
//   const checkbox=document.createElement('input')
//   form.append(checkbox)
//   checkbox.type="checkbox"
  checked.style.display="none"
  checkbox.addEventListener("focus",function(){
    check.style.display="block"
  })
  checkbox.addEventListener("blur",function(){
    check.style.display="none"
  })