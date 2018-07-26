// window.onload = function (){
//     var contenedor = document.getElementById("contenedor_carga");
    
//     contenedor.style.visibility = "hidden";
//     contenedor.style.opacity = "0";
// }


window.onload=function(){
    var posicion=window.navigator.geolocation;
    var opciones={enebleHighAccuracy:true,timeout:
        45000}
    posicion.getCurrentPosition(mostrarcoord,sifalla,opciones)
}

function mostrarcoord(pos){
    document.getElementById("lati").innerText=pos.coords.latitude;
    document.getElementById("long").innerText=pos.coords.longitude;

    var punto= new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    var opcionesm= {zoom:20,center:punto,mapTypeId:google.maps.MapTypeId.SATELLITE}
    var mapa = new google.maps.Map(document.getElementById("mimapa"), opcionesm)
    var marca= new google.maps.Marker({position:punto,map:mapa, title:"el If"})
}

function sifalla(err){
    alert (err)
}

var contenido = document.querySelector("#contenido")
function traer (){
    fetch ()
}
