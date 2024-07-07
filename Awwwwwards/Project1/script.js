const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets)
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;

    })
}
circleMouseFollower()

function firstPageAnim(){
    var tl = gsap.timeline()

    tl.from(".navbar",{
        y: '-10',
        opacity : 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.from(".hero-heading h1",{
        y: '-10',
        opacity : 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    tl.from(".block-text",{
        y: '-10',
        opacity : 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })

}
firstPageAnim()

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate =0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,     
            ease: Power1,
        })
        })

    elem.addEventListener("mousemove", function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientY;
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: Power1,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-10, 10, diffrot * 0.8)
    })
    })
})