export class Persona{
    _nombre;
    _edad;
    #sexo;
    constructor(nombre,edad,sexo){
        this._nombre=nombre;
        this._edad=edad;
        this.#sexo=sexo;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set edad(edad){
        this._edad=edad;
    }
    get edad(){
        return this._edad;
    }
    set sexo(sexo){
        this.#sexo=sexo;
    }
    get sexo(){
        return this.#sexo;
    }
    saludar(){
        //escribir dentro de la tarjeta el nombre
        let inner = document.querySelector(".alert");
        inner.innerHTML=`<strong>Hola ${this._nombre} </strong>`;
    }
}