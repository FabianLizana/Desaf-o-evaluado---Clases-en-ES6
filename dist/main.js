"use strict";

var _Cliente = require("./Cliente.js");
var _Impuesto = require("./Impuesto.js");
var impuesto1 = new _Impuesto.Impuesto(12000000, 700000);
var cliente1 = new _Cliente.Cliente('Cristina', impuesto1);
console.log(cliente1.calcularImpuesto(impuesto1.montoBrutoAnual, impuesto1.deducciones));