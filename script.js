// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// let mousePos = { x: 0, y: 0 };

// document.addEventListener("mousemove", (dets) => {
//     mousePos.x = dets.x;
//     mousePos.y = dets.y;
// });

// function updateCursor() {
//     crsr.style.left = mousePos.x + "px";
//     crsr.style.top = mousePos.y + "px";
//     blur.style.left = mousePos.x - 250 + "px";
//     blur.style.top = mousePos.y - 250 + "px";
//     requestAnimationFrame(updateCursor);
// }
// updateCursor();



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -50%",
        scrub:2
    }
})