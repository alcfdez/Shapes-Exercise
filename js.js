
document.getElementById("triangle").addEventListener(
    "click",
    () => {
        document.getElementById("triangle").hidden = true;
    }
);

document.getElementById("square").addEventListener(
    "click",
    () => {
        document.getElementById("square").hidden = true;
    }
);

document.getElementById("circle").addEventListener(
    "click",
    () => {
        document.getElementById("circle").hidden = true;
    }
);


const button = document.querySelector (".button")
const triangle= document.getElementById ("triangle");
const square= document.getElementById ("square");
const circle= document.getElementById ("circle");


button.addEventListener ("click", () => {
    triangle.hidden = false; 
    square.hidden = false;
    circle.hidden = false;
});

