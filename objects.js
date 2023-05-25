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
        inner.insertAdjacentHTML("beforeend", `<strong>Hola ${this._nombre} </strong><br>`);
    }
    static esMayorDeEdad(edad){
        let inner = document.querySelector(".alert");
        if(edad >= 18){
            inner.insertAdjacentHTML("beforeend", `<strong>Es mayor de edad</strong><br>`);
        }else{
            inner.insertAdjacentHTML("beforeend", `<strong>Es menor de edad</strong><br>`);
        }
    }
}

export class Estudiante extends Persona{
    _carrera
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this._carrera=carrera;
    }
    set carrera(carrera){
        this._carrera=carrera;
    }
    get carrera(){
        return this._carrera;
    }
    estudiar(){
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong> estudias ${this._carrera} =O </strong><br>`);
    }
}