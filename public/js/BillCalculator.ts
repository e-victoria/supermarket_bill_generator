import Basket from "./Basket";

export default class BllCalculator {

    private basket: Basket;
    private prices: Map<number, Map<any, any>>;

    constructor(basket: Basket, prices: Map<number, Map<any, any>>) {
        this.basket = basket;
        this.prices = prices;
    }

    calculateBill(): number {
        let totalPrice = 0;
        const productsMap: Map<number, number> = this.basket.getBasket();
        console.log(productsMap)

        productsMap.forEach((amount: number, barcode: number) => {
            const productPricesMap = this.prices[barcode]["price"];
            while (amount > 0) {
                for (let key in productPricesMap) {
                    if (Object.keys(productPricesMap).length > 1 && parseInt(key) > 1 && amount >= parseInt(key)) {
                        while (amount >= parseInt(key)) {
                            amount -= parseInt(key);
                            totalPrice += productPricesMap[key];
                            productsMap.set(barcode, amount);
                        }
                    } else if (Object.keys(productPricesMap).length === 1 || (Object.keys(productPricesMap).length > 1 && amount < parseInt(key))) {
                        while (amount > 0) {
                            console.log(barcode, amount)
                            totalPrice += productPricesMap[1];
                            amount -= 1;
                            productsMap.set(barcode, amount);
                            console.log(barcode, amount)
                        }
                    }
                }
            }
        });

        return totalPrice;
    }

}