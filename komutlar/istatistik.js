const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor(`#00fff4`)
    .setTitle(`İstatistiklerim`)
    .addField(`Botun Sahibi`, `<@idniz>`)
    .addField(`Sunucu Sayısı`, `${client.guilds.size.toLocaleString()} sunucu`)
    .addField(`Kullanıcı Sayısı`, `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı`)
    .addField(`Çalışma Süresi`, `${duration}`)
    .addField(`Bellek Kullanımı`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB"}`)
    .addField(`Ping`, `${client.ping}ms`)
    .addField(`Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) • [Destek Sunucusu](destek sunucusu)• [İnternet Sitesi](internet sitesi urlsi)`)
    .addField('[UltraCoddingTeam Resmi Discord Sunucusu](https://discord.gg/T5ty2yG)')
    return msg.channel.send(embed);
    msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};