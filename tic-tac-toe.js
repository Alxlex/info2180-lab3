window.onload = bg

function bg ()
{
    var box = document.getElementById("board").children
    
    
    for (let bx of box){
        bx.classList.add("square")
        console.log(bx)
    }
}
