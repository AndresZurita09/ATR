const opciones = [
    { texto: " - Seleccione una opción - ", value: "" },
    { texto: "Completo", value: "COM" },
    { texto: "Remplazo de parte", value: "REM" },
    { texto: "Ajuste", value: "A" },
    { texto: "Limpieza", value: "C" },
    { texto: "Lubricación", value: "L" },
    { texto: "Reparación", value: "R" },
    { texto: "Reapretado", value: "T" },
    { texto: "No aplica", value: "N/A" },
    { texto: "No trabajó", value: "NT" },
];

const nTeam = document.getElementById("nTeam");
const date = document.getElementById("date");
const nPoint = document.getElementById("nPoint");
const q1 = document.getElementById("Q1");
const q2 = document.getElementById("Q2");
const q3 = document.getElementById("Q3");
const q4 = document.getElementById("Q4");
const q5 = document.getElementById("Q5");
const q6 = document.getElementById("Q6");
const q7 = document.getElementById("Q7");
const observationsTec = document.getElementById("observationsTec");
nTeam.disabled = true;
date.disabled = true;
nPoint.disabled = true;
q1.disabled = true;
q2.disabled = true;
q3.disabled = true;
q4.disabled = true;
q5.disabled = true;
q6.disabled = true;
q7.disabled = true;
observationsTec.disabled = true;

function statusValid(id) {
    if ( id.disabled = true) {
        console.log("Prueba")
    }
}

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