
var par2 ="<h2>The Old Time Entries</h2>Seo an dara halt. \
B'fhéidir nach bhfuil a mhalairt de théarma ann don ghné sráide ach\
 <i>bealach isteach<i>."
 var sonra1 = "<h3>Bealach Eile</h3><table>\
 <th><i>Entry</i></th><th>Sráid</th><th>Ábhar</th>\
 <tr><td>Lenagh's Entry</td><td>Príomhshráid</td><td>Suirí is Oiliúint eile</td></tr>\
<tr><td>Dalzell's Entry</td><td>Sráid an Droichid</td><td>Caitheamh Tobac & Comhrá Poilitíochta is Smuglála</td></tr>\
 </table>"
var par3 ="<p><blockquote>\
There was different entries. I fairly enjoyed goin' up them myself. \
<br><cite>Long Peadar, of Lower Newholland</cite></blockquote></p>"
var audio = new Audio( "ceol/budda.mp3" );
var audio2 = new Audio( "ceol/temple-in.mp3" );
function myFunction() {
  document.getElementById("demo").innerHTML = par3;
  document.getElementById('myImage').src='pic/blessed.jpg';
  document.getElementById("demo2").innerHTML=par2;
 audio.play();
}
function myFunction5() {
 document.getElementById("myDIV").style.visibility = "hidden";
  }

function myFunction2() {

//document.getElementById("demo").innerHTML = "<h2>Bye byes, you boy you.</h2>";
document.getElementById('myImage').src='pic/fear.jpg';
document.getElementById("demo2").innerHTML="";
}
function myFunction3() {
document.getElementById("eol").innerHTML = sonra1;
document.getElementById("ceann").innerHTML = "Lá Bananaí"
document.getElementById("demo").innerHTML="";
document.getElementById("demo2").innerHTML="";
document.getElementById('myImage').src='pic/swanie.jpg';
audio.pause();
audio2.play();
myFunction5();
}
