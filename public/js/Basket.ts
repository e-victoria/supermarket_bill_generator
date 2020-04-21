export default class Basket {
    private productsList: Map<number, number>;

    constructor() {
        this.productsList = new Map();
    }

    setProduct(barcode: number): void {
        if (this.productsList.get(barcode)) {
            const newAmount: number = this.productsList.get(barcode) + 1;
            this.productsList.set(barcode, newAmount);
        } else {
            this.productsList.set(barcode, 1);
        }
    }

    setProducts(barcodes: Array<number>): void {
        for (let product of barcodes) {
            this.setProduct(product);
        }
    }

    getBasket(): Map<number, number> {
        return this.productsList;
    }
}