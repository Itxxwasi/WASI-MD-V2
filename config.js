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
 require("dotenv").config({ path:__dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "taketee811@gmail.com";
global.location = "BO.SIERRA LEONE.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "23274448130@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "freetown/sierraleone";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "23274448130";
global.sudo = process.env.SUDO || "23274448130";
global.owner = process.env.OWNER_NUMBER || "23274448130";
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
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VkVGJhWVVNKzk1ZkNhbUlyWmJNM3NJTWNFeXhmZlhlVlEycnRMSlNIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazdmOEVVcmEvakpBSDZ1dFVIa25JTGFmd1hqeklRWFAvajBGT0xzV0EzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRlM0bno3UTgzSjA5czBhNDAyUTRldW1wVEVjRmJITzNzbisyVWdtVTBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIU0ZjamdxUVhMUC94bURVRXV6MTJhbVRGL1ZFYndtMW1HREhLWm10ZFc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNRUtlTkh3dHNYMVhUV3hRcDlnMTZUczl2ZitFbmdYTGxpaHRhK3d1V1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI3UjVCdmJzWDExcWc1MEFja21hVTUyZ1BsWFRSenJub3NydTY2MzZ4eDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZIWHhJR1UwMzJORTJZMHBOVDN2VmVwUnM2ZkRoQXVWR0grMWpITjRWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVJaaXZIaFFlY2xORWx0WnVOekxvZ25Ldnh2dnJOZzRwQjFNZzViN09IWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNc2RIM2VtaFZXNUgvZXdZMVpXQmI0QVVCenNOUzFPWEk1SFlGNTJ2Rk1QQkY1dnVvN25HK0RvcXgyaUIyaW95M2xGVlpRWVRNL05RekdXWUM2b0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJyR0J6T1o1b2Y1Q1drQnUxRnZNV24wUWljdGk3aDVCUFp1SHpHVzhsejdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuN0trV211NlNfbXpiMDhIZWRrczBRIiwicGhvbmVJZCI6ImNiMmExMzFkLWY3NGUtNGYyNy1iNGI2LTdjZDlmYjM3NTA5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUjFtTnVJOStYa2JqQkt2ckVGMFhLb1B0VWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlA5Nmlzc1Jpa2QyQUpFS21ROGk2Yzk2VUFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNDNEJDUVo5IiwibWUiOnsiaWQiOiIyMzI3NDQ0ODEzMDoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNciBUYWtlIFRlZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3lpdHZnRUVLK2kwN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2lKRTQzNy9idy9nTTJRbzBLQU5tRE5IK0FKSzJWSUxSbkxwenp2akJqdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSzMrK0ZzOExIa0swS0RZbFgyMHptV3ZvcTdvUFRsMGdiZHY4Z2hHYXA5eTY4b3JNMnpmbUdDNkdUSk9Xbk5xV1FOK2hWcmJQUzZtcFU5WWFoR0JmQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InJGY1ZqUTMxWCtKRzJEejVXbjhoYVN6QTVESnkzaEZabHNGSmdUUW5ISGtPVC96Q09zUzdwd05uOFFoRXRHd0tYQXQ2cFAyOGZlcExEQkxvSnE4WUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMyNzQ0NDgxMzA6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWklpUk9OKy8yOFA0RE5rS05DZ0RaZ3pSL2dDU3RsU0MwWnk2Yzg3NHdZOCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzEyNjA4MH0=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Mr Take Tee",
  author: process.env.PACK_AUTHER || "Mr Take Tee",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Tee bot",
  ownername: process.env.OWNER_NAME || "MrTake Tee",
  errorChat: process.env.ERROR_CHAT || "23274448130",
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
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
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
