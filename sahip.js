const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("** 🥛 Sahip komutları**")
    .setColor("#15f153")
    .addField("+eval", "Kod dener")
    .addField("+load", "Yeni bir komut yükler")
    .addField("+reboot", "Botu yeniden başlatır")
    .addField("+reload", "Bir komutu yeniden başlatır")
    .addField("+unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
