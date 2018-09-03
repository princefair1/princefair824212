const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('ba. | *Soon');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
var prefix = "ba.";
client.on('message', message => { // كود برودكسات
    var prefix = 'ba.'; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'bc') { // الكوماند !bc

		var args = message.content.split(' ').slice(1).join(' ');
		//بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
      var prefix = "ba.";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
client.on('message', message => {
var prefix = "ba.";
      if(message.content === prefix + "hchannel") { // كود احفاء الروم
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('لا تمتلك صلاحية حبي ❌');
	  //بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم الاخفاء بنجاح! ✅  ')
 }
});
client.on('message', message => {
var prefix = "ba.";
      if(message.content === prefix + "schannel") { // كود اظهار الروم 
	  //بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
client.on('message', message => { //invite كواد ارسال انفايت بالخاص
	 if (message.content.startsWith(prefix + "invite")) {
     if(!message.channel.guild) return;
     if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 0,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("#5016f3")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("Bazoka",'https://i.imgur.com/AodgcaY.png')
                   .setTimestamp()
                message.channel.send('**تم الارسال رابط  سيرفر في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => { //كود ارسال رابط انفايت بالخاص لمدة ساعة و لفرد واحد 
    if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }//كود ارسال رابط انفايت بالخاص لمدة ساعة و لفرد واحد لتشغيل الامر اكتب بالشات رابط
});

client.on("message", message => { //clear كود مسح الشات
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith("مسح")) { // البرفكس كلمه مسح
		//بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
              if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

//كود بان مع السبب
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         	//بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** لا تمتلك صلاحية اعطاء بان لاحد و بان الناس مانو لعبة ^_( **");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** لا تمتلك صلاحية للقيام بذلك **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("** بسبب مخالفتك للقوانين و الشروط الله معك اخي **");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**اسم العضو المتبند :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**متبند من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب : تمت مخالفة القوانين**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
}); // كود بان مع السبب // 

client.on('message' , najzx => { //كود فك الباند
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith(prefix + 'unban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
    }
  });		/// كود البان
  
client.on('message', message => { // كود كيك مع السبب
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         	//بداية كود استخدام الامر ده لازم رتبة اونر
		if(!message.member.roles.has('476705995717083136')){
		return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**لا تمتلك صلاحية للطرد و طرد الاعضاء مانو لعبة ^_(**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**لا استطيع طرد احد**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**تم طردك بسبب مخالفة القوانين و الشروط**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**اسم العضو المطرود:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**تم طردو من قبل الاداري:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب تم مخالفة القوانين**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => { // كود عدد الاعضاء في السيرفر 
      if (!message.channel.guild) return;
      if(message.content == prefix + 'member')
	  var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🎗️| عدد الاعضاء')
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
  });// كود عدد الاعضاء في السيرفر 
	
	client.on('message', message => { // كود سحب عضو الي الرومات الصوتية
	if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
	if (message.member.hasPermission("MOVE_MEMBERS")) {
	//بداية كود استخدام الامر ده لازم رتبة اونر
	if(!message.member.roles.has('476705995717083136')){
	return message.reply("🚀انقلع برا ي خرا ما عندك رتبة").catch(console.error);
    }
		//عشان تجيب اي دي الرتبة تكتب في الشات بتاع الديسكورد \@Namerolehere
		//نهاية كود رتبة استخدام الامر ده
	if (message.mentions.users.size === 0) {
	return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
	}
	if (message.member.voiceChannel != null) {
	if (message.mentions.members.first().voiceChannel != null) {
	var authorchannel = message.member.voiceChannelID;
	var usermentioned = message.mentions.members.first().id;
	var embed = new Discord.RichEmbed()
	 .setTitle("Succes!")
	 .setColor("#000000")
	 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
	var embed = new Discord.RichEmbed()
	.setTitle(`You are Moved in ${message.guild.name}`)
	 .setColor("RANDOM")
	.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
	 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
	message.guild.members.get(usermentioned).send(embed)
	} else {
	message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
	}
	} else {
	 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
	}
	} else {
	message.react("❌")
	 }}});
//بوت تقفيل الشات 

client.on('message', message => {
   if(message.content === "قفل الشات") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === "فتح الشات") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }   // نهاية كود قفل الشات
       
});

client.on('guildMemberAdd', member => { // كود ترحيب بروم الويلكم 
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`اهلا بك اخي الغالي نورت السيرفر, ${member}`);
  if (!channel) return;
  channel.send(`📨 كلان داكس يرحب بك 📨 
  🎗️ اسم العضو  ${member}🎗️  
	انت العضو رقم ${member.guild.memberCount} `) // نهاية كود الترحيب بروم الويلكم

  });
  
  client.on("message", (message) => { // كود انشاء روم كتابي 
if (message.content.startsWith(prefix +'ct')) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('✅ تـم إنـشاء روم كـتابـي')

} 			// كود انشاء روم كتابي نهايتة
});

client.on("message", (message) => {  // كود انشاء روم صوتي
if (message.content.startsWith(prefix +'cv')) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('✅ تـم إنـشاء روم صـوتي')
    
}
});         // // كود انشاء روم صوتي نهاية الكود

client.on('message', message => { //وصف الكود: لعرض عدد الاشخاص المبندين من السيرفر
    if (message.content.startsWith(prefix + 'bans')) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} الاشخاص المبندين من السيرفر `))
  .catch(console.error);
}
});					//وصف الكود: لعرض عدد الاشخاص المبندين من السيرفر
 
client.on('message', message => {  //وصف الكود: يثبت ملكية البوت
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["368324156367962112"];
if (message.content.startsWith(prefix + 'ownerbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**✅ @Bazoka#6846 انت لست صاحب البوت ، صاحب البوت هو❌**");   
}
}								//وصف الكود: يثبت ملكية البوت
});

//وصف الكود: كود حالات الاعضاء
client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    } 					//وصف الكود: كود حالات الاعضاء
});
		
		
		client.on('message', message =>{
    let args = message.content.split(' ');
    
    if(args[0] === `${prefix}avatar`){		 // كود صورة الاعضاء في الشات  لتشغيل الكود ba.avatar
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };			// كود صورة الاعضاء في الشات  لتشغيل الكود ba.avatar
});

client.on('message', message => { // وصف الكود:  كود الريبورت / التبليغ 

    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'bareport')) return message.channel.send('**ماذا تريد .؟**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**منشن اسم الشخص الي تبي تبلغ عليه**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**اكتب وش سوى**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`:page_with_curl: **[REPORT]** By: ${message.author.tag}`)
    .addField('**: المبلغ عنه**', `${name1}`, true)
    .addField('**: تم التبليغ من روم**', `${message.channel.name}`, true)
    .addField('**: السبب**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'bareport').sendEmbed(abod)
    message.reply('**شكرا على تبليغك**').then(msg => msg.delete(3000));
    }			// // وصف الكود:  كود الريبورت / التبليغ 
});

client.on('message', function(msg) { // كود معلومات السيرفر
    if(msg.content.startsWith (prefix +'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('💠** اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
      .addField('🔰** __عدد الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('⁉**__عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🌟**__كم عضو متصل__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__عدد الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎵**__عدد الرومات الصوتية__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__الاونر حق السيرفر__**',`**${msg.guild.owner}**`,true)
      .addField('🗓**__تاريخ انشاء السيرفر__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });		// كود معلومات السيرفر
  
  client.on('message' , message => { 		// وصف الكود: كود ارسال رسالة لصاحب البوت ادرونا الافكار خلصت
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");

client.users.get("368324156367962112").send(
    "\n" + "**" + " السيرفر 🏳 " + message.guild.name + "**" + 
    "\n" + "**" + " المرسل  📝 " + message.author.tag + "**" + 
    "\n" + "**" + args +   " 📨 الرسالة " + "**")

let embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
	 .addField(':white_check_mark: تم استخدام الامر بنجاح ','By : Bazoka')
     .setThumbnail(message.author.avatarURL)
                                                

message.channel.send(embed);


}								// وصف الكود: كود ارسال رسالة لصاحب البوت ادرونا الافكار خلصت
    
});



var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\n  MuteChat / ميوت كتابي\n")
      .setFooter("Anti - Spam")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Anti - Spam")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix +"mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت 🤐 **").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي 🤐 **").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص 😉 **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص 😉 **").catch(console.error);
});
  }

};

}); // كود الميوت و الان ميوت الاستخدام ba.mute @username ba.unmute @username


 // كود تجعل البوت يكتب الكلام الي تقوله
 
 
 /// كود تجعل البوت يكتب الكلام الي تقوله
 
client.on ("guildMemberAdd", member => {  /// كود وضع رتبة للي يدخل السيرفر جديد ياخدها
   
   var role = member.guild.roles.find ("name", "❢༺ Visitor ༻ ❢");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
}) 			/// كود وضع رتبة للي يدخل السيرفر جديد ياخدها


client.on('message', message => { /// وصف الكود: معلومات  عن دعوة بشكل حلو يطلع اك حتى شخص يلي تمشنه !
if (message.content.startsWith(prefix +'inv-info')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(alpha);

});     /// وصف الكود: معلومات  عن دعوة بشكل حلو يطلع اك حتى شخص يلي تمشنه !

};
  });

client.login(process.env.BOT_TOKEN);


