async function FetchAllData() {
    let { data: Panini, error } = await supabase
  .from('Panini')
  .select('*');
  
  Panini.forEach((item, index, arr) => {
    console.log(item.Nome);
    addItemsToList(item);
  });
}

function addItemsToList(panino) {
    var div = document.getElementById('component');
    var _content = document.createElement('div');
    var _desc = document.createElement('div');
    var _img = document.createElement('img');
    var _nome = document.createElement('h2');
    var _ingredienti = document.createElement('h3');
    var _prezzo = document.createElement('h3');
    
    _content.className = 'panino';
    _nome.className = 'nome';
    _ingredienti.className = 'ingredienti';
    _prezzo.className = 'prezzo';
    _desc.className= 'desc';
    _img.className = 'fotoPanino';


    _nome.innerHTML = panino.Nome;
    _ingredienti.innerHTML = panino.Ingredienti;
    _prezzo.innerHTML = panino.Prezzo;

    _content.append(_nome);
    _desc.append(_img);
    _desc.append(_ingredienti);
    _content.append(_desc);
    _content.append(_prezzo);
    div.append(_content);
}


var result = FetchAllData();
window.onload = result;