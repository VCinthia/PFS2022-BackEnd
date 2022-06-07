let arrayMio: number [] = new Array (6);
arrayMio = [26,54,88,13,14,71];//[26,13,88,54,14,71]

metodo1(arrayMio,1,3);
metodo2(arrayMio,5);


function metodo1(arr : number[], x : number, y : number) {//x y y son posiciones no numero de elemento   , arranco siempre en 0 
    let ax: number;
    ax = arr[x];// convierte a ax en 54 (por la posicion arr[x] que es 54)
    arr[x] = arr[y];// convierte a arr[x] en 13 (por la posicion arr[y] que es 13)
    arr[y] = ax;// convierte a arr[y] en 54 porque el ultimo valor almacenado para ax es 54
    //intercambia el valor de los numeros de las posiciones a traves de ax 
    
    console.log("El valor es: ",arr[x]);// para arr[x]=13, para arr[y]=54, para ax=54
}

/***********/


function metodo2(v : number[], s : number) {// busca un valor intermedio
    let i:number, d:number;
    i = 0;//pos0: 26
    d = s - 1;//menos una posicion//pos4: 14
    while (i < d) {//mientras [i] sea menor que [d]//pos0: 26 < pos4:14
    metodo1(v, i, d);//intercambia los valores de [i] y [d]//i=pos4:14 y d=pos0:26
    i = i + 1;// incrementa en 1 el valor del v[i]
    d = d - 1; // disminuye en 1 el valor del v[d]
    } 

    console.log("el valor de i es: ", i, "el valor de d es: ", d);
    
}

function metodo3(mat:number[][], x:number, y:number){
    let a:number, b:number;
        for (a = 0; a < x; a++) {//para la fila a
            for (b = 0; b < y; b++) {// recorre las posiciones de la columna b
                mat[a][b] = (a + 1) * (b + 1);//mat[a, b] = (a + 1) * (b + 1);//agrega una columna y las filas que le correspondan. siempre en relacion a la anterior
            } 
        } 
}


 
