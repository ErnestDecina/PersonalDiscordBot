//
//  intents.js
//  
//  Description: File that hold all the data for discord bot intents
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Requirements
const { GatewayIntentBits } = require('discord.js');

// Creating a discord Bot
const intentsList = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
] 

module.exports = { intentsList };