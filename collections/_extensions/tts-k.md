---
layout: ext_single
title: TTS by K
slug: tts-k
desc:  TTS by Christina K. allows you to send text to speech to Web Speech API, Google API and Polly Amazon API.
category: audio
date: '2022-08-09T00:00:00-05:00'
permalink: extensions/audio/tts-k
download_url: https://christinak.itch.io/sammi-text-to-speech
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: ttsk_icon.png
trailer: https://www.youtube.com/embed/AdynYGy5j3s
screenshots_local: ttsK.png
version: 1.0
sammi_version: Any
platform: Any
overview: |

    **This 3-in-1 extension for SAMMI is all you need for your Text-To-Speech needs!** 

    **It supports regular Web Speech API, Google API and Amazon Polly API for text synthesis. That's around 400 different voices and over 50 languages!**

    ##### Web Speech API
    Web Speech API is a **completely free and unlimited** API for TTS. It contains all voices supported by your browser and works when running Bridge from within OBS in a dock (only for OBS 27.2 and higher). 

    ##### Google Cloud Text-to-Speech
    Google provides its own TTS service with around 300 voices and 50 languages.  

    Google Cloud's free tier lets you use up to **4 million standard or 1 million neural characters per month for **completely free. The free usage limit does not expire, but may be subject to change.  

    See the up-to-date pricing details at the [official Google site](https://cloud.google.com/text-to-speech/pricing).   
    *Google TTS requires a valid credit card to confirm your identity*. 


    ##### Amazon Polly
    Amazon provides a TTS service with around 66 different voices.  

    You get a **free tier for the first 12 months starting from your first request for speech.**  
    The free tier includes **5 million standard and 1 million free neural characters per month**.

    See the up-to-date pricing details at the [official AWS site](https://aws.amazon.com/polly/pricing/).  
    *Amazon TTS requires a valid credit card to confirm your identity*. 

    ##### Playback Controls
    You can play, pause, skip and control the volume of your TTS (some commands are not fully supported for the regular Web Speech API).

    ##### Voice Settings
    You can change the pitch and speed for all TTS services.   
    Amazon Polly offers soft and whispered voices.

    ##### Random Voice
    For each service, you can choose the TTS voice to be completely random! That will make for some funny moments for your viewers for sure! 

    ##### Automatic Queue
    You can easily queue up all your TTS requests and they will be queued up and play one by one. This is fully automatic!  

    *Queue for Polly and Amazon TTS is combined, while Web Speech API has its own separate queue.*
setup: |
    0. Please make sure your OBS is updated to the latest version.
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/docs2/faq/general#installanextension).

        <div class="alert alert-info mt-2" role="alert">The TTS sound comes from your Bridge. You might need to adjust OBS Browser Page audio routing to capture the TTS audio.</div>


    2. Follow the video guide for your preferred TTS service: 
        - **Web TTS** - works out of the box, **Bridge in OBS dock only supported in OBS 27.2 and higher**. You must run your Bridge in a browser outside of OBS for older OBS version.
        - **Polly TTS**  

            [video](https://www.youtube.com/embed/-855Dn2uJKI)[/video] 

        - **Google TTS** 

            [video](https://www.youtube.com/embed/gO8q4d4d-nw)[/video] 
    
     3. You're ready to start using the extension!  


    #### TTS Requests  

    <div class="alert alert-warning" role="alert">You must press <b>Activate</b> in your Bridge - TTS by K tab if you're using Bridge outside of OBS. This applies every time Bridge is refreshed.</div>

    You can send a new TTS request by using TTS K Web Speak, TTS K Google Speak or TTS K Polly Speak command.

    - select either a random or specific voice for each service 
    - each service has different settings and uses different ranges for pitch, speed etc., make sure you stick to the minimum and maximum values shown in the dropdown menu
    - input type can be either regular or manual if you wish to use SSML, such as `<speak>Hello world. <say-as interpret-as='ordinal'>10</say-as></speak>.` Note that SAMMI does not check the input, so make sure it's formatted correctly. Find more information about SSML at [https://cloud.google.com/text-to-speech/docs/ssml](https://cloud.google.com/text-to-speech/docs/ssml)
    - some effects are not available with all voices, for example pitch, soft and whispered effect can be only used with standard voices in Polly TTS


    #### Playback Controls
    You can access playback controls from **TTS K Playback** command.

    **Supported playback controls for Polly/Google TTS:**
    - Play (resumes current playback if it was paused)
    - Pause (pauses current playback)
    - Skip (skips to playing the next TTS request)
    - Mute/Unmute - mutes or unmutes TTS
    - Volume up/down - adjusts the TTS volume 
    - Set Volume - allows you to manually set volume 

    **Supported playback controls for Web TTS:**
    - Play (resumes current playback if it was paused)
    - Pause (pauses current playback)
    - Skip (CLEARS the entire TTS queue)
    - Set Volume - set volume for the next TTS request (setting volume for the currently playing request is not available)

    #### Shared Queue
    Polly and Google TTS share the same TTS request queue.  

    Web TTS has a **completely separate queue** for requests due to some of the API limitations.   

    You can queue both Polly and Google TTS requests at the same time and they will take turns
    playing in the order they were queued.  

    Web TTS requests will play even if there's already another Polly/Google TTS reqest 
    in the queue since Web TTS queue is separate. 

    #### Retrieving Voices
    You can retrieve all available Web/Polly/Google voices by pressing the blue list button in your Stream Deck.  

    The voices will be saved in an array. 

    #### Testing Voices
    You can listen to all available voices from all three services in your Bridge - TTS by K tab. This works only if you already set your credentials for the services. 
testers: Cyanidesugar, RoadieGamer
privacy_collect: false
---