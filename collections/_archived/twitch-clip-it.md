---
layout: ext_single
title: Twitch Clip It
desc: Easily create new clips and post them to Discord.
category: twitch
date: '2020-11-01T02:50:00-05:00'
permalink: extensions/twitch/:slug
download_url: https://github.com/christinna9031/LB-Clip-It/releases
developer_name: Christina K.
developer_url: https://christinak.itch.io
version: 1.3
sammi_version: 1.40
platform: Twitch
overview: |
    Extension for SAMMI which lets you create Twitch clips (by pressing a button, via Twitch chat or Channel points) and automatically post them to Discord.\
    You can create your own template and use markdown for the Discord embed.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Edit the INIT button. 
    - `oauth_token` = your broadcaster's oauth token ( use /$oauth_token$/ variable if you have only one Twitch account linked to SAMMI)
    - `channel_id` = your broadcaster's channel ID you're going to create the clips from (use /$channel_id$/ variable if you have only one Twitch account linked to SAMMI)
    - `webhook` = your Discord Webhook url. [How to create a Webhook](https://docs.gitlab.com/ee/user/project/integrations/discord_notifications.html) for your own Discord channel.
    - `content` = Discord post. It supports [Discord Markdown](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-) and the following custom parameters (will be automatically replaced by the extension):
    - `<text>` (viewer's text)
    - `<author>` (viewer's name)
    - `<broadcaster>` (broadcaster's name)
    - `<category>` (game category)
    - `<title>` (stream title)
    - `<clip>` (clip url)
    - `<n>` (new line)
    - `username` = name the Discord message will be posted under

        ![Clip Discord template example](clipit_ex.png)

    **Clip It**
    <div class="alert alert-warning" role="alert">You must press the INIT button before triggering the Clip It button.</div>
    *Use Math: Trigger pull to get your viewer's name and their message to post it on Discord if you're triggering the button via Twitch chat message or channel point redeem.*\

    - `author` = your viewer's name
    - `text` = your viewer's text/title of the clip to post on Discord (this does NOT rename the clip on Twitch)
    - `discord post` = whether you want it posted on Discord
    - `variable` = variable to save the newly created clip ID
    - `ext_trigger` = extension trigger name
        - This will fire as soon as the clip creation is complete (or fails) and trigger **!clip done** button
        - The advantage is that you do not need to set up your own delay to make sure you don't post an empty clip URL in your chat
    - `trigger_enabled` = whether you want to use the extension trigger (else you can manually add a delay)

    **!clip done**\
    This button will trigger as soon as the clip is created (or the extension fails creating it).

    | Math: Trigger pull value | Description | 
    |-------|--------|
    |1 | clip ID of your newly created clip (in the event it fails, it will be set to `error`)|
    |2| viewer's name who triggered the Clip it button|
    |3 | viewer's text/title |
    {:class='table table-secondary w-auto table-hover data-toggle='table' }

    **The base url for Twitch clips is `https://clips.twitch.tv/CLIPID>`**.

    - If a clip is successfully created, you will also receive a yellow notification message in your Receiver `Clip creation successful`.
    - If a clip is successfully created AND posted to Discord, you will receive another yellow notification message `Clip successfully posted to Discord!`
    - If there is any problem with creating a clip or posting it to Discord, you will receive a yellow notification message containing the error.
privacy_collect: false
---