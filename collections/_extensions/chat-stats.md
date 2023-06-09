---
layout: ext_single
title: Chat Stats
slug: chat-stats
desc: Generate a word cloud, chat summary and viewer tree! 
category: twitch
date: '2023-06-16T00:00:00-05:00'
permalink: extensions/twitch/:slug
download_url: https://christinak.itch.io/chat-stats
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: chat_stats_ico.png
trailer: https://www.youtube.com/embed/BNRxS6fz4O0
screenshots_local: chat_stats_screenshot.png, chat_logs_ex.png, chat_logs_ex2.png, chat_logs_ex3.png, chat_logs_ex4.png, chat_logs_ex5.png, chat_logs_ex6.png
version: 1.0
sammi_version: '2023.2.1^'
platform: Twitch
overview: |
    <div class="alert alert-info mt-3" role="alert">Currently available to my <a href="https://www.patreon.com/Christinna">Patrons as an early access perk.</a></div>

    Extension that enables you to gather, analyze, and visualize Twitch VOD chat data. Easy to install, extremely customizable and requires no prior setup!

    ##### Features
    - Retrieve chat transcript from recent or specific Twitch VOD
    - Gather chat statistics such as total message count, unique chat participants, frequently used words, and most active users
    - Generate word cloud image based on chat messages
    - Create participation tree image of the top chatters
    - Generate a chat summary using ChatGPT
    - Automated Discord posting feature for all collected data
    - High level of customization

    **Important Note**  

    The extension utilizes an unofficial Twitch API endpoint. It could stop functioning or need an update due to API changes. It does not use your Twitch credentials in any way. 

    *Icon generated by OpenAI*
