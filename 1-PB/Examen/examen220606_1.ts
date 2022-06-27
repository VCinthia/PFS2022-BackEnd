//ESTRUCTURAS DE DATOS
//Lista de vendedores
let vendedores : string[] = ["Camila", "Franco", "Alicia", "Matias", "Sandra"];
//Lista de ventas de cada vendedor
let venCamila: number[] =  [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let venFranco: number[] =  [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let venAlicia: number[] =  [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let venMatias: number[] =  [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let venSandra: number[] =  [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
//Matriz para manejar una unica estructura de datos
let ventas: number[][] = new Array(5);
ventas[0] = venCamila;
ventas[1] = venFranco;
ventas[2] = venAlicia;
ventas[3] = venMatias;
ventas[4] = venSandra;

//PRINCIPAL
//inciso 1, 2 y 3 - Maximo, minimo y promedio de cada vendedor, indicando semana y mes
console.log('Incisos 1, 2 y 3 - Maximo, minimo y promedio de cada vendedor, indicando semana y mes');
for (let i = 0; i < vendedores.length; i++) {
    calcularMaxMinPro(ventas[i], vendedores[i]);    
}
//inciso 4 y 5 - Maximo y minimo de cada semana, indicando semana y mes
console.log('Incisos 4 y 5 - Maximo y minimo de cada semana, indicando semana y mes (con matriz)');
calcularMaxMinSemanal(ventas, vendedores);

//ADICIONAL SIN MATRIZ
//inciso 4 y 5 - Maximo y minimo de cada semana, indicando semana y mes
console.log('Incisos 4 y 5 - Maximo y minimo de cada semana, indicando semana y mes (sin matriz)');
calcularMaxMinSemanalSinMatriz(venCamila, venFranco, venAlicia, venMatias, venSandra, vendedores);

//FUNCIONES
//MAX MIN PROM por vendedor
function calcularMaxMinPro(v:number[], nombre: string) {
    let max:number=v[0];
    let min:number=v[0];
    let iMax:number=0;
    let iMin:number=0;
    let total:number=0;
    for (let i = 0; i < v.length; i++) {
        if (max < v[i]) {
            max=v[i];
            iMax=i;
        }        
        if (min > v[i]) {
            min=v[i];
            iMin=i;
        }        
        total+=v[i];
    }
    console.log(`La venta maxima de ${nombre}: ${max} se dio en la ${obtenerSemMes(iMax)}, la venta minima: ${min} se dio en la ${obtenerSemMes(iMin)} y su venta promedio semanal fue de ${total/12}`);    
}
//MAX MIN por semana (con matriz)
function calcularMaxMinSemanal(v:number[][], nombres: string[]) {
    let max:number;
    let min:number;
    let jMax:number=0;
    let jMin:number=0;
    for (let i = 0; i < 12; i++) {
        max = v[0][i];
        min = v[0][i];
        for (let j = 0; j < vendedores.length; j++) {
            if (max < v[j][i]) {
                max=v[j][i];
                jMax=j;
            }
            if (min > v[j][i]) {
                min=v[j][i];
                jMin=j;
            }
        }
        console.log(`El mejor vendedor de la ${obtenerSemMes(i)} es ${nombres[jMax]} con ${max} y el peor vendedor es ${nombres[jMin]} con ${min}`);
    }
}
//MAX MIN por semana (sin matriz)
function calcularMaxMinSemanalSinMatriz(v1:number[], v2:number[], v3:number[], v4:number[], v5:number[], nombres: string[]) {
    let max:number;
    let min:number;
    let jMax:number=1;
    let jMin:number=1;
    for (let i = 0; i < 12; i++) {
        //elijo por defecto al primer vendedor como maximo y como minimo
        max = v1[i];        
        min = v1[i];
        //comparo con el segundo y redefino maximo y minimo si corresponde recordando quien es
        if (max < v2[i]) {
            max=v2[i];
            jMax=2;
        }
        if (min > v2[i]) {
            min=v2[i];
            jMin=2;
        }
        //comparo con el tercero y redefino maximo y minimo si corresponde recordando quien es
        if (max < v3[i]) {
            max=v3[i];
            jMax=2;
        }
        if (min > v3[i]) {
            min=v3[i];
            jMin=2;
        }
        //comparo con el cuarto y redefino maximo y minimo si corresponde recordando quien es
        if (max < v4[i]) {
            max=v4[i];
            jMax=2;
        }
        if (min > v4[i]) {
            min=v4[i];
            jMin=2;
        }
        //comparo con el quinto y redefino maximo y minimo si corresponde recordando quien es
        if (max < v5[i]) {
            max=v5[i];
            jMax=2;
        }
        if (min > v5[i]) {
            min=v5[i];
            jMin=2;
        }
        //respondo con los datos obtenidos para la semana
        console.log(`El mejor vendedor de la ${obtenerSemMes(i)} es ${nombres[jMax]} con ${max} y el peor vendedor es ${nombres[jMin]} con ${min}`);
    }
}
//Esta funcion convierte el indice de la semana (valores entre 0 y 11) a una cadena que indica semana y mes segun lo que se indica en el arreglo semanas del comentario
function obtenerSemMes(i : number) : string {
    //let semanas = [S1M1, S2M1, S3M1, S4M1, S1M2, S2M2, S3M2, S4M2, S1M3, S2M3, S3M3, S4M3] 
    let sem:number=(i%4)+1;
    let mes:number=Math.floor(i/4)+1;
    return `semana ${sem} del mes ${mes}`;
}