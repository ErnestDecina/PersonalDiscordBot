//
//  loadCommandDetails.js
//  
//  Description: load details into commandDetailsList
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Functions
const { loadFunctionDirectory } = require('./loadFunctionDirectory');

async function loadCommandDetails() {
        // Load functions
        var functionList = await loadFunctionDirectory();
        var commandDetails = [];

        // Load functions into a interaction Handler
        for(i = 0; i < functionList.length; i++) {
            var funcCommand =  require("../commands/" + functionList[i]);
            commandDetails.push(funcCommand.details);
        } // End for
        
        return commandDetails;
} // End loadCommandDetails

module.exports = { loadCommandDetails };