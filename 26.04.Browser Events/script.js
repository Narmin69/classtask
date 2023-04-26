const form=document.createElement('form')
const name=document.createElement('label')
const nameInput=document.createElement('input')
const surname=document.createElement('label')
const surnameInput=document.createElement('input')
const checkbox=document.createElement('input')
const checkbox1=document.createElement('input')
const checkbox2=document.createElement('input')
const submit=document.createElement('input')
const button=document.createElement('button')
const button1=document.createElement('button')
const p=document.createElement('p')

name.innerHTML="<strong>Name</strong>"
surname.innerHTML="<strong>Surname</strong>"
button.innerHTML="Let's start..."
button1.innerHTML="Next Page>"


document.body.append(button)
document.body.append(form)
document.body.append(button1)

form.append(name)
form.append(nameInput)
form.append(surname)
form.append(surnameInput)
form.append(checkbox)
form.append(checkbox1)
form.append(checkbox2)
form.append(submit)
// p.append()

checkbox.type="checkbox"
checkbox1.type="radio"
checkbox2.type="radio"
submit.type="submit"

form.style.border="dotted 1px"
form.style.alignItems="center"
form.style.justifyContent="center"
form.style.display="flex"
form.style.flexDirection="column"
form.style.height="100vh"
checkbox1.style.accentColor="red"
checkbox2.style.accentColor="red"
// p.style.border='dotted'
let time =15
let interval;
p.innerHTML=`00:${time}`
button.addEventListener("click",function(){
    interval=setInterval(()=>{
        time-=1
        p.innerHTML=`00:${time}`
        if(time==0){
            clearInterval(interval)
        }
    },1000)
})