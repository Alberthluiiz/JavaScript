async function obtenerData(){
    await fetch("https://api.github.com/repos/hadley/ggplot2/commits")
    .then(response=>response.json())
    .then(json=> console.log(json))
    .catch(error => console.log("Solicitud Fallida", error))
}

obtenerData();