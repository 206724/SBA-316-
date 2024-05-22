

let menu =[
   
   {text:'Home',href:'Home'},
    {text:'catalog',href:'/catalog'},
    {text:'Listing', href:'/orders'},
    {text:'contact us',href:'/contact'},
]
const mainEl =document.getElementsByTagName (`main`)
mainEl[0].innerHTML='<h1> Well-come to Resort Hotel</h1>'
mainEl[0].classList.add(`flex-ctr`)


const topMenuEl = document.getElementById(`top-menu`)
topMenuEl.style.height=`100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
topMenuEl.classList.add(`flex-around`)

menu.forEach(menulinks =>{
    let newLink=document.createElement("a")

    newLink.setAttribute('href',menulinks.href)
    
    newLink.textContent=menulinks.text;
  
    topMenuEl.appendChild(newLink)

})




