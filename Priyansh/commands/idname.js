const fs = require("fs");
module.exports.config = {
	name: "MentionBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Arun", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bot ki id ko mention kro ya uska naam lo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot")==0 || event.body.indexOf("#bot")==0 || event.body.indexOf("+bot")==0 || event.body.indexOf("Bot")==0) {
		var msg = {
				body: "✨● Hy ☆ Me ek bot hu ✨ 🌹𝐌𝐚𝐝𝐞 𝐛𝐲 ≛⃝𝙰𝚈𝙴𝙰𝙷𝙰 𝚀𝚄𝙴𝙴𝙽👑 😊💫",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
