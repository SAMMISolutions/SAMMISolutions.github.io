---
layout: ext_single
title: OBS Websocket Test
desc: Test connection to your OBS websocket 
category: utilities
date: '2021-01-18T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://github.com/christinna9031/LB-obs-websocket-test/releases
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
version: 1.0
sammi_version: 1.40
platform: OBS
overview: |
    Extension for SAMMI which lets you test connection to your OBS websocket, in case you cannot normally connect from SAMMI.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Create a new button with a Send to Extension command and fill out the necessary fields. Leave password field empty if you did not set one up in your OBS websocket settings.
    3. Press Done twice and refresh your Bridge.
    4. Press the button you just created. You should see three yellow notification messages in your Receiver, indicating the connection status and websocket version.\
    If it says `Connection closed` or `Disconnected`, your OBS websocket is not properly installed.\
    If you can connect just fine, there must be something preventing SAMMI from connecting to your websocket (old obs websocekt version, wrong settings, antivirus/firewall blocking it etc.).
privacy_collect: false
---