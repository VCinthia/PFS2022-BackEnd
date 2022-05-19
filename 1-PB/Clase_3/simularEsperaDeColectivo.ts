
//cuando llegamos a la parada miramos si el colectivo arribo a la parada. Siempre tenemos que esperar antes de que llegue// FUNCIOAN SIEMPRE QUE LA N SEA MAYUSCULA AL IGUAL QUE EL STRING (llegoElColectivo == "N")

import * as rls from 'readline-sync';

let llegoElColectivo: string;
console.log("Esperando el colectivo- ");
llegoElColectivo = rls.question("Llego el colectivo? (S / N): ");

while (llegoElColectivo == "N") {
    console.log("Esperando el colectivo");    
    llegoElColectivo= rls.question("Llego el colectivo? (S / N): ");
}
console.log("Llego el colectivo")