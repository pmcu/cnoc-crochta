
var par2 ="<h2>\'The Old Time Entries\'</h2>\
<p><blockquote>\
Sweet at the far en' of the edge o' dark till pass an entry. There \
could come different things down out of it: the smell o' tobaccy sucked \
out of a Peterson Pipe; a verse of an aul dirty comallya; the hum of cheap scent or scenty soap; \
a hat that blew aff; \
a bat a lad let aff for the crack; or maybe a push-bike carryin' a \
a courtin' couple an' a dozen o' stout. An' you could look up then \
an see jaws an' noses lit up wi' fag-buts an' eyes. \
<br><br><cite>An Bhean ar imeall an Bhaile</cite></blockquote>\
 <i>bealach isteach<i>."
 var sonra1 = "<h3>Bealach Eile</h3><table>\
 <th><i>Entry</i></th><th>Sráid</th><th>Ábhar</th>\
 <tr><td>Lenagh's Entry</td><td>Príomhshráid</td><td>Suirí is Oiliúint eile</td></tr>\
<tr><td>Dalzell's Entry</td><td>Sráid an Droichid</td><td>Caitheamh Tobac & Comhrá Poilitíochta is Smuglála</td></tr>\
<tr><td>Carlin's Entry</td><td>Sráid an Mhargaidh</td><td>Cluichí: caitheamh bonn, mirlíní(taws)</td></tr>\
<tr><td>Kinnear's Entry</td><td>Sráid an Mhargaidh</td><td>Codladh</td></tr>\
<tr><td>Lenagh's Entry</td><td>Sráid Chineal Eoghain</td><td>Tioncslaíocht & Oiliúint - Ceol san oíche</td></tr>\
<tr><td>Freighter's Entry</td><td>Tionsclaíocht & Dráma</td><td>Tioncslaíocht & Oiliúint</td></tr>\
 </table>"
var par3 ="<p><blockquote>\
There was different entries. I fairly enjoyed goin' up them myself. \
<br><br><cite>A Red-faced fello', sittin' beside Doctor Heanan.</cite></blockquote></p>"
var audio = new Audio( "ceol/budda.mp3" );
var audio2 = new Audio( "ceol/temple-in.mp3" );
var audio3 = new Audio( "ceol/temple.mp3" );
function myFunction() {
  document.getElementById("demo").innerHTML = par3;
  document.getElementById('myImage').src='pic/blessed.jpg';
  document.getElementById("demo2").innerHTML=par2;
 audio.play();
}
function myFunction5() {
 document.getElementById("myDIV").style.visibility = "hidden";
  }
  function myFunction6() {
   document.getElementById("bt3").style.visibility = "hidden";
    }
function myFunction2() {

//document.getElementById("demo").innerHTML = "<h2>Bye byes, you boy you.</h2>";
document.getElementById('myImage').src='pic/fear.jpg';
document.getElementById("demo2").innerHTML="";
document.getElementById("demo").innerHTML="";
document.getElementById("ceann").innerHTML="Dhá Thaephota agus iad Lán";
audio.pause();
audio2.pause();
audio3.play();
}
function myFunction3() {
document.getElementById("eol").innerHTML = sonra1;
document.getElementById("ceann").innerHTML = "Aul Time Entries 2"
document.getElementById("demo").innerHTML="";
document.getElementById("demo2").innerHTML="";
document.getElementById('myImage').src='baileMor/millwall.png';
audio.pause();
audio3.pause();
audio2.play();
myFunction5();
myFunction6();
}
