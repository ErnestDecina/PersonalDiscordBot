//
//  testcommand.js
//  
//  Description: Test Command
//  Author: Ernest John Decina
//  Date: 7th of December 2022

// Function Details
// Used for / commands 
details = {
    name: 'testcommand', 
    description: 'Testing Command List in Discord JS',
    options: [{
        name: 'argument',
        description: 'Enter string into arguments',
        type: 3,
        required: true,
    }],
}

// Function Declaration
async function command(interaction) {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName != 'testcommand') return;
    
    await interaction.reply({content: `command \'testcommand\' selected by <@${interaction.member.user.id}>\nContent: ${interaction.options.getString('argument')}`});
} // End command

module.exports = { command, details };