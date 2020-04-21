import FileReader from '../../public/js/FileReader';
import BillCalculator from '../../public/js/BillCalculator';
import Basket from '../../public/js/Basket';

describe("FileReader", function () {

    let fileReader;
    let billCalculator;

    it("should return map with product prices", function () {
        fileReader = new FileReader(__dirname + '/prices.csv');
        const actual = fileReader.readFile();

        const expected = {
            "1001": {
                "name": "beer",
                "price": {
                    "1": 1.20,
                    "2": 2.00
                }
            },
            "1243": {
                "name": "eggs",
                "price": {
                    "1": 0.20,
                    "10": 1.90
                }
            },
            "3401": {
                "name": "chocolate",
                "price": {
                    "1": 3.15
                }
            }
        };

        expect(Object.assign({}, actual)).toEqual(
            jasmine.objectContaining(Object.assign({}, expected))
        );
    });

    it("should return map total price", function () {
        billCalculator = new BillCalculator();
        const basket = new Basket();
        const products = [1001, 1001, 3401, 1001, 3401, 3401, 3401, 1001, 1243, 1243];
        basket.put(...products);
        const actual = billCalculator.calculateBill(basket);
        const expected = 17;

        expect(actual).toBe(expected);
    });

});