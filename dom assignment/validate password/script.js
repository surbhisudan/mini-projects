const email=document.getElementById("email");
const password=document.getElementById("password");
const submit=document.getElementById("submit");
const error=document.getElementById("error")


// let title=document.createElement("p");    

//     submit.addEventListener("click",()=>{
//         if(password.value.length>8){
      
//       title.textContent="invalid password";
//       title.style.backgroundColor="green";
//       document.body.appendChild(title)
//         }
//     })

submit.addEventListener("click",(event)=>{
    
    if(password.value.length<8 || !email.value.includes("@")){
        error.innerText="invalid email or passoword";
        error.style.backgroundColor="red";
        event.preventDefault()
    }
    else{
        error.innerText="valid email and password";
        error.style.backgroundColor="green";
        error.style.width="200px";
    }
})