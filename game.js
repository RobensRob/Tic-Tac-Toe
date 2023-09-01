let tilesMap = document.querySelectorAll('.tile');
let tiles = Array.apply(null, tilesMap);
let resetButton = document.querySelector('#reset');

let display = document.querySelector('.player');

let playerXTurn = true;

addEventListener("load", (event) => {
    tiles.forEach(element => {
        element.addEventListener("click", (listener) => {
            if(!element.classList.contains('clicked')) {
                span = document.createElement('span');
                if(playerXTurn) {
                    span.className = "playerX";
                    span.appendChild(document.createTextNode('X'));
                    display.innerHTML = "O";
                } else {
                    span.className = "playerO";
                    span.appendChild(document.createTextNode('O'));
                    display.innerHTML = "X";
                }
                element.appendChild(span);
                playerXTurn = !playerXTurn;
                display.classList.toggle('playerX');
                display.classList.toggle('playerO');
                element.classList.add('clicked');
            }
        });
    });
    resetButton.addEventListener("click", () => {
        tiles.forEach(element => {
            element.innerHTML = "";
            playerXTurn = true;
            display.innerHTML = "X";
            display.classList.remove('playerO');
            display.classList.add('playerX');
            element.classList.remove('clicked');
        })
    })
});