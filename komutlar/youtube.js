const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Aranıcak Kelimeyi Yazın `)
        if(!link)return message.reply("Console Hatası")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Aktivasyon:', 'Youtubede Aranıyor')

          .addField("Aranan:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter('[UltraCoddingTeam Resmi Discord Sunucusu](https://discord.gg/T5ty2yG)');
          
              message.channel.send(embed);
              message.author.send(`Aradığın link bulundu ${link} Sunucu: ${ message.guild.name}`);

        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'youtube'
};