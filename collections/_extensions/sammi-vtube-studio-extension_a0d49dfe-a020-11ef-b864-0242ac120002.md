---
_id: a0d49dfe-a020-11ef-b864-0242ac120002
permalink: extensions/miscellaneous/sammi-vtube-studio-extension
developer_name: HueVirtualCreature
developer_url: 'https://github.com/HueVirtualCreature'
title: SAMMIVtubeStudioExtension
category: miscellaneous
desc: Integrate Denshisoft's VTube Studio into SAMMI
icon_local: 'sammi-vtube-studio-extension_a0d49dfe-a020-11ef-b864-0242ac120002_icon.png'
trailer_ex: ''
screenshots_ex: 'https://i.imgur.com/28hRlov.png, https://i.imgur.com/JCALBAn.png, https://i.imgur.com/2CIIBr6.png, https://i.imgur.com/daS2dSc.png'
sammi_version: 2024.4.0
platform: Any
version: 1.7.0.0-beta
download_url: 'https://github.com/HueVirtualCreature/SAMMIVtubeStudioExtension/releases'
overview: |
  This is an extension/plugin for SAMMI that allows one to control Denchisoft’s VTubeStudio using their API.

  It allows automating behavior in VTubeStudio, such as triggering macros (without hotkeys), spawn and control items, and to automate control of a model based on a variety of events (such as Twitch redeems).

  Please feel free to submit a issue report (preferred) or to DM me directly on Twitter if you need help or have questions.
  Twitter/@Hue_SwordDevil
  Discord: \_hue\_
setup: |
  This extension requires the following:

  >=VTube Studio 1.21.5  
  SAMMI (2024.4.0)  
  Installation  
  ⚠️ UNINSTALL OLD VERSIONS OF THE EXTENSION. DO NOT SELECT [REINSTALL]  
  Download the sef file (SAMMI Extension File)  
  In SAMMI's main UI, Click on [Bridge] and Select [Install an extension]  
  Navigate to the downloaded sef file and select it  

  Launching  
  The Bridge MUST be opened for the extension to even load commands, much less work at all.  
  When the Bridge has connected to SAMMI, the extension will insert the VtubeStudio Extension commands.  
  You need to set up a button (or use one from the example deck) to trigger an authentication request between SAMMI and VtubeStudio.  
  You will see a prompt in VTubeStudio for SAMMIVtubeStudioExtension. Click [Allow].  

  From here, you should see in the SAMMI alerts area that the extension successfully authenticated. **Note:** You do not need to request a new token each time you launch, but you need to re-authenticate. I suggest doing this with a saved token.

  Visit [SAMMIVtubeStudioExtension GitHub](https://github.com/HueVirtualCreature/SAMMIVtubeStudioExtension) for more documentation.

privacy_website: ''
privacy_policy: ''
policy_declare: 'on'
layout: ext_single
external: true
date: '2024-11-11T11:47:47Z'
---

