const header=document.createElement('header')
const nav=document.createElement('nav')
const ul=document.createElement('ul')
const home=document.createElement('li')
const about=document.createElement('li')
const blog=document.createElement('li')
const contact=document.createElement('li')
home.innerHTML="Home"
about.innerHTML="About"
blog.innerHTML="Blog"
contact.innerHTML="Contact"
document.body.append(header)
header.append(nav)
nav.append(ul)
ul.append(home)
ul.append(about)
ul.append(blog)
ul.append(contact)
ul.style.backgroundColor = "black";
ul.style.color="white"
ul.style.display="flex"
ul.style.justifyContent="space-around"
ul.style.alignItems="center"
ul.style.listStyle="none"
ul.style.height="50px"
const sec=document.createElement('sec')
const sec1=document.createElement('sec1')
const sec2=document.createElement('sec2')
const sec3=document.createElement('sec3')
document.body.append(sec)
document.body.append(sec1)
document.body.append(sec2)
document.body.append(sec3)
sec.innerHTML="<strong>Home</strong>"
sec1.innerHTML="<strong>About</strong>"
sec2.innerHTML="<strong>Blog</strong>"
sec3.innerHTML="<strong>Contact</strong>"
sec.style.border="dashed"
sec.style.height="100vh"
sec.style.display="flex"
sec.style.justifyContent="center"
sec.style.alignItems="center"
sec.style.margin="20px 0"

sec1.style.border="dashed"
sec1.style.height="100vh"
sec1.style.display="flex"
sec1.style.justifyContent="center"
sec1.style.alignItems="center"
sec1.style.margin="20px 0"

sec2.style.border="dashed"
sec2.style.height="100vh"
sec2.style.display="flex"
sec2.style.justifyContent="center"
sec2.style.alignItems="center"
sec2.style.margin="20px 0"

sec3.style.border="dashed"
sec3.style.height="100vh"
sec3.style.display="flex"
sec3.style.justifyContent="center"
sec3.style.alignItems="center"
sec3.style.margin="20px 0"
sec.id='sec'
sec1.id='sec1'
sec2.id='sec2'
sec3.id='sec3'
home.addEventListener('click',()=>{
    window.location='sec'
})
about.addEventListener('click',()=>{
    window.location='sec1'
})
blog.addEventListener('click',()=>{
    window.location='sec2'
})
contact.addEventListener('click',()=>{
    window.location='sec3'
})