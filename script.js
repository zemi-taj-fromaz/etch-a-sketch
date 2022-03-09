let blackBtn = document.getElementById('black')
let rainbowBtn = document.getElementById('rainbow')
let eraserBtn = document.getElementById('eraser')
let clearBtn = document.getElementById('clear')

let currColor = "black";

blackBtn.onclick = (e) => {
    currColor = "black";
    rainbowBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    e.target.classList.add('selected');
}

rainbowBtn.onclick = (e) => {
    currColor = "rainbow";
    blackBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    e.target.classList.add('selected');
}

eraserBtn.onclick = (e) => {
    currColor = "white";
    blackBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
    e.target.classList.add('selected');
}

clearBtn.onclick = (e) => {
    createField(slider.value);
}


let slider = document.getElementById('myRange');

function createField(numberOfSquares) {

    let board = document.getElementById('board')
    board.innerHTML = "";

    let dim=400/numberOfSquares;

    for (let i = 0; i < numberOfSquares; i++) {
    
        let row = document.createElement('div');
        row.style['display'] = "flex";
        
        row.setAttribute("style","display:flex;");
        row.style['justify-content'] = "flex-start";
        row.style['background-color'] = "white";
    
        for (let j = 0; j < numberOfSquares; j++) {
        
            const box = document.createElement('div')
            box.style['background-color'] = "white";
            box.setAttribute("style",`width:${dim}px; height:${dim}px; `);
            box.onmouseover = handleMouseOver;
            row.appendChild(box);
        }
    
        board.appendChild(row)
    }

}

function handleSliderChange(e){
    let numberOfSquares = e.path[0].value;
    createField(numberOfSquares)
}

slider.onchange = handleSliderChange;

function handleMouseOver(e) {
    if(currColor != "black" && currColor !="white"){
        currColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    }

    e.path[0].style['background-color'] = currColor;
}

createField(16)