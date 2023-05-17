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
developer_url: https://christinak.itch.io
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
setup: |
    [video](https://www.youtube.com/embed/zCDmb3hF7MA)[/video]

    1. Install the extension while your Bridge is running. You can follow the [installation guide](https://sammi.solutions/extensions/install)
    2. In your new premade IFTTT deck, double tap on the blue IFTTT OPEN button and fill out the values in the IFTTT to SAMMI command:
        - Itch Key = your Itch key you received on your Download page 
        - Password = any password you want to use to create Webhooks in your IFTTT (it's an extra security layer to prevent others from hijacking your connection)
    3. Press Save and Save again. 
    4. In your Stream Deck, press the blue IFTTT Open button. You should see a yellow notification in your SAMMI that the connection has been opened. That means SAMMI is listening for any new IFTTT triggers!
    5. Set up your first IFTTT applet and test it out! 

    **Setting up your IFTTT applet**
    1. Navigate to [https://ifttt.com/explore](https://ifttt.com/explore)
    2. Click on `Create` 
    3. Add your own service in `If This`
    4. For `Then that` add `Webhook`
        - URL: `https://lioranboard-websocket-7we7k.ondigitalocean.app/ifttthook/YOURITCHKEY` (replace ITCHKEY with your own itch key)
        - Method: `POST`
        - ContentType: `application/json`
        - Additional Headers: `Authorization: YOURPASSWORD` (replace YOURPASSWORD with whatever password you set up in your blue IFTTT OPEN button)
        - Body: formatted JSON string containing at least "trigger" value, can contain IFTTT ingredients as well
            - Example of a simple JSON string: 
            ```
            {
            "trigger":"SomeExtensionTrigger", 
            "someIFTTTingredient": "INSERTIFTTTINGREDIENT"
            }
            ```  
            - Whatever you select for your trigger value will match to your extension trigger for your button in SAMMI
            - Any other values you will be able to retrieve with `Trigger Pull Data` command in SAMMI
            - you can insert as many values and IFTTT ingredients as you wish. However, be careful as some IFTTT ingredients MAY contain new lines which is not a proper JSON string. In that case add `<<<` before your IFTTT ingredient and `>>>` after your IFTTT ingredient, for example: `"someIFTTTingredient": "<<<INSERTIFTTTINGREDIENT>>>"` 

    **New Photo Taken Example**\
    Applet's webhook body:  

            
            {
            "trigger": "IFTTT Take Photo",
            "url": "{{TemporaryPublicPhotoURL}}"
            } 
            

    [video](https://www.youtube.com/embed/OLLEheMKWlc)[/video]

    **Notification Received Example**\
    Applet's webhook body (notice `<<<` and `>>>` around the message ingredient to remove new lines!):  

            
            {
            "trigger": "IFTTT Notification Received",
            "name": "{{AppName}}",
            "message": "<<<{{NotificationMessage}}>>>"
            }
           


    [video](https://www.youtube.com/embed/uWjYkE1eS5Q)[/video]

    **Text Received Example**\
    Applet's webhook body:  

            
            {
            "trigger": "IFTTT Text Received",
            "name": "{{ContactName}}",
            "number": "{{FromNumber}}",
            "text": "{{Text}}"
            }
            


    [video](https://www.youtube.com/embed/kd29kMI5tuE)[/video]
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
