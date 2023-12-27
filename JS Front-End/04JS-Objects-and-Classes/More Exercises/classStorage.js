class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this._totalCost = 0;
    }

    addProduct(product) {
        if (this.capacity - product.quantity >= 0) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this._totalCost += product.price * product.quantity;
        }
    }

    getProducts() {
        return this.storage.map(product => {
            return `{"name":"${product.name}","price":${product.price},"quantity":${product.quantity}}`;
        }).join('\n');
    }

    get totalCost() {
        return this._totalCost;
    }
}
