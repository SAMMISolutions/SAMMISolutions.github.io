---
layout: ext_single
title: Voicemod
slug: voicemod
desc: Control the Voicemod voice changer tool via SAMMI
category: utilities
date: '2025-07-15T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://ko-fi.com/s/b2645013ca
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: voicemod_icon.png
screenshots_local: voicemod_ss1.png, voicemod_ss2.png
version: 3.0
sammi_version: '2025.1.0^'
platform: Any
overview: |
    #### Description
    This SAMMI extension let's you control Voicemod, allowing you to dynamically change your voice in real time.
    It adds an interactive, fun layer to your streams or content creation.
    
    #### Overview
    
    This SAMMI extension integrates with **Voicemod**, allowing you to dynamically control and change your voice in real time. Add an interactive, fun layer to your streams or content creation.
    **Note**: Use version **V3** only if you're running **Voicemod V3 or higher**. For older versions, please use the **V1.1** extension.
    
    #### SAMMI Commands
    
    These commands allow you to control Voicemod features from within SAMMI. Some may take a moment to apply—use **Wait Until Variable Exists** when necessary.
    
    | Command Name               | Description                                                           |
    |----------------------------|-----------------------------------------------------------------------|
    | `VM: Change to Specific Voice` | Switches to a selected voice                                        |
    | `VM: Random Voice`         | Picks and applies a random voice                                      |
    | `VM: Reset Voice`          | Reverts to your natural voice                                         |
    | `VM: Toggle Background Effects` | Toggles background audio effects                                  |
    | `VM: Toggle Hear My Voice` | Activates/deactivates self-monitoring of your transformed voice       |
    | `VM: Toggle Mute`          | Mutes or unmutes your voice                                          |
    | `VM: Toggle Voice Changer` | Turns voice changer functionality on or off                          |
    | `VM: Get Voice Bitmap`     | Retrieves the image icon for the currently selected voice            |
    | `VM: Prevent Bad Language` | Filters inappropriate words using mute/beep for a set duration      |
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
