---
layout: ext_single
title: IFTTT to SAMMI
slug: ifttt-to-sammi
desc: Send IFTTT triggers to your SAMMI
category: productivity
date: '2022-04-17T00:00:00-05:00'
permalink: extensions/productivity/:slug
download_url: https://christinak.itch.io/ifttt-to-sammi
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
icon_local: ifttt_sammi_icon.png
screenshots_local: ifttt_lb.png
trailer: https://www.youtube.com/embed/1gwlV_PxA9s
version: 1.0
sammi_version: Any
platform: Any
overview: |
    **Extension which lets you receive Triggers from IFTTT directly in your SAMMI.**\
    **You can also pass any data IFTTT provides in its triggers to SAMMI.**

    IFTTT is a very powerful app that connects to a lot of different services, such as your phone apps, smart devices, email, social media etc. Full list can be found at [https://ifttt.com/services](https://ifttt.com/services). You can create 5 applets for free.

    **Use Examples** 
    - Read your new emails and texts via SAMMI
    - Display mobile notifications in your OBS overlay
    - Automatically display any new photo taken on your phone in your OBS
    - Detect any new files uploaded to your Google Drive and act on it (for example refresh your OBS overlay)
    - Control SAMMI via Ok Google or Alexa
    - Have SAMMI detect any changes in your smart lights 
    - And much more (whatever IFTTT supports you can connect to SAMMI)! 

    **Features**
    - Open and close the connection to listen to IFTTT triggers on demand
    - Set a specific extension trigger (that you can attach to a button in your SAMMI) for each IFTTT applet
    - Choose what IFTTT fields will be passed to your SAMMI (in a JSON formatted string - examples provided)
setup_url: https://docs.christinak.ca/docs/extensions/ifttt-sammi#setup
privacy_collect: true
privacy_policy: All your IFTTT triggers are sent to a secure server hosted with DigitalOcean that relays them to your SAMMI. The server logs all webhook activity by your unique Itch Key identifier that cannot be linked back to a specific user (unless you willingly share it if you need me to troubleshoot it for you). It logs a timestamp and whether it was successfully received. It does NOT log any personal information or the content of your IFTTT triggers. 
privacy_personal: false
privacy_financial: false
privacy_auth: false
privacy_communication: false
privacy_location: false
privacy_useractivity: true
privacy_website: false
---
