const c = document.getElementById('pixelCanvas');
let conh = $("#inputHeight");
let conw = $("#inputWeight");

//This serves as an event listener that comes into action when Submit button is clicked .
$("#inputSubmit").click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//To make the grid pattern makegrid is called whenever button is clicked.

function makeGrid() {

    c.innerHTML = '';
    let height = conh.val();
    let width = conw.val();
 
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //This is an event listener such that whenever any cell is clicked it calls addEvent function and changes it's color everytime.
    for (let x = 0; x < height; x++) {
        let row = c.insertRow(x);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}