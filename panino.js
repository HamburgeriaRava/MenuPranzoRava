var result = initial();
window.onload = result;

function initial() {
 var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);
loadData(c);
}

async function loadData(c) {
  let { data: panino, error } = await supabase
  .from('Panini')
  .select('*')
  .eq('id', c);
   panino.forEach(async (item, index, arr) => {
    console.log(item.Nome);
    displayData(item);
  });
}

function displayData(panino) {
    var div = document.getElementById('component');
    var nav = document.getElementById('nav');
    var _titolo = document.createElement('h1');
    var _container = document.createElement('div');
    var _foto = document.createElement('img');
    var _descrizione = document.createElement('h1');
    var _prezzo = document.createElement('h1');
    
    _titolo = panino.Nome;
    nav.append(_titolo);

    _container.className = 'container'
    _foto.className = 'paninoImg';
    _descrizione.className = 'paninoDesc';
    _prezzo.className = 'paninoPrezzo';

    _foto.src = panino.url
    _descrizione.innerHTML = panino.Ingredienti;
    _prezzo.innerHTML = panino.Prezzo;

    _container.append(_foto);
    _container.append(_descrizione);
    _container.append(_prezzo);
    div.append(_container);

}

function back() {
	window.open("index.html","_self");
}
