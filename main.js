document.addEventListener("readystatechange", (event)=>{
if(event.target.readyState = "Complete"){
    console.log("readyState:Complete"); 
     initApp();
}
}, false)


const initApp =()=>{
const form = document.getElementById('form')
const about = document.getElementById('about')
console.log(about)
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    validateInputs();
});
about.addEventListener('click', (event)=>{
    about.style.display="none"
});
}
const validEmail =(email)=>{
const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return emailvalid.test(String(email).toLowerCase());
}

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error");
    
displayError.innerText= message
inputControl.classList.add("error");
inputControl.classList.remove("success");


} 
const setSuccess = (element)=>{
const inputControl = element.parentElement;
const displayError = inputControl.querySelector(".error");

displayError.innerText=""
inputControl.classList.remove("error");
inputControl.classList.add("success");


} 


const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const emailAddress=document.getElementById("emailAddress");
const password=document.getElementById("password");

const validateInputs =()=>{
   const firstNameValue =firstName.value.trim();
   const lastNameValue =lastName.value.trim();
   const emailAddressValue = emailAddress.value.trim();
   const passwordValue =password.value.trim();


   if(firstNameValue ===""){
       setError(firstName, "First name cannot be empty")

   }else{
       setSuccess(firstName);
   }
   if(lastNameValue ===""){
       setError(lastName, "Last name cannot be empty")

   }else{
       setSuccess(lastName);
   }
   if(emailAddressValue ===""){
       setError(emailAddress, "Email cannot be empty")

   }else if(!validEmail(emailAddressValue)){
    setError(emailAddress, "Looks like this is not an email")

   }else{
       setSuccess(emailAddress);
   }
   if(passwordValue ===""){
       setError(password, "Password cannot be empty")

   }else{
       setSuccess(password);
   }
}