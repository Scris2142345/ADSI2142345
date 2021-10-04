var ob=new Object();
ob.nombre='nombre';
ob.apellido='apellido';
ob.nombreCompleto=function(){
	return nombre+''+this.apellido; // this es un objeto de object
}
console.log(ob.nombreCompleto())   // Imprimir el objeto

// 2da forma

var obj={
	nombre:'cristhain',
	apellido:'Gifuentes',
	nombreCompleto:function(){
		return nombre+''+apellido;
	}
};
console.log(obj.nombre);
console.log(obj.apelli);
console.log(obj.nombreCompleto());

// 3ra forma

var plantilla=fuction(){
	this.nombre='Nombre';
	this.apellido='Apellido';

	nombreCompleto=fuction(){
		return this.nombre+''+this.apellido;

	}
}

//herencia
 var obfuction = new Plantilla();

console.log(typeof(obfuction));
console.log(obfuction.nombre);
console.log(obfuction.nombreCompleto());

//imprimir function original

console.log(typeof(plantilla));
console.log(plantilla.nombre);
console.log(nombreCompleto());

//

//----------------------
// Ejercicio
var obj={
	Num1:5,
	Num2:3,
    Num3:10;

	nombreCompleto:function(){
		if (Num1<Num3 & Num1>Num2) {
			Num2;
		}else{
			' error ' ;
		}
		return Num1;
	}
};

console.log(obj.nombreCompleto());