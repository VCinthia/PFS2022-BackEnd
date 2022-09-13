/*
• Se dispone de información referida a pistas de audio. Esta contiene un identificador, un título, la duración y el intérprete de diversas canciones.
• Se requiere implementar un sistema de administración de las mismas que permita armar listas de reproducción, teniendo que informar tanto la cantidad de pistas como la duración total de cada una de estas, como uno de sus servicios.
• Se deben realizar diagramas de clases y codificar utilizando los conceptos de POO. Considerar la utilizacion de una interface */

interface Informa{
    sumCant() : void;
    duracion() : number;
}

let ids: [];


class PistaAudio implements Informa{
    private id = 0 ;
    private titulo : string;
    public duracionPista : number;
    private interprete : string;//ver que tiene diversas canciones

    constructor (titulo : string, duracion : number, interprete : string) {
        this.titulo = titulo;
        this.duracionPista = duracion;
        this.interprete = interprete;        
    }

    public sumCant () : void{
        for (let i = 0; i < ids.length; i++) {
            if(ids[i]!=this.id){
                this.id = ids[i]+1;
                ids.push[this.id];
            }            
        }
    }

    public duracion() : number{
        return this.duracionPista;
    }

}

class ListaReproduccion implements Informa {
    private nombreLista : string;
    private listaReprod : PistaAudio [];
    private cantPistas = 0;
    private duracionTotal: number;

    constructor(nombreLista : string){
        this.nombreLista = nombreLista;
    }

    public getNombreLista () : string{
        return this.nombreLista;
    }

    public agregarPista (pista : PistaAudio) : void {
        if (pista){
            this.listaReprod.push(pista);
            this.duracionTotal += pista.duracionPista;
        }
    }

    public getCantPistas() : number{
        return this.cantPistas;
    }

    public sumCant() : void{
        this.cantPistas = this.listaReprod.length
     }

    public duracion() : number {
        return this.duracionTotal ;
    }

}


