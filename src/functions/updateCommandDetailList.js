//
//  updateCommandDetailList.js
//  
//  Description: Updates Command List Details for servers to see
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Requirements
require('dotenv').config();
const { Routes } = require('discord.js');

// External Variables
const { loadList } = require('../rescources/commandDetailsList.js');

// Function Declaration
async function updateCommandDetailList(rest) {
    try {
        // Print Start
        console.log('Started refreshing application (/) commands.');

        // Updating Commands only to a specific GUILD
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: await loadList() });
        
        // Print Success
        console.log(`Successfully refreshed application (/) commands.`);

    } catch (error) {
        // Print Error
        console.log("Error in updating Command list");
        console.log(error);

    } // End Catch
} // End updateCommandDetailList

module.exports = { updateCommandDetailList };