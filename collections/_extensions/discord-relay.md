---
layout: ext_single
title: Discord-Twitch Relay
slug: discord-relay
desc:  Relay messages between Twitch and Discord and send trigger from Discord to SAMMI
category: social
date: '2022-07-25T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/sammi-discord-relay
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: discord_relay.png
trailer: https://www.youtube.com/embed/Qn1puWHfMYs
screenshots_local: discord_relay_ss.png, discord_deck.png
version: 1.0
sammi_version: 2022.4.0
platform: Twitch/Discord
overview: |

    Discord Relay is an extension for SAMMI capable of relaying messages between Twitch Chat and Discord.  

    **Features:**

    **Forwards all your Twitch Chat channel messages to your selected Discord channel**
    - can select any Twitch channel to listen to
    - ability to ignore certain usernames, such as bots
    - display user profile pictures, badges and color names in the relayed messages
    - converts Twitch user mentions to Discord user mentions
    - converts Twitch emotes to Discord emotes

    
    **Forwards all Discord messages to your Twitch chat**
    - can select any linked Twitch account in SAMMI to post the relayed messages to your Twitch chat
    - can enable Discord triggers - all Discord messages will be also sent to your SAMMI, can set up triggers for message content (including wildcards) and Discord roles
    - ability to ignore certain usernames, such as bots
    - can limit the bot to only listen to specific Discord channels
    - converts Discord user mentiond to Twitch user mentions
    - empty Discord messages containing attachments relay the attachment URL instead


    **(Optionally) Listens to all Discord Direct Messages and sends them to your SAMMI as Discord DM triggers**
    - only listens to your Discord bot's direct messages, not your personal account
    - ability to set up Discord DM triggers in your SAMMI for message content (including wildcards)

    *You can also only listen to Discord triggers and disable relaying messages.*
    
