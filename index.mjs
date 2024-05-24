

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

// Now, we can use the function to build consistent
// post elements using custom data. We'll be pulling
// from the JSON Placeholder API for convenience.
// (async () => {
 
//     posts.forEach((post) => {
//       app.appendChild(createPost(post.title, post.body));
//     });
//   })();
  
///form validation
document.addEventListener("app", () =>{
    const registrationForm =document.getElementById("registration");
    const loginForm =document.getElementById("login");
    const errorDisplay= document.getElementById("errorDisplay"); 

    registrationForm.addEventListener("submit",(event) =>{
        event.preventDefault();
        const username = registrationForm.username.value.trim();
        const email = registrationForm.email.value.trim();
        const password = registrationForm.passwordCheck.value.trim();
        const terms =registrationForm.terms.checked;
             let errors=[];
        if(!username.match(/.*[0-9]/))     {
            errors.push("username must contain at least on number.");
        if(!email.includes("@")||!email.include(".")){
            errors.push("eamil must be valid .");
        }    
        if(password.length < 8 ){
            errors.push("Password must be 8 character long.")
        }
        if(password !== passwordCheck ){
            errors.push("Password didnot match.")
        }
        if(! terms) {
            errors.push(" you must agree to the term of use.")
        }
        if(errors.length>0){
            errorDisplay.innerHTML=errors.join("<br>");
            }
            else{
                errorDisplay.innerHTML="Registration successful!";
            }

        }
    })
    
loginForm.addEventListener("submit",(event) =>{
    event.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();
    let errors=[];
    if(username === ""){
        errors.push("Password is Required.")
        
    }
    if(password === ""){
        errors.push("password is required")
    }
    if(errors.length > 0){
        errorDisplay.innerHTML = errors.join ("<br>")
      }
      else{
        errorDisplay.innerHTML = "Login successful";
      }
})
    
})
