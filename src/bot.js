require("dotenv").config();

const jokes = require("./jokes");
const rps = require("./rockpaperscissors");
const taunts = require("./taunts");
const prizes = require("./prizing");
const set = require("./cardsetTracker");

const { Client, WebhookClient } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .toLowerCase()
      .split(/\s+/);

    if (CMD_NAME === 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
      if (args.length === 0)
        return message.reply('Please provide a user');
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked.`))
          .catch((err) => message.channel.send('I cannot kick that user :('));
      } else {
        message.channel.send('That member was not found');
      }

    } else if (CMD_NAME === 'ban') {
      if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply("You do not have permissions to use that command");
      if (args.length === 0) return message.reply("Please provide an ID");
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send('User was banned successfully');
      } catch (err) {
        console.log(err);
        message.channel.send('An error occured. Either I do not have permissions or the user was not found');
      }

    } else if (CMD_NAME === 'announce') {
      console.log(args);
      const msg = args.join(' ');
      console.log(msg);
      webhookClient.send(msg);

    } else if (CMD_NAME === 'jokes') {
      const joke = jokes.duelJokes();
      message.channel.send(joke);

    } else if (CMD_NAME === 'rps') {
      const rpsReply = rps.rpsDecider();
      message.author.send(rpsReply);

    } else if (CMD_NAME === 'taunt') {
      if (args.length === 0)
        return message.reply('Please provide a user');
      var member = message.mentions.users.first();
      const tauntMessage = taunts.tauntList();
      if (member)
      {
        message.channel.send(`${message.author} ` + tauntMessage + ` <@${member.id}>!`);
      }
      else
      {
        message.channel.send(`Target was nowhere to be found.`);
      }

    } else if (CMD_NAME === 'prizing'){
      var prizeList = prizes.printPrizing();
      for(var i = 0; i < prizeList.length; i++)
      {
        message.channel.send(prizeList[i]);
      }

    } else if (CMD_NAME === 'currentset'){
      var numDetails = 3;
      var currentsetDetails = set.currentSetInfo(3);
      for(var i = 0; i < currentsetDetails.length; i++)
      {
        message.channel.send(currentsetDetails[i]);
      }
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '838904090523598859') {
    switch (name) {
      case '💙':
        member.roles.add('838903244403113984');
        break;
      case '💛':
        member.roles.add('838903311096086539');
        break;
      case '❤️':
        member.roles.add('838903288996167720');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '838904090523598859') {
    switch (name) {
      case '💙':
        member.roles.remove('838903244403113984');
        break;
      case '💛':
        member.roles.remove('838903311096086539');
        break;
      case '❤️':
        member.roles.remove('838903288996167720');
        break;
    }
  }
});

client.login(process.env.JINZO_BOT_TOKEN);
