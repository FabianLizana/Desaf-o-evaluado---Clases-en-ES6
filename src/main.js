import {Cliente} from "./Cliente.js";
import {Impuesto} from "./Impuesto.js";

let impuesto1 = new Impuesto(12000000,700000)
let cliente1 = new Cliente('Fabian',impuesto1)

console.log("Nombre del cliente:", cliente1.nombre);
console.log("Monto bruto anual:", impuesto1.montoBrutoAnual);
console.log("Deducciones:", impuesto1.deducciones);
console.log("Impuesto total a pagar:", cliente1.calcularImpuesto(impuesto1.montoBrutoAnual, impuesto1.deducciones));
