/* var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/slideshow/slideshow1.jpg';
images[1] = 'images/slideshow/slideshow2.jpeg';
images[2] = 'images/slideshow/slideshow3.png';

function changeImg() {
    document.slides.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg; */