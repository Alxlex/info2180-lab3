window.onload = begin
var box
const arr = ["","","","","","","","",""]
var wrong = true
function begin ()
{
    box = document.getElementById("board").children
    
    
    for (let bx of box){
        bx.classList.add("square")
        bx.addEventListener('click',start)
        bx.addEventListener('mouseover', mouse)
        bx.addEventListener('mouseout', mouse)
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
    winner()

    //  console.log(arr[index])
}

function mouse(event){

    index = Array.from(box).indexOf(event.target)

    if (event.type == 'mouseover'){
        box[index].classList.add('hover')
    }
    if (event.type == 'mouseout'){
        box[index].classList.remove('hover')
    }
}

function winner(){
    var w = [0,0]
    lst = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]]
    for (let win of lst){
        for (let win2 of win){
            if (arr[win2] == 'X'){
                w[0]++ 
                if (w[0] == 3){
                    document.getElementById('status').classList.add('you-won')
                    document.getElementById('status').innerHTML = 'Congratulations! X is the Winner!'   
                }
            }

            if (arr[win2] == 'O'){
                w[1]++ 
                if (w[1] == 3){
                    document.getElementById('status').classList.add('you-won')
                    document.getElementById('status').innerHTML = 'Congratulations! O is the Winner!'   
                }
            }
        }
        w[0] = 0
        w[1] = 0
    }
}