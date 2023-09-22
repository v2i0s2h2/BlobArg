const fs = require('fs');

// Function to convert a file to a blob and save it
const fileToBlob = (inputFilePath, outputFilePath) => {
  fs.readFile(inputFilePath, (err, data) => {
    if (err) throw err;
    const hex = data.toString('hex');
    const candidBlob = 'blob "' + hex + '"';
    fs.writeFile(outputFilePath, candidBlob, (err) => {
      if (err) throw err;
      console.log('The Candid blob has been saved to ' + outputFilePath);
    });
  });
};

// Use the function
fileToBlob('simple.txt', 'simple1.txt');














// const fs = require('fs');

// fs.readFile('simple.txt', (err, data) => {
//   if (err) throw err;
//   const buffer = Buffer.from(data);
//   console.log(buffer);
// });


// const fileToBlob = async (file) => {
//     const arrayBuffer = await file.arrayBuffer();
//     return new Blob([new Uint8Array(arrayBuffer)], {type: file.type});
//   };
  
//   const fileInput = document.querySelector('input[type=file]');
//   fileInput.addEventListener('change', async (event) => {
//     const file = event.target.files[0];
//     const blob = await fileToBlob(file);
//     console.log(blob);
//   });
  