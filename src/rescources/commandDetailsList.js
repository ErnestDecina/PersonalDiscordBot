//
//  commandDetailList.js
//  
//  Description: File that hold all the data for command list
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Functions
const { loadCommandDetails } = require('../functions/loadCommandDetails.js')

// Variables
var commandDetailList;

// Function Declaration
async function loadList() {
    // Load command details
    commandDetailList = await loadCommandDetails();
    return commandDetailList;
} // End loadList

module.exports = { loadList };