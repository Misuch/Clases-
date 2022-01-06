async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5502/Practicando-json/assets/json/data.json");
    const json = await response.json();

    console.log(json);
    console.log(json.nombre);
    console.log(json.direccion.colonia);
    console.log(json.experiencia);
    json.experiencia.forEach(element => {
        console.log(element.empresa);
    });

}

obtenerDatos();