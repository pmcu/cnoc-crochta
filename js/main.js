var nuacht = `
"Seo an nuacht a chuirfeas
mé isteach anseo feasta.
"


`
var seol = "pol-scl.html";

var cat = ` "Cat an-mhór a bhí ann.
Chonaic mé é lá amháin ar an díon
agus chuir sé eagla orm.  "

`

document.getElementById('nuacht').innerHTML=`
 <h3 class="app-title">Nuacht</h3>
 <p class="footer">${nuacht}</p>
<nav><a href="${seol}">Seol</a></nav>
`

