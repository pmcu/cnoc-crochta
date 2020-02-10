var i = 0; //start point
var images = [];
var time = 9000;

// image list

images[0] = 'img/1.jpg';
images[1] = 'img/17.png';
images[2] = 'img/3.jpg';
images[3] = 'img/3b.jpg';
images[4] = 'img/5.jpg';
images[5] = 'img/6.jpg';
images[6] = 'img/31.jpeg';
images[7] = 'img/11b.jpg';
images[8] = 'img/41.png';
images[9] = 'img/21.jpg';
images[10] = 'img/19.jpg';
images[11] = 'img/14.jpg';

// change image
function changeImg(){
document.slide.src = images[i];

	if( i < images.length -1 ){
	i++;
	} else {
         i = 0;
	}

setTimeout("changeImg()", time);
}

window.onload = changeImg;

