const button=document.getElementById("button");
const element=document.getElementById("element");
let array=["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"]
  let i=0;
button.addEventListener("click",()=>{
    if(i<array.length){
        const title=document.createElement("li");
        title.textContent=array[i];
        element.appendChild(title);
       i++
       console.log(title)
  
  }
  else{
    alert("all items have been added");
  }

})