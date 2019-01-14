const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Süt vericegim Kişiyi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
  .setColor("RANDOM")
    .setDescription(`** ${mesaj} `  + ' Bugün sütünü içmeyi unutmadın.Güçlü çocuk seni. Şimdi sana büyük bardakta🥛, minnoş bir süt. Afiyet olsun.**')
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
  name: 'sütver',
  description: 'İstediğiniz Kişiye süt verirsin.',
  usage: 'sütver'
};