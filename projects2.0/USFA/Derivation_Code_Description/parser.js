const path = require('path');
const { parseDirectoryFiles } = require('../../fileSystem');

const headers = [
  'derivation_code',
  'Derivation_Descript',
];

// we don't have that folder now
const directory = '../../../sd/src/data/Derivation_Code_Description';

// //joining path of directory
const directoryPath = path.join(__dirname, directory);

parseDirectoryFiles(directoryPath, headers);
