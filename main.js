// change backbround 
let landingPage=document.querySelector(".landing-page")
let images=["1.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.png"]


setInterval(()=>{
  randomNumber=Math.floor(Math.random()*images.length)
  landingPage.style.backgroundImage='url("../img/'+images[randomNumber]+'")'

},3000)

// show and hidden setting
let set=document.querySelector(".setting ")
set.onclick=()=>{
  set.classList.toggle("open")
}


// In responsive show icon menu
let menu=document.querySelector(".landing-page .header .i1")
let menuFalse=document.querySelector(".landing-page .header .i2")

let links=document.querySelector(".landing-page .header .links")
menu.addEventListener("click",()=>{
  menu.style="display:none;"
  menuFalse.style="display:block"
  links.style="display:block;"
})
menuFalse.addEventListener("click",()=>{
  menu.style="display:block;"
  links.style="display:none;"
  menuFalse.style="display:none;"

})


// chage color all the class activ and add color at localStorage

let colorLi=document.querySelectorAll(".setting ul li")
let active=document.querySelector(".active")

if(window.localStorage.getItem("color")){
    document.documentElement.style.setProperty('--main-color',window.localStorage.getItem("color"))
    console.log("yes")

}

colorLi.forEach( (el) => {
  el.addEventListener("click",(e)=>{

    console.log(e.currentTarget.dataset.color)
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    document.documentElement.style.setProperty('--main-color',e.currentTarget.dataset.color)
    // active.style.color=e.currentTarget.dataset.color
  })
})  

// Start section Project 
let myProject=document.querySelectorAll(".project .container .photo img")

myProject.forEach( img =>{

  img.addEventListener("click" , (e)=>{

    // Create over-lay
    let overLay=document.createElement("div")

    // Add class to over-lay
    overLay.className="popup-overlay"

    // Append overLay to body
    document.body.appendChild(overLay)

    // Create popup-box
    let popupBox=document.createElement("div")

    // Add class to popup-box
    popupBox.className="popup-box"

    // Add alt of the img to popup box
    if(img.alt!==null){
      // Creat Heading
      let imgHeading=document.createElement("h3")

      // Add class to imgHeading
      imgHeading.className="active"

      // Create text
      let imgText=document.createTextNode(img.alt)

      // Add imgText to Heading
      imgHeading.appendChild(imgText)

      // Append imgHeading to popup-box
      popupBox.appendChild(imgHeading)


    }

    // Create image 
    let popupImg=document.createElement("img")

    // Add src to popupImg
    popupImg.src=img.src

    // Append popupImg to popupBox
    popupBox.appendChild(popupImg)

    // Append popup Box to body
    document.body.appendChild(popupBox)

    // Create close Button
    let closeButton=document.createElement("span")

    // Add class to closeButton
    closeButton.className="close-button"

    // Create close text
    let closeText=document.createTextNode("X")

    // Add closeText to closeButton
    closeButton.appendChild(closeText)

    // Append closeButton to popupBox
    popupBox.appendChild(closeButton)
    

  })


})

// Close popup 
document.addEventListener("click",(e)=>{

  if(e.target.classList == "close-button"){
    e.target.parentNode.remove()

    document.querySelector(".popup-overlay").remove()

  }
})