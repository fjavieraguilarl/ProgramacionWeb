
function buscador(){
    var a = document.getElementById("texto").value;
    var b = a.toLowerCase();
    var obj = document.getElementById("pagina");
if(b=="arquitectura"){
    obj.setAttribute("action", "arquitectura.html");
}
else if(b=="evolucion"){
    obj.setAttribute("action", "evolucion.html");
}
else if(b=="planificacion"){
    obj.setAttribute("action", "planificacion.html");
}
else if(b=="arquitectura"){
    obj.setAttribute("action", "tecnologias.html");
}
else if(b=="unidad 1"){
    obj.setAttribute("action", "unidad1.html");
}
else{
    alert("No se encontraron registros");
}
}
