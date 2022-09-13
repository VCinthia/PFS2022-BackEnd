export default class ErrorControlado extends Error {
    constructor(mensaje? : string) {
        super(mensaje);
        this.name = 'ErrorControlado';
    }
}