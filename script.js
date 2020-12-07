// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
//
// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
//
// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.


$(document).ready(
  function(){

    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    const colors = [
      "red",
      "blue",
      "green"
    ];

    // {name: "dog",
    // prefix: "fa-",
    // type: "animal",
    // family: "fas"}

    const container = $(".icone");

    const tipo = tipoColore(icons);

    const iconeColorate = copiaColore(icons, colors, tipo);

    stampa(iconeColorate, container);

    selezionaOpzione($("#type"), tipo);

    $("#type").change(
      function(){
        const tipoSelzionato = $(this).val();
        if (tipoSelzionato == ""){
          stampa(iconeColorate, container);
        } else {
          const iconeFiltrate = iconeColorate.filter(
            (element) => {
              return element.type == tipoSelzionato;
            }
          );
          stampa(iconeFiltrate, container);
        }
      }
    );



  }
);

//-------------------------------
// FUNCTIONS

function stampa(array, container){
  container.html("");
  array.forEach((element, i) => {
    const {name, prefix, family, color} = element;
    container.append(`
      <div>
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div>${name.toUpperCase()}</div>
      </div>
    `);
  });
}

function tipoColore(array){
  const tipo = [];

  array.forEach((element) => {
    if (tipo.includes(element.type) == false) {
      tipo.push(element.type);
    }
  });
  return tipo;
}

function copiaColore(iconeArray, coloreArray, tipoArray) {

  const newArray = iconeArray.map(
    (element) => {
      const posizioneTipo = tipoArray.indexOf(element.type);
      const iconeColorate = coloreArray[posizioneTipo];
      const newElement = {
        ...element,
        color: iconeColorate
      };
      return newElement;
    }
  );
  return newArray;
}

function selezionaOpzione(select, tipoArray) {
  tipoArray.forEach((element) => {
    select.append(`
      <option value="${element}">${element}</option>
      `);
  });
}
