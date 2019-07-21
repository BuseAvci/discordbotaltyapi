const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Yeniden Başlatma İçin İzin İstiyorum Lütfen Şifrenizi Giriniz ?**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "ŞİFRENİZ", { //Örneğin Şifre Yerine 213214 Yazabilirsiniz
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **İzin Alındı Bot Yeniden Başlatılıyor**   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Bot Yeniden Başlatılıyor** :space_invader:`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `İzin Alınamadı Yada Süre Doldu İşlem İptal Edildi` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Yapımcı Komutu',
  usage: 'reboot'
};