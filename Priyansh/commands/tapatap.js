const fs = require("fs");
module.exports.config = {
	name: "tapatp",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tapatp",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tapatap")==0 || event.body.indexOf("Tapatap")==0 || event.body.indexOf("TAPAATP")==0 || event.body.indexOf("Gandu")==0) {
		var msg = {
				body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐌𝐀𝐈𝐍𝐄 𝐓𝐀𝐏𝐀𝐓𝐏 𝐊𝐑 𝐃𝐈𝐘𝐀",
				attachment: fs.createReadStream(__dirname + `/cache/tapatap.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
