import FileReader from '../../public/js/FileReader';

describe("FileReader", function () {

    let fileReader;

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

});