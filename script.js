function mostrarArchivo() {
    var input = document.getElementById("archivo");
    var archivo = input.files[0];

    if (!archivo) {
        alert("Seleccione una imagen");
        return;
    }

    var datos = document.getElementById("datos");

    datos.innerHTML =
        "Nombre: " + archivo.name + "<br>" +
        "Tipo: " + archivo.type + "<br>" +
        "Tamaño: " + archivo.size + " bytes";

    var imagen = document.getElementById("imagen");
    var url = URL.createObjectURL(archivo);

    imagen.src = url;
    imagen.style.display = "block";
}