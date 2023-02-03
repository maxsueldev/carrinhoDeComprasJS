let currentId;
class Product {
    #id;
    #qtd;
    constructor(id, name, description, qtd) {
        this.#id = id;
        this.name = name;
        this.description = description;
        this.#qtd = qtd;
    }

    get id() {
        return this.id;
    }
    get qtd() {
        return this.qtd;
    }
    set qtd(qtd) {
        this.qtd = qtd;
    }
}

let tShirt = new Product(01, "T-shirt Avengers", "100% cotton T-shirt with the Avengers theme", 3);
let coat = new Product(02, "Coat", "100% cotton coat", 4);
let dress = new Product(03, "Dress", "Red dress", 2);

const inventario = [tShirt, coat, dress];
// console.log(inventario); 