var myObj, myJSON, text, obj;

var A = [`
<h3>Réamhrá</h3>
<p>
An té ar suim leis stair an bhaile, tá roinnt bheag foinsí ar fáil aige.
Tá beagán leabhar agus ábhar scríofa eile ina bhfuil scéalta faoin bhaile ar fáil iontu. Cuid acu, ní furast theacht orthu, de bharr iad a bheith as cló leis na blianta.
</p>
<ul>
	<li>Keady 100 Years Ago</li>
	<li>The Topographical Dictionary of Ireland</li>
	<li>A Short History of Keady Parish, its church and people</li>
	<li>Souvenir of the Rededication of St. Patrick's Church, Keady</li>
</ul>
<p>Is beag é an liosta sin, gan amhras. Ach tá foinsí eile ann. Tá
ábhar ó na nuachtáin, tá taifid phoiblí ann, gasaitéir, taifid eaglasta, ábhar
a bhailigh an cumann staire áitiúil, agus cuid mhaith ábhair ar fáil anois ar
an idirlíon. Agus tá ceann de na rudaí is mó tábhacht ó thaobh chultúr an phobail
ar bith, mar atá Béaloideas a mhair i seanchas agus i scéalta na ndaoine.
</p>
<p>Tá sé ar intinn ag Tadhg, amharc ar chuid den ábhar, agus giotaí suimiúla
de a fhoilsiú anseo go soineanta.
</p>

`,
`
<h3>Tús na Seilge </h3>
<p>
Seilg ar bith dá raibh riamh ann, b'éigean tús a chur léi áit éigin. Dá mbá thús
lag féin é, níl dul i gceann gnoithe gan é. Is é an tús a chuirfeas Tadhg lena
chuid oibre staire, an lá seilge seo, léim isteach sa leabhar <i>Souvenir of the Rededication
of St. Patrick' Church, Keady.</i> Ós lán béil agus cluaise sin de theidil, imreoidh mé giorra
air, agus <i>An Souvenir</i>, a thabhairt air, agus mé ag tagairt dó feasta.
</p>
<h4>Cúis Rogha Thaidhg</h4>
<p>
Foilsíodh <i>An Souvenir</i> sa bhliain 1989. Sa bhliain sin, bhí mé i mo mhadadh óg. Is minic is
féidir leis an tseanmhadadh é féin a láidriú faoi choinne na seilge úire, fríd cuairt a thabhairt
air féin, agus é i mbarr a mhaitheasa mar shealgaire. Ar an dóigh sin, is féidir go pointe a bheith
óg díograiseach arís. Is cuidiú breá don staraí cuimhní a óige féin agus é ag toiseacht a phlé chuimhní
an phobail.
</p>
<h4>An Duine</h4>
<p>Tús maith eile le cuntas ar bith, an tús a thoisíonn le duine - tús féin a lonnú go sealadach,
ina chuid <strong>bróg</strong> féin.
<q>Is cuimhneach liom an fear sin</q>, a chluintear ó éisteoir minic go leor. Agus corruair,
<q>Agus is cuimhneach liom an té a bhí ann roimhe</q>. Is cuimhneach le Tadhg cuid mhaith de na carachtair a
d'imir tionchar mór ar mhuintir an Bhaile Mhóir. Tá trácht san <i>Souvenir</i> orthu. Is féidir leis, dar
leis féin, in amanna, an saol ar fad a bhí ann le linn na gcarachtar seo, an saol sin a atógáil.
</p>
`,
`
<h3>An Tae</h3>
<p>Más tae a tá tú a dh iarraidh, déan é.</p>
`,
`
<h3>Hataí</h3>
<p>Ba mhaith liom an hata biorrach, le do thoil.</p>
`,
`
<h3>Bia</h3>
<p>Ba mhaith liom an cat a ithe, le do thoil.</p>
`,
`end`];

var iterator = A.values();
place = document.getElementById("array");
index = 0;
function myFunction() {
//	document.getElementById("dog").src = "img/linn-1.jpg";
	var crnt = iterator.next().value;
	place.innerHTML = crnt;
        back();
}
dem = document.getElementById("demo");
function back(){
	if(place.innerHTML =="end"){
	place.innerHTML="Aon";
	iterator= A.values();
//document.getElementById("dog").src ="img/tadhg.jpg";
	myfunction();
	}
}

function goBack() {
  window.history.back();
}
