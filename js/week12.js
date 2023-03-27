let buttonRef= document.querySelector("#clickme")

function alertUser(){
    alert("You Click!!!")
}

buttonRef.addEventListener('click',alertUser)