export class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(new_Nombre){
        return this._nombre= new_Nombre
    }

    calcularImpuesto(montoBrutoAnual,deducciones){
        return ((montoBrutoAnual-deducciones)*0.21)
    }
}