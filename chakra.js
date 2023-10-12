document.getElementById("start").addEventListener("click",begin);
let img = document.getElementById("chakra");
let degrees = 0;
let timeID = null;
function begin()
{
    timeID = setInterval(frame, 1);
    function frame()
    {
        degrees += 1;
        let x = 0;
        img.style.transform = "rotateZ("+degrees+"deg)";
    }
}