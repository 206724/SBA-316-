

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

dynamicUI()
function dynamicUI(){
const divElemnet =document.createElement('div');
divElemnet.setAttribute('id','divElementID');
divElemnet.classList.add('div-container');

const paraElement =document.createElement('p');
paraElement.innerHTML-'Login';
paraElement.style.display= 'flex';
paraElement.style.justifyContent = 'center';

const inputElement = document.createElement('input');
inputElement.placeholder ='Enter Usernname';
inputElement.id = 'Username_id';
inputElement.type = 'text';
inputElement.classList.add('username-container')

const passwordElement = document.createElement('input');
passwordElement.placeholder = 'Enter password';
passwordElement.id='password_id';
passwordElement.type='password';
passwordElement.classList.add('username-container')

const btnContainer = document.createElement('div')
btnContainer.style.display='flex';
btnContainer.style.justifyContent='end';

const btnElement = document.createElement('button')
btnElement.innerHTML = 'Login';
btnElement.id ='btn_id';
btnElement.type = 'button';

btnContainer.appendChild(btnElement);

divElemnet.appendChild(paraElement);
divElemnet.appendChild(inputElement);
divElemnet.appendChild(passwordElement);
divElemnet.appendChild(btnContainer);

document.body.appendChild(divElemnet);

}//Use the parent-child-sibling relationship to navigate between elements at
// least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

const discountSeason = document.querySelector("#Discount > li:first-of-type")
// console.log(discountSeason);
const lastMinBooking=discountSeason.nextElementSibling;

const tourstLocation=discountSeason.nextSibling;

// const paragraphs = document.getElementsByTagName('p')







