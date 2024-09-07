---
layout: ext_single
title: Discord Controls
slug: discord-controls
desc: Extensions that allows you and your viewers to control your Discord server straight from SAMMI. 
category: social
date: '2024-03-24T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/discord-controls
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: discord_controls.png
screenshots_local: discord_controls_ss.png
version: 1.3
sammi_version: 2024.1.1.2 and up
platform: Any
overview: |
    Discord Controls is an extension that gives you and your viewers a super easy way to run your Discord server right from SAMMI.

    **Key Features**:
    - See Everything - Access a list of all channels, members, and emojis in your server.
    - Find Anyone - Easily search for members and see their information.
    - Manage Messages - View, make, change, or delete messages in your channel.
    - Create Messages with Attachments and Embeds - Send messages with images, files, and embeds.
    - Handle Reactions - Get, create, and remove reactions to messages.
    - Send Direct Messages - Shoot private messages to members of your server.
    - Take Care of Roles - View, add or remove member roles - it's never been easier!
    - Change Nicknames - Quickly change any member's nickname.
    - Control Members - Mute, deafen, move, or time-out members to keep your server friendly and fun.
    - Update Server - Change your server details, including its name and icon. You can even - show when you're live with a simple 'live' overlay on your server icon!
    - Rename Channels - Change any channel name whenever you want.
    - Create invite - Create a new channel invite with options like maximum age and maximum usage.

    With Discord Controls, running your Discord server is a breeze!
setup: |
    1. First, check that you're using the most recent version of SAMMI and install the extension. If you're not sure how to do this, there's a handy [Extension Install Guide](https://sammi.solutions/extensions/install) that can help.

    2. Next, you're going to edit the **INIT SETTINGS** button in the Discord Controls premade deck. Here's what you'll need to do:

        - `Discord Bot Token:`
            1. Create a new application over at [https://discord.com/developers/applications](https://discord.com/developers/applications)
            2. Click on the 'Bot' menu and hit 'Add Bot' (if you get an error, try renaming the application)
            4. Enable the 'SERVER MEMBERS INTENT' and 'MESSAGE CONTENT INTENT' options (these are important for using the Get Members and Get Messages commands)
            3. Still in the 'Bot' menu, hit 'Reset Token' and copy this into the Discord Bot Token box in SAMMI
            5. In the 'OAUth2 - URL Generator' menu, check the 'Bot' scope. You'll need to give the bot some specific permissions so it can do certain things from SAMMI.   
            Here's a list of what permissions are needed for each command: 

                | Command | Permission Required|
                |-------|--------|
                Get Messages | Read Message History |
                Create Message| Send Messages|
                Delete Message | Manage Messages|
                Send DM |  Send Messages|
                Create Reaction | Read Message History, Add Reactions|
                Add Role| Manage Roles |
                Remove Role| Manage Roles |
                Change Nickname | Manage Nicknames|
                Mute | Mute Members|
                Deafen | Deafen Members|
                Move | Move Members|
                Timeout | Moderate Members|
                Create Event | Create Events | 
                Delete Event | Manage Events | 
                Modify Channel | Manage Channels|
                Modify Server | Manage Server |
                {:class='table table-secondary w-auto table-hover text-break mt-2' }

            {:start="6"}
            6. Hit 'Copy' to get the URL, paste this into your browser and invite the bot to your Discord server
            7. If you want to give or take away roles from members, you need to make sure your bot's role is higher than these roles in your Discord Server Settings

        - `Default Discord Server ID` - This is the ID of the Discord server that you want to control with the extension. Here's how to get it:
            1. In Discord, turn on Developer Mode. You can find this in User Settings (click the cog in the bottom left corner) in the Advanced tab
            2. Right-click your Server name and click 'Copy ID'

        - `Amount of members to retrieve` - Choose how many members you want to pull up in the User ID dropdowns in DisCon commands. This just makes it a bit easier to pick a member without having to find their ID. 


    3. Save the changes you made to the **INIT Settings** button. Then save the whole deck. Reload your Bridge to get the extension going.  

    Once it's up and running, all DisCon commands will show dropdowns for channel, role, emoji and member IDs. If you want to use a different server in your commands than your default one, you will need to manually input these. 

    ##### Available Commands

    <a name="available-commands"></a>
    1. [Get Channels](#get-channels)
    2. [Get Members](#get-members)
    3. [Get Roles](#get-roles)
    4. [Get Emojis](#get-emojis)
    5. [Get User](#get-user)
    6. [Get Messages](#get-messages)
    7. [Create Message](#create-message)
    8. [Edit Message](#edit-message)
    9. [Delete Message](#delete-message)
    10. [Send DM](#send-dm)
    11. [Get Reactions](#get-reactions)
    12. [Create Reaction](#create-reaction)
    13. [Delete Reaction](#delete-reaction)
    14. [Add Role](#add-role)
    15. [Remove Role](#remove-role)
    16. [Change Nickname](#change-nickname)
    17. [Mute](#mute-member)
    18. [Deafen](#deafen-member)
    19. [Move Channel](#move-channel)
    20. [Timeout](#timeout-member)
    21. [Search Member](#search-member)
    22. [Get Events](#get-events)
    23. [Create Event](#create-event)
    24. [Delete Event](#delete-event)
    25. [Modify Channel](#modify-channel)
    26. [Modify Server](#modify-server) 
    27. [Encode Emojis](#encode-emojis)  
    28. [Format Emojis](#format-emojis)

    <a name="get-channels"></a>
    **Get Channels** [*[Back to Top]*](#available-commands)             
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

     <a name="get-members"></a>
    **Get Members** [*[Back to Top]*](#available-commands)               
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

    <a name="get-roles"></a>
    **Get Roles** [*[Back to Top]*](#available-commands)               
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

    <a name="get-emojis"></a>
    **Get Emojis** [*[Back to Top]*](#available-commands)               
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

    <a name="get-user"></a>
    **Get User** [*[Back to Top]*](#available-commands)               
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

    <a name="get-messages"></a>
    **Get Messages** [*[Back to Top]*](#available-commands)               
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

    <a name="create-message"></a>
    **Create Message** [*[Back to Top]*](#available-commands)        
    Creates a new message and returns a message object. 
    Your Discord Bot must have `SEND_MESSAGES` permission.  
    If you want to tag a specific user or a role, please refer to this [Message Formatting Documentation](https://discord.com/developers/docs/reference#message-formatting).

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID to create the message in. You can select it from the dropdown or input it manually.
    Content | Message Text 
    Embed Json (optional) | Message Embed JSON, you can build it at [https://glitchii.github.io/embedbuilder/](https://glitchii.github.io/embedbuilder/)
    Attachment File (optional) | Full path to the file you wish to attach, select or insert
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    <div class="alert alert-info" role="alert">You can fill out either an embed or a file attachment, not both.</div>

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

    <a name="edit-message"></a>
    **Edit Mesage** [*[Back to Top]*](#available-commands)        
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
    <a name="delete-message"></a>
    **Delete Message** [*[Back to Top]*](#available-commands)               
    Deletes a single message.    
    Your Discord Bot must have `MANAGE_MESSAGES` permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID  | Channel ID to delete the message in. You can select it from the dropdown or input it manually.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}


    <a name="send-dm"></a>
    **Send DM** [*[Back to Top]*](#available-commands)               
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


    <a name="get-reactions"></a>
    **Get Reactions** [*[Back to Top]*](#available-commands)               
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
    <a name="create-message"></a>
    **Create Reaction** [*[Back to Top]*](#available-commands)               
    Creates a reaction to the specified message with the specified emoji.    
    Your Discord Bot must have `READ_MESSAGE_HISTORY`, `ADD_REACTIONS` permissions.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID where the message resides. You can select it from the dropdown or input it manually.
    Message ID | Message ID to react to (can be retrieved with Get Messages or Create Message command)
    Emoji | Emoji to react with <br/>- For a custom emoji you can select it from the dropdown <br/>- For a regular Discord emoji, just copy paste the emoji (not the code, the emoji itself) <br/>- for example a Thumbs Up emojis would be: 👍 <br/>- for example a Blue Heart emoji would be: 💙 <br/>- SAMMI will display emojis as small rectangle symbols, however it will correctly send them to Discord 
    {:class='table table-secondary w-auto table-hover text-break'}

    <a name="delete-reaction"></a>
    **Delete Reaction** [*[Back to Top]*](#available-commands)               
    Deletes your own Discord bot's reaction to the specified message with the specified emoji.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Channel ID | Channel ID where the message resides. You can select it from the dropdown or input it manually.
    Message ID | Message ID to delete the reaction of (can be retrieved with Get Messages or Create Message command)
    Emoji | Emoji reaction to delete <br/>- For a custom emoji you can select it from the dropdown <br/>- For a regular Discord emoji, just copy paste the emoji (not the code, the emoji itself) <br/>- for example a Thumbs Up emojis would be: 👍 <br/>- for example a Blue Heart emoji would be: 💙 <br/>- SAMMI will display emojis as small rectangle symbols, however it will correctly send them to Discord 
    {:class='table table-secondary w-auto table-hover text-break'}
 
    <a name="add-role"></a>
    **Add Role** [*[Back to Top]*](#available-commands)               
    Adds a specific role to the specified user.  
    Your Discord Bot must have `MANAGE_ROLES` permissions and its own role must be ABOVE the role you're adding in Server Settings.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Discord server ID. Leave empty or at 0 to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    Role ID | Role ID to remove from the user. You can select it from the dropdown or input it manually.
    {:class='table table-secondary w-auto table-hover text-break'}

    <a name="remove-role"></a>
    **Remove Role**        
    Removes a specific role from the specified user.   
    Your Discord Bot must have  `MANAGE_ROLES` permissions and its own role must be ABOVE the role you're removing in Server Settings.

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable | Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    <a name="change-nickname"></a>
    **Change Nickname** [*[Back to Top]*](#available-commands)               
    Changes a user's nickname in the server.   
    Your Discord Bot must have `MANAGE_NICKNAMES` permission. 


    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    New Nickname | Member's new nickname
    {:class='table table-secondary w-auto table-hover text-break'}
 
    <a name="mute-member"></a>
    **Mute** [*[Back to Top]*](#available-commands)               
    Mutes a user in a voice channel.   
    Bot must have `MUTE_MEMBERS` permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to remove the role from. You can select it from the dropdown or input it manually.
    Mute | Check to mute or uncheck to unmute the user
    {:class='table table-secondary w-auto table-hover text-break'}

    <a name="deafen-member"></a>
    **Deafen** [*[Back to Top]*](#available-commands)               
    Deafens a user in a voice channel.
    Bot must have 'DEAFEN_MEMBERS' permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID | User ID of the user to deafen. You can select it from the dropdown or input it manually.
    Deafen | Check to deafen or uncheck to Un-Deafen a user
    {:class='table table-secondary w-auto table-hover text-break'}

     <a name="move-channel"></a>
    **Move Channel** [*[Back to Top]*](#available-commands)               
    Moves a user in a voice channel to a different voice channel.   
    Bot must have `MOVE_MEMBERS` permission.    

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    User ID|- User ID of the user to deafen. You can select it from the dropdown or input it manually.
    Channel ID | New channel ID to move the user to (must be a voice channel)
    {:class='table table-secondary w-auto table-hover text-break'}
 
     <a name="timeout-member"></a>
    **Timeout** [*[Back to Top]*](#available-commands)               
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

     <a name="search-member"></a>
    **Search Member** [*[Back to Top]*](#available-commands)               
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

     <a name="get-events"></a>
    **Get Events** [*[Back to Top]*](#available-commands)               
    Retrieves an array of all scheduled server events. Each event is an object. 

    | Box Name | Explanation | 
    |-------|--------|
    Discord Server ID | Your Discord server ID. Leave empty or at `0` to use your default one from INIT Settings button.
    Save Variable |  Variable name to save the result into
    {:class='table table-secondary w-auto table-hover text-break'}

    Example payload for a single event called Test event: 
    ``` 
    {
        "guild_id": "807277614154252318",
        "scheduled_end_time": "2023-05-17T07:00:00.133000+00:00",
        "channel_id": null,
        "creator_id": "452058585715834890",
        "sku_ids": [],
        "privacy_level": 2.0,
        "creator": {
            "avatar_decoration": null,
            "public_flags": 0.0,
            "discriminator": "9031",
            "username": "Christinna",
            "global_name": null,
            "id": "452058585715834890",
            "avatar": "76465f81d94b50023f2d51b63e6e57bd"
        },
        "image": null,
        "entity_id": null,
        "entity_metadata": {
            "location": "Earth"
        },
        "id": "1108246104262316114",
        "scheduled_start_time": "2023-05-17T05:00:00.133000+00:00",
        "description": "Hello description",
        "status": 1.0,
        "name": "Test event",
        "entity_type": 3.0
    }
    ```

    <a name="create-event"></a>
    **Create Event** [*[Back to Top]*](#available-commands)               
    Creates a new event.  
    Bot must have 'CREATE_EVENTS' permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Server ID | Discord server ID. Leave empty or at 0 to use your default one from INIT Settings button.
    Type | even Type to create
    Name | Name of the event
    Channel ID | if the event Type is voice, select Channel ID
    Location | if the event Type is External, fill it out with location, i.e. city 
    Description | Event description
    Start Time | Start time of the event. Must be in ISO8601 format. </br> - You can use Date/Time Math command to convert it.
    End Time | End time of the event. Must  be in ISO8601 format. </br> - You can use Date/Time Math command to convert it.
    Save Variable | Variable name to save the response (optional). Will contain the whole event object you just created. 
    {:class='table table-secondary w-auto table-hover text-break'}


     <a name="delete-event"></a>
    **Delete Event** [*[Back to Top]*](#available-commands)               
    Deletes an existing scheduled event.   
    Bot must have 'MANAGE_EVENTS' permission.  

    | Box Name | Explanation | 
    |-------|--------|
    Server ID | Discord server ID. Leave empty or at 0 to use your default one from INIT Settings button.
    Event ID | Event ID to delete. Returned in Get Events or Create Event command. 
    Save Variable | Variable name to save the response (optional).  Will be set to 'ok' if the event was succesfully deleted.
    {:class='table table-secondary w-auto table-hover text-break'}

     <a name="modify-channel"></a>
    **Modify Channel** [*[Back to Top]*](#available-commands)               
    Modifies specified channel. Leave empty to leave unchanged.
    Bot must have 'MANAGE_CHANNELS' permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Server ID | Discord server ID. Leave empty or at 0 to use your default one from INIT Settings button.
    Channel ID | Channel ID to modify. You can select it from the dropdown or input it manually.
    Name | New name for the channel
    Topic | New topic for the channel
    NSFW | whether the channel should be marked as NSFW
    Save Variable | Variable name to save the response (optional). Will contain the whole updated channel object
    {:class='table table-secondary w-auto table-hover text-break'}
    
    <a name="modify-server"></a>
    **Modify Server** [*[Back to Top]*](#available-commands)               
    Modifies a server. Leave boxes empty to leave the current values unchanged.
    Bot must have 'MANAGE_GUILD' permission. 

    | Box Name | Explanation | 
    |-------|--------|
    Server ID | Discord server ID to modify. Leave empty to use your default one from INIT Settings button.
    Name |New name for the server
    Description | New description for the server
    Icon | New icon from the server - 1024x1024 recommended, png/jpeg/gif
    Save Variable | Variable name to save the response (optional). Will contain the whole updated server object
    {:class='table table-secondary w-auto table-hover text-break'}   
    
    
    <a name="encode-emojis"></a>
    **Encode Emojis** [*[Back to Top]*](#available-commands)  
    Encodes unicode Discord emoji to be used in other Discord commands, such as 'Get Reactions' command.  
    Find full example inside the 'Get Reactions' command.

    | Box Name | Explanation |
    |-------|--------|
    Emoji | Unicode emoji to encode
    Save Variable | Variable name to save the encoded emoji into
    {:class='table table-secondary w-auto table-hover text-break'}

    <a name="format-emojis"></a>
    **Format Emojis** [*[Back to Top]*](#available-commands)  
    Formats input containing Discord unicode emojis to be used outside of Discord, e.g. Twitch chat, instead of displaying the raw unicode.  
    Find full example inside the 'Get Messages' command.

    | Box Name | Explanation |
    |-------|--------|
    Message | Input containing Discord unicode emojis
    Save Variable | Variable name to save the formatted input into
    {:class='table table-secondary w-auto table-hover text-break'}

privacy_collect: false
---