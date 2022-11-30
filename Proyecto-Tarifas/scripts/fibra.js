export class Fibra {

    #id;
    #velocidad;
    #simetrico;
    
    constructor(id, name, velocidad, simetrico, precio){
        this.#id = id;
        this.name = name;
        this.#velocidad = velocidad;
        this.#simetrico = simetrico;
        this.precio = precio;
    }

}