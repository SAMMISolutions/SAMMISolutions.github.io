---
layout: ext_single
title: Create Twitch Poll
desc: Create a new poll with a simple chat command or button
category: twitch
date: '2021-07-22T00:00:00-05:00'
permalink: extensions/twitch/:slug
download_url: https://christinak.itch.io/lioranboard-create-twitch-poll
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
icon_local: create_poll.png 
version: 1.0
sammi_version: 1.42 
platform: Twitch
overview: |
    **Create a new poll with a chat command**  
    Create a new poll by simply typing `!poll What game should I play next? /Dark Souls /Sekiro`

    **Your viewers can redeem Poll Create reward to create their own poll**  
    Channel Point Redeem message example:  `What game should Melonax play next? /Dark Souls /Sekiro /Bloodborne`

    You or your viewers can add `/time 60` to set their own duration or leave it at default value. You can set up bits and channel points votes as well. 

    **You or your viewers can start a default poll**  
    Is there a question you often ask your viewers? Make your own default polls and simply press one button in SAMMI or type `!poll default` (or any other keyword you choose) in chat to quickly start the poll!

    **End the poll**  
    You can press a button or type `!poll end` to end your currently running poll. (This works only if you created the poll with the same extension. )
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. The buttons **Create Poll** and C**reate Default Poll** accept chat triggers from broadcaster/mods and also channel points redeems. Feel free to modify them for you own needs!

    **Important note**  
    Your linked Twitch account's token in SAMMI must have View & Edit Polls scope. You can press Unlink account and then link it again with the scope checked.
testers: Melonax
privacy_collect: false
---