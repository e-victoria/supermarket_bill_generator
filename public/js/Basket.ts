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

    setProducts(barcodes: Array<number>): void {
        for (let product of barcodes) {
            if (this.productsList.get(product)) {
                const newAmount = this.productsList.get(product) + 1;
                this.productsList.set(product, newAmount);
            } else {
                this.productsList.set(product, 1);
            }
        }
    }

    getBasket(): Map<number, number> {
        return this.productsList;
    }
}