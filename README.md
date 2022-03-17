<div align="center">
  <p>
    <a href="https://github.com/Soucouyant/Snipe-Bot"><img src="https://github.com/Soucouyant/Snipe-Bot/blob/master/assets/images/logoedit.png" width="546" alt="snipe-bot" /
  </p>
  <p>
    <a href="https://github.com/Soucouyant/Snipe-Bot/releases/tag/v2.1.0"><img src="https://img.shields.io/github/v/tag/Soucouyant/Snipe-Bot?color=critical" alt="Latest Release" /></a>
    <a href="https://github.com/Soucouyant/Snipe-Bot/commit/8d933b3c1d707cd02907aa287a1b2af2b46cbfbb"><img src="https://img.shields.io/github/last-commit/Soucouyant/Snipe-Bot" alt="Latest Commit Date" /></a>
    <a href="https://github.com/Soucouyant/Snipe-Bot/commits/master"><img src="https://img.shields.io/github/commit-activity/m/Soucouyant/Snipe-Bot?color=blue" alt="Number of Commits this month" /></a>
  </p>
</div>

## About

A fork of Soucouyant's Snipe-Bot for discord. Works on improving the framework and issues presented within his version.
    
The snipe bot is a simple discord bot that retrieves deleted messages using:
- [Node.js](https://nodejs.org) module which easily interacts with the [Discord API](https://discord.com/developers/docs/intro)
- [Discord.JS](https://discord.js.org/#/) library which provides easy to use JS methods and functions to make coding the bot a lot easier and smoother.
- [MongoDB](https://www.mongodb.com/) and [MongooseJS](https://mongoosejs.com/) which provide a AWS database and easy to use object modelling to interact with the database.

## Installing Dependencies
**Node.js 16.9.0 or newer is required.**
```sh-session
npm install discord.js
npm install discord-api-types
npm install discord-logs
npm install libsodium-wrappers
npm install mongoose
```

## Using the bot
    
In order to invite the bot to your server, make a new application via the [Discord Developer Portal](https://discord.com/developers/applications). Click on the 'bot' tab on the left and create a new bot user. Then, go to OUATH2 and enable 'bot' and 'application-commands' scopes. (Make sure to give bot administrator priveleges).
    
In the [latest release](https://github.com/Soucouyant/Snipe-Bot/releases/tag/v2.0.2-alpha) much of the required tokens and strings were replaced by variables directing to a file called _config.json_. Before running the bot, download the ```configEXAMPLE.json```, rename it to ```config.json``` and fill in the empty strings.
    
**A full guide to use is still in the works. For now, basic knowledge of discord applications is assumed. But, if you have questions feel free to reach out.**

Running via terminal:
```bash
cd [location of the snipe-bot downlaod]
node deploy-commands.js
node index.js
```
To kill a node process, hit CNTRL+C.

## How I use the bot
    
This is a small section to explain how I use the bot. Initially, this repoisitory wasn't going to be very user-friendly, as the bot was for personal use. However, after sending the repo out to a couple friends, I was encouraged to 'spice' it up a bit. Also, with all the struggles I had making this bot with little to no JavaScript knowledge, I wanted to make it a bit easier to understand. 
    
In the past, there was a bot that had a snipe command, and in my personal server, we would use it to catch people off-guard. Sometimes people would send funny messages and delete them fast before anyone could see, so to counteract them, we would snipe the message. However, as the bot became bigger, the snipe feature was deprecated, thus, I took the task up myself- to code a snipe bot.
    
After finishing the basic functionality [version 1.0.0](https://github.com/Soucouyant/Snipe-Bot/releases/tag/v1.0.0) I wanted to deploy the bot, however, keeping my terminal running 24/7 was impractical. Therefore, I used [DigitalOcean](https://www.digitalocean.com/) to host it. Basically, I made a droplet that uses linux, installed [git](https://git-scm.com/), [Node.JS](https://nodejs.org/en/), and [pm2](https://pm2.keymetrics.io/) and ran the bot.

### TO-DO (Probably lol.)
- [ ] Handle multiple snipes (given num)
- [ ] Edit Snipe
- [ ] bot pins! Bot can pin an infinite amount of attachments and/or messages
