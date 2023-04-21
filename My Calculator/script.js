const button=document.querySelectorAll(".button")
let string="";
Array.from(button).map((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML=="="){
            string=eval(string)
            document.getElementById("input").value=string;

        }
        else if(button.innerHTML=="c"){
            string="";
            document.getElementById("input").value=string;

        }
        else{
            string+=button.innerHTML
            document.getElementById("input").value=string;
        }
      
         
    })
})