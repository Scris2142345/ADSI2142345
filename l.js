class Persona {
    constructor(NOMBRE, APELLIDO){
        this._NOMBRE=NOMBRE,
        this._APELLIDO=APELLIDO;
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var per=new Persona("Camile", "lee");
console.log(per.NombreCompleto());
console.log (per.APELLIDO);
per.APELLIDO="kjkjjhjj";

console.log(per.NombreCompleto());
console.log (per.APELLIDO);
