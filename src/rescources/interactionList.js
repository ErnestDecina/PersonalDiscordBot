//
//  interactionList.js
//  
//  Description: Loads all Interactors and Listeners
//  Author: Ernest John Decina
//  Date: 7th of December 2022


// Functions
const { discordBotReady } = require('../functions/discordBotReady.js');
const { getName } = require('../functions/getUsername.js');
const { loadFunctionDirectory } = require('../functions/loadFunctionDirectory.js')

async function loadHandlerInteraction(client) {
    // Load functions
    var functionList = await loadFunctionDirectory();

    // Listen if bot has started
    client.on("ready", discordBotReady, client);

    // Checking Messages and User who sent it
    client.on('messageCreate', getName, client);
    
    // Load functions into a interaction Handler
    for(i = 0; i < functionList.length; i++) {
        var funcCommand =  require("../commands/" + functionList[i]);
        client.on("interactionCreate", funcCommand.command);
    } // End for

    // Print number of commands added
    console.log(`Loaded ${functionList.length} commands`);
} // End loadHandlerInteraction

module.exports = { loadHandlerInteraction };