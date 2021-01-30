'use strict';
const { Client, MessageEmbed, MessageReaction, Message } = require('discord.js');
const request = require('request');
const client = new Client();

// Your bot prefix //
const PREFIX = (';;');

// Few informations //
var poll1 = '**Create a simple poll**'
var info = '**Give you information about server and you**'

client.on('ready', () => {
  //  State of your bot //
    console.log('First bot is online!');
    // Show your bot activity //
    client.user.setActivity(';;help', { type: 'PLAYING'}).catch(console.error);
    // Here you can change picture //
    client.user.setAvatar('https://media.discordapp.net/attachments/751566782057414806/751566842803519509/80af300d9c63a59a3e3479e299dbfdb9.jpg').catch(console.error);
    // Here you can rename your bot //
    client.user.setUsername('FirstBot').catch(console.error);
});

client.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ")

 // Give you info about you and server // 
  switch(args[0]){
    case 'Info':
        const embed = new MessageEmbed()
        .setTitle('**INFO**')
        .addField('Your Username',(`${message.author.username}`))
        .addField('Region',`${message.guild.region}`)
        .addField('Main',`${message.guild.owner}`)
        .addField('Now on the server',`${message.guild.memberCount}`)
        .addField('Name of this server',(`${message.guild.name}`))
        .setColor(0x1EE263)
        .setFooter('Enjoy The server');
      message.channel.send(embed);
        break;
}

   // Give you commands info //
switch(args[0]){
  case 'help':
      const embed = new MessageEmbed()
      .setTitle('**Bot Commands**')
      .addField('`Info`', info)
      .addField('`poll`', poll1)
      .setColor(0xCC190E)
      .setFooter('Enjoy The server');
    message.channel.send(embed);
      break;
}
    // Gives you id and username //
    switch(args[0]){
  case 'id':
    const embed = new MessageEmbed()
    .setColor()
    .addFields(
    { name: 'Your Nickname', value: `**${message.author.username}**`, inline: true },
    { name: 'Your ID', value: `${message.author.id}`, inline: true },
  )
  message.author.send(embed);
  message.delete();
  break;
}
    //  Making a simple poll //
switch(args[0]) {

  case 'poll':
    const embed = new MessageEmbed()
    .setColor(0xFFC300)
    .setTitle('Crating a poll')
    .setDescription(';;poll for make simple yes or no')

    if(!args[1]) {
      message.channel.send(embed);
      break;
    }

    let msgArgs = args.slice(1).join(" ");

    message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
      messageReaction.react("✅");
      messageReaction.react("❌");
      message.delete()
    });

    break;
}
});

// Add here your bot token //

client.login('YOUR_TOKEN_HERE');

// When you want start bot, open terminal and type "node ." //
