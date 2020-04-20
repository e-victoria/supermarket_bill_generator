import FileReader from './FileReader';

const fileReader: FileReader = new FileReader(__dirname + '/resources/prives.csv');
fileReader.readFile();