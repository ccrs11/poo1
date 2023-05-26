export class Figura{
    _color
    constructor(color){
        this._color=color;
    }
    set setColor(color){
        this._color=color;
    }
    get getColor(){
        return this._color;
    }
    calcularArea(){
    //imprimir en html
    let inner = document.querySelector(".alert");
    inner.insertAdjacentHTML("beforeend", `<strong>La figura es de color ${this._color}</strong>`);
    }
}
export class Circulo extends Figura{
    _radio
    constructor(color,radio){
        super(color)
        this._radio=radio;
    }
    set setRadio(radio){
        this._radio=radio;
    }
    get getRadio(){
        return this._radio;
    }
    calcularArea(){
    let area=Math.PI*(this._radio*this._radio);
    //imprimir en html
    let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>El área del círculo es de ${area}</strong>`);
    }
}

export class Rectangulo extends Figura{
    _largo
    _ancho
    constructor(color,largo,ancho){
        super(color)
        this._largo=largo;
        this._ancho=ancho
    }
    set setLargo(largo){
        this._largo=largo;
    }
    get getLargo(){
        return this._largo;
    }
    set setAncho(ancho){
        this._ancho=ancho;
    }
    get getAncho(){
        return this._ancho;
    }
    calcularArea(){
    let area=this._largo*this._ancho
    //imprimir en HTML
    let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>El área del rectángulo es de ${area}</strong>`);
    }
}