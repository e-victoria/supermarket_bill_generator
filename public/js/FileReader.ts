import * as fs from 'fs';

export default class FileReader {
    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readFile(): Map<number, Map<any, any>> {
        let fileMap: Map<number, Map<any, any>> = new Map();
        let fileData = fs.readFileSync(this.filePath, 'utf-8').split('\n');

        for (let i: number = 1; i < fileData.length; i++) {
            const priceArray = fileData[i].split(', ');
            const barCode = priceArray[0];
            const name = priceArray[1];
            const amount = priceArray[2];
            const price = parseFloat(priceArray[3]);

            if (!fileMap[barCode]) {
                fileMap[barCode] = {};
                fileMap[barCode]["name"] = name;
                fileMap[barCode]["price"] = {};
            }
            fileMap[barCode]["price"][amount] = price;
        }

        return fileMap;
    }
}