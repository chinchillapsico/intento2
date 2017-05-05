var arreglo = [

  {
    "nombre": "Macarena",
    "apellido": "Baltra",
    "edad": 27,
    "hobbies": ["encuadernar", "Bailar", "Series"]
  }
  {
    "nombre": "Susana",
    "apellido": "Arce",
    "edad": 28,
    "hobbies": ["Ficción", "Crear cosas", "Escribir"]
  }
  {
    "nombre": "Berenisse",
    "apellido": "Rios",
    "edad": 28,
    "hobbies": ["Leer", "Viajar", "Yoga"]
  }
  {
    "nombre": "Claudia",
    "apellido": "Rivera",
    "edad": 33,
    "hobbies": ["Estar con gatos", "Escribir y leer", "Bailar y hacer yoga"]
  }
  {
    "nombre": "Nicole",
    "apellido": "Aliste",
    "edad": 32,
    "hobbies": ["Video juegos", "escuchar música en inglés", "Aprender"]
  }
  {
    "nombre": "Fran",
    "apellido": "Ruiz-Tagle",
    "edad": 35,
    "hobbies": ["Ilustrar", "hacer clases de manualidades", "pasar tiempo con su pug"]
  }
  {
    "nombre":"Daniela",, 20,
    "apellido": "Medina",
    "edad": 20,
    "hobbies": ["Bailar", "Ver animé", "Dormir"]
  }
  {
    "nombre":"Andrea",
    "apellido": "Miranda",
    "edad": 24,
    "hobbies": ["dibujar", "leer", "aprender cosas nuevas"]
  }


var resultado = [];

 for (i=0; i < arreglo.length;i++) /*recorre el arreglo principal que contiene json, agrega a la variable resultado (los guarda)*/
{
 resultado.push(arreglo[i])
}

resultado.forEach(function(el){ /*imprime el contenido de la variable arreglo y lo del contador de tareas (nuevas tareas añadidas)*/
  contTarea.innerHTML += "<li>" + el.edad + "</li>";
  });
  

  /*function agregarTarea(){ botón: función encargada ade añadir las nuevas tareas en forma de lista.
  	var input = document.getElementById("add-tarea");
  	contTarea.innerHTML += "<li>" + input.value + "</li>";*/

  	function nuevaTarea(nombre, apellido, edad, hobbies){ /*constructor: transforma las nuevas tareas en objetos(como el json que nos entregaron)*/
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.hobbies= hobbies;
  };


