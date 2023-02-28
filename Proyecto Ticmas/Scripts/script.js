// Variables
const button = document.getElementById('button');
const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const edad = document.getElementById('cumpleanios');
const ciudad = document.getElementById('ciudad');
const telefono = document.getElementById('telefono');
const empleo = document.getElementById('empleo');
const botonModoOscuro = document.getElementById('dark-mode-button');
const cuerpoPagina = document.body;
const links = document.querySelectorAll('a');


//Funciones

const ramdomUser = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    console.log(datos);
    
    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    edad.textContent = datos.dob.age;
    ciudad.textContent = datos.location.city;
    telefono.textContent = datos.cell;
    
}

button.addEventListener('click', ramdomUser);
document.addEventListener ('DOMContentLoaded', ramdomUser);



botonModoOscuro.addEventListener("click", function() {
    cuerpoPagina.classList.toggle("dark-mode-body");
    
    
    if (cuerpoPagina.classList.contains("dark-mode-body")) {
      botonModoOscuro.textContent = "Modo Normal";
      links.forEach(function(links) {
      links.style.color = 'white';
      
      });
        
    } else {
      botonModoOscuro.textContent = "Modo Oscuro";
      links.forEach(function(links) {
      links.style.color = 'black';
      
    
      });
    }
  });
