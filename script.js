let btnRestart = document.getElementById("restart");
let btnOpt = document.querySelectorAll(".button")

//Winner options

let wins = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];



//Put elements

let turnX = true;
let count = 0;

btnOpt.forEach((element) => {
        element.addEventListener("click", () => {
            if(turnX) {
                
                //Put X
                element.innerText = "X";
                element.disabled = true;
                
                turnX = false;
            } else {
                
                //Put O
                element.innerText = "O";
                element.disabled = true;
                
                turnX = true;
            }
        });
});


