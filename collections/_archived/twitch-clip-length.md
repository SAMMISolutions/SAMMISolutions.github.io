---
layout: ext_single
title: Twitch Clip Length
desc: Retrieve the duration of any Twitch clip and automatically start a timer for a button trigger 
category: twitch
date: '2020-10-22T17:12:00-04:00'
permalink: extensions/twitch/:slug
download_url: https://github.com/christinna9031/LB-Twitch-Clip-Length/releases
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
version: 1.3
sammi_version: 1.40
platform: Twitch
overview: |
    Retrieves the duration of any Twitch clip and automatically starts a timer to send an extension trigger (or through a defined max clip length). Can be used to auto hide your browser source once the clip stops playing.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Add a new `Send to extension` command and fill out the fields: 
        - `clip_id` = the ID of the clip you're requesting
        - `variable` = variable to save the clip length into (if you wish to manually time it)
        - `trigger` = trigger to send when the timer hits 0. Attach it to a button that will automatically pause/hide the source that is playing the Twitch clip. 
        - `max_length` = max length of the clip. If the clip is 30s long and you set it to 15, the timer will be fired after 15s. 
privacy_collect: false
---