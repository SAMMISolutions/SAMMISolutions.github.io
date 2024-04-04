---
layout: ext_single
title: Palworld Triggers
slug: palworld-triggers
desc: Listen for Palworld events in SAMMI
category: games
date: '2024-02-28T00:00:00-05:00'
permalink: extensions/games/:slug
download_url: https://christinak.itch.io/palworld-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: palworld-triggers-icon.png
trailer: https://www.youtube.com/embed/3mi_1K1PV2U
screenshots_local: palworld-triggers-deck.png, palworld-triggers-pull.png, palworld-triggers-pull2.png
version: 1.0
sammi_version: 2023.3.1 and up
platform: Any
overview: |
    Palworld Triggers is an extension for SAMMI that allows you to listen to specific in-game events and trigger buttons within SAMMI.

    **Features**
    - **Pal Captured and Incubated**: Triggered when a pal is captured or incubated, providing details like pal level, name, passive skills, and capture count.
    - **Base Invasion Alerts**: Triggered when your base is under attack or being visited by an NPC, providing details like enemy names.
    - **Chat Message Integration**: Captures all in-game chat messages, allowing you to view details like the message sender.
    - **Complete Pal Inventory**: A special feature that retrieves a list of all your owned pals, and information such as their names, levels, skills, and more.
    - **API Commands for Dedicated Servers:**
        - Get server info and metrics.
        - Get list of current players.
        - Send announcement messages in chat.
        - Kick, ban, and unban players from the server.
        - Save & Shut down the server remotely.
        - And more!

    **Beta Version Warning**  

    Please be aware that **Palworld Triggers** is currently in its beta phase. Any updates to Palworld may cause the extension to stop working. We are working hard to ensure that the extension is updated as soon as possible after any changes to the game.

    **Important Notes**  

    This extension requires the download of **RE-UE4SS** as a dependency. 
    The extension has been extensively tested on a dedicated server, and should be fully functional in single-player and public servers. However, as this is a beta release, some features may not be fully polished.

