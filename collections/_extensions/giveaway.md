---
layout: ext_single
title: Giveaway System
slug: giveaway
desc: Extension for creating and animating giveaways
category: utilities
date: '2024-12-09T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://ko-fi.com/s/14b15f04b1
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: giveaway_icon.png
screenshots_local: giveaway_ss1.png, giveaway_ss2.png
trailer: https://sammi.solutions/assets/videos/extensions/giveaway.mp4
version: 1.0
sammi_version: '2024.4.0^'
platform: Twitch
overview: |
    #### Description
    - This extension is a fully functional giveaway system.
    
    #### Features
    - The draw animation will be animated inside OBS by displaying all the user profile images with their names on top of them and they will slowly fall down until only 1 image is remaining.
    - You can freely adjust how many tickets can be bought per giveaway and with the included extension commands, you can easily integrate them into your existing systems (for example by allowing tickets to be purchased with channel points).
    - Tickets also persist over multiple streams, so you can use this for long term giveaways.
    
    #### Available moderator commands
    - "!start giveaway" / "!start giveaway <max entrys>" - Start a new giveaway with either the default amount of entrys you have defined or with a custom amount
    - "!open giveaway" / "!close giveaway" - Open / Closes the giveaway
    - "!draw winner" - Animates and draws a winner
    - "!redraw winner" - Removes the previous winnner (for example if they are not there) and then animates and draws a new winner
    - "!confirm giveaway" - If you turn on the warning, this will need to be entered into the chat before starting a new giveaway
    
    #### Available viewer commands
    - "!join" - Join the giveaway
    
    #### Available extension commands
    - "GS: Start Giveaway" (Max Entrys)
    - "GS: Enter Giveaway" (User Name, Save Variable As)
    - "GS: Draw Winner" (Drop Time Duration (seconds), Save Variable As)
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
