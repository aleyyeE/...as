const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
client.user.setGame("💡 Yapımcı | aLi | 💪 Gelişen Bot |"); 
}