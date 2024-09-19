class Velocidad {
    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    Cvelocidad (){
        return this.num1/this.num2;
    }
}
let velocidad = new Velocidad (60,1);
let resultado = velocidad.Cvelocidad();
console.log("La velocidad es:", resultado);