let buttonRef= document.querySelector("#clickme")

function alertUser(){
    alert("You Click!!!")
    // buttonRef.removeEventListener('click',alertUser)  
}
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

const image=document.querySelector("#shoppingCart");
function updateImage(){
    image.setAttribute(
        "src", src="shopping cart.png"
    );
    image.setAttribute("width","50");
    image.setAttribute("height","50");
    image.setAttribute("alt","shoppingCart");
}
buttonRef.addEventListener('click',updateImage)  

const buttonContainer= document.querySelector(".button-container")
function changeBGGreen(event){
    console.log(event.target.tagname)
    event.target.classList.add("green")
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;
        event.target.style.backgroundColor = color;
      }
    }
buttonContainer.addEventListener('click',changeBGGreen)
function changeBGGreen(event){
    event.target.classList.add("greenBG")
}
buttonContainer.addEventListener("mouseover", changeBGGreen)
function changeTextColor(event){
    //event.target -> button
    //if the text on the button says red -> the text color should be red
    //event.target.textContent
    console.log(event.target.textContent)
    let myColor= event.target.textContent
    event.target.classList.add(myColor)
}
buttonContainer.addEventListener("click",changeTextColor)

