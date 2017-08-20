var fondo = document.getElementById('fondo');
var derecha = document.getElementById('derecha');
var izquierda = document.getElementById('izquierda');
var figure = document.getElementById('figure');
var img = document.getElementById('img');
var caja1 = document.getElementById('aplicaciones');
var caja2 = document.getElementById('web');
var listaCaja1 = ["img/galeria/aplicacionesWeb1.jpg", "img/galeria/aplicacionesWeb2.jpg"];
var listaCaja2 = ["img/galeria/disenoWeb1.jpg", "img/galeria/disenoWeb2.jpg"];
var contenedorLista;

var cont = 0;
var comprobar = true;






caja1.addEventListener("click", cajaClick);
caja2.addEventListener("click", cajaClick);

fondo.addEventListener("click", fondoClick, false);
img.addEventListener("click", function(){
  comprobar = true;
}, false);
derecha.addEventListener("click", derechaClick, false);
izquierda.addEventListener("click", izquierdaClick, false);






function cajaClick(ev){

    fondo.style.display = "flex";
    switch (ev.target.id) {
      case "aplicaciones":
        contenedorLista = listaCaja1;
        img.setAttribute("src",contenedorLista[cont]);
        break;
      case "web":
        contenedorLista = listaCaja2;
        img.setAttribute("src",contenedorLista[cont]);
        break;
      default:

    }
}

function fondoClick(){

    if(comprobar == false){
      fondo.style.display = "none";
      cont = 0;
      img.setAttribute("src",contenedorLista[cont]);
    }
    comprobar = false;
}

function derechaClick(){
  comprobar = true;
  if(cont > 0){
      img.setAttribute("src",contenedorLista[--cont]);
  }
}

function izquierdaClick(){
  comprobar = true;
  if(cont < listaCaja1.length-1){
    img.setAttribute("src",contenedorLista[++cont]);
  }else{
    cont = 0;
    img.setAttribute("src",contenedorLista[cont]);
  }


}
