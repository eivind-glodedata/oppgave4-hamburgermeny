
console.log(document.querySelector("main").innerText);


let hamburgerMenyen = document.querySelector(".hamburgermeny");

let header = document.querySelector("header");

document.getElementById("aktiveringsknapp").addEventListener("click", aktiverMeny);

function aktiverMeny() {



    if (hamburgerMenyen.style.display === "none" || hamburgerMenyen.style.display === '') {
        hamburgerMenyen.style.display = "block";
      //  const ikonTilAAFjerne = document.getElementById("aktiveringsknapp");
     //   ikonTilAAFjerne.remove();
      //  const X = document.createElement("p");
      //  X.innerText = "X";
     //   X.id = "X"
     //   X.style.fontSize = "32px";
     //   document.getElementById("header").appendChild(X);
      //  document.getElementById("X").addEventListener("click", aktiverMeny);
    }

    else {
        hamburgerMenyen.style.display = "none"
    }

}
