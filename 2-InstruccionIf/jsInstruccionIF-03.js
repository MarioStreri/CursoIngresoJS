function mostrar()
//Al ingresar una edad debemos informar si la persona es mayor de edad// 
//sino informar que es un menor de edad.//
//tomo la edad
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad>=18) {

		alert("la persona es mayor de edad");
	}  

	else {

		alert("la persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN