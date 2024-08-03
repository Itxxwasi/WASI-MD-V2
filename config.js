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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
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

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUphekZVRml1b3ZsTTU4V3laRHpYM1FIUWZ2b3I3U3lkRGNpMmpaV1Ntaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYStheXRyS1c3Nms1L3EvS0pnNThJZFNZYnRNN2ZBVTNnL013cGJDaGpETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRm9iTTc5enBucFdLOENhUWZQSklOZFRCcFBFYko1Q080bkU0bld4TlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNFhQWFhRUGFwZFZFZ0dDcnNsWmc3ck1TazNiVzlsVW9WOXFBMytBRTM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFNWNNYkVxcG5IVXhwYnpQc3o1NGRLVjZxSVRNZktHKzdOZW1uSU40MUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhTdlY5OWl0aHhadXE1Y2M2T3VIV3VWbHQ5YjRxMEN5emgvZGN0bExrUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExTVk9wZG9INDJTcm83L3pTcU9yWWR4UWNQc2ZNNms4ZFlyWFNrNUNGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejV5NXp2d3F4VDN1SXZVeHhwdkxIdXRhUTNkMElpSkQxMkoxcFM0T04ycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhkSEt5a25XNnhoQ1RMd1FaNXdVWEFqQ3VHVXJ2WVNsZFJwZDBRUXA2cXJWbllwSjR4OU4xYVh3Q0JGSEF0TzBWRWMrZXdKeUswSEhjWVEzWlBpcGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiNHZNSGtHTENNYm9Kc3FHUGlCT3FkWU4yK0FHSHc5SSszQklDT00xZE0xND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcyMDU0Njk4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3OTMzREZGMTg4MzEyOTk1OUU3MjBBOTUzMTA3OEQyRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTg3MDgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcyMDU0Njk4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQ0YwREJBRDU4NzAyOEU2QjE5N0E1Mzk3MzAwRENFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTg3MDgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcyMDU0Njk4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4OUNCNEM1QjFGODM1QjYyRjE3RTQxMzFBMDA3Q0U5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTg3MDgzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcyMDU0Njk4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQjIzRjJGREZBNjM5NTc1RkUzRjQ0OTU1MTk4QUUyMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTg3MDgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsVFB6RFFQUlM0Q25CbW5sN3BFVktRIiwicGhvbmVJZCI6IjhlNmQ2OTllLWVlNTUtNGIwOS1iMmJiLWY1YTdjMmM0MzAzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0M2c1Yms1RWxOZVJ2RTNNLzdxOE5KVCtZcE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2h6Z3JrZE1nb0t0bjYwdllEMXlHVjMzM2JVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc1WTVCUjZaIiwibWUiOnsiaWQiOiI5NDcyMDU0Njk4NDoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDaGFuZHVwYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpYaTZjQkVQdmZqYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRXlHQytYeXdrZ3RMNWhZK1hDUG9YOWlncmtFRWhsWHZJb0dSeGNhdmRtND0iLCJhY2NvdW50U2lnbmF0dXJlIjoib245MSs5VFNYVUlDM1JaMG1CYVUxdzFyL1E4ZEtZM3g3ZnhLM1ZpOXJqbmNuSmF3MlBQS0xqQmg0Wk9tclZWRzVVMjdTNU9XMG1wMTRQN0YvQ3UzQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InZMc0sxeU1NOW55SnhVQ2M3QkNmT3JIS0djTHpVMUkyaUF6bGJ4b1NMaHhhUXVlVEJ1RDVpRXF0ZjlpM1FFMFFvTitOV083U09jL1JlQ1ZVVFF0NGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjA1NDY5ODQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk1oZ3ZsOHNKSUxTK1lXUGx3ajZGL1lvSzVCQklaVjd5S0JrY1hHcjNadSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTk4NzA3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMRHYifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
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
