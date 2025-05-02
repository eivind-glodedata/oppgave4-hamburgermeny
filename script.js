
console.log(document.querySelector("main").innerText);


let hamburgerMenyen = document.querySelector(".hamburgermeny");

let header = document.querySelector("header");

document.getElementById("aktiveringsknapp").addEventListener("click", aktiverMeny);

function aktiverMeny() {
    if (hamburgerMenyen.style.display === "none" || hamburgerMenyen.style.display === '') {
        hamburgerMenyen.style.display = "block"
    }

    else {
        hamburgerMenyen.style.display = "none"
    }
}


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

//document.getElementById("aktiveringsknapp").addEventListener("click", function() {
   // alert("Knappen ble klikket med anonym funksjon!");
//});

//assign a function to the onclick event of the button using JavaScript

//document.getElementById("aktiveringsknapp").onclick = () => {
 //   alert("Knappen ble klikket med pilfunksjon!");
//};





