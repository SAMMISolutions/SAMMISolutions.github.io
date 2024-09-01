---
layout: ext_single
title: Discord-Twitch Relay
slug: discord-relay
desc:  Relay messages between Twitch and Discord and send trigger from Discord to SAMMI
category: social
date: '2024-08-30T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/sammi-discord-relay
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: discord_relay.png
trailer: https://www.youtube.com/embed/zKUCkjm8FiA
screenshots_local: discord_relay_ss.png, discord_deck.png
version: 2.0
sammi_version: 2023.1.1
platform: Twitch/Discord
overview: |
    Discord Relay is an extension for SAMMI that allows you to relay messages between Twitch/YouTube Chat and Discord.

    **Features:**

    - **Forward Twitch Chat Messages to Discord:**  
    - Choose any Twitch channel to monitor.
    - Ignore specific usernames, like bots.
    - Display user profile pictures, badges, and color names in the relayed messages.
    - Convert Twitch user mentions to Discord user mentions.
    - Convert Twitch emotes to Discord emotes.

    - **Forward YouTube Chat Messages to Discord:**  
    - Choose any YouTube channel to monitor.
    - Ignore specific usernames, like bots.
    - Display user profile pictures, badges, and color names in the relayed messages.

    - **Forward Discord Messages to Twitch or YouTube Chat:**  
    - Select any linked Twitch/YouTube account in SAMMI to post relayed messages.
    - Ignore specific usernames, like bots.
    - Limit the bot to listen to specific Discord channels.
    - Convert Discord user mentions to Twitch user mentions.
    - If a Discord message is empty but contains attachments, the attachment URL will be relayed instead.
setup: |
    <div class="alert alert-warning" role="alert">This extension has been completely overhauled. If you're using a version earlier than 2.0, it's recommended to uninstall it and set up the new Discord Relay from scratch.</div>

    #### Installation
    - Follow the [Extension Install Guide](https://sammi.solutions/extensions/install) to install the extension.
    - A new premade deck will appear in your SAMMI Core. Edit all the values in the red **SETTINGS** button by right-clicking on it and selecting "Edit commands":
        - Under the first green comment, add usernames you do NOT want to relay messages from in both directions. Use the Array Insert command (Array Name = `ignore`) for each username. For example, you may want to exclude bot messages.
        - General Discord Relay Settings:
            - `Discord Server`: Enter the Discord server ID where you want to relay Twitch chat messages.(see instructions below).
            - `Discord Webhook`: Enter the Discord webhook URL you created for the channel where you want to relay Twitch chat messages.
            - `Discord Bot Token`: Enter your Discord bot token (see instructions below).
        - Twitch Relay Settings:
            - `Twitch Username`: Enter the Twitch username (likely your bot's name) used to post relayed Discord messages to Twitch chat.
            - `Twitch Channel to Join`: Enter the Twitch channel username you want to monitor and post messages to.
        - YouTube Relay Settings:
            - `YouTube Username`: Enter the YouTube name (not the handle/username) used to post relayed Discord messages in YouTube chat. Ensure it matches the name linked in SAMMI.

    **How to Create a Discord App and Retrieve Bot Token**  

    *Please note the screenshots below show 'Discord Triggers' as the Discord bot name, but you can name it anything you like.*
    1. Create a new application at [Discord Developer Portal](https://discord.com/developers/applications).
       ![image](discord_triggers/createbot1.png) 
    2. Go to your new application, select Bot -> Reset token -> Copy and paste it into the 'Discord Bot Token' box in the Settings button in SAMMI.
       ![image](discord_triggers/createbot2.png)
    3. Still in 'Bot' menu, ensure `MESSAGE CONTENT INTENT` is enabled.
       ![image](discord_relay/intents.png)
    4. Go to OAuth2 -> URL Generator > Select Bot -> Click 'Copy' button (no need to select any additional permissions).
       ![image](discord_triggers/createbot4.png)
    5. Paste the URL into your browser, select the server you want to invite the bot to, and click 'Authorize'. 
       ![image](discord_triggers/createbot5.png)
    5. The bot will have default permissions as the 'everyone' role. You can either grant it a role that has the permissions you need or manually set them in the server settings so it can see the channels you want it to monitor for messages to relay.

    **How to Retrieve Discord Server ID**
    1. Enable developer mode in Discord:
        - Open Discord User Settings -> Advanced -> Enable Developer Mode.
    2. Right-click on the sidebar icon of your server -> Copy ID.

    #### Open Relay
    - Configure additional settings within the green **OPEN RELAY** button:
        - Type: Choose either Twitch or YouTube to relay messages to and from.
        - Discord Message Mode:
        - Pretty: Relays Twitch chat messages in an embedded format.
        - Standard: Relays Twitch chat messages in text format. Automatically switches to Standard if the Twitch channel receives too many messages due to Discord webhook limits.

    #### Close Relay
    - Stops relaying messages and disables Discord triggers.

    #### Discord Emojis
    - Retrieve all custom Discord emojis and save them in the `discordRelayEmojis.ini` file in your SAMMI folder. This feature allows auto-conversion of matching Twitch emojis to Discord emojis in relayed messages. If you need to edit these manually, do not press the button again, as it will override your changes.
privacy_collect: false
privacy_website: false
privacy_policy:
---