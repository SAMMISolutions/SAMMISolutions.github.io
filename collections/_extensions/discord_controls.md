---
layout: ext_single
title: Discord Controls
slug: discord-controls
desc: Extensions that allows you and your viewers to control your Discord server straight from SAMMI. 
category: social
date: '2023-01-05T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/discord-controls
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: discord_controls.png
screenshots_local: discord_controls_ss.png
version: 1.0
sammi_version: 2022.5.1 and up
platform: Any
overview: |
    Discord Controls is an extension that allows you and your viewers to control your Discord server straight from SAMMI. 

    ##### Features
    - Get **Channels**, **Members** and **Emojis** in your server
    - **Search for members** and retrieve their information
    - Get, Create, Edit and Delete **channel messages** 
    - Get, Create and Delete **messages reactions**
    - Send **Direct Messages** to server members
    - Get, Add and Remove **member roles** 
    - Change member **nicknames**
    - Mute, deafen, move and **timeout members**

setup: |
    1. Make sure you're on the latest version of SAMMI and install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Go to the Discord Controls premade deck and edit the **INIT SETTINGS** button: 
        - **Discord Bot Token:** *If you don't see this box, you need to update SAMMI to the latest version*)*
            1. Create a new application at [https://discord.com/developers/applications](https://discord.com/developers/applications)
            2. Under Bot menu, press 'Add Bot' button (rename the application if you get an error)
            4. Still Under Bot menu, press Reset Token and fill out the Discord Bot Token box in SAMMI
            3. Still Under Bot menu, the following intents are required: `SERVER MEMBERS INTENT`, `MESSAGE CONTENT INTENT`                
            5. Under OAUth2 - URL Generator menu, check 'Bot' scope: 
                - The following Bot permissions are required for all extension commands: 
                    `Manage Roles, Manage Nicknames, Moderate Members, Send Messages, Manage Messages 
                    Read Message History, Mute Members, Deafen Members, Move Members`
            6. Click on Copy, paste the URL in your browser and invite the Bot to your Discord server
            7. If you wish to do stuff like adding and removing roles, your Bot's role must be **above** these roles in Discord Server Settings
        - **Default Discord Server ID** - your default Discord server ID that you wish to control with this extension
            1. In your Discord, enable Developer Mode by going to User Settings (cogwheel in the bottom left corner) -> Advanced tab 
            2. Right click on your Server name - Copy ID   
          If you don't fill out server ID in your other DisCon commands, it will assume the default one you set up here.
        - **Amount of members to retrieve** - how many Discord members you want to retrieve to place inside User ID dropdowns in DisCon commands. This is just something to make it easier for you to select a member without having to copy their ID.  
    3. Save the INIT Settings button you just edited. Save the whole deck. Reload your Bridge to initiate the extension. Once initiated, all DisCon commands will have dropdowns for channel, role, emoji and member IDs. If you want to use a different server in your commands than your default one, you will need to manually input these. 

    ##### Available Commands

    **Get Channels**      
    Retrieves an array containing all channels in the server. Each channel is an object. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single channel object: 

    ```json
    {
        "position": 1.0,
        "guild_id": "123477614154252318",
        "permission_overwrites": [
            {
                "allow": 0.0,
                "allow_new": "0",
                "deny_new": "1024",
                "id": "123477614154252318",
                "deny": 1024.0,
                "type": "role"
            },
            {
                "allow": 0.0,
                "allow_new": "0",
                "deny_new": "1024",
                "id": "123478636284641351",
                "deny": 1024.0,
                "type": "role"
            }
        ],
        "last_message_id": "1234199175164215347",
        "flags": 0.0,
        "nsfw": 0.0,
        "parent_id": "807277614154252319",
        "rate_limit_per_user": 0.0,
        "id": "936175293419368488",
        "type": 0.0,
        "topic": null,
        "name": "My Test Channel"
    }
    ```

    **Get Members**        
    Retrieves an array of current server members. Each member is an object.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Maximum Amount | Maximum amount of members to retrieve
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single member object: 

    ```json
    {
        "premium_since": null,
        "roles": [
            "999829629307199528",
            "807278636284641351"
        ],
        "flags": 0.0,
        "pending": 0.0,
        "joined_at": "2021-02-05T15:53:01.711000+00:00",
        "communication_disabled_until": null,
        "is_pending": 0.0,
        "mute": 0.0,
        "user": {
            "avatar_decoration": null,
            "public_flags": 0.0,
            "discriminator": "9031",
            "username": "Christinna",
            "id": "452058585715834890",
            "avatar": "76465f81d94b50023f2d51b63e6e57bd"
        },
        "nick": null,
        "avatar": null,
        "deaf": 0.0
    } 
    ```

    **Get Roles**        
    Retrieves an array of all current server roles. Each role is an object.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single role object: 
    
    ```json
    {
        "position": 0.0,
        "color": 0.0,
        "managed": 0.0,
        "icon": null,
        "flags": 0.0,
        "unicode_emoji": null,
        "hoist": 0.0,
        "mentionable": 0.0,
        "permissions": 104320577.0,
        "id": "807277614154252318",
        "description": null,
        "permissions_new": "1071698660929",
        "name": "@everyone"
    }
    ```

    **Get Emojis**        
    Retrieves an array of current server emojis. Each emoji is an object.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single emoji object: 
    ```json
    {
        "managed": 0.0,
        "animated": 0.0,
        "roles": [],
        "url": "https:\/\/cdn.discordapp.com\/emojis\/1000155778554024066.png",
        "available": 1.0,
        "id": "1000155778554024066",
        "require_colons": 1.0,
        "name": "myEmoji"
    }   
    ```    

    **Get User**        
    Retrieves a single user object. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to retrieve. You can select it from the dropdown or input it manually.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for the user object:
    
    ```json
    {
        "banner_color": null,
        "banner": null,
        "banner_url": 0.0,
        "avatar_decoration": null,
        "accent_color": null,
        "public_flags": 0.0,
        "discriminator": "9031",
        "username": "Christinna",
        "avatar_url": "https:\/\/cdn.discordapp.com\/avatars\/452058585715834890\/76465f81d94b50023f2d51b63e6e57bd.png",
        "id": "452058585715834890",
        "avatar": "76465f81d94b50023f2d51b63e6e57bd"
    }
    ```   

    **Get Messages**        
    Retrieves an array of channel messages. Each message is an object.\
    Your Discord Bot must have `READ_MESSAGE_HISTORY` permission.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID to retrieve the messages from. You can select it from the dropdown or input it manually.
    Maximum Amount | Maximum amount of messages to retrieve (default is 50 if left empty)
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single message object: 
    
    ```json
    {
        "components": [],
        "tts": 0.0,
        "pinned": 0.0,
        "attachments": [],
        "embeds": [],
        "mention_roles": [],
        "author": {
            "avatar_decoration": null,
            "public_flags": 0.0,
            "discriminator": "9031",
            "username": "Christinna",
            "id": "452058585715834890",
            "avatar": "76465f81d94b50023f2d51b63e6e57bd"
        },
        "edited_timestamp": null,
        "flags": 0.0,
        "channel_id": "807277614154252321",
        "content": "Hello world!",
        "mentions": [],
        "id": "1040363939843801128",
        "timestamp": "2022-11-10T20:34:52.286000+00:00",
        "type": 0.0,
        "mention_everyone": 0.0
    }
    ```

    **Create Message**        
    Creates a new message and returns a message object. 
    Your Discord Bot must have `SEND_MESSAGES` permission.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID to create the message in. You can select it from the dropdown or input it manually.
    Content | Message Text 
    Embed Object (optional) | Message Embed JSON, you can build it at [https://glitchii.github.io/embedbuilder/](https://glitchii.github.io/embedbuilder/)
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single message object: 
    
    ```json
    {
        "components": [],
        "tts": 0.0,
        "pinned": 0.0,
        "attachments": [],
        "embeds": [],
        "mention_roles": [],
        "author": {
            "avatar_decoration": null,
            "public_flags": 0.0,
            "discriminator": "2706",
            "username": "LBTwitch",
            "id": "815902341671813150",
            "avatar": null,
            "bot": 1.0
        },
        "edited_timestamp": null,
        "flags": 0.0,
        "channel_id": "807277614154252321",
        "content": "Hello world!",
        "referenced_message": null,
        "mentions": [],
        "id": "1040364294417686638",
        "timestamp": "2022-11-10T20:36:16.823000+00:00",
        "type": 0.0,
        "mention_everyone": 0.0
    }
    ```    

    **Edit Mesage**        
    Edits a previously sent message. Must have been sent by the same Discord bot. Returns a message object. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID to edit the message in. You can select it from the dropdown or input it manually.
    Message ID | Message ID to edit. Can be retrieved when you use Create Message command.
    Content | New Message Text 
    Embed Object (optional) | New Message Embed, you can build it at [https://autocode.com/tools/discord/embed-builder/](https://autocode.com/tools/discord/embed-builder/)
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single message object: 
    ```json
    {
        "components": [],
        "tts": 0.0,
        "pinned": 0.0,
        "attachments": [],
        "embeds": [],
        "mention_roles": [],
        "author": {
            "avatar_decoration": null,
            "public_flags": 0.0,
            "discriminator": "2706",
            "username": "LBTwitch",
            "id": "815902341671813150",
            "avatar": null,
            "bot": 1.0
        },
        "edited_timestamp": null,
        "flags": 0.0,
        "channel_id": "807277614154252321",
        "content": "Hello world!",
        "referenced_message": null,
        "mentions": [],
        "id": "1040364294417686638",
        "timestamp": "2022-11-10T20:36:16.823000+00:00",
        "type": 0.0,
        "mention_everyone": 0.0
    }
    ```  
    
    **Delete Message**        
    Deletes a single message.    
    Your Discord Bot must have `MANAGE_MESSAGES` permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID  | Channel ID to delete the message in. You can select it from the dropdown or input it manually.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}


    **Send DM**        
    Sends a new DM message.    
    Your Discord Bot must have `SEND_MESSAGES` permission.

    There are two steps required to send a DM: 
    1. Use Discon Create DM command and retrieve the DM channel ID from the Save Variable response object.
    2. Use DisCon Create Message command using the DM channel ID you retrieved from step 1.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID to start the DM with. Can be retrieved via Get Members, Search Member command or selected from dropdown.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    
    ```json
    ```    

    **Get Reactions**        
    Retrieves an array of users who reacted to the specified message with the specified emoji. Each user is an object.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    Channel ID | Channel ID where the message resides. You can select it from the dropdown or input it manually.
    Message ID | Message ID to find the reactions (can be retrieved with Get Messages or Create Message command)
    Emoji | Emoji reaction to look for <br/>- For a custom emoji you can select it from the dropdown <br/>- For a regular Discord emoji, just copy paste the emoji (not the code, the emoji itself) <br/>- for example a Thumbs Up emojis would be: 👍 <br/>- for example a Blue Heart emoji would be: 💙 <br/>- SAMMI will display emojis as small rectangle symbols, however it will correctly send them to Discord 
    {:class='table table-secondary w-auto table-hover text-break'}

    
    Example payload for a single user object:
    ```json
    {
        "avatar_decoration": null,
        "public_flags": 0.0,
        "discriminator": "9031",
        "username": "Christinna",
        "id": "452058585715834890",
        "avatar": "76465f81d94b50023f2d51b63e6e57bd"
    }
    ```  
    
    **Create Reaction**        
    Creates a reaction to the specified message with the specified emoji.    
    Your Discord Bot must have `READ_MESSAGE_HISTORY`, `ADD_REACTIONS` permissions.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID where the message resides. You can select it from the dropdown or input it manually.
    Message ID | Message ID to react to (can be retrieved with Get Messages or Create Message command)
    Emoji | Emoji to react with <br/>- For a custom emoji you can select it from the dropdown <br/>- For a regular Discord emoji, just copy paste the emoji (not the code, the emoji itself) <br/>- for example a Thumbs Up emojis would be: 👍 <br/>- for example a Blue Heart emoji would be: 💙 <br/>- SAMMI will display emojis as small rectangle symbols, however it will correctly send them to Discord 
    {:class='table table-secondary w-auto table-hover text-break'}

    **Delete Reaction**        
    Deletes your own Discord bot's reaction to the specified message with the specified emoji.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID where the message resides. You can select it from the dropdown or input it manually.
    Message ID | Message ID to delete the reaction of (can be retrieved with Get Messages or Create Message command)
    Emoji | Emoji reaction to delete <br/>- For a custom emoji you can select it from the dropdown <br/>- For a regular Discord emoji, just copy paste the emoji (not the code, the emoji itself) <br/>- for example a Thumbs Up emojis would be: 👍 <br/>- for example a Blue Heart emoji would be: 💙 <br/>- SAMMI will display emojis as small rectangle symbols, however it will correctly send them to Discord 
    {:class='table table-secondary w-auto table-hover text-break'}
 

    **Add Role**        
    Adds a specific role to the specified user.  
    Your Discord Bot must have `MANAGE_ROLES` permissions and its own role must be ABOVE the role you're adding in Server Settings.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Discord server ID. Leave empty or at 0 to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    Role ID | Role ID to remove from the user. You can select it from the dropdown or input it manually.
    {:class='table table-secondary w-auto table-hover text-break'}

    **Remove Role**        
    Removes a specific role from the specified user.   
    Your Discord Bot must have  `MANAGE_ROLES` permissions and its own role must be ABOVE the role you're removing in Server Settings.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    
    ```json
    ```

    **Change Nickname**        
    Changes a user's nickname in the server.   
    Your Discord Bot must have `MANAGE_NICKNAMES` permission. 


    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    New Nickname | Member's new nickname
    {:class='table table-secondary w-auto table-hover text-break'}

    
    ```json
    ```    

    **Mute**        
    Mutes a user in a voice channel.   
    Bot must have `MUTE_MEMBERS` permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    Mute | Check to mute or uncheck to unmute the user
    {:class='table table-secondary w-auto table-hover text-break'}

    **Deafen**        
    Deafens a user in a voice channel.
    Bot must have 'DEAFEN_MEMBERS' permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to deafen. You can select it from the dropdown or input it manually.
    Deafen | Check to deafen or uncheck to Un-Deafen a user
    {:class='table table-secondary w-auto table-hover text-break'}



    **Move Channel**        
    Moves a user in a voice channel to a different voice channel.   
    Bot must have `MOVE_MEMBERS` permission.    

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID|- User ID of the user to deafen. You can select it from the dropdown or input it manually.
    Channel ID | New channel ID to move the user to (must be a voice channel)
    {:class='table table-secondary w-auto table-hover text-break'}
 

    **Timeout**        
    Times out a user in a server and prevents them from sending messages for X amount of time.   
    Bot must have `MODERATE_MEMBERS` permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to deafen. You can select it from the dropdown or input it manually.
    Timeout For | For how long to time out the user
    Timeout Type | The units to time out the user in (seconds, minutes, hours, days)
    {:class='table table-secondary w-auto table-hover text-break'}

    If you wish to un-timeout a user, simply put `0` in the Timeout For box and execute the command again.


    **Search Member**        
    Searches for a specific member in your server by their nickname. Returns an array of all users matching the search query (can be more than one). 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Search Query | Member's nickname to search for (or their username if no nickname is set)
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single user object after searching for 'Chris':

    ```json
    {
        "premium_since": null,
        "roles": [
            "999829629307199528",
            "807278636284641351"
        ],
        "flags": 0.0,
        "pending": 0.0,
        "joined_at": "2021-02-05T15:53:01.711000+00:00",
        "communication_disabled_until": null,
        "mute": 0.0,
        "user": {
            "public_flags": 0.0,
            "discriminator": "9031",
            "username": "Christinna",
            "id": "452058585715834890",
            "avatar": "76465f81d94b50023f2d51b63e6e57bd",
            "bot": 0.0
        },
        "nick": null,
        "avatar": null,
        "deaf": 0.0
    }
    ``` 
privacy_collect: false
---