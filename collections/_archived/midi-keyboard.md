---
layout: ext_single
title: Midi Keyboard
desc: Sends an extension trigger with every midi keyboard press
category: audio
date: '2020-08-01T00:00:00-05:00'
permalink: extensions/audio/:slug
download_url: https://discord.com/channels/699319482442711072/712274509389889618/739026907345059900
developer_name: Lioran
developer_url: https://twitter.com/FromMyBike_
version: 1.0
sammi_version: 1.40 
platform: Any
overview: |
    Sends an extension trigger with every midi keyboard keypress. Bridge needs to be running outside of OBS in Google Chrome.
setup: |
    Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).  

    **Extension Triggers to expect:**
    `midi keypress 0-127 ` - Any notes you press. Number will be the number of the notes. Math: Trigger Pull value 1=velocity.\
    `midi key release 0-127` - Any notes you release. Math: Trigger Pull value 1=velocity.\
    `midi volume` - Math: Trigger Pull value 1= volume between 0-127\
    `midi pitch` - Math: Trigger Pull value 1= pitch bend 0-127
privacy_collect: false
---