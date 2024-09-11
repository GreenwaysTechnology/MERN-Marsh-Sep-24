const fs = require('fs');
const path = require('path');

//__dirname is global variable which points the current dir and file path
const fileName = path.join(__dirname, 'assets/grains.txt');

const config = {
    encoding: 'utf8',
    flag: 'w'
};
const outputStream = fs.createWriteStream(fileName, config);

//data to be written into file
const grains = ['wheat', 'rice', 'oats'];

grains.forEach(grain => {
    outputStream.write(grain + " ");
    console.log("Wrote: %s", grain);
});

outputStream.close();

outputStream.on('close', function () {
    console.log('file has been closed ')
})