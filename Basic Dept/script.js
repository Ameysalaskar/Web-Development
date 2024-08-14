//  const scroll = new LocomotiveScroll({
//      el: document.querySelector('.main'),
//      smooth: true,
//  });


var cursor = document.querySelector("#cursor")
var video = document.querySelector("#video")
var first_page = document.querySelector(".page1")
var nav = document.querySelector(".navbar")

video.addEventListener("mousemove", function(dets){
     cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    // console.log("hello")
})

nav.addEventListener("mousemove", function(){
    cursor.style.opacity = 0;
})
nav.addEventListener("mouseleave", function(){
    cursor.style.opacity = 1;
})

first_page.addEventListener("mouseleave", function(){
    cursor.style.opacity = 0;
})
first_page.addEventListener("mouseenter", function(){
    cursor.style.opacity = 1;
})

// var reel = document.getElementsByTagName("video")

// video.addEventListener("click", function(){
//    reel.muted = false;
//    reel.play();
// })

var home_video = document.querySelector("#home-video");

video.addEventListener("click", function(){
    home_video.play();
    home_video.muted = false;
    home_video.currentTime = 0;
})

video.addEventListener("dblclick", function(){
    home_video.muted;
})

var first = document.querySelector("#first")
var second = document.querySelector("#second")
var arrow = document.querySelector(".arrows")

 arrow.addEventListener("mouseover", function(){
     second.style.transform = "translateX(100%)";
     first.style.transform = "translateX(120%)";
     first.style.opacity = 1.1;
     second.style.opacity = 0; 
 })

arrow.addEventListener("mouseout", function(){
    first.style.transform = "translateX(-34px)";
    first.style.opacity = 0; 
    second.style.transform = "translateX(-2%)";
    second.style.opacity = 1; 
})

  var tl = gsap.timeline()

   tl.to(".loader-container",{
       top: "-20px",
       duration:0.5,
       delay:"0.5"
   })

   tl.to(".loader",{
        top: "-100vh",
        duration:1,
        ease: "power4.inOut"
   })
   
   tl.from(".page1",{
    opacity: 1
   })

   
   tl.to(".cursor",{
    opacity: 2
   })
