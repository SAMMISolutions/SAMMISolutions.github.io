---
layout: ext_single
title: Lucky Wheel
slug: lucky-wheel
desc: Create, modify and control Lucky Wheel overlay straight from SAMMI
category: games
date: '2024-04-14T00:00:00-05:00'
permalink: extensions/games/:slug
download_url: https://christinak.itch.io/sammi-lucky-wheel
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: lucky_wheel.png
trailer: https://www.youtube.com/embed/9SVEu6LsKss
screenshots_local: lucky_wheel_ss.png, lucky_wheel_ss2.png, lucky_wheel_ss3.png, lucky_wheel_ss4.png
version: 2.0
sammi_version: 2024.1.1
platform: Any
overview: |
    **Create, modify and control your Lucky Wheel overlay in OBS straight from SAMMI! Very easy setup and use!**

    Set up your own wheel in a few easy steps! Supports multiple wheels.

    #### ​Features at a glance
    - **Create wheels** via friendly interface in Bridge or via SAMMI commands, including prepulated wheels with equal chances from an array of all possible rewards
    - **Use plain text or images** for wheel segments
    - **Show, spin and stop the wheel** and get the winning reward in SAMMI 
    - **Modify wheels** and their rewards on the fly​
    - **NEW:** Duplicate an existing wheel 
    - **NEW:** Shuffle wheel rewards 
    - **NEW:** Balance wheel reward chances
       
    
    **Control your wheel directly from SAMMI Deck**  
    You can load, spin and stop spinning the wheel with one press of a button in your SAMMI Deck or add your own chat triggers, so that your mods can control it too! 
    The winning reward's name will be automatically saved into a variable in your SAMMI. 

    [video](https://www.youtube.com/embed/PtQNkoSRJmU)[/video]

    **Customize it!**  
    You can have a simple text based wheel with randomly generated segment colors each time you load it. 

    Or... you can choose a color for each segment.

    [video](https://www.youtube.com/embed/c9--Iq0hAnI)[/video]

    And... you can use an image for each segment instead of text! There are also a few different animations available! 

    [video](https://www.youtube.com/embed/jIQOc3VaZJM)[/video]

    Give you viewers the power to increase the reward chances! Can be activated through chat or channel points redeems! 

    [video](https://www.youtube.com/embed/XfrQP3UpJzo)[/video]
setup: |
    1. Ensure you're on the latest version of SAMMI.
    2. Install the extension. 
    3. Press the red **SETUP** button and follow all instructions while connected to OBS. 
        - A new Lucky Wheel overlay should be added to your OBS
        - A new 'Example Wheel' should be added to your SAMMI 
    4. You can modify the Example Wheel either directly from Bridge in Lucky Wheel tab or with Lucky Wheel commands in SAMMI. You can also add a new wheel in Bridge or with a Lucky Wheel command in SAMMI. Cycle through all your wheels and activate different wheels directly from SAMMI by using the arrows.
    6. Press **SHOW WHEEL** button in your SAMMI Deck. 
    7. Press **SPIN WHEEL** button in your SAMMI Deck. 

    Each button has comments explaining how the button works. Please read them and adjust the buttons (such as chat messages) for your own stream.

    #### General Info
    The extension supports OBS 28 with both OBS Websocket 4 and 5.   
    If you change your OBS Connection name, type, its port or password, you must press the red **SETUP** button again.  
    Your OBS browser wheel overlay file is `SAMMI/Ext/Lucky_Wheel/wheel.html`.    
    All your wheels are  be saved in `SAMMI/Ext/Lucky_Wheel/luckywheel.ini` file.    
    All segment images should be placed in `SAMMI/Ext/Lucky_Wheel/img` folder. Resizing your images is highly recommended.  
    Some buttons are protected in the basic version of the extension. The extension is FULLY functional without a premium version. You can purchase a premium version if you're interested in how it was coded.


    #### Add a wheel

    1. **From Bridge**  
    Go to your Bridge - Lucky Wheel tab. Click on 'Add' and choose a new name for your wheel (avoid duplicate names). Populate it with rewards by pressing' Add Reward' button.    
    If you wish to use images in your wheel segments, they must be already in your `SAMMI/Ext/Lucky_Wheel/img` folder prior to adding them in Bridge.   
    Once you're done, press 'Save' to save your new wheel. 

    2. **With a SAMMI command**  
    Use 'Lucky Wheel Add/Delete Wheel' command.

        | Box Name | Explanation |
        |-------|--------|
        Wheel Name | Name for your new wheel (avoid duplicates)
        Reward Array Name | Optional. Provide an array of all rewards (will be equally distributed) to populate your wheel with. Leave empty to add rewards manually.
        Winning Animation | The animation to perform after the wheel stops. 'Blink Text' only works for text segments and 'Image To Mid' only works for image segments.
        Set As Active | Whether to set the newly created wheel as currently active wheel
        Type | Type of action to perform - select Add
        {:class='table table-secondary w-auto table-hover text-break' }

    #### Modify a wheel

    1. **From Bridge**  
    Go to your Bridge - Lucky Wheel tab. Select the wheel name from the dropdown you wish to modify and click on 'Load'. You will see all its settings and rewards you can now modify, including their name, chances and segment colors. 
    If you wish to use images in your wheel segments, they must be already in your `SAMMI/Ext/Lucky_Wheel/img` folder prior to adding them in Bridge.   
    Once you're done, press 'Save' to save your changes.
    
    2. **With SAMMI commands**  
    Use 'Lucky Wheel Modify Wheel' command to modify your current Wheel name and its settings.  

        | Box Name | Explanation |
        |-------|--------|
        Wheel Name | Wheel name to modify (leave empty to modify currently active wheel)
        New Wheel Name | New wheel name if you wish to rename it to (leave empty to leave it unchanged)
        Winning Animation | The animation to perform after the wheel stops. 'No Change' to not change the current animation. 'Blink Text' only works for text segments and 'Image To Mid' only works for image segments.
        {:class='table table-secondary w-auto table-hover text-break' }
    Use 'Lucky Wheel Add/Delete Reward' command to add or delete a single reward.  
    
        | Box Name | Explanation |
        |-------|--------|
        Wheel Name | Wheel name to create/delete the reward in (leave empty to modify it in your currently active wheel)
        Reward Name | Reward name (no duplicate reward names allowed)
        Reward Chance | Reward chance in %
        Color | Color for the segment (optional) 
        Image | Image for the segment (optional), must be placed in your `SAMMI/Ext/Lucky_Wheel/Img` folder
        Type | Select 'Add' to add a new reward or 'Delete' to delete an existing reward (in that case you only fill out Wheel Name and Reward Name)
        {:class='table table-secondary w-auto table-hover text-break' }
    Use 'Lucky Wheel Modify Reward' command to modify a single reward. Must already have an existing wheel.  

        | Box Name | Explanation |
        |-------|--------|
        Wheel Name | Wheel name (leave empty to modify it in your currently active wheel)
        Reward Name | Reward name to modify 
        New Reward Name | New reward name (leave empty to leave it unchanged)
        Chance | New Reward chance in % (leave empty to leave it unchanged)
        Chance Input | manual - manually set the chance to X % </br> - increase - increase the chance by X % </br> - decrease - decrease the chance by X %
        Color | Color for the segment
        Modify Color | whether you wish to modify color
        Image | Image for the segment (leave empty to leave it unchanged), the image must be placed in your `SAMMI/Ext/Lucky_Wheel/Img` folder, else it will not display
        Remove Image | check if you want to complete remove the image   
        {:class='table table-secondary w-auto table-hover text-break' }
        
    Press **Show Wheel** button to update the OBS overlay after you execute the commands.

    #### Delete a wheel 

    1. **From Bridge**  
    Go to your Bridge - Lucky Wheel tab. Select the wheel name from the dropdown you wish to delete and click on 'Delete'.   
    This cannot be reverted!
    
    2. **With a SAMMI command**   
    Use 'Lucky Wheel Add/Delete Wheel' command. 

        | Box Name | Explanation |
        |-------|--------|
        Wheel Name | Wheel name to permanently delete (must be specified)
        Type | Type of action to perform - select Delete
        {:class='table table-secondary w-auto table-hover text-break' }
        

    #### Activate a wheel 

    1. **From Bridge**  
    Go to your Bridge - Lucky Wheel tab. Select the wheel name from the dropdown you wish to Activate and click on 'Activate'.   
    This cannot be reverted!
    
    2. **From SAMMI Deck**   
    Use the arrows to cycle through your wheels and click on the wheel name you wish to activate.

    3. **With a SAMMI command**   
    Use 'Lucky Wheel Activate' command. 

        | Box Name | Explanation |
        |-------|--------|
        Wheel Name To Set Active | Wheel name you wish to set active
        {:class='table table-secondary w-auto table-hover text-break' }

    #### Display a wheel in OBS
    Press **SHOW WHEEL** button. If your wheel source is inside a nested scene, you will need to modify the SHOW WHEEL button to add the Nested Scene Name. 
    
    #### Spin and stop a wheel in OBS
    Press **SPIN WHEEL** button to spin the wheel. It will automatically stop after some time. If you wish to stop it manually, you can remove the command that triggers **STOP WHEEL** button from the **SPIN WHEEL** button and press **STOP WHEEL** button manually.

    #### Get a winning result
    When you wheel stops spinning, **WINNER WHEEL** button will trigger. Your winning result will be saved in `wheel_winner` variable inside that button.

    #### Modify reward chances  
    You can use a premade button **Modify Reward Chances** that leverages 'Lucky Wheel Modify Reward' command.  
    
    If you wish to change the channel point redeem name for modifying rewards (default is 'Lucky Wheel'), right click on the Modify rewards button - Edit Twitch Triggers. Scroll down using the big arrow and modify BOTH redeem names (one is for decreasing the reward chance and one is for increasing it). 

    **Chat trigger (only broadcaster and mod) for modifying rewards:**  
    `!wheel REWARD NAME +PERCENTAGE` or `!wheel REWARD NAME -PERCENTAGE` (i.e. `!wheel Sekiro +10` or `!wheel Bloodborne -50`) 

    **Channel points redeem message for modifying rewards:**  
    `REWARD NAME +PERCENTAGE` or `REWARD NAME -PERCENTAGE` (i.e. `Sekiro +10` or `Bloodborne -50`) 

    #### Balance Reward Chances
    Use 'Lucky Wheel Balance Rewards' command to balance the wheel reward chances, so that they're all equal.  
    Press 'Show Wheel' button to update the OBS overlay after you execute the command.

    #### Shuffle Wheel
    Use 'Lucky Wheel Shuffle Wheel' command to shuffle the wheel rewards. 
    Press 'Show Wheel' button to update the OBS overlay after you execute the command.

    #### Duplicate Wheel
    Use 'Lucky Wheel Duplicate Wheel' command to duplicate an existing wheel. Useful if you want to remove already claimed rewards from the current wheel and keep the original wheel intact.
testers: Cyanidesugar, feature_creep
privacy_collect: false
---