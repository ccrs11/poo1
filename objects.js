export class Vehiculo{
    _marca
    _modelo
    _velocidad
    constructor(marca, modelo, velocidad){
        this._marca=marca;
        this._modelo=modelo;
        this._velocidad=velocidad;
    }
    set setMarca(marca){
        this._marca=marca;
    }
    get getMarca(){
        return this._marca;
    }
    set setModelo(modelo){
        this._modelo=modelo;
    }
    get getModelo(){
        return this._modelo;
    }
    
    set setVelocidad(velocidad){
        this._velocidad=velocidad;
    }
    get getVelocidad(){
        return this._velocidad;
    }
    acelerar(){
        let velocidadActual = parseInt(this._velocidad) +10;
        //imprimir en html
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>La velocidad después de acelerar el vehículo es de: ${velocidadActual}</strong><br>`);
    }
    static convertirKmHEnMph(velocidad){
        let inner = document.querySelector(".alert");
        let velocidadConvert=velocidad/1.60934;
        inner.insertAdjacentHTML("beforeend", `<strong>La velocidad en millas/s es ${velocidadConvert}</strong>`)
    }
}
export class Coche extends Vehiculo{
    _combustible
    constructor(marca, modelo, velocidad,combustible){
        super(marca,modelo,velocidad)
        this._combustible=combustible;
    }
    set setCombustible(combustible){
        this._combustible=combustible;
    }
    get getCombustible(){
        return this._combustible;
    }
    acelerar(){
        let velocidadActual = parseInt(this._velocidad) +20;
        //imprimir en html
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>La velocidad después de acelerar el coche es de: ${velocidadActual}</strong>`);
    }
}