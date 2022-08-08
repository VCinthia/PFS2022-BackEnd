import * as rls from "readline-sync";

let sumas : number;
let n : number = rls.questionInt('Ingrese un valor para N: ');
let p : number = rls.questionInt('Ingrese un valor para P: ');
let q : number = rls.questionInt('Ingrese un valor para Q: ');

//inciso 1
sumas=0;
for (let i = 1; i <= n; i++) {
    sumas += i;    
}
if (sumas == ((n * (n+1)) / 2)) {
    console.log(`Inciso 1: VERDADERO - la sumatoria de los primeros ${n} numeros naturales: ${sumas} es igual a ((n * (n+1)) / 2): ${((n * (n+1)) / 2)}`);    
} else {
    console.log(`Inciso 1: FALSO - la sumatoria de los primeros ${n} numeros naturales: ${sumas} NO es igual a ((n * (n+1)) / 2): ${((n * (n+1)) / 2)}`);    
}
//inciso 2
sumas=0;
for (let i = p; i <= q; i++) {
    sumas += i;    
}
if (sumas == (((p+q) * (q-p-1)) / 2)) {
    console.log(`Inciso 2: VERDADERO - la sumatoria de los numeros naturales entre ${p} y ${q}: ${sumas} es igual a (((p+q) * (q-p-1)) / 2): ${(((p+q) * (q-p-1)) / 2)}`);    
} else {
    console.log(`Inciso 2: FALSO - la sumatoria de los numeros naturales entre ${p} y ${q}: ${sumas} NO es igual a (((p+q) * (q-p-1)) / 2): ${(((p+q) * (q-p-1)) / 2)}`);    
}
//inciso 3
sumas=0;
for (let i = 1; i <= n; i++) {
    sumas += i**2;    
}
if (sumas == (n * (n+1) * ((2*n)+1)) / 6) {
    console.log(`Inciso 3: VERDADERO - la sumatoria de los cuadrados de los primeros ${n} numeros naturales: ${sumas} es igual a ((n * (n+1) * ((2*n)+1)) / 6): ${((n * (n+1) * ((2*n)+1)) / 6)}`);    
} else {
    console.log(`Inciso 3: FALSO - la sumatoria de los cuadrados de los primeros ${n} numeros naturales: ${sumas} NO es igual a ((n * (n+1) * ((2*n)+1)) / 6): ${((n * (n+1) * ((2*n)+1)) / 6)}`);    
}
