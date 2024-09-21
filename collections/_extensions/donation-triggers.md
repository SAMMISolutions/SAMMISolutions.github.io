---
layout: ext_single
title: Donation Triggers
slug: donation-triggers
desc: Listen for donation events and trigger buttons in SAMMI
category: alerts
date: '2024-09-18T00:00:00-05:00'
permalink: extensions/alerts/:slug
download_url: https://christinak.itch.io/donation-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: donation_triggers_icon.png
screenshots_local: donation_triggers.png
version: 1.0
sammi_version: 2024.3.0
platform: Any
overview: |
    **Donation events delivered straight to your SAMMI!**  

    Trigger buttons in SAMMI for every new donation.  
    Also includes commands to get the latest donations.

    **Supported Platforms**
    - Streamlabs
    - StreamElements

    *More platforms coming in the future based on demand and feasibility.*
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Edit the red Settings button inside the Donation Triggers premade deck.    
       Watch the video below on how to retrieve your credentials from Streamlabs or StreamElements, or read the text instructions inside the Settings button.  
       You can leave 'Auto Connect' checked if you want the extension to automatically start listening for events when you open SAMMI and connect to Bridge.
       [video](https://www.youtube.com/embed/zR65NzdQpjU)[/video]
    3. Reload your Bridge. It must be running at all times for the extension to function properly.
    4. You can check the status of the connection in the Donation Triggers tab in your Bridge. It should say connected.
       ![image](donation_triggers_bridge.png) 
    4. You're all set! You can now try sending test triggers from Streamlabs or StreamElements to see the premade buttons in action.  
       Watch the video below showing how to send test triggers or read the text instructions inside the Settings button.
       [video](https://www.youtube.com/embed/va2w352Hoo0)[/video]
    
    ##### Triggers

    **Streamlabs Donation**  
    Triggers for every new donation.  
    Extension Trigger: `DT Streamlabs Donation`  
    Example trigger pull data object:
    ```
    {
        user_name: "Christina",
        user_id: 69907463,
        message: "This is a test message. 4Head",
        formatted_amount: "$1.00",
        amount: "1.00",
        currency: "USD",
        name: "Christina",
    }
    ``` 
    
    **StreamElements Tip**  
    Triggers for all StreamElements tip events.  
    Extension Trigger: `DT StreamElements Tip`  
    Example trigger pull data object:
    ```
    {
        id: "66dd5834b7647f5bab7b4027",
        username: "christina",
        display_name: "Christina",
        message: "Hello, this is my donation message.",
        amount: 10,
        currency: "USD",
        picture_url: "https://cdn.streamelements.com/static/default-avatar.png",
        provider: "twitch"
    }
    ```

    ##### Commands
    
    **Get Streamlabs Donations**  
    Returns an array with the latest donations from Streamlabs, represented as objects.  
    Extension Command: `DT: Streamlabs`

    | Box Name | Explanation |
    |-------|--------|
    | Amount | How many donations to fetch. |
    | Save As Variable | The name of the variable to save the array to. |
    {:class='table table-secondary w-auto table-hover text-break'}

    Example donation object: 
    ```
    {
        "donator": {
            "id": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
            "name": "Christina"
        },
        "message": "This is my donation message. Hello world!",
        "id": 189816211,
        "amount": "1.00",
        "currency": "USD",
        "amount_label": "$1.00",
        "created_at": "2024-09-08 21:24:19"
    }
    ```

    *Heads up: The Streamlabs API has bugs, and this is the only working endpoint I could find.  
    It returns donations in ASCENDING order, and I haven't figured out a way to paginate.  
    I also don't know the maximum number of donations it returns.  
    My testing was only done with two donations, so the sample size was limited.   
    Please let me know if the last donation in the array isn't actually the most recent one,   
    so I can attempt to fix this. Thank you!*
    
    **Get StreamElements Tips**  
    Returns an array with the latest tips from StreamElements, represented as objects.  
    Extension Command: `DT: StreamElements`

    | Box Name | Explanation |
    |-------|--------|
    | Amount | How many tips to fetch. |
    | Save As Variable | The name of the variable to save the array to. |
    {:class='table table-secondary w-auto table-hover text-break'}

    Example donation object: 
    ```
    {
        "donation": {
            "message": "This is a test donation message.",
            "paymentMethod": "scheme",
            "user": {
                "geo": "CA",
                "username": "Christina",
                "email": "hello@test.com"
            },
            "amount": 1,
            "currency": "USD"
        },
        "provider": "paypalV2",
        "source": "se",
        "channel": "66dce063f672c236887e7031",
        "createdAt": "2024-09-08T04:13:48.245Z",
        "deleted": 0,
        "_id": "66dd247c6a7975827f1b8557",
        "approved": "allowed",
        "status": "success",
        "transactionId": "5T816037CC4910452",
        "updatedAt": "2024-09-08T04:14:38.721Z"
    }
    ``` 
privacy_collect: false
---
