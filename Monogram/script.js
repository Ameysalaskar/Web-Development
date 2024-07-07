// var first_box = document.querySelector("#f-box1")

// first_box.addEventListener("mouseover", function(){
//     first_box.innerHTML = "<img src = https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp?v=1668446709>";
// })


// first_box.addEventListener("mouseleave", function(){
//     first_box.innerHTML = '<img src = "https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg.webp?v=1660013247">';
// })


 var click = document.querySelector("#click")
//  var second = document.querySelector("#second-page")

// var third = document.querySelector("#third-page")
// var fourth = document.querySelector("#fourth-page")


// var x = document.querySelector("#f-page-two")
// var y = document.querySelector("#f-page-three")
// var z = document.querySelector("#f-page-four")




//  click.addEventListener("click", function(){
//      second.style.transform = "translateY(-95vh)"
//      second.style.transition = "1s"

//      third.style.transform = "translateY(-95vh)"
//      fourth.style.transform = "translateY(-95vh)"
//      x.style.transform = "translateY(-95vh)"
//      y.style.transform = "translateY(-95vh)"
//      z.style.transform = "translateY(-95vh)"
//  })

var sub_main = document.querySelector("#sub-main")

click.addEventListener("click", function(){
    sub_main.style.transform = "translateY(-95vh)";
    sub_main.style.transition = "1s"
})


var menu_icon = document.querySelector("#menu-icon")
var slider = document.querySelector("#slider")
var cross_menu = document.querySelector("#cross-menu")
var page1_heading = document.querySelector("#page1-heading")




 cross_menu.addEventListener("click", function(){
     slider.style.transform = "translateX(2000px)";
     slider.style.transition = "1s";
     page1_heading.style.opacity = 1;
     page1_heading.style.transition = "1s";
 })

 menu_icon.addEventListener("click", function(){
     slider.style.transform = "translateX(1025px)";
     slider.style.transition = "0.5s";
     page1_heading.style.opacity = 0;
     page1_heading.style.transition = "1s";
 })