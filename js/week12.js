let buttonRef= document.querySelector("#clickme")

function alertUser(){
    alert("You Click!!!")
    buttonRef.removeEventListener('click',alertUser)    
}

buttonRef.addEventListener('click',alertUser)

