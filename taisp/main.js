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
images[12] = 'img/53.jpg';
images[13] = 'img/41.png';
images[14] = 'img/8.jpg';
images[15] = 'img/21.jpg';
images[16] = 'img/19.jpg';
images[17] = 'img/14.jpg';
images[18] = 'img/49.jpg';
images[19] = 'img/22.jpg';
images[20] = 'img/15.jpg';
images[21] = 'img/27.jpg';
images[22] = 'img/46.jpg';
images[23] = 'img/38.jpg';
images[24] = 'img/25.jpg';
images[25] = 'img/29.jpg';
images[26] = 'img/45.jpg';
images[27] = 'img/39.jpg';
images[28] = 'img/83.jpg';
images[29] = 'img/60.jpg';
images[30] = 'img/78.jpg';
images[31] = 'img/83.jpg';
images[32] = 'img/76.jpg';
images[33] = 'img/48.jpg';
images[34] = 'img/68.jpg';
images[35] = 'img/54.jpg';
images[36] = 'img/55.jpg';
images[37] = 'img/50.jpg';
images[38] = 'img/61.jpg';
images[39] = 'img/24.jpg';
images[40] = 'img/51.jpg';
images[41] = 'img/82.jpg';
images[42] = 'img/64.png';
images[43] = 'img/23.jpg';
images[44] = 'img/57.jpg';
images[45] = 'img/57.jpg';
images[46] = 'img/80.jpg';
images[47] = 'img/73.jpg';
images[48] = 'img/64.png';
images[49] = 'img/75.JPG';
images[49] = 'img/63.png';

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
