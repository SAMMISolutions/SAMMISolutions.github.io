---
layout: ext_single
title: Click Map
slug: click-map
desc: Let your viewers interact with your stream by clicking on your live video
category: miscellaneous
date: '2022-09-28T00:00:00-05:00'
permalink: extensions/miscellaneous/:slug
download_url: https://christinak.itch.io/lioranboard-click-map
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: click_map.png
trailer: https://www.youtube.com/embed/hr9Ho1MVjiw
screenshots_local: click_map_ex.png
version: 1.2
sammi_version: 2022.4.4 and up
platform: Twitch
testers: cyanidesugar, wolbee
overview: |
    **Let your viewers interact with your stream by directly clicking on your live video overlay!**  


    You can map your OBS sources and let your viewers take full control!  

    One single tap to activate a different camera? And another tap to change the whole scene?\
    Or how about having your viewers decide which path to take in a video game you're playing by simply tapping on the video to vote?  

    **You can retrieve the name of the viewer who clicked and the exact coordinates!**  

    **The extension newly comes with an overlay to visualize your viewers clicks!** 
   
    Available only for SAMMI. Supports both OBSWS 4 and OBSWS 5.\
    Utilizes Heat Twitch extension made by [Scott Garner](https://github.com/scottgarner).  

   
    <div class="alert alert-warning" role="alert">The extension doesn't work for viewers on mobile devices due to Twitch's own limitation on overlay extensions.</div>

setup: |
    ##### Quick Start

    1. Install [Heat extension](https://dashboard.twitch.tv/extensions/cr20njfkgll4okyrhag7xxph270sqk-2.0.0) on your Twitch channel and activate it as overlay (in your dashboard).  

    2. Install the .sef extension you just downloaded from this page to your SAMMI.. Make sure you're on the latest versions for both SAMMI and Bridge. You also need to be connected to OBS, both OBSWS 4 and 5 is compatible with the extension.

    3. Double click on **Settings** button: 
        - If you're using multiple OBS connections, change `obs_name` variable to your preferred OBS Name (you can find it in the main menu - OBS Connections). 
    4. Double click on **Enable Clicks** button
            - Fill out both `Login Name` boxes with your Twitch Login name for your streaming channel (all lower case characters)
        - Fill out Click Map Listener command:
            - Allow Anonymous - decide whether you want to allow anonymous viewers to triggers your clicks (read more below)
            - all other boxes are filled out automatically, *do not modify them*. If you accidentally do modify them, please return them to the following default values:
                - Channel ID: `clickMapId`
                - Oauth Token: `clickMapToken`
                - OBS Canvas Width: `canvasWidth`
                - OBS Canvas Height: `canvasHeight`
    5. Press Save and Close, and then Save again to save the deck as well
    6. Click on **Create Example Scene** button. An example scene with three color sources should be added to your OBS. 
    7. Start streaming on Twitch using the example scene. You must be live for the extension to work.
    8. Once your stream is live and Heat Map extension active as your overlay, click on the green **Enable Clicks** button (while connected to OBS and Bridge).\
    You should see a yellow notification message: `Listening for clicks` and status should change to `Connected` in your Click Map tab in Bridge.
    6. Try clicking on your video overlay in your Twitch channel - on the colored sources in the example scene. You should get a Twitch chat message and yellow alert in SAMMI detecting the clicks!

    <br/>

    ##### Full Setup Walkthrough 
    [video](https://www.youtube.com/embed/ib5f22nQNf0)[/video]

    <br/>

    ##### Install OBS Overlay
    To visualize your viewers clicks on your stream, you can install this handy overlay that can display them as their profile icons, a random channel emote or your custom image.\   
    1. In your premade deck click on 'Generate Link for OBS Browser overlay' (from SAMMI Deck)
    2. A new page will open. Fill out all the fields and test the clicks in the preview frame. 
    3. Once satisfied, generate the URL and copy it to your clipboard.
    4. Back in SAMMI, click on `Install New OBS Overlay` button and paste the URL (while connected to OBS)
    5. A new browser source `Click Map Overlay` should be added to your OBS now  
    6. Whenever you decide to modify how the overlay looks like, you can simply generate a new URL (from step 2) and change it inside your browser source settings in OBS.


    **If you wish to enable the overlay only when listening to clicks:**
    1. Go to Enable Clicks button and uncheck `Off` for the `Enable me if using Click Map OBS Browser overlay` comment inside. Change the Scene and Source name if needed in the Souce Change Visiblity command. 
    2. Go to Disable Clicks button and uncheck `Off` for the `Enable me if using Click Map OBS Browser Overlay` comment inside. Change the Scene and Source name if needed in the Souce Change Visiblity command. 

    ##### Map a source
    You can select which OBS sources you want to be clickable by your viewers on your stream overlay. Use **Map Sources** button for it and just duplicate one of the premade commands or add a new **Click Map Add Source** command.\
    The scene that contains your source **must remain at 1.0 scale** when used as a nested scene.\
    If you are using atypical transform settings for the OBS source (unusual positional alignment and bounding box, crop filters etc.), the mapping might not be always 100% correct. In that case it's recommended to map an area instead.

    <div class="alert alert-warning" role="alert">Every time you add, edit or remove a map area, you must click on the Enable Clicks button for it to take effect</div>

    | Box Name |  Description| 
    |-------|--------|--------
    |Trigger| Name of the trigger that will be sent to SAMMI when a viewer clicks on this particular source |
    |Scene Name | Scene name where your clickable source resides |
    |Source Name|Name of the OBS source you wish to be clickable
    {:class='table table-secondary table-hover' }  

    <br/>

    ##### Map an area
    Instead of just selecting one OBS source, you can select a whole area in your OBS canvas to be clickable instead. Use **Map Areas** button for it and just duplicate one of the premade commands or add a new **Click Map Add Area** command.\
    The scene that contains your source **must remain at 1.0 scale** when used as a nested scene.\


    <div class="alert alert-warning" role="alert">Every time you add, edit or remove a map area, you must click on the Enable Clicks button for it to take effect</div>

    | Box Name |  Description| 
    |-------|--------|--------
    |Trigger| Name of the trigger that will be sent to SAMMI when a viewer clicks on this particular source |
    |X coord | X coordinate of the area in pixels
    |Y coord | Y coordinate of the area in pixels
    |Width|Width of the area in pixels
    |Height|Height of the area in pixels
    {:class='table table-secondary table-hover' }  

    <br/>

    ##### Attach triggers to buttons
    Once you add your clickable sources or areas, remember the trigger names you gave them, as you now need to **attach these triggers to your SAMMI buttons**. 

    1. Create or use an existing button you wish to be triggered every time a viewer interacts with the clickable source or area
    2. Right click on the button - **Edit Triggers**
    3. Click on the + button and select **Extension Trigger**
    4. Delete the `*` in the Message field and fill it out with the extension trigger name you selected for the given source or area
    5. Add any commands to the button you want to be executed. You can use the following Pull Values for the **Trigger Pull Data** command to get information about the particular click.  


    <br/>

    | Pull Value |  Description| 
    |-------|--------|--------
    |scene| Scene name where the mapped clickable source/area resides
    |name| Display name of the viewer who triggered the click (returns 0 if anonymous)
    |username| Username of the viewer who triggered the click (returns 'anonymous' if anonymous)
    |userID| User ID of the viewer who triggered the click (returns 'anonymous' if anonymous)
    |x| the exact x coordinate in pixels (converted to your OBS canvas size) of where the viewer clicked
    |y| the exact y coordinate in pixels (converted to your OBS canvas size) of where the viewer clicked
    |y_raw| raw y coordinate (0-1 value)
    |x_raw| raw x coordinate (0-1 value)
    |trigger| trigger name the button got triggered with
    {:class='table table-secondary table-hover'}  

    <div class="alert alert-info" role="alert">You can see all currently active triggers in your Bridge Click Map tab.</div>

    **Allow click triggers only if you're on the correct scene**\
    You can compare the `scene` pull value with your current scene (which is a premade variable `global.YOUROBSNAME.current_scene` in SAMMI) to check if they match.     
    If you need to check whether the Click Map scene is nested inside another scene, you can retrieve current source list via OBS Request command and check whether the `scene` pull value is inside that list. 
    Both examples showing how to achieve this can be found inside the grey trigger example buttons in your premade deck.

    ##### Remove Trigger
    This button simply removes any click triggers you set up in your Map sources or Map areas button.

    <br/>

    ##### Enable Clicks
    Once you set up your sources and/or areas to map and add their triggers to your buttons, you can now press Enable Clicks button *(assuming you already went through the process of filling out your Twitch username inside the button which Quick Start section instructs you to do)*.\
    You should get a yellow notification message and the status should change to `Connected` in your Click Map tab in Bridge. This means the extension is ready and listening for clicks.\
    To disable listening to clicks, use **Disable Clicks** button. 

    <br/>

    ##### Anonymous vs. non anonymous clicks 
    The extension is capable of retrieving the viewer's name who clicked on your overlay.\
    Your viewers must clicks on the extension settings in their overlay and grant it access to their information, otherwise their clicks will be sent as anonymous.\
    By checking `Allow Anonymous` in your Enable button, you can decide whether you want to allow anonymous clicks (viewers who are not logged in or did not authorize the extension) to go through or not.

    <br/>

    ##### Simulating key presses
    You might want to give your viewers the option to click on a button on your video overlay which will simulate a key press.

    [video](https://www.youtube.com/embed/MzVNcuL76aM)[/video]

    1. Create an OBS source (for example an image showing a button `W`)
    2. Use **Map Sources** button and just duplicate one of the premade commands or add a new **Click Map Add Source** command for the OBS source you just created in step 1 (explained in *Map a source* section)
    3. Create a completely new button in your deck and attach an Extension trigger to it (explained in *Attach triggers to buttons* section), the `Message` field will be the trigger name you chose in step 2.
    4. Double click on the button from step 3. Click on the **+** and type `Keyboard simulate press`, select the command and fill out the boxes: 
        - `Button` - select the button you want to be pressed
        - `Ctrl/Alt/Shift` checkboxes - select whether you want it to press the button together with a modifier, for example Ctrl + W
        - `Hold Duration` - for how long the button should be held
    5. Press **Save** and then **Save** again (first one is to save the button and second one is to save the whole deck)
    6. Press **Enable Clicks** button. 
    7. Now every time your viewer clicks on your selected button overlay, SAMMI will simulate a key press! 
privacy_collect: false
---