var x = document.getElementsByClassName(".page4")
console.log(x)

addEventListener("click", function(){
    // console.log("hello")
    console.log(this);
    this.style.background = "orange";
})