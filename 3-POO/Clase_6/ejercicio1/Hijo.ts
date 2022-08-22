import Padre from './Padre';

export default class Hijo extends Padre {
    //estado
    private d : string;
    private e : number;
    //funcionalidad
    public constructor(a : boolean, b : number, c : number, d : string, e : number) {
        super(a,b,c);
        this.d = d;
        this.e = e;
    }
}
