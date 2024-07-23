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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQvMG5GMWVPMXh4T3YwcVN6K1FwdXZLTW5QdWFXWER5ZFdGUjVqV01Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXc0S2ZVQmtBTVpic1JrNjgyYmNGbThKcFd1YStzWEEwWG5RRysxZmZDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS2VaOCtnLzYvT2FVMUxwTE1LemtnVTBNMTdTWXZ2bFd5aEpXcE5ucFZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQ0ttMURmU1o1NFo3OVZOc3VYaS8wV3NaT1lkQ21CdzBjdk9YTU5tbEVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBR2VuOURsdHc3dVlBZ2tRMVZqMDBKaG1sT0w0SDJUeTJhSndJR1QyWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhOa0V1T0FtZWhGRDVqbkp5RHFSamdpVWk5Mjk1T0UwdXkrU1RJbmtsQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJBdUE5UmZNYml3ZmZHNVNYclB6eXNYc0tOVGU2QjBtRFNPS1NLam5sOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBpZ0w1ODhyVVMxL1NUTzMvNFAybTBZTE5Kb1RlN3VkOGJtZ0owNXltST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpoeFg5ZHNEeEZ4cDRWU1FxdXVoWTJ4a3FDZzUxMklFRnhDbmVMWGNVYWNFMit0dFVPaFlrSWg4dE1IYmNNaGpYbWM0eWVLVXZVSXhueHVYdHppSWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IkE4U0NKcWs4RTRISDRSYXhpZUFaWFRJd05oZGdlelh4KzVERlNqeExtVVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODI1NTI4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2RTFCOURGRTNDMzU5QTg4Nzc4MzBGNzgwODQzNjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTczMjIxOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODI1NTI4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTQ5RTExRDRBRkM4QTk2NUNBQjlGRjY3MkY3RUVEQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTczMjIxOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODI1NTI4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzI5MTlCOURGRjI5MkM5MEE2MkE0OENDRUQ2REIyNDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTczMjIyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODI1NTI4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzMwNkE5NzIwMjYzQ0IyRDQ0OTNGQTMzQzlDNTU3RkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTczMjIyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZnNDV043eTFSZktiTkMxTGR1b1N6ZyIsInBob25lSWQiOiJhMzc2NTVlOC1kNGZjLTQ4NDItYTYxMy0xMWU1ODdmZGFhOTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjFOU29zbGZZWGFnSTdHeitGZ0J3UG9Rd3BFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkyTnl1cnpVUk1raGc1OEtxOWM4UWxGdDE1TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQTIxMVdDNCIsIm1lIjp7ImlkIjoiOTQ3ODI1NTI4OTU6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYWRhcnUgUGVyZXJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNT2JtM3dRN0pqK3RBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveWpjekRnZU54TVcvdHNTa3lQM0ZTb1JVNVU1c2Zsajg2MHN6clNMR3c0PSIsImFjY291bnRTaWduYXR1cmUiOiJOZlZ5ZGdIbUJPaDl5eVgxSVFvWU9aMEVIQ2JMYXNpaXFQWHIvOTh4d3FLUHkyWDd2R05UZ00rVEkwM0NWYXNpc1ZBL3dRTFFoaEp2bytHcVYwelpEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2xwdVdzT095RnY0K3BSckp0WlpBZjlud2VES1dBU0RkT2tpeGRjZXVtZ2NaRWMxMDBGYlpCUFhmZzZNYUhZdkJ1UFFlWFhMTnFyb0I5eTlackh0Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MjU1Mjg5NTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY4bzNNdzRIamNURnY3YkVwTWo5eFVxRVZPVk9iSDVZL090TE02MGl4c08ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3MzIyMTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlBvIn0="
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