setup: |
    #### Initial Setup

    1. **Download UE4SS**: Go to [UE4SS's GitHub releases page](https://github.com/UE4SS-RE/RE-UE4SS/releases) and download the latest version (UE4SS_v3.0.1.zip or later).
    2. **Extract UE4SS into Palworld Folder**:
    - Extract the downloaded zip file contents to your Palworld game folder, specifically in `Pal/Binaries/Win64`.
        - If your game is installed via Steam, this path is usually `SteamLibrary\steamapps\common\Palworld\Pal\Binaries\Win64`.

    3. **Download Palworld Triggers Extension**:
    - Use download link to get the extension zip file from Itch.io or Kofi.

    4. **Install the Extension in Palworld**:
    - Open the downloaded zip file for Palworld Triggers.
    - Find the `Mods` folder inside it.
    - Drag and drop the entire `Mods` folder into the same `Pal\Binaries\Win64` folder in your Palworld game directory.

    5. **Install Extension in SAMMI**:
    - Make sure your SAMMI is updated to the latest version.
    - Install the Palworld Triggers extension in SAMMI.

    6. **Configure the Extension**:
    - In your Palworld folder, navigate to `Pal\Binaries\Win64\Mods\SAMMI\Scripts`.
    - Open the `config.lua` file with a text editor.
    - Locate the `filePath` key and change its value to the path of your Palworld folder. You can get this path easily by pressing the "Get Palworld Folder Path" button in the premade Palworld Triggers deck in SAMMI.
    - Optionally decide what triggers you wish to listen to by changing the values inside `config.lua` file. By default, all triggers are enabled.

    7. **Test the Installation**:
    - Launch Palworld.
    - Try sending a chat message or catching a pal in the game.
    - Look for a yellow alert in SAMMI as confirmation that the extension is working.

    If you encounter any issues, restart the game and SAMMI, and ensure that you have followed all the steps correctly.

    #### Pal Captured
    Triggered when a pal is captured or incubated, providing details like pal level, name, passive skills, and capture count. You can use Trigger Pull Data command to get the details of the captured pal.

    | Pull Value | Description | Example |
    |-----------|-------------|---------|
    | palName | The name of the captured pal | Relaxaurus |
    | level | The level of the captured pal | 15 |
    | isLuckyPal | 1 for lucky, 0 for normal pal | 0 |
    | isBossPal | 1 for boss pal, 0 for normal pal | 0 |
    | captureCount | How many you've captured so far | 16 |
    | passiveSkills | An array of all passive skills | ["Musclehead", "Ferocious"] |
    {:class='table table-secondary table-hover'}  

    #### Get All Pals
    To get all pals, send '!pt pals' in the game chat. The button will be triggered and the pull value will contain an array of objects. Each object represents a single pal. 

    | Pull Value | Description | Example |
    |-----------|-------------|---------|
    | palName | The name of the pal | Relaxaurus |
    | nickName | The nickname of the pal | My Relaxing Pal |
    | level | The level of the pal |
    | gender | The gender of the pal | Male
    | hp | The health points of the pal | 2638000 |
    | rank | The partner level of the pal | 1 |
    | slotIndex | The slot number, either in party or palbox | 10 |
    | isLuckyPal | 1 for lucky, 0 for normal pal | 0 |
    | isBossPal | 1 for boss pal, 0 for normal pal | 0 |
    | masteredSkills | An array of all mastered skills | ["Dragon Cannon", "Air Cannon", "Spirit Fire"] |
    | activeSkills | An array of all active skills | ["Flare Arrow", "Sand Tornado", "Flare Storm"] |  
    | passiveSkills | An array of all passive skills | ["Artisan", "Positive Thinker", "Serious", "Lucky"] |
    {:class='table table-secondary table-hover'}

    #### Base Invasions
    Triggered when your base is under attack or being visited by an NPC. There are two separate triggers - for when the invasion starts, and when it ends. You can use Trigger Pull Data command to get the details of the invasion.

    | Pull Value | Description | Example |
    |-----------|-------------|---------|
    | type | The type of the event | Invasion Started or Invasion Ended |
    | groupName | The name of the group | Syndicate Legends or None if it's a visitor NPC |
    | biomeType | The type of biome | Meadow |
    | message | The message of the event | Area Invasion |
    | character_A | The name of the first enemy or the visitor | Syndicate Grenadier |
    | invaderType | The type of the invader | Invader Enemy |
    {:class='table table-secondary table-hover'}

    #### Chat Message
    Triggers on new chat message. You can use Trigger Pull Data command to get the details of the chat message.

    | Pull Value | Description | Example |
    |-----------|-------------|---------|
    | sender | The name of the sender | Christina |
    | category | The category of the chat message | Global |
    | message | The message content | hello world |
    {:class='table table-secondary table-hover'}    

    #### Enable or Disable Triggers
    If you wish to STOP listening to Palworld events, you can disable the whole Palworld Triggers deck
    and delete `Pal\Binaries\Win64\Mods\SAMMI\enabled.txt`. Restart your game.  
    
    If you wish to START listening to Palworld events again, enable the Palworld Triggers deck, press INIT button
    and readd Pal\Binaries\Win64\Mods\SAMMI\enabled.txt. Restart your game.

    #### API Server Setup
    <div class="alert alert-warning mt-2" role="alert">Only works on Dedicated Servers</div>

    Palworld API Request commands allow you to communicate with your Palworld server. 

    **Requires the following setup:** 
    1. Navigate to your Palworld Server -> `PalWorldSettings.ini` file
        - - For example, the path for Steam is `SteamLibrary\steamapps\common\PalServer\Pal\Saved\Config\WindowsServer\PalWorldSettings.ini`
        - If you use a 3rd party to modify your server settings, open that instead
    2. Add or modify the following values in OptionSettings:
        - `RESTAPIEnabled=true`
        - `RESTAPIPort=8212`
        - `AdminPassword="YOURPASSWORD"` (must NOT be empty)
    3. Save the ini file and restart the Palworld server.
        - In the Server log, you should see: `REST API started on port 8212`
    4. Fill out the following inside the Setup Server API button in the Palworld Triggers deck: 
        - Server Address: `127.0.0.1` if hosted locally, else insert the server address
        - Server Port: `8212` (or whatever you set it to in step 2)
        - Do Not Include Port: Check this if the port is already a part of the server address
        - Server Password: `YOURPASSWORD` (whatever you set it to in step 2)
    5. Reload Bridge.

    #### API Commands
    Available API commands: 
    - Get Server Info
    - Get Currently Connected Players
    - Get Server Settings
    - Get Server Metrics
    - Announce message in chat
    - Kick, ban and unban players
    - Save the world
    - Shutdown and force stop the server

    You can view all the commands and their examples inside Send API Command button in the Palworld Triggers deck. 
privacy_collect: false
---