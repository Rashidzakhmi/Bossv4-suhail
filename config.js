const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923337263319" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923337263319";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_24_02_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiV01rRTZ5RVNZT1dJb3pqeXR5Zm1yZU9rQWZDY1RMK2NXM2pEOVVrYjVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyV0ZDVmdsUFNjaXB2S19nZUU1b1FBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM2ODZkYTBhLTdjMzQtNDc3Mi05ZDQwLWUxNzM0MzM1ZmM4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDk1LFxuICAgICAgNTcsXG4gICAgICA4MixcbiAgICAgIDEzLFxuICAgICAgNTcsXG4gICAgICA3MixcbiAgICAgIDExMixcbiAgICAgIDEwMCxcbiAgICAgIDE4OCxcbiAgICAgIDI0LFxuICAgICAgNDYsXG4gICAgICA0LFxuICAgICAgMjQ1LFxuICAgICAgMjEzLFxuICAgICAgNjIsXG4gICAgICAxNTYsXG4gICAgICAxMjksXG4gICAgICAxNyxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDE0MixcbiAgICAgIDc1LFxuICAgICAgNzksXG4gICAgICAxODEsXG4gICAgICAyNDcsXG4gICAgICAyMTYsXG4gICAgICAyMTgsXG4gICAgICAxMzIsXG4gICAgICA1LFxuICAgICAgMTkzLFxuICAgICAgMzQsXG4gICAgICAyMyxcbiAgICAgIDE2OSxcbiAgICAgIDg3LFxuICAgICAgNjQsXG4gICAgICAyMDgsXG4gICAgICA2LFxuICAgICAgMTM4LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdQWlI3UUJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzcyNjQzMTk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItiy2K7ZhduMINio2YTZiNqGXCIsXG4gICAgXCJsaWRcIjogXCIxNTMyMTA2MTAyODI2NDI6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcTYxSmNERU15ZGg3MEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitYUWhEZ3FpTDV3TEwyM1g2S0xuVXE1VnZ0MUFqZ2ptQ3l0WTRhdHlSR3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUh5R1BxanorcXVCS3N5RXBuWUNXeEFVdndiNlBFYWpwUUszUFZRYlJKNldVbWtneEl5Z3RndnNRSmxRa1pDVndEQUE1SjZtVUNnZ24wYVJrRHh5RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnE5NnE4Ly82YzV5UHgwZTZDSjFCRExFeEc2VithV1EwNDhzU2pqUnRJV1cvK2VvR3pwU0d2S0dYQjVBQ1c3aytXbW9VTnlIZmRaejVNdHR1OWxzakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzM3MjY0MzE5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzg2NTc0ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNFNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU00Uy5qc29uIjogIntcImtleURhdGFcIjpcIkVrMFRrZTMyajMxWnlCbk9sZ1pZQkNoaXAvLy93NXFjRUVQbDEyR05aMU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU0OTI0NTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzg2NTc0OTIwOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
