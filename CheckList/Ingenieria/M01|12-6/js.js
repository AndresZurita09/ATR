var Q1 = document.getElementById('Q1');
var Q2 = document.getElementById('Q2');
var Q3 = document.getElementById('Q3');
var Q4 = document.getElementById('Q4');
var Q5 = document.getElementById('Q5');
var Q6 = document.getElementById('Q6');
var Q7 = document.getElementById('Q7');

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getMonth();



Q1.addEventListener('change',
  function(){
    var selectedOption = this.options[Q1.selectedIndex];
    console.log('Respuesta 1 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q2.addEventListener('change',
  function(){
    var selectedOption = this.options[Q2.selectedIndex];
    console.log('Respuesta 2 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q3.addEventListener('change',
  function(){
    var selectedOption = this.options[Q3.selectedIndex];
    console.log('Respuesta 3 ' +selectedOption.value + ': ' + selectedOption.text);
  });
Q4.addEventListener('change',
  function(){
    var selectedOption = this.options[Q4.selectedIndex];
    console.log('Respuesta 4 ' + selectedOption.value + ': ' + selectedOption.text);
  });
Q5.addEventListener('change',
  function(){
    var selectedOption = this.options[Q5.selectedIndex];
    console.log('Respuesta 5 ' +selectedOption.value + ': ' + selectedOption.text);
  });
Q6.addEventListener('change',
  function(){
    var selectedOption = this.options[Q6.selectedIndex];
    console.log('Respuesta 6 ' +selectedOption.value + ': ' + selectedOption.text);
  });
Q7.addEventListener('change',
  function(){
    var selectedOption = this.options[Q7.selectedIndex];
    console.log('Respuesta 7 ' + selectedOption.value + ': ' + selectedOption.text);
  });
  let answere = [Q1,Q2,Q3,Q4,Q5,Q6,Q7];

  console.log(`La fecha es: ${day} / ${month} / ${year}`)