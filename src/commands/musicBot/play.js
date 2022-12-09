//
//  testcommand.js
//  
//  Description: Test Command
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Function Details
// Used for / commands 
details = {
    name: 'play', 
    description: 'Play a song on the discord bot',
    options: [{
        name: 'link:',
        description: 'Enter song link',
        type: 3,
        required: true,
    }],
}

// Function Declaration
async function command(interaction) {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName != 'testcommand') return;
    
    await interaction.reply({content: `Song: ${interaction.options.getString('link:')} selected by <@${interaction.member.user.id}>`});
} // End command

module.exports = { command, details };