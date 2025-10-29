---
layout: ext_single
title: VeadoSAMMI
slug: veadosammi
desc: Control Veadotube mini using their WebSocket
category: miscellaneous
date: '2025-10-28T00:00:00-00:00'
permalink: extensions/miscellaneous/:slug
download_url: https://github.com/Benjas333/VeadoSAMMI/releases/latest
developer_name: Benjas333
developer_url: https://x.com/Benjas333Dev
icon_local: veadosammi_icon.png
screenshots_local: veadosammi_ss1.png
version: 3.1
sammi_version: '2025.1.0^'
platform: Any
overview: |
    This is a SAMMI extension that allows you to control Veadotube mini using its WebSocket. It should be also compatible with Veadotube live and Veadotube editor.

    For more details about VeadoSAMMI, check out the [GitHub repository](https://github.com/Benjas333/VeadoSAMMI).
    Twitter: [@Benjas333Dev](https://x.com/Benjas333Dev)
    Discord: benjas333
setup: |
    This extension requires the following:

    >=Veadotube mini 2.1
    SAMMI
    ### Installation
    1. Download the .sef file.
    2. In SAMMI's main GUI click on `SAMMI Bridge` and select `Install an extension`.
    3. Navigate to the downloaded .sef file and select it.

    ### Launching
    - The Bridge **must be** opened for the extension to work.
    - In veadotube mini > program settings > websocket server make sure is enabled.
    - The instances should be automatically detected by the extension in the extension tab. In case an instance is not found, you can add it manually typing the WebSocket server url and the Window title. You can get these values from veadotube mini > program settings.
    - To start using the extension just click `Connect WebSocket`.
    - From here, you should see in the SAMMI alerts area that the extension successfully connected to veadotube mini.

    Visit [VeadoSAMMI GitHub](https://github.com/Benjas333/VeadoSAMMI) for more documentation.
privacy_collect: false
---
