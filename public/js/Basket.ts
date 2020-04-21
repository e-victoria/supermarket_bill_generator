export default class Basket {
    private productsList: Map<number, number>;

    constructor() {
        this.productsList = new Map();
    }

    setProduct(barcode: string): void {
        if (this.productsList[barcode]) {
            this.productsList[barcode] += 1;
        } else {
            this.productsList[barcode] = 1;
        }
    }

    getBasket(): Map<number, number> {
        return this.productsList;
    }
}