
var par2 ="<h2>The Old Time Entries</h2>Seo an dara halt. \
B'fhéidir nach bhfuil a mhalairt de théarma ann don ghné sráide ach\
 <i>bealach isteach<i>."
 var sonra1 = "<table>\
 <th>Rud</th><th>Rud</th><th>Rud</th>\
 <tr><td>aon</td><td>dó</td><td>trí</td></tr>\
 </table>"
var par3 ="<p><blockquote>\
There was different entries. I fairly enjoyed goin' up them myself. \
<br><cite>Long Peadar, of Lower Newholland</cite></blockquote></p>"
function myFunction() {
  document.getElementById("demo").innerHTML = par3;
  document.getElementById('myImage').src='pic/blessed.jpg';
  document.getElementById("demo2").innerHTML=par2;
  //var audio = new Audio( "ceol/budda.mp3" ); audio.play();
}
function myFunction2() {

document.getElementById("demo").innerHTML = "<h2>Bye byes, you boy you.</h2>";
document.getElementById('myImage').src='pic/fear.jpg';
document.getElementById("demo2").innerHTML="";
}
function myFunction3() {
document.getElementById("eol").innerHTML = sonra1;
document.getElementById("demo").innerHTML="";
document.getElementById("demo2").innerHTML="";
document.getElementById('myImage').src='pic/swanie.jpg';
}
