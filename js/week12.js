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

function updateImage(){
    const image=document.querySelector("#shoppingCart");
    image.setAttribute(
        "src", src="shopping cart.png"
    );
    image.setAttribute("width","50");
    image.setAttribute("height","50");
    image.setAttribute("alt","shoppingCart");
}
buttonRef.addEventListener('click',updateImage)  





