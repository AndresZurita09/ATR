const Q1Input = document.querySelector('#Q1');
const Q2Input = document.document.querySelector('#Q2');
const Q3Input = document.document.querySelector('#Q3');
const Q4Input = document.document.querySelector('#Q4');
const Q5Input = document.document.querySelector('#Q5');
const Q6Input = document.document.querySelector('#Q6');
const Q7Input = document.document.querySelector('#Q7');
const formulario = document.querySelector('#register')

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getMonth();

let reg = false;

/* window.alert("                ¡NOTA! \n\n 1. Esta revisión debe realizarse por fuera de la malla ciclónica, en caso de algún desperfecto u observación deberá notificarse inmediatamente al supervisor de mantenimiento.\n\n 2. Si hay fuga de aceite, notificar al supervisor de mantenimiento que se comunique con un proveedor externo para que evalué y corrija la falla. ") */

Q1.addEventListener('change',
  function () {
    var selectedOption = this.options[Q1.selectedIndex];
    console.log('Respuesta 1 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q2.addEventListener('change',
  function () {
    var selectedOption = this.options[Q2.selectedIndex];
    console.log('Respuesta 2 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q3.addEventListener('change',
  function () {
    var selectedOption = this.options[Q3.selectedIndex];
    console.log('Respuesta 3 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q4.addEventListener('change',
  function () {
    var selectedOption = this.options[Q4.selectedIndex];
    console.log('Respuesta 4 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q5.addEventListener('change',
  function () {
    var selectedOption = this.options[Q5.selectedIndex];
    console.log('Respuesta 5 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q6.addEventListener('change',
  function () {
    var selectedOption = this.options[Q6.selectedIndex];
    console.log('Respuesta 6 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q7.addEventListener('change',
  function () {
    var selectedOption = this.options[Q7.selectedIndex];
    console.log('Respuesta 7 ' + selectedOption.value + ': ' + selectedOption.text);
  });
let answere = [Q1, Q2, Q3, Q4, Q5, Q6, Q7];

class UI{
  imprimirAlerta(menssaje, type){
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

      // Validar el tipo
      if(type === 'error'){
          divMensaje.classList.add('alert-danger');
      }else{
          divMensaje.classList.add('alert-success');
      }
      divMensaje.textContent = menssaje;

      // Quitar alerta despues de 3 seguntos
      setTimeout(() => {
          divMensaje.remove();
      }, 3000);
  }

}

const ui = new UI();

eventListener();
function eventListener(){
    Q1Input.addEventListener('input',datosCita);
    propietarioInput.addEventListener('input',datosCita);
    telefono.addEventListener('input',datosCita);
    fecha.addEventListener('input',datosCita);
    hora.addEventListener('input',datosCita);
    sintomas.addEventListener('input',datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

const registerObj = {
  nTeam: '',
  date: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  observations: ''
}

function newRegister(e){
  e.preventDefault();

  const {nTeam,date,q1,q2,q3, q4, q5, observations} = registerObj

  if (nTeam === '' || date === '' || q1 === ''|| q2 === ''|| q3 === ''|| q4 === ''|| q5 === ''){
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
  }
  function returnObj(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}
}