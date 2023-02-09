export class Movil {

    #id;
    #minutos;
    #velocidad;
    
    constructor(id, name, minutos, velocidad, precio){
        this.#id = id;
        this.name = name;
        this.#minutos = minutos;
        this.#velocidad = velocidad;
        this.precio = precio;
    }

}
