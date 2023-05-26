import { Empleado,Gerente } from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    const divOneField=document.getElementById("oneField");
    if(buttonRol.value==='gerente'){
        divOneField.innerHTML=`<label for="departamento">colocar departamento</label>
        <input type="text" name="departamento" id="departamento">`;
    }
    else{
        divOneField.innerHTML=``;
    }
});

formPerson.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new Array();
    let formData = new FormData(formPerson);
    let formDataObject = Object.fromEntries(formData);
    for (let property in formDataObject) {
        let value = formDataObject[property];
        data.push(value);
    }
    card.innerHTML=`<div class="alert"></div>`
    if(buttonRol.value==='empleado'){
        const empleado1 = new Empleado(...data);
        empleado1.calcularSalarioAnual();
        Empleado.generarIdEmpleado();
        card.style.display = "flex";
    }
    else if(buttonRol.value==='gerente'){
        const gerente1 = new Gerente(...data);
        gerente1.calcularSalarioAnual();
        card.style.display = "flex";
    }
    else{
        alert('debes escoger una opcion valida');
    }
});

