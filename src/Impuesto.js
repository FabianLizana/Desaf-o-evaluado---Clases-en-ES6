export class Impuesto {
    constructor (montoBrutoAnual,deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual
    }

    set montoBrutoAnual(newMonto){
        return this._montoBrutoAnual= newMonto
    }

    get deducciones(){
        return this._deducciones
    }

    set deducciones(new_deducciones){
        return this._deducciones= new_deducciones
    }
}