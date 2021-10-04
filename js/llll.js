class  Aprediz extends Persona{
    constructor(NOMBRE, APELLIDO, POGRAMA, FICHA){
        super(_NOMBRE, _APELLIDO);
        this._PROGRAMA;
        this.FICHA;
    }
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


get PROGRAMA(){
    return this._PROGRAMA;
}
set PROGRAMA(){
    this._PROGRAMA=PROGRAMA;
}


get FICHA(){
    return this._FICHA;
}
set FICHA(){
    this._FICHA=FICHA;
}



}



///////////////////////////////////////////////////////////////////////////////////////////////////////////
var per=new Persona("Camile", "lee");
console.log (per.APELLIDO);
per.APELLIDO="kjkjjhjj";

console.log(per.NombreCompleto());
console.log (per.APELLIDO);