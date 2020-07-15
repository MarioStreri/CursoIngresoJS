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

	valorUno = parseint(valorUno);
	valorDos = parseint(valorDos);
	valorTres = parseint(valorTres);

	suma = valorUno + valorDos + valorTres;

	alert(suma);
	
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

	valorUno = parseint(valorUno);
	valorDos = parseint(valorDos);
	valorTres = parseint(valorTres);

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

	valorUno = parseint(valorUno);
	valorDos = parseint(valorDos);
	valorTres = parseint(valorTres);

	precioFinal = (valorUno + valorDos + valorTres) * 1.21;

	alert("El precio final es : " + precioFinal);

}