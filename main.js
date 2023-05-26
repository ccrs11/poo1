import { Figura, Circulo, Rectangulo } from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    const divOneField=document.getElementById("oneField");
    const divTwoField=document.getElementById("twoField");
    if(buttonRol.value==='circulo'){
        divOneField.innerHTML=`<label for="radio">Ingrese el radio</label>
        <input type="text" name="radio" id="radio">`;
        divTwoField.innerHTML=``;
    }else if(buttonRol.value==='rectangulo'){
        divOneField.innerHTML=`<label for="largo">Ingrese el largo</label>
        <input type="text" name="largo" id="largo">`;
        divTwoField.innerHTML=`<label for="ancho">Ingrese el ancho</label>
        <input type="text" name="ancho" id="ancho">`;
    }
    else{
        divOneField.innerHTML=``;
        divTwoField.innerHTML=``;
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
    if(buttonRol.value==='figura'){
        const figura1 = new Figura(...data);
        figura1.calcularArea();
        card.style.display = "flex";
    }
    else if(buttonRol.value==='circulo'){
        const circulo1 = new Circulo(...data);
        circulo1.calcularArea();
        card.style.display = "flex";
    }
    else if(buttonRol.value==='rectangulo'){
        const rectangulo1 = new Rectangulo(...data);
        rectangulo1.calcularArea();
        card.style.display = "flex";
    }
    else{
        alert('debes escoger una opcion valida');
    }
});

