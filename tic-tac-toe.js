window.onload = begin
var box
const arr = ["","","","","","","","",""]
wrong = true
function begin ()
{
    box = document.getElementById("board").children
    
    
    for (let bx of box){
        bx.classList.add("square")
        bx.addEventListener('click',start)
        console.log(bx)
    }
}

function start(event)
{
   index = Array.from(box).indexOf(event.target)

   if (wrong == true)
   {
    box[index].innerHTML = "X";
    box[index].classList.add('X')
    wrong = false
   } else {
    box[index].innerHTML = "O"
    box[index].classList.add('O')
    wrong = true
   }

     arr[index]= box[index].innerHTML


   console.log(index)
}
