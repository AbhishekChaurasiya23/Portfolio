//Cursor Animation
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(val){
    gsap.to(cursor,{
        x : val.x,
        y : val.y,
        duration : 1,
        ease : 'back.out'
    })
});


// Pre Loader 
const texts = ["Video Editor", "Wanderlust", "Health Nut","Web Developer"];
let index = 0;

function changeText() {
    const changingText = document.querySelector('#textscroll');
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText,400);

let tl = gsap.timeline()

tl.to("#topHeading",{
    height : 0,
    duration : 4,
    ease : Expo.easeInOut

})
.to("#green",{
    height : "100%",
    duration : 2,
    ease : Expo.easeInOut

})
.to("#main-content",{
    height : "100%",
    duration : 2,
    delay: -1.8,
    ease : Expo.easeInOut

})


