//
//  loadFunctionDirectory.js
//  
//  Description: Stores all files under directory "command"  
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Requirements
const path = require('path');
const fs = require('fs');

// Load Functions from directory
async function loadFunctionDirectory() {
    // Function List
    var functionList = new Array();

    // Loading file path
    const directoryPath = path.join(__dirname, '../commands/');

    return new Promise((resolve, reject) => {

        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {

            // Handling error
            if (err) {
                reject(console.log('Unable to scan directory: ' + err))
            } // End if

            // Listing all files using forEach
            files.forEach(function (file) {
                // Check if file or folder
                if(file.includes('.js')) {
                    functionList.push(file);
                } // End if
            }); // End files

            // Return List
            resolve(functionList);
        }); // End fs.read
    }); // End Promise
} // End loadFunctionDirectory



module.exports = { loadFunctionDirectory };