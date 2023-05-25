export class Animal{
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre=nombre;
        this._edad=edad;
    }
    hacerSonido(){
        let inner = document.querySelector(".alert");
        if(this._nombre==='perro'){
            inner.insertAdjacentHTML("beforeend", `<strong>bark bark</strong><br>`);
        }
        else if(this._nombre==='gato'){
            inner.insertAdjacentHTML("beforeend", `<strong>miau miau</strong><br>`);
        }
        else if(this._nombre==='raton'){
            inner.insertAdjacentHTML("beforeend", `<strong>raz raz raz</strong><br>`);
        }
        else if(this._nombre==='ballena'){
            inner.insertAdjacentHTML("beforeend", `<strong>walleeee</strong><br>`);
        }
        else if(this._nombre==='vaca'){
            inner.insertAdjacentHTML("beforeend", `<strong>muuuu</strong><br>`);
        }
        else if(this._nombre==='pollo'){
            inner.insertAdjacentHTML("beforeend", `<strong>pio pio pio</strong><br>`);
        }
    }
}

export class Perro extends Animal{
    _raza
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this._raza=raza;
    }
    moverCola(){
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>${this._nombre} es un perro ${this._raza} y mueve la cola</strong><br>`);
    }
}

