const fs = require("fs");
module.exports.config = {
  name: "inbox",
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
  if(react.includes("ib") ||
     react.includes("Ib") || react.includes("IB") || react.includes("INBOX") ||
react.includes("inbox") ||
react.includes("Inbox")) {
    var msg = {
        body: `Hey, don't you feel ashamed of calling someone inbox? Whatever you want to say, say it here, understand?।😒😐👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
