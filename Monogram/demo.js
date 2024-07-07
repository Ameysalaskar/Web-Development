var click = document.querySelector("#click")
var first = document.querySelector("#first-page")
var second = document.querySelector("#second-page")

 click.addEventListener("click", function(){
     second.style.transform = "translateY(-90vh)";
     second.style.transition = "1s"
 })

