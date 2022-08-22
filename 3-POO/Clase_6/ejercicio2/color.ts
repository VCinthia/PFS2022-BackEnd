export default class Color{
    private red : number;
    private green : number;
    private blue : number;

    public constructor(red: number, green : number, blue: number){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    public getRed() : number {return this.red;}
    public setRed(red: number) : void {this.red = red;}

    public getGreen() : number {return this.green;}
    public setGreen(green: number) : void {this.green = green;}

    public getBlue() : number {return this.blue;}
    public setBlue(blue: number) : void {this.blue = blue;}

}