setup: |
    1. Update both SAMMI Core and Bridge to the latest version via SAMMI Updater.
    2. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    3. Ensure your Bridge is running at all times while using the extension.
         <div class="alert alert-warning mt-2" role="alert">This extension only works with Bridge running in OBS dock. If you are running Bridge in a browser other than OBS dock, you must keep the Bridge tab active at all times in order to use the extension.</div>
    4. Open red Settings button and fill out the commands **Twitch Chat Stats Init**, **Twitch Chat Stats Word Cloud Settings** and **Twitch Chat Stats Participation Tree Settings** shown below. 

    ##### Twitch Chat Stats Init

    | Box Name | Description|
    |--------|-------|
    |Twitch Channel Name | Name of your Twitch (Streaming) Channel |
    |Twitch Bot Name | Name of your Twitch Bot Channel (for message filtering purposes) |
    |Primary Stream Language | Select dominant chat language from dropdown (English stop words included automatically) |
    |Generate Word Cloud | Check if word cloud image should be generated |
    |Generate Participation Tree | Check if participation tree image should be generated |
    |Generate Summary | Check if a chat summary should be generated; ChatGPT extension required |
    {:class='table table-secondary w-auto table-hover'} 

    ##### Twitch Chat Stats Word Cloud Settings (optional)
    These optional settings allow you to customize the word cloud. If left blank, the defaults will be applied.

    | Box Name | Description|
    |--------|-------|
    |Width | Specify image width (default is 600) |
    |Height | Specify image height (default is 600) |
    |Background Color | Choose image background color (default is transparent) |
    |Font Family | Specify the font family (default is serif) |
    |Font Scale | Indicate the size of the largest font (default is 25) |
    |Max Words | Set the maximum number of words to display (default is 100) |
    |Colors | Provide an array of colors for words in hex format (defaults to random colors if 'Random' box is checked or this box is empty) |
    {:class='table table-secondary w-auto table-hover' }

    <div class="row">
    <div class="col">
    <img src="/assets/images/extensions/chat_logs_ex3.png" class="figure-img dimg-fluid rounded w-100 liquidRaw" alt="Word Cloud Example" title="Word Cloud Example">
    </div>
    <div class="col">
    <img src="/assets/images/extensions/chat_logs_ex4.png" class="figure-img dimg-fluid rounded w-100 liquidRaw" alt="Word Cloud Example" title="Word Cloud Example">
    </div>
    </div>
    <br>



    ##### Twitch Chat Stats Participation Tree Settings (optional)
    These optional settings allow you to customize the participation tree. If left blank, the defaults will be applied.

    | Box Name | Description|
    |--------|-------|
    |Max Viewers | Maximum viewers to display in the tree |
    |Display Labels As | Display labels as username text or profile image with a username |
    |Background Color | Background color of the tree. Check 'Random' for varied colors for each section |
    |Font | Font for the tree labels from the list provided |
    |Text Color | Text color for the tree labels |
    |Spacing | Spacing in pixels for the individual rectangles in the tree |
    |Border Width | Border width in pixels for the individual rectangles in the tree |
    |Border Color | Border color for the individual rectangles in the tree |
    {:class='table table-secondary w-auto table-hover' }

    <div class="row">
    <div class="col">
        <img src="/assets/images/extensions/chat_logs_ex2.png" class="figure-img img-fluid rounded w-100 liquidRaw" alt="Participation Tree Example" title="Participation Tree (only text) Example">
    </div>
    <div class="col">
        <img src="/assets/images/extensions/chat_logs_ex5.png" class="figure-img img-fluid rounded w-100 liquidRaw" alt="Participation Tree Example" title="Participation Tree (profile images) Example">
    </div>
    </div>
    <br>
    ##### Get Chat Stats from Last Stream or Specific VOD

    This button retrieves chat analytics from your latest broadcast or selected VOD.

    <div class="alert alert-warning mt-2" role="alert">Ensure the Settings button has been properly configured before running this command.</div>

    | Box Name | Description|
    |--------|-------|
    |Twitch VOD ID | Twitch video ID from which chat data is extracted (leave empty to grab your latest VOD) |
    |Save Variable As | Name of the variable to save the result into |
    {:class='table table-secondary w-auto table-hover' } 

    The Save Variable As will be retrieved as an object with the following keys: 

    | Key | Description |
    | totalMessages | The total number of chat messages sent |
    | topWords | An array of the most frequently used chat words (up to 100)<br>- Although stop words are eliminated, some may still appear |
    | wordCloud | Complete path to the word cloud file (in png format) |
    | uniqueChatters | Total count of distinct chat participants |
    | topChatters | An array of the most engaged chatters (up to 100) |
    | participationPercentage | An object listing chatters by percentage contribution<br>- For instance, a key cyanidesugar with a value of 50 means cyanidesugar contributed 50% of the total chat messages |
    | participationTree | Complete path to the participation tree file (in png format) |
    | summary | A generated summary of the chat from the streamer's perspective<br>- For example, 'Today I've had a great stream playing this game and discussing various topics with my viewers.'<br>- Will be produced in the primary language set in your INIT button<br>- Be aware that it might occasionally yield inaccurate results |
    | vodLink | Full link to the Twitch VOD |
    {:class='table table-secondary w-auto table-hover' } 

    Example Object JSON: 
     ```
    { 
        "totalMessages": 101,
        "vodLink": "https://www.twitch.tv/videos/123456789", 
        "participationPercentage": { 
            "christinna": "16.83",
            "silverlink": "29.70",
            "sebas": "23.76"
        }, 
        "summary": "Hey hey! During my stream we played Dark Souls 3 and we kept dying...", 
        "topWords": [ "DIED", "game", "dog", "souls", "played" ], 
        "topChatters": [ "christinna", "silverlink", "sebas" ], 
        "participationTree": "e:/stream/sammi core/Ext/Twitch_Chat_Stats/participationTree_123456789.png", 
        "wordCloud": "e:/stream/sammi core/Ext/Twitch_Chat_Stats/wordCloud_123456789.png", 
        "uniqueChatters": 10
        }
    ```

    <img src="/assets/images/extensions/chat_logs_ex6.png" class="figure-img img-fluid rounded w-75 liquidRaw" alt="Discord Post Example" title="Discord Post Example">



    ##### Generate Sample Word Cloud

    This button generates a sample word cloud or participation tree image based on the settings from the Settings button.

    <div class="alert alert-info mt-2" role="info">This command provides a quick way to test word cloud and participation tree customization settings.</div>
privacy_collect: false
---