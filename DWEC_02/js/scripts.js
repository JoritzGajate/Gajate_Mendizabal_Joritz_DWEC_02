'use strict'

console.log('Empieza el programa')


// Array para añadir los socios
var arraySocios= new Array()

// Metodo que lee el JSON y carga los socios iniciales al array
cargarSociosJSON()

// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data);
      aniadirSociosInicialesArray(data)
      // Leemos los datos del JSON y se los pasamos a la función  
      // aniadirSociosInicialesArray como parametro
    } )
  })
}

/* 
    Metodo para añadir socios al array
    Recorre los datos obtenidos del JSON, separa
    los distintos atributos y se los pasa a crearSocio como parametro
*/
function aniadirSociosInicialesArray (datos) { 
    for (let i=0; i<datos.length; i++) {
      var unNombre=(datos[i].nombre)
      var unApellido=(datos[i].apellido)
      var unId=(datos[i].id)
      crearSocio(unNombre,unApellido,unId)
    }
}

/*
    Metodo para capturar los datos del socio introducido en el formulario
    Recoge los valores puestos en las etiquetas input y llama a crearSocio
    para meterlos al array
*/
function capturarDatosSocio () {
  let elNombre=document.getElementById('fnombre').value
  let elApellido=document.getElementById('fapellido').value
  let elId=crearID()
  crearSocio(elNombre, elApellido, elId)
  console.log(arraySocios)
}

/* 
TODO: 
    Metodo para crear un obejto socio pasandole el nombre, apellido e id
    y añadirlo al array
 */
function crearSocio (nombre, apellido, id) {
  const socio = {
    nombre : nombre,
    apellido : apellido,
    id : id
  }
  arraySocios.push(socio)
}

/*
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  let idNuevo = arraySocios[arraySocios.length-1].id
  return idNuevo+1
}

// EJERCICIO 2

/*
  Metodo que recorre el array con un bucle y pinta los socios en el contenedor asignado
*/
function pintarListaSocios () {
  var resultado = "<br>"
  for (let j=0; j<arraySocios.length; j++) {
    resultado += "Socio número " + arraySocios[j].id + ": " + arraySocios[j].nombre +" " + arraySocios[j].apellido + "<br/> <br>" 
  }
  document.getElementById("contenedorPintarSocios").innerHTML = resultado 
}

// ------------------- MAIN ------------------------

console.log('Acaba el programa')
