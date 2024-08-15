var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(val){
    gsap.to(cursor,{
        x : val.x,
        y : val.y,
        duration : 1,
        ease : 'back.out'
    })
})