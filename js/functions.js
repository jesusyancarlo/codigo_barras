const productos = [
    ["000000000017", "SMG4", "$100", "1.png"],
    ["000000000024", "TARI", "$200", "2.png"],  
    ["000000000031", "MEGGY", "$300", "3.png"],
    ["000000000048", "UZI", "$400", "4.png"],       
    ["000000000055", "PONMI", "$500", "5.png"],
    ["000000000062", "GUINEVERE", "$600", "6.png"],
    ["000000000079", "MEL", "$700", "7.png"],  
    ["000000000086", "KIT BODEGA", "$800", "8.png"],
    ["000000000093", "SMG3", "$900", "9.png"],   
    ["000000000109", "MR. PUZZLES (ZAMINATION)", "$1000", "10.png"],        
]

if(window.addEventListener){
    var codigo = "";
    window.addEventListener("keydown", function(e){
        codigo+=String.fromCharCode(e.keyCode);
        if(e.keyCode==13) {
            Buscar(codigo);
            codigo="";
        }
    }, true);
}

function Buscar(codigo){ 
   var esta = false;
   var tiempo;
   clearTimeout(tiempo)
   for (let i = 0; i < productos.length; i++) {
      if(productos[i][0]==codigo.trim()){
         //alert ("Lo encontré");
         document.getElementById("imagen").src="./img/" + productos[i][3];
         document.getElementById("nombre_precio").innerHTML=productos[i][1]+" "+productos[i][2];
         esta = true;
         tiempo = setTimeout(function(){window.location.href="index.html"},3000);
         break;
      }
   }
   if(esta==false){ //alert("El producto no se encuentra en la base de datos");
      document.getElementById("imagen").src="./img/error.png";
      document.getElementById("nombre_precio").innerHTML="No se encuentra el producto.";
      tiempo = setTimeout(function(){window.location.href="index.html"},3000);
   }
}