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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "237650564259,";
global.owner = process.env.OWNER_NUMBER || "237650564259,237690214323,237678045204,237696190932";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/20e486761cf01e3d25d21.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdvRnBlVVFxOW9GVHROeERGdEJlK0dMZlZQendVeHlEMHBXRWpRQ2UwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2s4MWpVbXB4WEQyQmR0NFlPcVpYMENVbFpwOGlxWVUvVERaRzgxOWlRUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1g1NFkzK3JIdlhPNmxXQTVFRjU3UldHUkZmazEyT2Q3Z1pEMmhOSjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWDBYQXdIeEVDZ2pFRG1DS2dzanZwcUZKVjlSbDB3cVVMdndSR3VXZW1jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMSzJ5amRrd3NGUmIyU1NWbllsVmhKUVptY3I2VkRrakhuU3RvMGdlV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFwOC84bmIyY0kyZ05KSWdyZEtmZWp3alh3OWZTKzJ6RTV3NHRCTGh3R1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9vQVJlcStUY0JEbDBZdWR4S2VUazhBT1lUb1ZiR21zMzNVYlFsR2dVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdrdTg1V3pMa2ZsMFpLanppYXdaTWJaTlkyZ291TnZ1UUxRZHZ1SjNUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpOVDBvVHBiT3ZEQW94OGxXSmMvdGptTzd3RnQyZjZkYkhPdWtPcVpmVmw5WTVYY0tSODZwVko5R0p1K2JrQjEveG5yQ2loRnFzN1JlRVp3VlZERmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJjRFpPMEVVNDlVU250ajQ3Q0YzWHArdmpkeTRaZU54TE5hcllsVEtpSS9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPX0FoaHpiV1RlNklNeExxYkhUWU1BIiwicGhvbmVJZCI6ImE0ZTJmYzMzLWY1M2YtNDRjYS04ODhhLWIxMjAxZGIwNGFmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWmJnMjR2d2dQTlh0T1JSL05DRzJReTIzQTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid20raU91RnZEU3ZhS2xkODFvKzZQQmRpKy9JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM1NEJZMkpTIiwibWUiOnsiaWQiOiIyMzc2NTA1NjQ0NDU6NzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lMWXo1NENFTnJENExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBnZjJuUy94R09sOHFCZE1aQVN6bEIzblR2UFduR3E0TFJKRkdtU1pDM2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxaREhRTVROU21VTzlHMjgvbklTTmxkWUJSSFpmYzdQMnByUlplOFpCbk9aRW0zQWhidTdoQXBPSUJUSW51blVVMXJwdUdFUHZocGE4a1JLYzlJS0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqL1hUTHpneTZibERKWG9wT05lOWwvLzAwbUR4NXVnTmVVU09ySDhQQVBNalpWbnR6OGtVRXRZVjh4Z0Z3cVpmWFlIZkh3VnNYUEdsajVjQm9ad0hoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1MDU2NDQ0NTo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWUg5cDB2OFJqcGZLZ1hUR1FFczVRZDUwN3oxcHhxdUMwU1JScGttUXQ0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjQ2MTgzfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "PRODUIT DE LA MARQUE ᵏᵍᶠ┘𝙏𝞖⧠𝙂𝞘𝙁𝙁𝞓𝞒𝞢𝞜𝞗└",
  author: process.env.PACK_AUTHER || "ᵏᵍᶠ┘𝙏𝞖⧠𝙂𝞘𝙁𝙁𝞓𝞒𝞢𝞜𝞗└",
  packname: process.env.PACK_NAME || "ᵏᵍᶠ┘𝙏𝞖⧠𝙂𝞘𝙁𝙁𝞓𝞒𝞢𝞜𝞗└",
  botname: process.env.BOT_NAME || "✘𝙇𝞘𝞜𝘾𝞗𝙇𝞜 𝞑𝙐𝞒𝞒𝞗𝙒𝙎✯",
  ownername: process.env.OWNER_NAME || "ᵏᵍᶠ┘𝙏𝞖⧠𝙂𝞘𝙁𝙁𝞓𝞒𝞢𝞜𝞗└",
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
