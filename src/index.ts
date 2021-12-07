//Ejercicio Dados
let dados: number = prompt("Tire dados");
if (dados < 1) {
  console.log("No podes tirar 0 dados,ingresa otra cantidad");
  dados = prompt("Tire dados");
} else {
  console.log("Tenes el", 1 / (dados * 6), "que el/los dado/s salga/n con 6");
}
