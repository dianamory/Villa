var villa= document.getElementById("villa");
document.addEventListener("keydown",tecladoLobos);
var papel=villa.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var lobo = {
  url: "lobo.png",
  cargaOK: false
};
var teclas={
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};

function cargarFondo()
{
  fondo.cargaOK = true;
  dibuja();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibuja();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibuja();
}
function cargarLobos()
{
  lobo.cargaOK = true;
  dibuja();
}
fondo.imagen= new Image();//definición de objeto o clase Image
fondo.imagen.src=fondo.url;//carga la imagen src desde la ruta de mapa
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen= new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen= new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

lobo.imagen= new Image();
lobo.imagen.src=lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);

var cantidadvaca=aleatorio(1,10);
var cantidadcerdo=aleatorio(1,10);
var xvaca=[], yvaca=[];
var xcerdo=[], ycerdo=[];
var xlobo, ylobo;
var cant=0;
var movy=40; movx=60;

var jugador=prompt("Ingresa tu nombre");
  document.write("<br>   Hola   <strong>"+jugador+"</strong>   Bienvenida al juego<br>");
  document.write("<br> Debes comer  <strong> "+cantidadvaca+"</strong>  Vacas  ");
  document.write("<br>   Debes comer <strong>  "+cantidadcerdo+"</strong>  Cerdos");
function dibuja()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    if (cant==0){
      for(c=0;c<=cantidadvaca;c++)
      {
        xvaca[c]=aleatorio(0,7)*60;
        yvaca[c]=aleatorio(1,10)*40;
        papel.drawImage(vaca.imagen, xvaca[c], yvaca[c]);
      }
    }
    else
    {
      for(c=0;c<=cantidadvaca;c++)
      {
      papel.drawImage(vaca.imagen, xvaca[c], yvaca[c]);
      }
    }
  }//fin vaca

  if(cerdo.cargaOK)
  {
    if (cant==0)
    {
      for(c=0;c<=cantidadcerdo;c++)
      {
        xcerdo[c]=aleatorio(0,7)*60;
        ycerdo[c]=aleatorio(1,10)*40;
        papel.drawImage(cerdo.imagen, xcerdo[c], ycerdo[c]);
      }
    }
    else {
      for(c=0;c<=cantidadcerdo;c++)
        {
          papel.drawImage(cerdo.imagen, xcerdo[c], ycerdo[c]);
        }
    }
  }//fin cerdo

  if(lobo.cargaOK)
  {
    if(cant==0)
    {
      xlobo=0;
      ylobo=0;
      papel.drawImage(lobo.imagen, xlobo, ylobo);
    }
      else
      {
        papel.drawImage(lobo.imagen, xlobo, ylobo);
      }
  }//fin lobo
}//fin de dibuja
function tecladoLobos(evento)
{
  switch (evento.keyCode)
    {
      case teclas.UP:
          papel.drawImage(lobo.imagen, xlobo, ylobo-movy);
          ylobo=ylobo-movy;
          cant=1;
          margen();
          comiendo();
          break;

      case teclas.DOWN:
        papel.drawImage(lobo.imagen, xlobo, ylobo+movy);
        ylobo=ylobo+movy;
        cant=1;
        comiendo();
      break;

      case teclas.LEFT:
        papel.drawImage(lobo.imagen, xlobo-movx, ylobo);
        xlobo=xlobo-movx;
        cant++;
        comiendo();
      break;

      case teclas.RIGHT:
        papel.drawImage(lobo.imagen, xlobo+movx, ylobo);
        xlobo=xlobo+movx;
        cant++;
        comiendo();
      break;
      default:
    }
  }//fin tecladoLobos
function comiendo()
{
  for(c=0;c<=cantidadvaca;c++)
    {
      if(xlobo==xvaca[c] && ylobo==yvaca[c])
        {
          xvaca[c]=xvaca[c+1];
          yvaca[c]=yvaca[c+1];
      }
    }
    for(c=0;c<=cantidadcerdo;c++)
    {
      if(xlobo==xcerdo[c] && ylobo==ycerdo[c])
        {
          xcerdo[c]=xcerdo[c+1];
          ycerdo[c]=ycerdo[c+1];
        }
    }
    dibuja();
}//fin comiendo

function margen()
{
  if(ylobo<40)
  {
    console.log("has chocado");
  }
  if(xlobo<40)
  {
    console.log("has chocado");
  }
}
function aleatorio(min,max)
 {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1)+min);
  return resultado;
}
