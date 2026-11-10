const productos = [
    ["1", "Cocacola", "$100", "1.png"],
    ["2", "Cocacola 2", "$200", "2.png"],  
    ["3", "Cocacola 3", "$300", "3.png"],
    ["4", "Cocacola 4", "$400", "4.png"],       
    ["5", "Cocacola 5", "$500", "5.png"],
    ["6", "Cocacola 6", "$600", "6.png"],
    ["7", "Cocacola 7", "$700", "7.png"],  
    ["8", "Cocacola 8", "$800", "8.png"],
    ["9", "Cocacola 9", "$900", "9.png"],   
    ["10", "Cocacola 10", "$1000", "10.png"],        
]

if(window.addEventListener){
    var codigo = "";
    window.addEventListener("keydown", function(e){
        codigo+=String.fromCharCode(e.keyCode);
        if(e.keyCode==13) {
            alert("Buscar "+codigo);
            Buscar(codigo);
            codigo="";
        }
    }, true);
}

function Buscar(codigo) {
    var esta = false;
    var tiempo;
    clearTimeout(tiempo)
    for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] == codigo.trim()) {
            //alert ("lo encontré");
            document.getElementById("imagen").src="./img/"+productos[i][3];
            document.getElementById("nombre_precio").innerHTML=productos[i][1]+" "+productos[i][2];
            esta = true;
            tiempo = setTimeout(function(){window.
            break;
        }
    if(esta==false){ //alert("El producto no se encuentra en la base de datos"); 
        document.getElementById("imagen").src="./img/error.png";
        document.getElementById("nombre_precio").innerHTML="Producto no encontrado";

        }
    }   
}