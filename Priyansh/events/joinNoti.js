module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("𝐇𝐄𝐋𝐋𝐎 𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄🙋‍♂️", event.threadID, () => api.sendMessage({body:`🌺⃝𝙰𝚈𝙴𝚂𝙷𝙰 𝚀𝚄𝙴𝙴𝙽࿐  𝐁𝐎𝐓🦋🌺 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃«

𝐁𝐨𝐭 𝐌𝐚𝐝𝐞 𝐛𝐲: ཫ༄𝚂𝙱 𝙽𝙰𝙸𝙼 ☘️
<------------------------------>  
𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋!!! 

𝐀𝐏𝐑𝐎𝐕𝐀𝐋 𝐀𝐋𝐋𝐎𝐖 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏!!!
<------------------------------>

<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER OR BOT ADMIN

𝐎𝐖𝐍𝐄𝐑: ཫ༄𒁍 𝙰𝚈𝙴𝚂𝙷𝙰 𝚀𝚄𝙴𝙴𝙽 𝙰𝙹𝚂

♻️Facebook: 

https://www.facebook.com/share/17Wu9hVUR5/

ENJOY 🍁`, attachment: fs.createReadStream(__dirname + "/cache/join.jpg")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•|      ✿      |•════╗\n 🌿𝗛𝗲𝗹𝗹𝗼 🌿𝗗𝗲𝗮𝗿🌿 \n╚════•|      ✿      |•════╝\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\n༄ 𝗧𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽✺࿐\n\n{threadName}\n\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n\n         🥀𝗠𝗼𝗷𝗮 𝗞𝗼𝗿𝗼🥀\n\n༄✺𝗔𝗿 𝘁𝘂𝗺𝗶 𝗲𝗶 𝗴𝗿𝗼𝘂𝗽 𝗲𝗿 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗮𝗷 𝘁𝗵𝗲𝗸𝗲 [ # ]࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n     ♥  𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑♥\n\n                           ☟                     \n\n      ❤️⃝𝗔𝘆𝗲𝘀𝗵𝗮 𝗤𝘂𝗲𝗲𝗻 𝗔𝗝𝗦🙂\n     ╚╩══•    •✠•❀•✠ •    •══╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
               }
