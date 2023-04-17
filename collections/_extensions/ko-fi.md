---
layout: ext_single
title: Ko-fi Triggers
slug: kofi
desc: Ko-fi events delivered straight to your SAMMI
category: social
date: '2022-07-09T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/ko-fi-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: kofi_icon.png
screenshots_local: kofi_deck.png
version: 1.0
sammi_version: 2022.3.1
platform: Any
overview: |
    **Ko-fi events delivered straight to your SAMMI!**  

    Honoring your Ko-fi members and automatically thanking them for their subscriptions and purchases on your stream is now finally possible with this extension! 

    **Triggers**  
    - Donation - single donation events
    - Subscription - first time and monthly 
    - Commission
    - Shop Orders - any shop order


setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Reload your Bridge. It must be running at all times for the extension to function properly.
    3. Edit the red INIT button
        1. `Itch Key` - your itch key you received upon purchase on Itch.io page (the link will be in your email too)
        2. Navigate to [https://ko-fi.com/manage/webhooks](https://ko-fi.com/manage/webhooks) (while logged in)
            - Fill out Webhook URL (replace `YOURITCHKEY` with your own key): 
            `https://lioranboard-websocket-7we7k.ondigitalocean.app/kofihook/YOURITCHKEY`
            - Press **Update**
            - Click on **Advanced**
            - Copy paste Verification token
        3. Press Save and Save again. 
    4. Refresh your Transmtiter. 
    5. Navigate to **Ko-Fi Triggers** tab in your Bridge. It should say connected.
    6. Navigate back to [https://ko-fi.com/manage/webhooks](https://ko-fi.com/manage/webhooks),scroll down and try sending test triggers. The example buttons in the premade deck should trigger when you send a test trigger.
       - *PLEASE NOTE SOME KO-FI TESTING TRIGGERS HAVE THE WRONG PAYLOADS. 
         ONLY SINGLE DONATION TEST AND FIRST MONTHLY TEST HAS THE RIGHT PAYLOAD.
         (this means incorrect buttons will be triggered for the other test triggers, 
         however live triggers should work just fine)*

    ##### Triggers

    **Donation**  
    Triggers for every new donation.\
    Extension Trigger: `Ko-Fi Donation` \
    Example payload:
    ```
    {
    "message_id":"3a1fac0c-f960-4506-a60e-824979a74e74",
    "timestamp":"2022-08-21T13:04:30Z",
    "type":"Donation",
    "is_public":true,
    "from_name":"Ko-fi Team",
    "message":"Good luck with the integration!",
    "amount":"3.00",
    "url":"https://ko-fi.com/Home/CoffeeShop?txid=0a1fac0c-f960-4506-a60e-824979a74e71",
    "email":"someone@example.com",
    "currency":"USD",
    "is_subscription_payment":false,
    "is_first_subscription_payment":false,
    "kofi_transaction_id":"0a1fac0c-f960-4506-a60e-824979a74e71",
    "verification_token":"3401eedb-7a5e-4ceb-aa43-40038281222f",
    "shop_items":null,
    "tier_name":null
    }
    ``` 
    
    **Subscription**  
    Triggers for all Ko-Fi subscription events (first time and subsequent ones both) \
    Extension Trigger: `Ko-Fi Subscription` \
    Example payload:
    ```
    {
    "message_id":"3a1fac0c-f960-4506-a60e-824979a74e74",
    "timestamp":"2022-08-21T13:04:30Z",
    "type":"Subscription",
    "is_public":false,
    "from_name":"Ko-fi Team",
    "message":"Good luck with the integration!",
    "amount":"3.00",
    "url":"https://ko-fi.com/Home/CoffeeShop?txid=0a1fac0c-f960-4506-a60e-824979a74e71",
    "email":"someone@example.com",
    "currency":"USD",
    "is_subscription_payment":true,
    "is_first_subscription_payment":true,
    "kofi_transaction_id":"0a1fac0c-f960-4506-a60e-824979a74e71",
    "verification_token":"3401eedb-7a5e-4ceb-aa43-40038281222f",
    "shop_items":null,
    "tier_name":null
    }
    ```

    **Commission**  
    Triggers for all Ko-Fi commission events. \
    Extension Trigger: `Ko-Fi Commission` \
    Example payload: Not provided by Ko-fi. 

    **Shop Order**  
    Triggers for all Ko-Fi shop order events.  \
    Extension Trigger: `Ko-Fi Shop Order` \
    Example payload:
    ```
    {
    "message_id":"3a1fac0c-f960-4506-a60e-824979a74e74",
    "timestamp":"2022-08-21T13:04:30Z",
    "type":"Shop Order",
    "is_public":true,
    "from_name":"Ko-fi Team",
    "message":"",
    "amount":"27.95",
    "url":"https://ko-fi.com/Home/CoffeeShop?txid=0a1fac0c-f960-4506-a60e-824979a74e71",
    "email":"someone@example.com",
    "currency":"EUR",
    "is_subscription_payment":false,
    "is_first_subscription_payment":false,
    "kofi_transaction_id":"0a1fac0c-f960-4506-a60e-824979a74e71",
    "verification_token":"3401eedb-7a5e-4ceb-aa43-40038281222f",
    "shop_items":[
    {"direct_link_code":"1a2b3c4d5e"},
    {"direct_link_code":"a1b2c3d4e5"}
    ],
    "tier_name":null
    }
    ```
testers: Chrizzz, Landie, wolbee
privacy_collect: false
---
