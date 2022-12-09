//
//  index.js
//  
//  Description: Main file to drive discord bot
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Requirements
require('dotenv').config();
const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');

// Functions
const { loadHandlerInteraction } = require('./rescources/interactionList.js')
const { updateCommandDetailList } = require('./functions/updateCommandDetailList.js');

// External Variables
const { intentsList } = require('./rescources/intents.js');

// Create Bot 
const client = new Client({ intents: intentsList });
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// Load Interactor and Handlers
loadHandlerInteraction(client);

// Main Function
async function main() {
    // Upload / commands list
    await updateCommandDetailList(rest);

    // Discord Bot Login
    client.login(process.env.TOKEN);
} // End main

// Call Driver Code
main();