const fs = require("fs");
module.exports.config = {
  name: "chutiya",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("cutiya") ||
     react.includes("Cutiya") || react.includes("CHUTIYA") || react.includes("chutiye") ||
react.includes("Cutiye") ||
react.includes("CUTIYE")) {
    var msg = {
        body: `${name} तु चुतिया तेरा बाप चुतिया तेरा पूरा खानदान चुतिया।🤯😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
