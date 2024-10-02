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

const q1 = document.getElementById("Q1");
const q2 = document.getElementById("Q2");
const q3 = document.getElementById("Q3");
const q4 = document.getElementById("Q4");
const q5 = document.getElementById("Q5");
const q6 = document.getElementById("Q6");
const q7 = document.getElementById("Q7");

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