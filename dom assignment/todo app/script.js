const todoitems=document.getElementById("todoitems");
const button=document.getElementById("button");
const ul=document.getElementById("ul")

button.addEventListener("click",()=>{
   if(todoitems.value==""){
    alert("add something")
   }
   else{
  
    const title=document.createElement("li");
    title.textContent=todoitems.value;
   ul.appendChild(title)
   }
   todoitems.value="";
})