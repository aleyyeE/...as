const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Limon vericegim Kişiyi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
  .setColor("RANDOM")
    .setDescription(`** ${mesaj} `  + '  Acı sever misin çocuk adam ?🆘 Yeter mi limon çocuk adam ? 🍋 **')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 kategori: "eğlence"
};

exports.help = {
  name: 'cocukadam',
  description: 'İstediğiniz Kişiye limon ve Acı verirsin.',
  usage: 'cocukadam'
};