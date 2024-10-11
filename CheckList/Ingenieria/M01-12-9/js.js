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

const q1 = document.getElementById("Q1");
const q2 = document.getElementById("Q2");
const q3 = document.getElementById("Q3");
const q4 = document.getElementById("Q4");
const q5 = document.getElementById("Q5");
const q6 = document.getElementById("Q6");
const q7 = document.getElementById("Q7");
const q8 = document.getElementById("Q8");
const q9 = document.getElementById("Q9");
const q10 = document.getElementById("Q10");
const q11 = document.getElementById("Q11");
const q12 = document.getElementById("Q12");
const q13 = document.getElementById("Q13");
const q14 = document.getElementById("Q14");
const q15 = document.getElementById("Q15");
const q16 = document.getElementById("Q16");

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
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q12.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q13.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q14.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q15.appendChild(optionElement);
});
opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.textContent = opcion.texto;
    optionElement.value = opcion.value;
    q16.appendChild(optionElement);
});