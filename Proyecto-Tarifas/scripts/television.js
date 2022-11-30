export class Television {

    #id;
    #tarifa;
    
    constructor(id, name, tarifa, precio){
        this.#id = id;
        this.name = name;
        this.#tarifa = tarifa;
        this.precio = precio;
    }

}