setup: |

    1. [Installation](#installation)
    2. [Open Relay](#openrelay)
    3. [Close Relay](#closerelay)
    4. [Open for Discord Triggers Only](#opendiscordtriggers)
    5. [Discord Triggers and Pull Values](#discordtriggers)
    6. [Discord Emojis](#discordemojis)

    <h4 class="anchor-header" id="installation">Installation</h4>
   
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. You should see a new premade deck in your SAMMI Core. We will need to edit all the values in the red **SETTINGS** button. Right click on the button - Edit commands: 
        - Under the first green comment, you can add usernames you do NOT want to relay messages from (both Discord and Twitch). Use Array Insert command (Array Name = `ignore`) for each username. For example, you might not want to relay messages from any bots.
        - Fill out the Discord Relay Setup command (Bridge must be running for you to see it): 
            - `Twitch Username` - your Twitch username (most likely your bot name) you want to use to post all relayed Discord messages to Twitch chat, must be linked in your LB
            - `Twitch Channel to Join` - Twitch channel username you wish to join to listen to chat message to relay and to post any relayed Discord messages
            - `Discord Webhook` - Discord webhook URL that you created for your Discord channel where
                  you want to relay your Twitch chat messages.\
                  To create a new Discord webhook, right click on the channel in your Discord - Edit channel - Integrations - Create Webhook. Copy its URL and paste it. 
            - `Discord Bot Token` - your Discord bot token you created and invited to your server.\
                To create a new bot: 
                1. Go to [Discord Developer Applications](https://discord.com/developers/applications).
                2. Click on 'New Application' button. ![](discord_relay_ex.png)
                3. Give it a name.
                4. After it is created, click on `Bot` in the left side menu. Click on `Add Bot` button and click on `Yes, do it!` button.\
                *If you get 'Too many users have this username, please try another.' error, try changing your application name to something less generic.*  ![](discord_relay_ex2.png)
                5. Once your bot is created, click on `Click to reveal token` link, copy the token and paste it in the `Discord Bot Token` in SAMMI. All other settings should be left at default. ![](discord_relay_ex3.png)
                6. Navigate to the 'Bot' menu and make sure `MESSAGE CONTENT INTENT` is checked. Otherwise all relayed messages will be empty. ![](discord_relay_ex8.png)
                7. Click on 'OAuth2' - URL Generator in the side menu and check `bot` in the scopes list. This will open up a new menu below where you need to check `Read Message History`. This is only for reading messages so they can be relayed to your Twitch chat, your bot does not need any other permissions.
                8. Scroll up a bit and click on `Copy`. Open the link in a new browser window and invite the bot to your Discord server. You can restrict your bot to only see certain channels (by editing the channels and restricting it from seeing them), otherwise it will be relaying messages from all the channels it can see on your server.![](discord_relay_ex4.png)
    3. Rest of the fields - do not change anything in those, automatically filled.
    4. Click Save and Save again. 
    5. Press the green **OPEN RELAY** button or reload your Bridge to start relaying all messages. You should get a yellow notification message the Relay has been opened.\

    *If you wish to manually enable the relay instead of having it automatically enabled every time you open your Bridge, remove the Stream Deck/Bridge Connected trigger from the button (right click-Edit Triggers)*

    <h4 class="anchor-header" id="openrelay">Open Relay</h4>
    
    This button opens the Relay to listen to and relay all your Discord messages to your selected Twitch Chat channel and all your Twitch Chat channel's messages to your selected Discord channel. 

    - `Status` - Enable
    - `Discord Trigger` - tick it if you wish to also send Discord triggers for any Discord messages (more information can be found in [Discord Triggers](discordtriggers) section)
    - `Listen to Discord DMs` - tick if you wish to listen to your Discord Bot's Direct Messages
        - these will only get sent as triggers to your SAMMI and will not be relayed to your Twitch Chat
        - the extension can't listen to your personal account's DMs, only your bot
        - more information can be found in [Discord Triggers](discordtriggers) section

    - `Discord Mode` -
        - Pretty - will relay Twitch chat messages in embed format (includes user's profile picture and chat color)
        - Standard - will relay Twitch chat messages in text format (automatically switches to Standard if your Twitch channel has lots of messages due to Discord webhook limits)

    <h4 class="anchor-header" id="closerelay">Close Relay</h4>
    Closes the connection and stops relaying all the messages. Discord triggers will be also disabled. 

    - `Status` - Close

    <h4 class="anchor-header" id="opendiscordtriggers" markdown="1">Open for Discord Triggers Only</h4>
    Opens the connection to only listen to Discord triggers. No messages will be relayed. 

    <h4 class="anchor-header" id="discordtriggers" markdown="1">Discord Triggers</h4>
    If you press **Open Relay** (and tick Discord Triggers inside the button) or **Open for Discord Triggers Only** button, all Discord messages will be also sent to your SAMMI where you can set up triggers for them. 

    *You can retrieve the Discord role's ID by going to Discord - Server Settings - Roles - right click on the role - Copy ID*
    
    Add a trigger for a **Regular Discord channel message:**
    - Right click on the button - Edit Triggers - + - Extension trigger
    - Check allow empty Wildcard (important)
    - Discord Trigger name has 3 parts
        1. `discordRelay` = must be placed at the beginning, signifies it's coming from Discord 
        2. `<message>` = specific message to listen to (can include wild cards)
        3. `[<role IDs>]` = specific Discord roles to listen to
            - to allow any role, use `[*]` 
            - to allow a specific role, use `[*YourRoleID*]`
    - Example: `discordRelay hello world! [*]` - triggers for any Discord messages 'hello world' (must be an exact match) coming from any Discord role
    - Example 2: `discordRelay hi * [*]` -  triggers for any Discord message starting with 'hi', followed by
       any other word(s), coming from any Discord role
    - Example 3: `hello role! [*123456789789*]` - triggers for any Discord message 'hello role!' (exact match),
       but it will only trigger for a specific Discord role ID `123456789789`
    - Example 4: `discordRelay hey * [123456789789]` - triggers for any Discord message starting with 'hey', followed by any other word(s), but it will only trigger for a specific Discord role ID `123456789789`

    **Trigger Pull Data Values for regular Discord Messages**\
    After your button gets triggered, you can use Trigger Pull Data command to pull the following information.

    | Pull Value | Description | 
    |-------|--------|
    username      | Discord username excluding discriminator (for example `Christinna`)
    discriminator | Discord discriminator (`9031` is the discriminator for Christinna#9031)
    nickname      | specific nickname the user uses for the selected server (will be null if none)
    userID        | Discord user ID
    avatar        | Discord user avatar image URL
    message       | message the user sent
    channel_id    | channel ID of where the message originated
    guild_id      | Discord server ID of where the message originated
    roles         | array containing all Discord server roles IDs the specific user has
    mention_roles | array containing all role mentions the user made in their message
    mentions      | array containing all user mentions the user made in their message
    attachments   | array of all attachment URLs (if user added any to their message)
    joined        | date the user joined the Discord server
    {:class='table table-primary'}

    Add a trigger for a **Discord Direct Message:**
    - Right click on the button - Edit Triggers - + - Extension trigger
    - Discord DM Trigger name has 2 parts: 
        1. `discordRelayDM` = must be placed at the beginning, signifies it's coming from Discord DM
        2. `<message>` = specific message to listen to (can include wild cards)
    - Example: `discordRelayDM cool *` - triggers for any Discord DM message starting with the word `cool` and having at least another character or word after (because of the *)

    **Trigger Pull Data Values for Discord Direct messages**\
    After your button gets triggered, you can use Trigger Pull Data command to pull the following information.

    | Pull Value | Description | 
    |-------|--------|
    username      |Discord username including discriminator (for example Christinna)
    discriminator | Discord user discriminator (for ex. 9031 is the discriminator for Christinna#9031)
    userID        | Discord user ID
    avatar        | Discord user avatar image URL
    message       | message the user sent
    channel_id    | Discord channel ID of where the message originated
    attachments   |array of all attachment URLs (if the user added any to their message)
    {:class='table table-primary' }

    <h4 class="anchor-header" id="discordemojis">Discord Emojis</h4>
    This button should retrieve all your custom Discord emojis and save them in `discordRelayEmojis.ini` file in your SAMMI folder. If your Twitch viewers use any of the same emojis in the Twitch chat, they will be auto converted and properly displayed in your relayed messages to Discord.\
    Do not edit anything in this button. Simply press it and it should do all the work for you. If you decide to make any changes in your .ini file, do not press the button again as it will override any changes you made.

    If your Twitch emojis do not match the Discord ones (= they have a different name), you can open the discordRelayEmojis.ini file and manually edit the Twitch emojis part.\
      For example, you have a subscriber emoji on Twitch called `RamsreLord`, but your Discord custom emoji's name is `RamsreFish`. After pressing the button and opening the `DiscordEmojis.ini` file, the emojis (in our case 2 emojis) will be stored in an object like this: 
      ```
      default="{ %22RamsreFish%22: %22<:RamsreFish:1000155966555295785>%22, %22butterfly%22: %22<:butterfly:1000155926126415874>%22 }"
      ```
     You want to change the object key `RamsreFish` to `RamsreLord` as this is the Twitch emoji name which the extension will look for to replace it with the Discord emoji ID. Notice that `%22` and `%22` denote double quotes and must not get accidentally deleted. In our case the modified entry would look like this:  
      ```
      default="{ %22RamsreLord%22: %22<:RamsreFish:1000155966555295785>%22, %22butterfly%22: %22<:butterfly:1000155926126415874>%22 }"
      ```
      
    **IMPORTANT:** The API cannot see Discord emojis you did not upload yourself manually. If your Discord server emojis come from linking your Discord to your Twitch channel, they will not show up in the list. You can fix this by manually reuploading all the externally linked emojis in your Discord server and pressing the Discord Emojis button.
privacy_collect: false
privacy_website: false
privacy_policy:
---