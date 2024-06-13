console.log("hello");

function play() {
    console.log("Square was clicked");
}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play);
}