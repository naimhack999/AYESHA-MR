const fs = require("fs");
module.exports.config = {
	name: "parathe",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "parathe",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("parathe")==0 || event.body.indexOf("Porota")==0 || event.body.indexOf("Parathe")==0 || event.body.indexOf("porota")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐀𝐑𝐀𝐓𝐇𝐄😋 🤟\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲≛⃝𝙰𝚈𝙴𝙰𝙷𝙰 𝚀𝚄𝙴𝙴𝙽👑-)",
				attachment: fs.createReadStream(__dirname + `/cache/parathe.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
