import BillCalculator from '../../public/js/BillCalculator';
import Basket from '../../public/js/Basket';

describe("BillCalculator", function () {

    let billCalculator;
    let basket;
    let products;

    beforeEach(function() {
        basket = new Basket();
        products = [1001, 1001, 3401, 1001, 3401, 3401, 3401, 1001, 1243, 1243];
        basket.setProducts(products);
    });

    it("should return basket", function () {
        const actual = basket.getBasket();
        const expected = new Map();
        expected.set(1001, 4);
        expected.set(3401, 4);
        expected.set(1243, 2);

        expect(actual).toEqual(expected);
    });

    it("should return map total price", function () {
        billCalculator = new BillCalculator(this.basket);
        const actual = billCalculator.calculateBill();
        const expected = 17;

        expect(actual).toBe(expected);
    });
})