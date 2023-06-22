const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert text to the desired format
function convertToSlug(text) {
    return text
        .replace(/[^A-Za-z0-9\s]+/g, "") // Remove non-alphanumeric characters
        .replace(/\s+/g, "-") // Replace consecutive spaces with a single hyphen
        .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
        .toLowerCase(); // Convert to lowercase
}

// Ask for user input
rl.question("Enter the text: ", (inputText) => {
    // Call the function with the input text
    const result = convertToSlug(inputText);

    // Get the current script directory
    const scriptDir = path.dirname(process.argv[1]);

    // Create the output file path with the converted name
    const outputFilePath = path.join(scriptDir, `${result}.js`);

    // Write the result to the output file
    fs.writeFileSync(outputFilePath, '');

    // Output success message
    console.log(`Text converted and saved to ${outputFilePath}`);

    // Close the readline interface
    rl.close();
});
