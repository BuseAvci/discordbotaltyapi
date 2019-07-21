const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', 'kanalidniz')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("»  Bot | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle birileri ilgilenicektir lütfen bekle!**")
  .setFooter("[UltraCoddingTeam Resmi Discord Sunucusu](https://discord.gg/T5ty2yG)")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
  .setFooter("[UltraCoddingTeam Resmi Discord Sunucusu](https://discord.gg/T5ty2yG)")
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlı-destek'
};
