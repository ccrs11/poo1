import { Vehiculo,Coche } from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    const divOneField=document.getElementById("oneField");
    if(buttonRol.value==='coche'){
        divOneField.innerHTML=`<label for="combustible">Se agregó combustible?</label>
        <input type="checkbox" name="acceptRules" class="inline checkbox" id="checkbox1" value="false">`;
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
    if(buttonRol.value==='vehiculo'){
        const vehiculo1 = new Vehiculo(...data);
        vehiculo1.acelerar();
        Vehiculo.convertirKmHEnMph(vehiculo1.getVelocidad);
        card.style.display = "flex";
    }
    else if(buttonRol.value==='coche'){
        const coche1 = new Coche(...data);
        coche1.acelerar();
        card.style.display = "flex";
    }
    else{
        alert('debes escoger una opcion valida');
    }
});

