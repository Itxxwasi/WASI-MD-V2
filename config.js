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
global.owner = process.env.OWNER_NUMBER || "923346690239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09KOWpvdHA0Tk9YdDAvdTBSem5vOWprU1Zyc2FYUmRIQVcrSEoyQ2NIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVVSYlRsMjR0RFRXL3ZCQVViemFIR0RpQU5teEtGaTZDb1R5RWV5MllXZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSm9jT1BZekhwN2s5MmhrV1BPTTdOZERaR0FBbXU2SEltVjJUOVJraWtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNDFMZ0g5ZUdCQ0JEZThyQ0wrMjd6VFByMUIyRWkwZFlrWFltNWhZRmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJNWZRRnk2MEs0czU5dVZmZldTc0VrMlBiK1pkbXRaMCtlSVBQa2dPVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXV0diUlErdjd1L1N0aVN0T014bnhkeHQzK3c2T0piWm1zWStjU2puQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNBRHU1MURoUTYxbTZ5K2NYTFpVSi9sTFZ6RzRFdjdVQkZhYm56VmIwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajNnd01pNms0Y3ZSNVBtaDA2Q2NmYjRIT1N6bml4Z0UzeDhUekxteUNHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlhK1gzVTJEWlhMVnpFV1piczIzZ3h6S2Qxb1czWm13Vm81WnJDZlRvZ1Y1L01ybTVXVVpmYnJrSjhGbWdSWGtKcUc2eEZTczFrdU9EM1haSDJzNkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJRRWVuWHovVnZZTHZHWXVwOW9NUldQb2F6U2N2Q3Q3Uy92bUc0K25XNllnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKaGtoSTNCYVNpLURnV05RTmZRQS13IiwicGhvbmVJZCI6IjM1Y2Y1NTc3LTEwNzktNGE3NC04MjQyLWE3OTVmNzM0MDc1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSEUydkRnN2J1aDNNU3JDN3BDcEN3ckpxUDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtYcTJZVTlpOGVaR3lOWkZmT29tdENJNGRVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpLQVJKSktQIiwibWUiOnsiaWQiOiI5MjMzNzYxNTY2Mzg6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YRDBMVUJFSmVqb2JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp0SVdFZC9DSC8yNThQYUxyMldGT3VpeEhjdHZWODYvY1JPNnVPZC9LbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im41TFZMOEVsWUluUjBZeVBVZC84VFhxRlpLWFUvRmZtdlFBUDNwb0g4aVFTdis4eDhtWGhpSjNmTFh0WHF5ZzBLRG1xc2FzL1hPYUdBaU9peXRpRkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoejdscGU0empBb3NCYmczVVJtOVQ3R1k3MWFrdDgzQ3RXUlRsZXhTOE5LYm5NL2RPM1d5Z0c2TzMxWDRmY3U0aTN6bHJPWUJMZHJCN0x2YlNUMXhEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM3NjE1NjYzODoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTYlNGaEhmd2gvOXVmRDJpNjlsaFRyb3NSM0xiMWZPdjNFVHVyam5meXAzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzA2OTgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1iOSJ9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09KOWpvdHA0Tk9YdDAvdTBSem5vOWprU1Zyc2FYUmRIQVcrSEoyQ2NIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVVSYlRsMjR0RFRXL3ZCQVViemFIR0RpQU5teEtGaTZDb1R5RWV5MllXZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSm9jT1BZekhwN2s5MmhrV1BPTTdOZERaR0FBbXU2SEltVjJUOVJraWtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNDFMZ0g5ZUdCQ0JEZThyQ0wrMjd6VFByMUIyRWkwZFlrWFltNWhZRmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJNWZRRnk2MEs0czU5dVZmZldTc0VrMlBiK1pkbXRaMCtlSVBQa2dPVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXV0diUlErdjd1L1N0aVN0T014bnhkeHQzK3c2T0piWm1zWStjU2puQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNBRHU1MURoUTYxbTZ5K2NYTFpVSi9sTFZ6RzRFdjdVQkZhYm56VmIwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajNnd01pNms0Y3ZSNVBtaDA2Q2NmYjRIT1N6bml4Z0UzeDhUekxteUNHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlhK1gzVTJEWlhMVnpFV1piczIzZ3h6S2Qxb1czWm13Vm81WnJDZlRvZ1Y1L01ybTVXVVpmYnJrSjhGbWdSWGtKcUc2eEZTczFrdU9EM1haSDJzNkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJRRWVuWHovVnZZTHZHWXVwOW9NUldQb2F6U2N2Q3Q3Uy92bUc0K25XNllnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKaGtoSTNCYVNpLURnV05RTmZRQS13IiwicGhvbmVJZCI6IjM1Y2Y1NTc3LTEwNzktNGE3NC04MjQyLWE3OTVmNzM0MDc1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSEUydkRnN2J1aDNNU3JDN3BDcEN3ckpxUDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtYcTJZVTlpOGVaR3lOWkZmT29tdENJNGRVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpLQVJKSktQIiwibWUiOnsiaWQiOiI5MjMzNzYxNTY2Mzg6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YRDBMVUJFSmVqb2JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp0SVdFZC9DSC8yNThQYUxyMldGT3VpeEhjdHZWODYvY1JPNnVPZC9LbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im41TFZMOEVsWUluUjBZeVBVZC84VFhxRlpLWFUvRmZtdlFBUDNwb0g4aVFTdis4eDhtWGhpSjNmTFh0WHF5ZzBLRG1xc2FzL1hPYUdBaU9peXRpRkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoejdscGU0empBb3NCYmczVVJtOVQ3R1k3MWFrdDgzQ3RXUlRsZXhTOE5LYm5NL2RPM1d5Z0c2TzMxWDRmY3U0aTN6bHJPWUJMZHJCN0x2YlNUMXhEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM3NjE1NjYzODoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTYlNGaEhmd2gvOXVmRDJpNjlsaFRyb3NSM0xiMWZPdjNFVHVyam5meXAzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzA2OTgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1iOSJ9"
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
