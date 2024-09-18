

//const Guy1 = document.getElementById('guy1');
const grower = document.querySelector('#guy1');
grower.addEventListener("mouseenter", growHim);
//grower.addEventListener("mouseleave", growHim);


// let growbutton = document.getElementById("grower");
// growbutton.addEventListener("click", growHim);

function growHim() {
    // let grower = document.getElementById("guy1");
    grower.classList.toggle('grow');
    
    if (grower.classList.contains('grow')) {
        grower.textContent = 'Big Guy';
        grower.style.backgroundColor = 'darkred';
      } else {
        grower.textContent = 'Little Guy';
        grower.style.backgroundColor = 'orangered';
      }
}

let guy2 = document.getElementById("guy2");
guy2.addEventListener("click", changeColor);

//const array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'lightblue', 'lightgreen'];

//function to change color of guy2 to random color
function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    guy2.style.backgroundColor = randomColor;
    guy2.textContent = randomColor + " Guy";
}

// let guy3 = document.getElementById("guy3");
// guy3.addEventListener("click", function() {
    
// });




