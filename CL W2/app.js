let lightButton;
let darkButton;
let heading;
let paragraph;
let lightPara;
let darkPara;
let lightImage;
let darkImage;
let home;

heading = document.getElementById('headingId');
paragraph = document.getElementById('pId');
lightPara = document.getElementById('lightPara');
darkPara = document.getElementById('darkPara');
homeButton = document.getElementById('home');
lightButton = document.getElementById('light-button');
darkButton = document.getElementById('dark-button');
lightImage = document.getElementById('lightImage');
darkImage = document.getElementById('darkImage');

lightPara.style.display = 'none';
darkPara.style.display = 'none';
lightImage.style.display = 'none';
darkImage.style.display = 'none';
homeButton.style.display = 'none';

lightButton.addEventListener('click', function(){
    heading.style.display = 'none';
    paragraph.style.display = 'none';
    lightButton.style.display = 'none';
    darkButton.style.display = 'none';
    lightPara.style.display = 'block';
    lightImage.style.display = 'block';
    homeButton.style.display = 'block';
})

darkButton.addEventListener("click", function() {
    heading.style.display = 'none';
    paragraph.style.display = 'none';
    lightButton.style.display = 'none';
    darkButton.style.display = 'none';
    darkPara.style.display = 'block';
    darkImage.style.display = 'block';
    homeButton.style.display = 'block';
});

homeButton.addEventListener("click", function() {
    heading.style.display = 'block';
    paragraph.style.display = 'block';
    lightButton.style.display = 'block';
    darkButton.style.display = 'block';
    darkPara.style.display = 'none';
    lightPara.style.display = 'none';
    lightImage.style.display = 'none';
    darkImage.style.display = 'none';
    homeButton.style.display = 'none';
});