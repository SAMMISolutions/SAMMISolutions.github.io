---
layout: ext_single
title: Dynamic Triggers
slug: dynamic-triggers
desc: Attach triggers to buttons dynamically via SAMMI commands
category: utilities
date: '2024-07-15T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/dynamic-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: dynamic_triggers.png
trailer: https://www.youtube.com/embed/LW99bDilbLU
screenshots_local: dynamic-triggers_ss.png
version: 1.1
sammi_version: 2024.1.1
platform: Any
overview: |
    **Dynamic Triggers** is an extension that allows you to attach triggers to buttons dynamically via SAMMI commands.  
    These triggers work in the same way as your regular button triggers, but you can attach them to buttons on the fly.

    **Features**  
    - Add a dynamic trigger to a button (persists through SAMMI resets, must be readded between SAMMI restarts)
    - Modify an existing dynamic trigger
    - Remove a dynamic trigger from a button
    - See all active dynamic triggers

    **Supported Triggers**
    - Twitch Chat Message
    - Youtube Chat Message
    - Extension
    - SAMMI Voice
    - Webhook

    Other triggers will be considered based on custom commissions./
    Timers and hotkeys as DT will not work, please keep that in mind for any future suggestions.

    Comes with a premade deck with all available commands and explanations.

    **Important Notes**
    This extension may stop working if there are any significant updates to SAMMI Core. If that happens, please contact the developer for an update.  
    
setup: |
    1. Ensure you're on the latest version of SAMMI.
    2. Install the extension. 
    3. Press the red **INIT** button or reload your Bridge, and wait for an alert the extension is loaded. You only need to do this once, as it will load automatically whenever you connect to Bridge.
    4. Review the premade deck "Dynamic Triggers" for all available extension commands.

    **Important Note**\
    Please give the extension a few seconds to initiate on SAMMI startup./
    This extension may stop working if there are any significant updates to SAMMI Core. If that happens, please contact the developer for an update.

    #### Useful Tips
    - DTs work the same as temporarily attaching a trigger to the end of the button triggers
    - DTs do not override your existing button triggers
    - DTs follow the exact same rules as regular button triggers, e.g. they won't work if the button is blocked or the deck is disabled
    - DTs support variables! You can freely modify them on the fly and, for example, change the message or who should be allowed to trigger the button.
    - DTs do NOT reset when you reset SAMMI. They will stay active until:
        1. You remove them one by one using `Dynamic Triggers: Remove Trigger` command 
        2. You use `Dynamic Triggers: Clear All Triggers` command.
        3. You completely close and reopen SAMMI.

    #### Available Commands  
    

    ##### Add or Modify Dynamic Trigger
    **Command Name:** `Dynamic Triggers: Add/Modify Trigger`  

    Create a new dynamic trigger or modify an existing one. 

    **Applicable for all dynamic trigger types**: 

    | Box Name | Explanation |
    |-------|--------|
    | Button ID | Button ID to attach or modify the trigger to. Leave empty to attach it to the current button. |
    | Group ID | Input Group ID if you want the trigger to respect Group queue. Else leave empty. |
    | Trigger ID | ID to identify your trigger, can be anything. Use this ID to modify or delete the trigger. |
    {:class='table table-secondary w-auto table-hover text-break'}

    **DT: Twitch Chat Message**

    | Box Name | Explanation |
    |-------|--------|
    |Message|Twitch Chat message to trigger the button.|
    |Username|Twitch username to trigger the button. Leave empty to allow all users.|
    |Only Allow |Select if you want to allow only Broadcaster/Moderator/VIP to trigger the button.|
    | Subscriber | Select if you want to allow only Subscribers to trigger the button.|
    |Founder|Select if you want to allow only the channel founder to trigger the button.|
    |EW| Allow Empty Wildcard|
    |CS| Case Sensitive|
    {:class='table table-secondary w-auto table-hover text-break'}

    **DT: Youtube Chat Message**

    | Box Name | Explanation |
    |-------|--------|
    |Message|Youtube Chat message to trigger the button.|
    |Broadcaster Only|Select if you want to allow only the broadcaster to trigger the button.|
    |Mod|Select if you want to allow only Moderators to trigger the button.|
    |Verified|Select if you want to allow only verified users to trigger the button.|
    |EW| Allow Empty Wildcard|
    |CS| Case Sensitive|
    {:class='table table-secondary w-auto table-hover text-break'}

    **DT: Extension**

    | Box Name | Explanation |
    |-------|--------|
    |Message|Extension message to trigger the button.|
    {:class='table table-secondary w-auto table-hover text-break'}


    **DT: SAMMI Voice**
    <div class="alert alert-warning mt-3" role="alert">The trigger must be already added to SAMMI Voice.</div>
    

    | Box Name | Explanation |
    |-------|--------|
    |Command|SAMMI Voice command to trigger the button.|
    {:class='table table-secondary w-auto table-hover text-break'}

    **DT: Webhook**

    | Box Name | Explanation |
    |-------|--------|
    |Trigger|Webhook trigger to trigger the button.|
    {:class='table table-secondary w-auto table-hover text-break'}

    <br>

    ##### Remove Dynamic Trigger
    **Command Name:** `Dynamic Triggers: Remove Trigger`  

    Remove a dynamic trigger from a button. The trigger is removed as soon as the command runs. 

    | Box Name | Explanation |
    |-------|--------|
    | Trigger ID | ID of the dynamic trigger to remove. |
    {:class='table table-secondary w-auto table-hover text-break'}

    <br>

    ##### Remove All Dynamic Triggers
    **Command Name:** `Dynamic Triggers: Clear All Triggers`  

    Removes all dynamic triggers from all buttons. There might be 100-200ms delay to remove all triggers.
privacy_collect: false
---