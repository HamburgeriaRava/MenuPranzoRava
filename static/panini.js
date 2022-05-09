async function FetchAllData() {
    let { data: Panini, error } = await supabase
  .from('Panini')
  .select('*');
  
  Panini.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item);
  });
}

function addItemsToList(panino) {
    var div = document.getElementById('component');
    var _panino = document.createElement('div');
    var title = document.createElement('div');
    var name = document.createElement('div');
    var img = document.createElement('img');
    var price = document.createElement('div');
    var description = document.createElement('div');
    
    _panino.className = 'panino'
    title.className = 'titolo';
    name.className = 'foto';
    price.className = 'prezzo';
    description.className = 'descrizione';


    title.innerHTML = panino.Nome;
    description.innerHTML = panino.Ingredienti;
    price.innerHTML = panino.Prezzo;
    img.src = 'static/img/panino.png'
    
    _panino.append(title);
    name.append(img);
    _panino.append(name);
    _panino.append(price);
    _panino.append(description);
    div.append(_panino)
    // title.append(name);
    // title.append(price);
    // _panino.append(title);
    // _panino.append(description);
    // div.append(_panino);
}

var result = FetchAllData();
window.onload = result;

function piatti() {
    window.location.href = "./piatti.html";
}