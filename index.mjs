

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

topMenuEl.addEventListener(`click`, handleNavClick);
function handleNavClick(e)
{
    e.preventDefault()
}

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

}
//Use the parent-child-sibling relationship to navigate between elements at
// least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

const discountSeason = document.querySelector("#Discount > li:first-of-type")
// console.log(discountSeason);
const lastMinBooking=discountSeason.nextElementSibling;
//Use the parent-child-sibling 
const tourstLocation=discountSeason.nextSibling;


//
const para= document.getElementById("p1")
console.log(para);
para.innerHTML =" Please make your rservation NOW  "

// const app =document.getElementById("topic")
// topic.innerHTML= " fdfddffdfdf"

//  Creating a DocumentFragment
function createPost(content){
    
 // Creating a DocumentFragment
 const frag = document.createDocumentFragment();
 const heading = frag.appendChild(document.createElement("h3"));
//  heading.textContent = title;
 heading.style.margin = "0px"

frag.appendChild(document.createElement("hr"));

const div = frag.appendChild(document.createElement("div"));
div.style.padding = "0px 15px";
div.style.marginBottom = "50px";

div.appendChild(document.createElement("p")).innerHTML = content;

return frag;
}


           
       

//Dom event-based validataion ,with event handlling function 
const login = document.getElementById("login");
const errorMessages = document.getElementById("errorMessages");

login.addEventListener("submit", function (event) {
  event.preventDefault();

  const { username, email, password } = login.elements;

  errorMessages.innerHTML = "";

  if (!username.value.trim()) {
    displayError("User Name is required.");
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    displayError("Please Enter a valid Email Address.");
    return;
  }

  if (!password.value.trim() || !isStrongPassword(password.value)) {
    displayError(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
    return;
  }

  alert("Registration successful!");
  login.reset();
});

function displayError(message) {
  errorMessages.innerHTML += `<div class="error">${message}</div>`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}
  



 











 