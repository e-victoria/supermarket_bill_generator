import * as fs from 'fs';

export default class FileReader {
    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readFile(): Map<number, Map<string, number>> {
        let fileMap = new Map();
        let fileData = fs.readFileSync(this.filePath);
        console.log(fileData);

        return fileMap;
    }
}