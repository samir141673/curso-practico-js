function Monto(precio, descuento) {
  const desc = descuento * (0.01 * precio);
  const monto = precio - desc;
  return monto;
}
console.groupEnd();

function calcular() {
  const costo = document.getElementById("input-precio").value;
  const descu = document.getElementById("input-descuento").value;

  const monto = Monto(costo, descu);
  const resul = document.getElementById("resultadoTotal");
  resul.innerText = "El monto  es $" + monto;
}
