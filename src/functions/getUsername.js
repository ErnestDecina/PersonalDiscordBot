//
//  getUsername.js
//  
//  Description: function get username and @ user back
//  Author: Ernest John Decina
//  Date: 7th of December 2022

function getName(message, client) {
    // Error checking for bots own message
    if (message.author.tag === 'Development - 친구 봇#0514') return;

    console.log(message.author.username);
    message.reply(`Hello <@${message.author.id}>`);
} // End getName

module.exports = {getName};