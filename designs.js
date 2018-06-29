// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
 
const c = document.getElementById("#pixelCanvas");
let conh = $("#inputHeight");
let conw = $('#inputWeight');

//An event listener that comes into action when Submit button is clicked .
$('input[type="submit"]').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//The grid pattern makegrid is called whenever button is clicked.
function makeGrid() {

    c.innerHTML = '';
    let height = conh.val();
    let width = conw.val();

    //A function which fills color in the cell that was clicked and changes the color.
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
    for (let x = 0; x < height; x++) {
        let row = c.insertRow(x);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}