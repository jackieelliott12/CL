let letterInput = document.getElementById('letterInput');
let enterButton = document.getElementById('enterButton');
let displayArea = document.getElementById('displayImage');

enterButton.addEventListener('click', displayImageBasedOnInput);

letterInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        displayImageBasedOnInput();
    }
});

//per help from chatGPT
function displayImageBasedOnInput() {
    let input = letterInput.value.trim(); 
    let length = input.length;

    displayImage.style.display = 'none';
    displayImage.src = '';

    if (length === 1) {
        displayImage.src = 'images/p1.png'; 
    } else if (length === 2) {
        displayImage.src = 'images/p2.png';
    } else if (length === 3) {
        displayImage.src = 'images/p3.png';
    } else if (length === 4) {
        displayImage.src = 'images/p4.png';
    } else if (length === 5) {
        displayImage.src = 'images/p5.png';
    } else if (length === 6) {
        displayImage.src = 'images/p6.png';
    } else if (length == 7) {
        displayImage.src = 'images/p7.png';
    } else if (length == 8) {
        displayImage.src = 'images/p8.png';
    } else if (length >= 9) {
        displayImage.src = 'images/p9.png';
    } 

    if (length > 0) {
        displayImage.style.display = 'block';
    }
}
