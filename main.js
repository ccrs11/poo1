import {Persona, Estudiante} from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    console.log(buttonRol.value);
    const divCarrera=document.getElementById("carreraField");
    if(buttonRol.value==='estudiante'){
        divCarrera.innerHTML=`<label for="carrera">Ingrese su carrera</label>
        <input type="text" name="carrera" id="carrera">`;
    }else{
        divCarrera.innerHTML=``;
    }
})

formPerson.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new Array();
    let formData = new FormData(formPerson);
    let formDataObject = Object.fromEntries(formData);
    for (let property in formDataObject) {
        let value = formDataObject[property];
        data.push(value);
        card.innerHTML=`<div class="alert"></div>`
    }
    if(buttonRol.value==='persona'){
        const persona1 = new Persona(...data);
        persona1.saludar();
        Persona.esMayorDeEdad(persona1.edad);
        card.style.display = "flex";
    }
    else if(buttonRol.value==='estudiante'){
        const estudiante1 = new Estudiante(...data);
        //console.log(estudiante1.carrera);
        estudiante1.saludar();
        estudiante1.estudiar();
        Persona.esMayorDeEdad(estudiante1.edad);
        card.style.display = "flex";
    }else{
        alert('debes escoger una opcion valida');
    }
});