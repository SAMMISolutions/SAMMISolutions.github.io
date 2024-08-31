---
layout: ext_single
title: Discord Triggers
slug: discord-triggers
desc: Receive Discord events in SAMMI, including voice states.
category: social
date: '2024-07-26T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/discord-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: discord_triggers.png
trailer: https://www.youtube.com/embed/sgmr-sQDy2s
screenshots_local: discord_triggers_ss.png, discord_triggers_ss2.png
version: 1.0
sammi_version: 2024.1.1
platform: Any
overview: |
    *Discord Triggers* is an extension that allows you to receive Discord events in SAMMI, such as new messages, reactions, new members, or when someone joins/leaves your voice channel.

    #### Features

    - Connect to your Discord server and **listen to all available events**.
    - Connect to the specified voice channel and **listens to users joining, leaving, and their speaking status**.
    - **OBS Overlay:** Display the speaking status of users in your voice channel in an OBS overlay. Highly customizable, auto installs.
    - **Premade deck with example buttons:** Get started quickly with a premade deck that includes example triggers for the most common events.

    #### Available Events:
    - **Servers** - server updated, channel created, role deleted, etc.
    - **Moderation** - member banned, member unbanned, etc.
    - **Voice State** - user joined/left voice channel, muted, unmuted, started streaming, etc.
    - **Messages** - channel and direct message created/modified/deleted, reaction added/removed, etc.
    - **Events** - event created/updated/deleted, user joined event, etc.
    - **Polls** - poll created/updated/deleted, user voted, etc.
    - **Voice Channel** - user joined/left voice channel, user started/stopped speaking.

    For all available events, refer to the [Discord Documentation](https://discord.com/developers/docs/topics/gateway-events#receive-events).

setup: |
    1. Ensure you're on the latest version of SAMMI.
    2. Install the extension.
    3. Open the Settings button and follow the instructions below.

    #### Table of Contents
    1. [Settings](#settings)
    2. [How to Listen to Events](#how-to-listen-to-events)
    3. [Open/Close Connection](#openclose-connection-buttons)
    4. [Install OBS Overlay](#install-obs-overlay)
    5. [Join/Leave Voice Channel](#joinleave-voice-channel-buttons)
    6. [Get information about a user, channel, or server by ID.](#get-info-by-id)


    <a name="settings"></a>
    #### Settings
    Please fill out the settings commands listed below.
    <div class="alert alert-warning mt-2" role="alert">Please set up the Settings button before opening a connection. Save this button and completely reload Bridge if you change any values here.</div>

    ![image](discord_triggers/settings.png)

    ##### Discord Triggers Settings
    - **Discord Bot Token**: Your Discord bot token. Must be in the server.
    - **Server ID**: Server ID you invited your bot to.
    - **User ID**: Your own Discord user ID.

    **How to Create a Discord App and Retrieve Bot Token**
    1. Create a new application at [Discord Developer Portal](https://discord.com/developers/applications).
       ![image](discord_triggers/createbot1.png) 
    2. Go to your new application, select Bot -> Reset token -> Copy and paste it into the 'Discord Bot Token' box in the Settings button in SAMMI.
       ![image](discord_triggers/createbot2.png)
    3. Still in 'Bot' menu, check all 3 intents under 'Privileged Gateway Intents'
       ![image](discord_triggers/createbot3.png)
    4. Go to OAuth2 -> URL Generator > Select Bot -> Click 'Copy' button (no need to select any additional permissions).
       ![image](discord_triggers/createbot4.png)
    5. Paste the URL into your browser, select the server you want to invite the bot to, and click 'Authorize'. 
       ![image](discord_triggers/createbot5.png)
    5. The bot will have default permissions as the 'everyone' role. You can either grant it a role that has the permissions you need or manually set them in the server settings so it can see the channels you want it to monitor for events.

    **How to Retrieve Discord Server ID**
    1. Enable developer mode in Discord:
        - Open Discord User Settings -> Advanced -> Enable Developer Mode.
    2. Right-click on the sidebar icon of your server -> Copy ID.

    **How to Retrieve Discord User ID**
    1. Enable developer mode in Discord.
        - Open Discord User Settings -> Advanced -> Enable Developer Mode.
    2. Left-click on your profile in Discord.
    3. Click on Copy User ID.

    ##### Discord Triggers Intents Settings 
    - Check all the intents (events) you wish to listen to.

    **Default Enabled Intents**
    - **Guilds**: Create/Update/Delete server, channel, thread, pings, etc.
    - **Members**: Add/Update/Remove server user.
    - **Moderation**: Ban/Unban server user, Create audit entry.
    - **Voice States**: Member joins voice channel, mutes, unmutes, etc. (Required to join voice channels).
    - **Messages**: Create/Update/Delete message.
    - **Message Reactions**: Add/Remove message reaction.
    - **Direct Messages**: Create/Update/Delete DM.
    - **Direct Message Reactions**: Add/Remove DM reaction.
    - **Message Content**: Allows seeing message content.
    - **Scheduled Events**: Create/Update/Delete/Add/Remove User from a scheduled event.

    **How to Enable/Disable Intents**  
    - If you wish to modify the intents you're listening to, check/uncheck the boxes inside the Discord Intents Settings commands.

    <a name="how-to-listen-to-events"></a>
    #### How to Listen to Events
    There are dozens of different events you can listen to. This premade deck has several different examples to get you started. Simply navigate to the buttons and try them out.

    ![image](discord_triggers/premadetriggers.png)

    Find all events by using the [Intent Calculator](https://discord-intents-calculator.vercel.app/).

    Your bot must have the correct permissions, you must be listening to the correct intent, and you must be connected at all times.

    1. Select the Intent type in the left menu of the calculator. Ensure your bot has the permissions (explained in the previous steps).
    2. See all available events in the right menu.
    3. Click on the event that interests you to navigate to the Discord documentation.
    4. Check out what data the event returns.
    5. Build your button accordingly:
        - The extension trigger you need to attach to the button will be `Discord Triggers EVENTNAME`.
        - The trigger pull data will be the payload from Discord documentation for that event.
            - For example, to listen to all new messages:
                1. Use the Intents Calculator, select GUILD_MESSAGES -> Click on MESSAGE_CREATE to open the [documentation](https://discord.com/developers/docs/topics/gateway-events#message-create).
                2. The extension trigger will be: `Discord Triggers Message Create`.
                3. The Pull Data will be the inner payload, which is a [message object](https://discord.com/developers/docs/resources/channel#message-object).
                4. The message object contains a 'content' key, which you can use as a pull value to grab the message contents.

    <a name="openclose-connection-buttons"></a>
    #### Open/Close Connection Buttons
    Use **Open Connection** button to open a new connection to listen to Discord events.  
    Bridge must be connected at all times, and the connection opened to receive events.

    ![image](discord_triggers/openconnection.png)

    **Settings:**
    - **Action**: Select Open Connection to start listening to events.
    - Leave the other boxes as they are.

    Use **Close Connection** button to close the connection to Discord, which means your bot will go offline. If your bot is currently connected to a voice chat, it will also leave it.

    <a name="joinleave-voice-channel-buttons"></a>
    #### Join/Leave Voice Channel Buttons

    <div class="alert alert-warning mt-2" role="alert">The bot CANNOT listen to your conversations, as that would need a totally different connection. The bot can only identify who's joined the channel and is currently speaking.</div>    

    If you want your bot to monitor and react to certain events in a Discord voice channel, such as when a user connects or disconnects, or when a user starts or stops speaking, the bot must first join the voice channel where these events are taking place.

    ![image](discord_triggers/joinvoicechannel.png)

    Use the **Join Voice Channel** button to join or change the current voice channel: 
    - Follow Me: Whether the bot should follow you when you change channels. The bot may time out if you disconnect from a voice channel for too long. In that case press the button again for the bot to reconnect
    - Voice Channel ID: Voice Channel ID to join initially.  

    Once the bot has joined the voice channel, it can start listening for the specified triggers.  

    **How to Retrieve Discord Channel ID**
    1. Enable developer mode in Discord:
    Open your Discord User Settings -> Advanced -> Enable Developer Mode.
    2. Right-click on the channel name in your sidebar Discord -> Copy ID.

    **Leave Voice Channel** button will make the bot leave the current voice channel. The bot will otherwise remain active, still listening to all non-voice channel events.

    <a name="install-obs-overlay"></a>
    ####Install OBS Overlay
    Install the OBS overlay by (optionally) editing the Install OBS Overlay button and running it.

    ![image](discord_triggers/obsoverlay.png)

    The overlay will display the speaking status of users in your voice channel when you're conected to the voice channel.  

    **Settings:**
    - **OBSWS Port**: Your main OBSWS port, default is 4455.
    - **OBSWS Password**: Your main OBSWS password, leave empty if there is no password.
    - **Show Names**: Choose whether to display names or only icons.
    - **Show Speaking Only**: Choose whether to display only actively speaking users.
    - **User ID**: Enter your Discord user ID to prioritize it at the top of the list.
    - **Text Color**: Specify the color for the names.
    - **Text Font**: Select the font for the names.
    - **Text Size**: Set the font size in EM units.
    - **BG Color**: Choose the background color.
    - **Opacity**: Set the opacity for the background color.

    <a name="get-info-by-id"></a>
    #### Get information about a user, channel, or server by ID.
    Sometimes Discord events only return an ID for entities, such as users, channels, roles, or scheduled events.  

    The "Get Info by ID" command accepts the ID and return the whole entity. Please review the examples of returned data inside the button in your premade deck.

privacy_collect: false
---