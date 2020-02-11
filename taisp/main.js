var i = 0; //start point
var images = [];
var time = 9000;

// image list

images[0] = 'img/1.jpg';
images[1] = 'img/17.png';
images[2] = 'img/3.jpg';
images[3] = 'img/3b.jpg';
images[4] = 'img/28.jpg';
images[5] = 'img/9.jpg';
images[6] = 'img/36.jpg';
images[7] = 'img/16.jpg';
images[8] = 'img/5.jpg';
images[9] = 'img/6.jpg';
images[10] = 'img/32.jpg';
images[11] = 'img/11b.jpg';
images[12] = 'img/7.jpg';
images[13] = 'img/41.png';
images[14] = 'img/8.jpg';
images[15] = 'img/21.jpg';
images[16] = 'img/19.jpg';
images[17] = 'img/14.jpg';
images[18] = 'img/49.jpg';
images[19] = 'img/22.jpg';
images[20] = 'img/4.jpg';
images[21] = 'img/27.jpg';
images[22] = 'img/46.jpg';
images[23] = 'img/38.jpg';
images[24] = 'img/25.jpg';
images[25] = 'img/29.jpg';
images[26] = 'img/45.jpg';
images[27] = 'img/39.jpg';
images[28] = 'img/2.jpg';

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

