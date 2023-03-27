let buttonRef= document.querySelector("#clickme")

function alertUser(){
    alert("You Click!!!")
    // buttonRef.removeEventListener('click',alertUser)  
}

buttonRef.addEventListener('click',alertUser,{once:true})

function backgroundChange(){
    document.body.classList.add("pink")
}

function changeText(){
    if(buttonRef.textContent==='Click me!'){
        buttonRef.textContent="Clicked";
    }
    else{
        buttonRef.textContent="Click me!";
    }
}

buttonRef.addEventListener('click',backgroundChange)
buttonRef.addEventListener('click',changeText)  




