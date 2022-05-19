"use strict";
//cuando llegamos a la parada miramos si el colectivo arribo a la parada. Siempre tenemos que esperar antes de que llegue// FUNCIOAN SIEMPRE QUE LA N SEA MAYUSCULA AL IGUAL QUE EL STRING (llegoElColectivo == "N")
exports.__esModule = true;
var rls = require("readline-sync");
var llegoElColectivo;
console.log("Esperando el colectivo- ");
llegoElColectivo = rls.question("Llego el colectivo? (S / N): ");
while (llegoElColectivo == "N") {
    console.log("Esperando el colectivo");
    llegoElColectivo = rls.question("Lego el colectivo? (S / N): ");
}
console.log("Llegó el colectivo");
