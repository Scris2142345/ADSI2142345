class Persona {
    constructor(NOMBRE, APELLIDO){
        this._nombre=nombre,
        this._apellido=apellido,
        this._genero=genero,
        this._edad=edad,
        this._altura=altura,
        this._peso=peso,
        this._documento=;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////7
    get NOMBRE(){
        return this._NOMBRE;
    }
    set NOMBRE(){
        this._NOMBRE=NOMBRE;
    }
    get APELLIDO(){
        return this._APELLIDO;
    }
    set APELLIDO(){
        this._APELLIDO=APELLIDO;
    }
    NombreCmpleto(){
        return this._NOMBRE+" "+this._APELLIDO;
    }
}