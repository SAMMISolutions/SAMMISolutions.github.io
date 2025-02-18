---
layout: ext_single
title: Text to Speech Polly
slug: polly-tts
desc: Use Amazon Polly TTS to turn any text into speech. Neural voices available.
category: audio
date: '2021-02-05T00:00:00-05:00'
permalink: extensions/audio/:slug
download_url: https://christinak.itch.io/lioranboard-polly-text-to-speech
setup_url: https://christinna9031.github.io/LBDocumentation/externalext.html#pollyTTS
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
icon_local: tts.png
trailer: https://www.youtube.com/embed/wazxdYa8XN8
screenshots_local: tts.png
version: 1.1
sammi_version: 1.40
platform: Any
overview: |
    **Extension for SAMMI using Amazon Polly to turn any text into speech.**

    <div class="alert alert-warning" role="alert">Please read Important Notes section below before downloading the extension.</div>

    **Features**  
    - text you wish to turn into speech can be fed directly from SAMMI or your Bridge (by entering the text or uploading a .txt file). 
    - works in OBS dock, browser source and external browser.  
    - choose either neural (more naturally sounding) or standard voice engine.\  
    All supported voices can be found at the [official documentation website](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html).
    - change pitch, speed and add some effects - you can make it whisper instead of speaking or use DRC (dynamic range compression) which makes it easier to hear it in noisy environments. *Some of these are only supported by the standard voice engine.*
    - configure a button that will automatically show currently played text

    **Advanced playback controls**\
    Play and Pause, Skip to Next/Play previous recording, Fast Forward/Backwards, Change Volume, Mute/Unmute.

    **Additional information**\
    All TTS requests are saved in your local storage, so you can safely come back and replay them later even after rebooting your computer.\
    Any new TTS request will start automatically playing after the last one finishes - there is an integrated queue system. If you're in the middle of replaying your old TTS recordings and a new request comes in, you can press the Skip to Next button to immediately start playing the new TTS request instead of waiting for your current recording to finish first. 

    **Important Notes**\
    This extension requires you to get Amazon Web Services credentials.\
    If you do not have an Amazon account, it will ask you to verify your identity by providing a phone number and a payment method (credit card, debit card and some prepaid cards are accepted). This is a mandatory step as you cannot activate your credentials without providing the information.  

    Amazon Polly TTS has a monthly limit of 1 million neural and 5 million standard free characters for the first year of use. After that you can either switch to a new account to refresh the free tier or use a different TTS service.  

    Do not share your AWS credentials or show them on your stream, as you might get billed if you or someone else accidentally uses any of the paid services. 
privacy_collect: false
---