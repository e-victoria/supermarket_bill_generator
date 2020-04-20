import FileReader from './FileReader';

const fileReader: FileReader = new FileReader(__dirname + '/../resources/prices.csv');
fileReader.readFile();