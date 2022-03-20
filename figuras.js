function areaCuadrado(lado) {
  return lado * lado;
}
function perimetroCuadrado(lado) {
  return 4 * lado;
}
/*console.log("are del cuadrado miden" + lado());
console.group("cuadrado");

console.log("perimetro cuadrado" + perimetro(12));
console.group("triangulo");*/
console.groupEnd();

// interactuamos con el html
function CalcularPerimetroCuadrado() {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function CalcularAreaCuadrado() {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
