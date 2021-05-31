module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ",", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/P5G2EFAh5T", //Support Server Link
  Token: process.env.Token || "ODM2OTI0MTE3MjI3MDEyMTg5.YIlEUg.d1LjPXnulvlqMV7IEk5NEhbGgJg", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "836924117227012189", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "joYcmTxQpzFBmJ0PSM02lrIjq0uhFvYi", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link", 
    port: 80,
    pass: "youshallnotpass", 
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "2f49a92204c94a849064dd5e05d09c54", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "73aea79900ae4fb5815a4fc9072a7432", //Spotify Client Secret
  },
};
