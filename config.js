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
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/tsYHuJy.mp4";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923191833569";
global.owner = process.env.OWNER_NUMBER || "923191833569";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU082TEdUMHY1MXhYWnZJb1MzYjgxWUVScFg3RHcxOUZPRzJyRmF6VU5tWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdESW5wMFhoMi9QdythemxXelZQQWRZeHJWOSt0Y3Z0eHhXNklwVlZpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSUJpa0RaQjJMS1ZzRHgvZk1ZdTltQ3RMeGpwSlJyQkc0NU9ZQWFhejE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZG1MRCs0YmhoUWVGdm1oamIyd3VnTDYrQ1l2a1BqTURlZ2xxOTRmSXo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQUXZQY0Rvem1tZjl3SzV0ck9UMmlNbDhLSlJuN0tkbGZoSmhBK0NFMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4UUU3dUNiMi9jWDNhRU9nd0tqdGI2VmdaQ0c4bmN3RzlhS3pLUk5xaUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5VVTBNU0RDOVdpN2VOZTRheDhKOEhzRUM1QVNROVV1dFJDdU15UWxrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXRGTzl2eTl4c0RkeWIrREx3ZUVrQXpEUEx2WEhwQVZiTXFFZ3p3aEhHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9qdktlK25BOUpDSmJ5aWVncEt2ajRWcGNveHY1clJjN3BTdmtDRURPdmpiRUwyZThVVFBnbjAzUmxmQXQ4VnBmamU4OCtPSGJGMXc5R0VMejNzbGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJQYzB1UHdSUVdQeFRpbG9kOTc3cW1yTVVicjM3RFBjTm9id1JINStRa1VzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5MTgzMzU2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRENEMTcwNEU1QkI1MUVEOThFMzdDQkFDOEI5OThEQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTI3NzMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxOTE4MzM1NjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREY3ODAxQjA2NDU0NUU5NDdCM0FGNDY1ODY4QTU0MDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzEyNzczMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibGF4QkNtNURSaEtQamhGX2I3emVnZyIsInBob25lSWQiOiI5YzIyMjExYy03ZTE1LTQzZDctYWI1OS1hNzgzNzA0Mjc2ZTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUdoSStnU2FLVGZkb2pOdzZ2SExDVEdtM2pNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJoYThqVko4R0NyY0RZdEVKd2Jzd2VtS3M5Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxNTY5WVM3QyIsIm1lIjp7ImlkIjoiOTIzMTkxODMzNTY5Ojg5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZCC8J2Qh/CdkJTwnZCZ8J2QgPCThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DSDNKY0NFS092MDdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImR1bEsvczV1YjRzcHNFKzV1SzQ5dlVwZ0h1Z1dJNUdIc3NMc1ZaMkF6UTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNQTS9WN1BvbHpPQ1czWEpRR2pySEZjNmtvSENuRGd4YU4xUExEa1U2ZEFUeFRjY3E4Ujlya2tKbGVXbm1rSmR6K2pISUk0MTNOMFVhanR4NGZlRkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwTDg0YjRiRmtWVVNGcm5yR29HOU14cVBZUnFuMk9NSjFEeXBSek54cGhYcmZsb1Frck5XcVpGL09PU1ozdGNtd2F1cVRmY3YyQXcwdE56VGs5MzZqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MTgzMzU2OTo4OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYnBTdjdPYm0rTEtiQlB1Yml1UGIxS1lCN29GaU9SaDdMQzdGV2RnTTBPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTI3NzI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJIeCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𓆩𝐂𝐇𝐔𝐙𝐀𓆪-𝐕2😍",
  author: process.env.PACK_AUTHER || "𓆩𝐂𝐇𝐔𝐙𝐀𓆪",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𓆩𝐂𝐇𝐔𝐙𝐀𓆪-𝐕2",
  ownername: process.env.OWNER_NAME || "𓆩𝐂𝐇𝐔𝐙𝐀𓆪",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
