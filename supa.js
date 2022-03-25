async function FetchAllData() {
    let { data: Panini, error } = await supabase
  .from('Panini')
  .select('*');

  let { data: Primi, error1 } = await supabase
  .from('Primi')
  .select('*');

  let { data: Secondi, error2 } = await supabase
  .from('Secondi')
  .select('*');

  let { data: Contorni, error3 } = await supabase
  .from('Contorni')
  .select('*');
  
  Panini.forEach(async (item, index, arr) => {
    console.log(item.Nome);
    addItemsToList(item);
  });

  Primi.forEach(async (item, index, arr) => {
    console.log(item.Nome);
    addItemsToListRow(item);
  });

  Secondi.forEach(async (item, index, arr) => {
    console.log(item.Nome);
    addItemsToListRow(item);
  });

  Contorni.forEach(async (item, index, arr) => {
    console.log(item.Nome);
    addItemsToListRow(item);
  });
}

function addItemsToList(panino) {
    var div = document.getElementById('component');
    var _content = document.createElement('div');
    var _contentOpacity = document.createElement('div');
    var _desc = document.createElement('div');
    var _img = document.createElement('img');
    var _nome = document.createElement('h2');
    var _ingredienti = document.createElement('h3');
    var _prezzo = document.createElement('h3');
    
    _content.className = 'panino';
    _content.setAttribute("onclick","ciao("+panino.id+")");
    _contentOpacity.className = 'opacity';
    _nome.className = 'nome';
    _ingredienti.className = 'ingredienti';
    _prezzo.className = 'prezzo';
    _desc.className= 'desc';
    _img.className = 'fotoPanino';


    _nome.innerHTML = panino.Nome;
    _ingredienti.innerHTML = panino.Ingredienti;
    _prezzo.innerHTML = panino.Prezzo;
    _img.src= panino.url;

    _content.append(_nome);
    _content.append(_contentOpacity);
    _content.append(_img);
    //_desc.append(_img);
    //_desc.append(_ingredienti);
    //_content.append(_desc);
    //_content.append(_prezzo);
    div.append(_content);
}

function addItemsToListRow(item){
    var div = document.getElementById('component');
    var _nome = document.createElement('h1');
    var _prezzo = document.createElement('h1');
    var _content = document.createElement('div');
    _content.className = 'pietanza';
    _nome.className = 'nomePietanza';
    _prezzo.className = 'prezzoPietanza';

    _nome.innerHTML = item.Nome;
    _prezzo.innerHTML = item.Prezzo;

    _content.append(_nome);
    _content.append(_prezzo);
    div.append(_content);



}

function beverage(){
    console.log("ciaooooo");
}


var result = FetchAllData();
window.onload = result;

function ciao(i){
    window.open("panino.html?id="+i,"_self");
}

var a = 0;
async function openMenu(){
    var options = document.getElementById('menuOptions');
    var par = document.getElementById('par');
    if(a==0) {
        par.style.transform = 'rotate(-90deg)';
        options.style.pointerEvents = 'auto';
        options.style.bottom = '100%';
        options.style.height = '30vh';
        options.style.opacity = '1';
        a=1;
    }
    else {
        par.style.transform = 'rotate(90deg)';
        options.style.bottom = '50%';
        options.style.height = '0.1vh';
        options.style.opacity = '0';
        options.style.pointerEvents = 'auto';
        a=0;
    }
}