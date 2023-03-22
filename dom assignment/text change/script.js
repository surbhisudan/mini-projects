const changehere=document.getElementById("changehere");
const clickhere=document.getElementById("clickhere");

clickhere.addEventListener("click",()=>{
    if (changehere.innerText=="The most affordable learning platform"){
        changehere.innerText="PWskills"
    }
    else{
        changehere.innerText="The most affordable learning platform"
    }
});
