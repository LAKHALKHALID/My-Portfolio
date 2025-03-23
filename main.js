// change backbround 
let landingPage=document.querySelector(".landing-page")
let images=["1.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.png"]


setInterval(()=>{
  randomNumber=Math.floor(Math.random()*images.length)
  landingPage.style.backgroundImage='url("img/'+images[randomNumber]+'")'

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
    // console.log("yes")

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


// Section skills


function animateTheSkills(){
  let circuls=document.querySelectorAll(".skills .container .box .circul")
  let spanConter=document.querySelectorAll(".skills .container .box .count")

  circuls.forEach((circul,index)=>{
    let startValue=0
    let maxCounter=parseInt(circul.dataset.count)
    let interval=setInterval(()=>{
      if(startValue>maxCounter){
        clearInterval(interval)
      }
      circul.style.background=`conic-gradient(${window.localStorage.getItem("color")} ${startValue * 3.6}deg, #dfdddd 0deg)`
      spanConter[index].textContent=startValue+"%"
      startValue++
    },40)


  })
}

function scroll(){
  let scrollSection=document.getElementById("sectionOfScroll")
  let topSection=scrollSection.getBoundingClientRect().bottom
  // console.log(topSection)
  // console.log(window)

  let screenHeight=window.innerHeight
  if(topSection<screenHeight){
    animateTheSkills()
    window.removeEventListener("scroll", scroll);
  }
}
window.addEventListener("scroll", scroll);

// Animate section what I do !
function animateContact(){
  let form=document.querySelector(".contact .container .content-form")
  let info=document.querySelector(".contact .container .info")
  form.style.cssText='right:0;'
  info.style.cssText='left:0;'
  // console.log(form,info)
}

function scrollContact(){
  let contact=document.getElementById("contact")
  let bottomSection=contact.getBoundingClientRect().bottom;
  let screenHeight=window.innerHeight;
  if((bottomSection - 300)<screenHeight){
    animateContact()
    window.removeEventListener("scroll", scrollContact);
  }
  
}
 window.addEventListener("scroll",scrollContact)
// whatIDo()


// Section About
let skills=document.getElementById("sectionOfScroll")
let circuls=document.querySelectorAll(".skills .container .box .circul")
let spanConter=document.querySelectorAll(".skills .container .box .count")

let about=document.getElementById("About")
window.onscroll=function(){
  // About Offset Top
  let aboutOfsetTop=about.offsetTop;
 

  if(window.scrollY>=aboutOfsetTop -100){
      // this.console.log("yes I run")

      let imgAbout=document.querySelector(".about .container .image")
      let infoAbout=document.querySelector(".about .container .info")

      imgAbout.style.cssText="left:0;"
      infoAbout.style.cssText="right:0;"

  };
};
 

function timer(){
  let time=new Date()
  let hours=time.getHours()
  let minutes=time.getMinutes()
  let seconds=time.getSeconds()

  let spanHours=document.getElementById("hours")
  let spanMinutes=document.getElementById("minutes")
  let spanSeconds=document.getElementById("seconds")
  // console.log(spanHours,spanMinutes,spanSeconds)
  spanHours.textContent=hours <10?`0${hours}`:hours;
  spanMinutes.textContent=minutes <10?`0${minutes}`:minutes;
  spanSeconds.textContent=seconds <10?`0${seconds}`:seconds;
}

setInterval(timer,500)


// animate Section time
function animateTime(){
  let timer=document.querySelector(".time .container .timer")
  let photo=document.querySelector(".time .container .photo")
  timer.style.cssText="left:0;";
  photo.style.cssText="right:0;";
}

function scrollTime(){
  let time=document.getElementById("times")
  let bottomSection=time.getBoundingClientRect().bottom;
  let screenHeight=window.innerHeight;
  if((bottomSection-300) <=screenHeight){
    animateTime()
    window.removeEventListener("scroll",scrollTime)
  }
}
window.addEventListener("scroll",scrollTime);
// scrollTime()



