async function FetchAllData() {
    let { data: Primi, errorPrimi } = await supabase
  .from('Primi')
  .select('*');
  
  Primi.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item, 'primi');
  });

  let { data: Secondi, errorSecondi } = await supabase
  .from('Secondi')
  .select('*');

  Secondi.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item, 'secondi');
  });

  let { data: Contorni, errorContorni } = await supabase
  .from('Contorni')
  .select('*');

  Contorni.forEach(async (item, index, arr) => {
    console.log(item.Nome)
    addItemsToList(item, 'contorni');
  });
}

function addItemsToList(piatto, id) {
    var div = document.getElementById(id);
    var _piatto = document.createElement('div');
    var nome = document.createElement('div');
    var prezzo = document.createElement('div');
    
    _piatto.className = 'row'
    nome.className = 'pietanza';
    prezzo.className = 'prezzo';


    nome.innerHTML = piatto.Nome;
    prezzo.innerHTML = piatto.Prezzo;
    
    _piatto.append(nome);
    _piatto.append(prezzo);
    div.append(_piatto)
}

var result = FetchAllData();
window.onload = result;


function panini() {
    window.location.href = "./index.html";
}