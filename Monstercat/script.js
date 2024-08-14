const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.1
});





var tl = gsap.timeline()

tl.to(".loader-text",{
    delay: "3.5",
    opacity:0
})

tl.to(".monstercat-ani img",{
    delay:1,
    opacity:1,
    rotate:"360deg"
})
tl.to(".monstercat-ani h1",{
    opacity:1,
    transform: "translateX(0)",
    duration:1
})
tl.to(".monstercat-ani",{
    opacity:0,
    duration:1,
    delay:1
})
tl.to(".loader",{
    top:"-100vh"
})
tl.to(".page1",{
    opacity:1
})
tl.to(".page2",{
    opacity:1
})
tl.to(".page3",{
    opacity:1
})
tl.to(".page4",{
    opacity:1
})
tl.to(".page5",{
    opacity:1
})
tl.to(".page6",{
    opacity:1
})
tl.to(".page7",{
    opacity:1
})

var menu_click = document.getElementById("menu")
var list_item = document.querySelector(".listitem")
var item = document.querySelector(".item")

menu_click.addEventListener("click", function(){
    // console.log("Hello");
    gsap.to(".listitem",{
        opacity:1,
        stagger:0.1,
        transform:"translateX(-10px)"
    })
    // list_item.style.opacity = "1";
    // list_item.style.duration = "0.5";
})


// gsap.to(".page6-text",{
//     opacity:1,
//     duration:2
// })

var aud = document.querySelector(".elements i")
var main_aud = document.querySelector(".main-audio")

aud.addEventListener("click",function(){
    main_aud.play();
    main_aud.muted = false;
})

var submit = document.querySelector(".submit-btn")

submit.addEventListener("click",function(){
    alert("Noted!! Enjoy Your Event")
})