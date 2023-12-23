const fs = require('fs');

const filePath = 'example.txt'; // Replace with your file path

// Function to read file contents and print to console
function readFileAndPrint() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File Contents:', data);

    // Simulating an expensive operation (e.g., sorting an array) to see the impact
    const expensiveArray = Array.from({ length: 100000 }, (_, index) => index);
    expensiveArray.sort();

    console.log('Expensive Operation Completed');
  });
}

// Call the function to read file and print contents
readFileAndPrint();
