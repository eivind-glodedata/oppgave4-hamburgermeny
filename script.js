console.log(document.querySelector(".hamburgermeny"));
console.log(document.querySelector("main").innerHTML);

const hamburgerelementet = document.querySelector(".hamburgermeny");

function changeElementStyle(elementId, newColor) {
    // Get the element by its ID

    let element = document.getElementById(elementId);
    console.log(element);
    
    // Check if the element exists
    if (element) {
        // Change the background color of the element
        element.style.backgroundColor = newColor;
    } else {
        console.log("Element not found");
    }
}

// Example usage: Change the background color of the element
changeElementStyle('header', 'brown');
//changeElementStyle('body', 'pink');

function varsling(param1, param2) {
    alert(param1 + ' ' + param2);
}

//myFunction('parameter1', 'parameter2')

//Alternatively, you can use an event listener for a more modern approach:

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

//assign a function to the onclick event of the button using JavaScript

document.getElementById("myButton").onclick = function() {
    alert("Button was clicked!");
};



function test() {alert("funksjonen funker!")
};

console.log(isNaN(6))

const myButton = document.querySelector("#myButton");

function separatfunsksjonforeventlistener() {
    console.log("knappen ble klikket")
    const hamburgermeny = document.getElementById("HAMBURGER");
    hamburgermeny.style.display = "none";

};

myButton.addEventListener("click", separatfunsksjonforeventlistener);

myButton.addEventListener("click", function() {
    console.log("knappen ble klikket med anonym funksjon");
})

myButton.addEventListener("click", () => {
    console.log("knappen ble klikket gjennom arrowfunksjon");
});

