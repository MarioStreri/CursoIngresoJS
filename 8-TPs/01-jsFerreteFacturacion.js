/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var suma;

	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
	valorTres = txtIdPrecioTres.value;

	valorUno = parseInt(valorUno);
	valorDos = parseInt(valorDos);
	valorTres = parseInt(valorTres);

	suma = valorUno + valorDos + valorTres;

	alert("La suma de los productos es : " + suma);
	
}
function Promedio () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var promedio;

	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
	valorTres = txtIdPrecioTres.value;

	valorUno = parseInt(valorUno);
	valorDos = parseInt(valorDos);
	valorTres = parseInt(valorTres);

	promedio = (valorUno + valorDos + valorTres) /3;

	alert("El promedio es : " + promedio);

}
function PrecioFinal () 
{
	var valorUno;
	var valorDos;
	var valorTres;
	var precioFinal;

	valorUno = txtIdPrecioUno.value;
	valorDos = txtIdPrecioDos.value;
	valorTres = txtIdPrecioTres.value;

	valorUno = parseInt(valorUno);
	valorDos = parseInt(valorDos);
	valorTres = parseInt(valorTres);

	precioFinal = (valorUno + valorDos + valorTres) * 1.21;

	alert("El precio final es : " + precioFinal);

}