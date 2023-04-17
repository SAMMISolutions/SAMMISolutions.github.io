---
layout: ext_single
title: Translate by K
desc: Translate to and from any language directly in SAMMI
category: utilities
date: '2022-06-07T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/translate-by-k
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: translate_icon.png
trailer: https://www.youtube.com/embed/up1X6OaXu7I
screenshots_local: translateK.png
version: 1.0
sammi_version: Any
platform: Any
overview: |

    **Translate tool for all your streaming needs! Supports multiple engines, auto language detection and more.**  

    **Features:**
    - Set your primary language you wish to translate to and from
    - Auto detect source language (for some engines)
    - Translate to and from any supported language by the selected engine

    **Available Engines**
    1. Google (unofficial) - free and unlimited (as of now)
    2. [Google (official)](https://console.cloud.google.com/apis/dashboard) - free 500,000 characters/month
    3. [Deepl](https://www.deepl.com/pro?cta=header-prices/) - free 500,000 characters/month
    4. [Microsoft Azure](https://azure.microsoft.com/en-ca/free/) - free 2 mil characters/month for 12 months
    5. [Yandex](https://translate.yandex.com/developers/account) - free one time 5 million characters upon registering
    6. [Libre](https://github.com/LibreTranslate/LibreTranslate) - free and unlimited, must self host

    <div class="alert alert-warning mt-2" role="alert">You will need a valid credit card to be able to use most engines. The extension developer is not responsible for any incurred costs if you go over your free quota.</div>
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).

    2. Go to your Translate by K premade deck and edit the red **INIT** button:
    ![image](translateKcommand.png) 
    - `Engine` - Select Google-Free (read the guide below for any other engines as they require an API key)
    - `API Key` - leave empty (unless you're using a different engine)
    - `Url` - leave empty (unless you're using Libre engine)
    - `Region` - leave empty (unless you're using Azure engine)
    - `Default Translate From` - select language you want to automatically translate from (you can also manually select the language for each Translate command), **Auto Detect** will attempt to auto detect the language (this ONLY works for Google and Azure engines)
    - `Default Translate To` - select language you want to automatically translate to (you can also manually select the language for each Translate command)

    3. Hit Save and Save again. 
    4. Make sure your Bridge is running and either refresh it or press the red **INIT** button. 
    5. Press the blue **Translate** button to test if your extension is set up right. 
    6. You're done! 

    ##### Setting up other engines
    Google-Free is the only engine that does not require any additional setup. For the rest you will need to register and retrieve your API key. I made a video guide for all the engines, as well as written guide below the video, so it should be fast and easy to set up! 

    **Timestamps:** 00:00 Google, 2:35 Deepl, 4:12 Azure, 6:19 Yandex

    [video](https://www.youtube.com/embed/fml_xfnD0Zo)[/video]

    **Google (official)**
    1. Go to [https://console.cloud.google.com/apis/dashboard](https://console.cloud.google.com/apis/dashboard)
    2. Create a new project
    3. Enable Translate API
    4. Create a new API key and (optionally) restrict it to your Translate API
    5. Copy paste the API key into **Translate by K Init** command and change `Engine` to Google
    6. Press the **INIT** button and you're set! (you do not need to press it again next time)

    **Deepl**
    1. Go to [https://www.deepl.com/](https://www.deepl.com/pro?cta=header-prices/)
    2. Click on API and sign up for free
    3. Once you're registered, click on API again, scroll all the way down and copy the `auth_key` from the **curl** example code block. Paste the API key into **Translate by K Init** command and change `Engine` to Deepl
    4. Press the **INIT** button and you're set! (you do not need to press it again next time)

    **Azure**
    1. Go to [https://azure.microsoft.com/en-ca/free/](https://azure.microsoft.com/en-ca/free/).
    2. Click on Start free and log into your existing account or sign up.
    3. Navigate to your [portal](https://portal.azure.com).
    4. Click on Translators and create a new one.
        - create a new resource group
        - select a region closest to your location
        - select free for pricing tier
        - review and create it, wait for deployment to be finished
        - click on **Go to resource**
        - click on **Click here to manage keys**
        - click on **Show keys** and copy paste the API key into **Translate by K Init** command, fill out `region` (must match the one in your Azure portal) and change `Engine` to Azure
    5. Press the **INIT** button and you're set! (you do not need to press it again next time)
    
    **Yandex**
    1. Go to [https://translate.yandex.com/developers/keys](https://translate.yandex.com/developers/keys)
    2. Log in or create a new ID
    3. Register for a new developer account to receive your free 5 million characters
    4. Add a payment method
    5. Click on API keys and copy paste  the API key into **Translate by K Init** command and change `Engine` to Yandex
    6. Press the **INIT** button and you're set! (you do not need to press it again next time)

    **Libre**\
    This is a completely free engine, however it requires for you to host it yourself. Find more information at [https://github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate). 


    ##### Using Translate by K command
    - `Translate From` - language to translate from\
                       - default = whatever language you set up in your INIT button\
                       - Auto Detect = auto detect language (only works with Google and Azure)
    - `Translate To` - language to translate to\
                     - default = whatever language you set up in your INIT button
    - `Query` - text to translate
    - `Save Variable` - variable to save the new translation into\
                      - use Wait for variable command or give it around 2 seconds delay to retrieve it
    - `Save As` - choose whether you want to save it as your local button variable (button must
          be set to PERSISTENT) or global variable


    ##### Translate viewer message example
    You can find the example button in your premade deck, however you're free to set it up in whatever way you want! 

    Trigger for a chat message to translate can be: 

    1. `!translate query` (automatically detect language and translate to your default language)\
    For example: `!translate Buenos Dias`

    2. `!translate to [language] query` (automatically detect the language and translate it to a specific language)\
    For example: `!translate to [French] Hello World!`

    3. `!translate from [language] query` (translate from a specific language to your default language)\
    For example: `!translate from [Spanish] Buenos Dias`

    4. `!translate from [language] to [language] query` (translate from and to a specific language)\
    For example: `!translate from [Spanish] to [French] Buenos Dias`

    Language can be either the full language, such as `English`, or just `en`. Both variants are accepted.

    *See all the comments on how this all works in the premade button.*

testers: cyanidesugar
privacy_collect: false
---
