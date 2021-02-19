require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", (ready) => {
  bot.user.setPresence({
    status: "online",
    activity: {
        name: "wcnrny Rainbow Role Bot",
        type: "STREAMING",
        url: "https://www.twitch.tv/wcnrny"
    }
});
})

//.env klasörünün içerisine rengarenk yapmak istediğiniz rolün idsini ROLE_ID olarak koyun.
//author idsi olarak kendinizin idsini koyun
//şu şekilde gözükmesi lazım
//TOKEN="tokenınız buraya"
//KURUCU_ID="kendi idniz buraya"
//ROLE_ID="rolünüzün idsi buraya"

bot.on("message", (message) => {
  if(message.content === "!rainbowBaslat") {
    if(message.author.id === process.env.KURUCU_ID) {
        message.delete({ timeout: 10000 })
          let rRole = message.guild.roles.cache.get(process.env.ROLE_ID)
            if(!rRole) {
              return message.channel.send(`Hey,${process.env.ROLE_ID} id li bir rol yok burada. Lütfen rengarenk rol yapmanız için bir rolün idsini kod dosyaları arasında bulunan yönergelere uygun bir şekilde koyunuz.`)}

            var finalB = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
                const rRich = new Discord.MessageEmbed()
                  .setTitle("✨Rengarenk rol✨")
                  .setDescription("Rengarenk Rol başarıyla çalışmaya başladı!")
                  .addField('Eğer Rengarenk Rolü durdurmak istiyorsan altta bulunan komudu yazman yeter.', '!rainbowDurdur', true)
                  .setColor(finalB)
                message.channel.send(rRich).then(message => message.delete({ timeout: 10000 }))
    
            setInterval(function rainbowRole() {
              var finalA = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
                rRole.edit({
                  color: finalA
                }) 
            },5000)}
            else{
              message.reply("Sen bu kodun sahibi değilsin. Komudu kullanılmasına izin verilmedi.")}
  }
  if(message.content === "!spam31") {
    setInterval(function basla() {
              message.channel.send("31")
  })}
  if(message.content === "!rainbowDurdur") {
    if(message.author.id === process.env.KURUCU_ID){
      let rRole = message.guild.roles.cache.get(process.env.ROLE_ID)
          rRole.edit({
            color: "#ffffff"
          })
      var finalB = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
      const richEmbed = new Discord.MessageEmbed()
        .setTitle("✨Rengarenk rol✨")
        .setDescription("Rengarenk Rol başarıyla durduruldu!")
        .addField('Eğer Rengarenk Rolü başlatmak istiyorsan altta bulunan komudu yazman yeter.', '!rainbowBaslat', true)
        .addField('Ayrıca rengin beyaz yapıldı!')
        .setColor(finalB)
      message.channel.send(richEmbed).then(message => message.delete({ timeout: 10000 }))
          setTimeout(() => { console.log(process.exit(0)); }, 300);}
    else{
      message.reply("Sen bu kodun sahibi değilsin. Komudu kullanılmasına izin verilmedi.")}
  }})

bot.login(process.env.TOKEN);