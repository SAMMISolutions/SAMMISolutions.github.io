---
layout: ext_single
title: Twitch Get Clips
desc: Retrieve Twitch clips from any broadcaster. Super useful for shoutouts!
category: twitch
date: '2020-10-22T17:12:00-04:00'
permalink: extensions/twitch/:slug
download_url: https://github.com/christinna9031/LB-Twitch-Get-Clips/releases
developer_name: Christina K.
developer_url: https://christinak.itch.io
version: 1.5
sammi_version: 1.40 
platform: Twitch
overview: |
    Retrieves top Twitch clips from any broadcaster. Can specify the amount of clips to retrieve (max 100). Super useful for shoutouts!\
    Requires [Get Clip Length](sammi.solutions/extensions/twitch/twitch-clip-length) extension if you wish to hide your clip source once the clip finishes playing.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Use `Send to Extension - Twitch Get Clips` command to retrieve a clip. 

        | Extension box | Description | 
        |-------|--------|
        |broadcaster_name | the name of the broadcaster to retrieve the clip(s) from|
        |oauth token| your Twitch oauth token. Leave at /$oauth_token$/ default value. |
        |amount|amount of clips to retrieve. 1-100.|
        |variable|variable or stack name to save the clip ID(s). If amount of clips is 1, the clip ID will be saved into a variable. If amount of clips is more than 1, a new stack will be created containing all the clip IDs.|
        {:class='table table-secondary table-hover'}

    3. Give the extension some delay to retrieve the clip. Around 2000ms should be enough.\
        - If something goes wrong retrieving the clips or streamer does not have any clips, your variable value will be set to `error`.
        - If the broadcaster has less clips than the amount you specified, you will receive all the available clips.
    4. Retrieve your clip ID either from the variable or stack from step 2 (depending on the amount you selected)
    5. (Optionally) use [Get Clip Length](sammi.solutions/extensions/twitch/twitch-clip-length) extension to retrieve its clip length to automatically hide the OBS source after it stops playing. 
    6. Use [Source Change Settings](https://sammi.solutions/docs/commands/obs-sources#sourcechangesettings) command to briefly change your OBS browser source to an empty page first (prevents incorrect refreshing): `{"url":"https://christinna9031.github.io/Twitch-Clip-Embed"}`.  
    7. Load the clip into your OBS browser source using another [Source Change Settings](https://sammi.solutions/docs/commands/obs-sources#sourcechangesettings) command: `{"url":"https://christinna9031.github.io/Twitch-Clip-Embed/?clipid=YOURCLIPID"}`. If your variable from step 2 is for example `clip`, you can do`{"url":"https://christinna9031.github.io/Twitch-Clip-Embed/?clipid=/$clip$/"}`
    8. Change your OBS browser source visibility to true. 
    9. Clip should now start automatically playing. 
    10. (Optional) If you used the [Get Clip Length](sammi.solutions/extensions/twitch/twitch-clip-length), the OBS browser source with the clip shoud automatically hide after it's done playing.

    **Base URL for Twitch clips**: `clips.twitch.tv/<CLIPID>`

    **URL for embed Twitch clips**: `https://christinna9031.github.io/Twitch-Clip-Embed/?clipid=YOURCLIPID` (needs to be hosted on a server since Twitch does not allow it to be embedded locally).

    **Random Clip**\
    Premade button example that retrieves a random clip from dashducks channel and plays it in your OBS browser source (don't forget to edit the command to your own source name). 

    **Hide Clip**\
    Premade button that hides the OBS browser source (don't forget to edit the command to your own source name) once the clip is done playing. Requires [Get Clip Length](sammi.solutions/extensions/twitch/twitch-clip-length) extension. 
privacy_collect: false
---