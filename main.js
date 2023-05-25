import { Animal, Perro } from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    const changeName = document.getElementById("nameFor");
    const divRaza=document.getElementById("razaField");
    if(buttonRol.value==='perro'){
        changeName.innerHTML=  `<div id="nameFor">
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" id="name">
                                </div>`;
        divRaza.innerHTML=`<label for="raza">Ingrese su raza</label>
        <input type="text" name="raza" id="raza">`;
        
    }else if(buttonRol.value==='animal'){
        divRaza.innerHTML=``;
        changeName.innerHTML=`<label for="nombre">Seleccionar nombre</label>
        <select id="nombre" name="nombre">
            <option value="option" selected> escoger una opcion </option>
            <option value="perro">perro</option>
            <option value="gato">gato</option>
            <option value="raton">raton</option>
            <option value="ballena">ballena</option>
            <option value="vaca">vaca</option>
            <option value="pollo">pollo</option>
        </select>`;
    }
    else{
        divRaza.innerHTML=``;
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
    if(buttonRol.value==='animal'){
        const animal1 = new Animal(...data);
        animal1.hacerSonido();
        card.style.display = "flex";
    }
    else if(buttonRol.value==='perro'){
        const perro1 = new Perro(...data);
        perro1.moverCola();
        card.style.display = "flex";
    }else{
        alert('debes escoger una opcion valida');
    }
});

