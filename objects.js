export class Empleado{
    static countEmpleado = 0;
    _nombre
    _edad
    _sueldo
    constructor(nombre, edad, sueldo){
        this._nombre=nombre;
        this._edad=edad;
        this._sueldo=sueldo;
        ++Empleado.countEmpleado;
    }
    set setNombre(nombre){
        this._nombre=nombre;
    }
    get getNombre(){
        return this._nombre;
    }
    set setEdad(edad){
        this._edad=edad;
    }
    get getEdad(){
        return this._edad;
    }
    
    set setSueldo(sueldo){
        this._sueldo=sueldo;
    }
    get getSueldo(){
        return this._sueldo;
    }
    calcularSalarioAnual(){
        let sueldoAnual = this._sueldo*12;
        //imprimir en html
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>El sueldo anual es de: ${sueldoAnual}</strong><br>`);
    }
    static generarIdEmpleado(){
        let inner = document.querySelector(".alert");
        let idEmpleado=Empleado.countEmpleado;
        inner.insertAdjacentHTML("beforeend", `<strong>el Id del empleado es ${idEmpleado}</strong>`)
    }
}
export class Gerente extends Empleado{
    _departamento
    constructor(nombre, edad, sueldo,departamento){
        super(nombre,edad,sueldo)
        this._departamento=departamento;
    }
    set setDepartamento(departamento){
        this._departamento=departamento;
    }
    get getDepartamento(){
        return this._departamento;
    }
    calcularSalarioAnual(){
        let sueldoAnual = (parseInt(this._sueldo)+parseInt((this._sueldo*0.1)))*12;
        //imprimir en html
        let inner = document.querySelector(".alert");
        inner.insertAdjacentHTML("beforeend", `<strong>El sueldo anual del gerente es de: ${sueldoAnual}</strong><br>`);
    }
}