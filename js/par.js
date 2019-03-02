
var par2 ="<h2>An Scéal</h2>Seo an dara halt. \
Boc mór buí a bhí ann. \
Chaitheadh sé hata mór biorach.";
function myFunction() {
  document.getElementById("demo").innerHTML = "<h2>Up the Entry</h2><p>Sin mar dhéanfadh\
  tagairt do áit san am. Bhí trí ghnó thuas ansin. Bheadh sé chomh maith\
  againn cur síos orthu ó cheann go ceann. \
  <p>agus an lá sin \
  bhí sé deas agus buí.</p>";
  document.getElementById('myImage').src='pic/blessed.jpg';
  document.getElementById("demo2").innerHTML=par2;
  var audio = new Audio( "ceol/budda.mp3" ); audio.play();
}
function myFunction2() {

document.getElementById("demo").innerHTML = "<h2>Bye byes, you boy you.</h2>";
document.getElementById('myImage').src='pic/fear.jpg';
document.getElementById("demo2").innerHTML="";
}
