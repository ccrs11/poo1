import {Persona} from "./objects.js";

let form = document.getElementById("myForm");
let card = document.querySelector(".card");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new Array();
    let formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData);
    for (let property in formDataObject) {
        let value = formDataObject[property];
        data.push(value);
    }
    const persona1 = new Persona(...data);
    console.log(persona1._nombre);
    persona1.saludar();
    card.style.display = "flex"
});