/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = txtIdSueldo.value;
	importe = parseInt(importe);

	resultado = importe * 0.1;

	alert("El aumento de sueldo es: " + resultado)

	txtIdResultado.value = importe * 1.1;

}
