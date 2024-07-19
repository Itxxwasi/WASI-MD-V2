//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "incrediblestanzy@gmail.com";
global.location = "Accra,Ghana.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "233550248278@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaedAFBKwqSUoxKGJ43n";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaedAFBKwqSUoxKGJ43n";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f2dc363daded55a63eafd.jpg";
global.devs = "233550248278";
global.sudo = process.env.SUDO || "233550248278";
global.owner = process.env.OWNER_NUMBER || "233550248278";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pOMndvYTBxSjA0a1o4QlRLMVcvOUk3OHZ1eXhrakdMU2lDNzMvTzhrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHFucForc3BnOUZ5dGlaUlI4czBhbDZndVlTSEVjR2hpb3MxaFhEYUczND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUGdlZFBBa3ByVVcvcHRVbTdVc3dmelJNNURPbDNUUEllK28zSktidDJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIanBXTDRxaWlYMmxmWStnN0lxS1NZTktRY0tuUlhZWmJlODA5ZXN3akZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNeXBoVzBTTGtjQk1PcWtoZUVCZFVrQit6QWgyOS9HMkVqNWQwREFiMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJWmRuSmY1SzhZeHFUMEc1dTdoTWZXWXcyeDBnQ0laWjUwWDBKNkZZMmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1pdWpzNDJMUUdsRzBsZStvY044cE4vS3F0QldkeEt5bE9Kd1dNNCtYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlBUTkJvbXJmcUNuT0JJemhoNFpkQTZieGFLak8wb3RxVGF0OTlhRURsVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFVkZxZWFKYnJpQTFNRnVaS0RXeEdHNUFVNW1wUVl4ZGF2YU0ycXNtbzJNYXlnZ2d2UU5Femp1Y2NOUU16Z3VYVDg0cCszdklWOHkxQVpmUWxLbmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJ0Vjc1M2tSRUxXSGpJSnpnTm42R3FMZ0V3UHpBNFhVdWhwUHN0RDhsN3NBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1NzEwODczN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUYwODAyRkJFNEE1MEMzOUE2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDI0Njk4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2WTJLLVRVS1J4NmpUTEFKYk0zRHl3IiwicGhvbmVJZCI6IjFmYTMzN2FmLTFjZWMtNDdlNy04OWNlLWVmZWI3OWVkYjdmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2NXdqdTlaOG8rNEdZNmN6aytVeFB3cTd0OFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXpRTmd2S29LRXBHRmF3eCtBakQzemRrMVhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwxRDRKMzJWIiwibWUiOnsiaWQiOiIyMzMyNTcxMDg3Mzc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRH5HIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQelNtSlVPRUt1MjY3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrd0JzTkxzc0NYUUh3aXh0bkJZUmZlZTlhRGpkTGkyb2VVUlRBdFYva1dRPSIsImFjY291bnRTaWduYXR1cmUiOiJFa21rSDV0Tk15K1JtVGpKaUk1UkJLdWNDdjVubXdCYlhYWnB2bENMNnByR1FkSDRpcEhzZzZYaXJHTXBRd1oyaUZycUVHZXpWREJkMXlsaGh2aGJDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM29vdWI1MjhTNEhzRHB2anhvKyttc1d5aFBxOU1kQ1dUQnZWaDRKcUhONjg4aUV0cHZVV3pMNWN0MllqSFYwQVVPU1VaSWdxWHVKZzBMRjdMMS9FaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNTcxMDg3Mzc6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnNBYkRTN0xBbDBCOElzYlp3V0VYM252V2c0M1M0dHFIbEVVd0xWZjVGayJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQyNDY5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeUQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "i",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-D~G-🕵️👻",
  author: process.env.PACK_AUTHER || "D~G",
  packname: process.env.PACK_NAME || "♥👻",
  botname: process.env.BOT_NAME || "D~G",
  ownername: process.env.OWNER_NAME || "D~G",
  errorChat: process.env.ERROR_CHAT || "233550248278",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
