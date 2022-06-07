let periodo: string []= new Array(12);
periodo = [ "S1-M1", "S2-M1","S3-M1","S4-M1","S1-M2","S2-M2","S3-M2","S4-M2","S1-M3","S2-M3","S3-M3","S4-M3"]

let ventasCamila: number []= new Array(12);
ventasCamila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];

let ventasFranco: number []= new Array(12);
ventasFranco = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];

let ventasAlicia:number []= new Array(12);
ventasAlicia = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];

let ventasMatias: number []= new Array(12);
ventasMatias = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];

let ventasSandra: number []= new Array(12);
ventasSandra = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

ventasMaxMinVendedor(ventasCamila);
ventasMaxMinVendedor(ventasFranco);
ventasMaxMinVendedor(ventasAlicia);
ventasMaxMinVendedor(ventasMatias);
ventasMaxMinVendedor(ventasSandra);

function ventasMaxMinVendedor(vendedor:number[]){
    let v1:number = 0;
    let v2: number = 0;
    let i: number = 0;
    let s: number = 0;
    //maxima y min venta
    for(s; s<periodo.length; s++){
        for(i; i<vendedor.length; i++){
            if(vendedor[i]>v1){
                (v1 = vendedor [i]);                 
            }
            if(vendedor[i]<v1){
                (v2 = vendedor [i]);                 
            }            
        }       
        console.log("Venta MAXIMA de ",/* vendedor ,*/": $",v1, "en el periodo",periodo[s=i]);// no sale el nombre del vendedor, si la mejor venta, no me sale el nombre del mes pero si lo elije

        console.log("Venta MINIMA de ",/* vendedor ,*/": $",v2, "en el periodo",periodo[s=i]);// no sale el nombre del vendedor, si la mejor venta, no me sale el nombre del mes pero si lo elije

        console.log("----------");        
    }
}

function promedioSemVendedor( vendedor:number []): number{
    let i: number = 0;
    let suma:number = 0;
    for(i; i<vendedor.length;i++){        
        suma += vendedor[i]
    }
    return Math.round(suma/periodo.length);    
    
}
console.log("El promedio de ", ventasCamila.toString, " es: ", promedioSemVendedor(ventasCamila));


