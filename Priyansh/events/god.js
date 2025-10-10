module.exports.config = {
  name: "god",
  eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
  let nameThread = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist"; 
    var formReport =  "=== 𝗕𝗼𝘁 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ===" +
                "\n𝗚𝗿𝗼𝘂𝗽 𝗡𝗮𝗺𝗲: "  + nameThread +      "\n\n» 𝗚𝗿𝗼𝘂𝗽 𝗜𝗗: " + event.threadID +
                        "\n» 𝗔𝗰𝘁𝗶𝗼𝗻: {task}" +
                        "\n» 𝗔𝗰𝘁𝗶𝗼𝗻 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝘂𝘀𝗲𝗿𝗜𝗗 : " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "User changes group name from: '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "HELLO MY QUEEN AMAKE ONNO EKTA GROUP E ADD KORESE";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "HELLO MY QUEEN EI MADAR*CHOD AMAKE GROUP THEKE REMOVE KORE DISE"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100080347467595";

  api.sendMessage(`${event.threadID}`,god)

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
