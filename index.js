console.log("hello");

let player = 'X';
function play() {
    // Switch turns (ex.: if it was X's turn, it should be O's turn next)
    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    // player = player === 'X' ? 'O' : 'X';
    const playerSpan = document.querySelector('#current-player');
    playerSpan.innerText = player;
}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play);
}