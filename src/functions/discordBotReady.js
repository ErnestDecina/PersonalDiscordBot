//
//  discordBotReady.js
//  
//  Description: File hold function discordBotReady to test function exports and argument passing
//  Author: Ernest John Decina
//  Date: 7th of December 2022

function discordBotReady(client) {
    console.log(`\nBot has started`);
    console.log(`Logged in as: ${client.user.tag}`)
} // End discordBotReady

module.exports = { discordBotReady }; 