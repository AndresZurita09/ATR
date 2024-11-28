const opciones = [
    {texto: " - Seleccione una opción - ", value:""},
    {texto: "Completo", value:"COM"},
    {texto: "Remplazo de parte", value:"REM"},
    {texto: "Ajuste", value: "A" },
    {texto: "Limpieza", value: "C"},
    {texto: "Lubricación", value: "L"},
    {texto: "Reparación", value: "R"},
    {texto: "Reapretado", value: "T"},
    {texto: "No aplica", value: "N/A"},
    {texto: "No trabajó", value: "NT"},
];

const form = document.querySelector('#form');
const bano = document.querySelector('#baño')
const area = document.querySelector('#area')
const date = document.querySelector('#date')
const q1 = document.getElementById("Q1");
console.log(q1)
const q2 = document.getElementById("Q2");
const q3 = document.getElementById("Q3");
const q4 = document.getElementById("Q4");
const q5 = document.getElementById("Q5");
const q6 = document.getElementById("Q6");
const q7 = document.getElementById("Q7");
const q8 = document.getElementById("Q8");
const q9 = document.getElementById("Q9");
const q10 = document.getElementById("Q10");
const q11= document.getElementById("Q11");

opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q1.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q2.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q3.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q4.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q5.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q6.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q7.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q8.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q9.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q10.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q11.appendChild(optionElement);
});

bano.addEventListener('blur',validarText);
area.addEventListener('blur',validarText);
date.addEventListener('blur',validarText);
date.addEventListener('blur',validarText);
q1.addEventListener('change', validarCombo);
q2.addEventListener('change', validarCombo);
q3.addEventListener('change', validarCombo);
q4.addEventListener('change', validarCombo);
q5.addEventListener('change', validarCombo);
q6.addEventListener('change', validarCombo);
q7.addEventListener('change', validarCombo);
q8.addEventListener('change', validarCombo);
q9.addEventListener('change', validarCombo);
q10.addEventListener('change', validarCombo);
q11.addEventListener('change', validarCombo);

function validarText(e) {
    if(e.target.value.trim() === ''){
        alert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        return;
    }

    cleanAlert(e.target.parentElement);
}

function validarCombo(e){
    if(e.target.value === 'COM' || e.target.value === 'N/A' || e.target.value === 'NT'){
        cleanCombo(e.target.parentElement.parentElement);
        console.log('desde el if')
    }else{
    campoObservaciones(e.target.id, e.target.parentElement.parentElement);
    }
}

// Alerta de validación de los campos de texto
function alert(message, reference) {
    //Comprueba si ya existe una alerta
    const alerta = reference.querySelector('.bg-red-600');
    if (alerta) {alerta.remove()}
    
    // Generar el HTML para crear la alerta
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    //Inyecta al formulario
    console.log(error);
    reference.appendChild(error);
}

function cleanAlert(reference){
    const alerta = reference.querySelector('.bg-red-600');
    if (alerta) {alerta.remove()}
}
function cleanCombo(reference){
    const alerta1 = reference.querySelector('.container-DIV');
    if (alerta1) {alerta1.remove()}
    const alerta2 = reference.querySelector('.comboClass');
    if (alerta2) {alerta2.classList.remove('comboClass')}
}

function campoObservaciones(combo, referenceID){
    /* const observationArea = document.getElementById(observationId);
    console.log(combo.target.value)
    console.log(observationArea)
    if(combo.target.value !== 'COM'){
        observationArea.innerHTML = `
        <label for="observation">Observaciones</label>
        <input type="text" id="observation" name="observation" placeholder="Escribe tu observación aquí">
        `;
    } */



    //Comprueba si ya existe una alerta
    const alerta = referenceID.querySelector('.container-DIV');
    if (alerta) {alerta.remove()}

    const comboClass = combo;
    console.log(comboClass);

    switch (combo) {
        case 'Q1':
            q1.classList.add('comboClass');
            console.log('Q1')
            break;
        case 'Q2':
            q2.classList.add('comboClass');
            console.log('Q2')
            break;
        case 'Q3':
            q3.classList.add('comboClass');
            console.log('Q3')
            break;
        case 'Q4':
            q4.classList.add('comboClass');
            console.log('Q4')
            break;
        case 'Q5':
            q5.classList.add('comboClass');
            console.log('Q5')
            break;
        case 'Q6':
            q6.classList.add('comboClass');
            console.log('Q6')
            break;
        case 'Q7':
            q7.classList.add('comboClass');
            console.log('Q7')
            break;
        case 'Q8':
            q8.classList.add('comboClass');
            console.log('Q8')
            break;
        case 'Q9':
            q9.classList.add('comboClass');
            console.log('Q9')
            break;
        case 'Q10':
            q10.classList.add('comboClass');
            console.log('Q10')
            break;
        case 'Q11':
            q11.classList.add('comboClass');
            console.log('Q11')
            break;
    
        default:
            break;
    }
    console.log(comboClass)
    // Generar el HTML para crear la alerta
    const div = document.createElement('DIV');
    div.classList.add('container-DIV');
    const label = document.createElement('LABEL');
    label.textContent = 'Agrega las observaciones'
    label.classList.add('observation-label');
    const txtArea = document.createElement('TEXTAREA');
    txtArea.setAttribute('type', 'text');
    txtArea.setAttribute('id', `ob-rep-${combo}`);
    
    div.appendChild(label);
    div.appendChild(txtArea);
    referenceID.appendChild(div);
}

/* function validarCombo(e){
    console.log(e.target.id,  + '' + e.target.value);
    const register = document.getElementById('observations');
    register.innerHTML = "";
    if(e.target.value !== 'COM'){
        register.innerHTML = `
        <label for="observation">Observaciones</label>
        <input type="text" id="observation" name="observation" placeholder="Escribe tu observación aquí">
        `;
    }
} */