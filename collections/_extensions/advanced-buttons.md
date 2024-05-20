---
layout: ext_single
title: Advanced Button Functions
slug: advanced-butons
desc: Run a random button, check if button is running or blocked, and more!
category: utilities
date: '2024-04-23T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/advanced-buttons
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: advanced_buttons.png
trailer: https://www.youtube.com/embed/PaB0DtheluM
screenshots_local: advanced_buttons_ss.png
version: 1.0
sammi_version: 2024.1.1
platform: Any
overview: |
    **Advanced Button Functions** is an extension that allows you to run a random button, check if a button is running or blocked, and more!

    **Features**  
    - Run a random button from a specified deck or group
    - Check if a button is currently running, in queue (and how many are in queue), or blocked.
    - Get all running and blocked buttons 
    - Get all buttons by triggers
    - Get button information (deck name, group id, image name, init variables, etc.)

    Comes with a premade deck with all available commands and explanations.

    **Important Notes**  
    This extension may stop working if there are any significant updates to SAMMI Core. If that happens, please contact the developer for an update.
    
setup: |
    1. Ensure you're on the latest version of SAMMI.
    2. Install the extension. 
    3. Press the red **INIT** button and wait for an alert the extension is loaded. You only need to do this once, as it will load automatically whenever you connect to Bridge.
    4. Review the premade deck "Advanced Button Functions" for all available extension commands.

    **Important Note**  
    This extension may stop working if there are any significant updates to SAMMI Core. If that happens, please contact the developer for an update.

    ### Available Commands

    #### Run Random Deck Button
    **Command Name:** `ADVBTN Run Random Deck Button`  

    Runs a random buttom from a specified deck.  

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>


    | Box Name | Explanation |
    |-------|--------|
    | Deck ID | The ID of the deck you want to run a random button from. Se;ect from the dropdown. |
    | Queuable | Whether to run the button as queueable. |
    | Exclude Buttons | Comma separated button IDs to exclude. For example: ID1, ID2, ID3 |
    | Save Variable As | Variable name to save the random button ID. |
    {:class='table table-secondary w-auto table-hover text-break' }


    #### Run Random Group Button
    **Command Name:** `ADVBTN Run Random Group Button`

    Runs a random button from a specified group.

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>

    | Box Name         | Explanation                                           |
    |------------------|-------------------------------------------------------|
    | Group Name       | Fill out the group name to randomly run the button from |
    | Queuable         | Whether to run the button as queueable                |
    | Exclude Buttons  | Comma separated button IDs to exclude. For example: ID1, ID2, ID3 |
    | Save Variable As | Variable name to save the random button ID            |
    {:class='table table-secondary w-auto table-hover text-break' } 

    #### Get Running Buttons
    **Command Name:** `ADVBTN Get Running Buttons`

    Retrieves all currently running button IDs in an array (this is NOT real time, it reflects the state when the command was executed).

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>

    | Box Name         | Explanation                                       |
    |------------------|---------------------------------------------------|
    | Save Variable As | Variable name to save the array into              |
    {:class='table table-secondary w-auto table-hover text-break' } 

    #### Get Blocked Buttons
    **Command Name:** `ADVBTN Get Blocked Buttons`

    Retrieves all currently blocked button IDs in an array. (this is NOT real time, it reflects the state when the command was executed).

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>

    | Box Name         | Explanation                                       |
    |------------------|---------------------------------------------------|
    | Save Variable As | Variable name to save the array into              |
    {:class='table table-secondary w-auto table-hover text-break' } 

    #### Get All Buttons By Trigger
    **Command Name:** `ADVBTN Get All Buttons By Trigger`

    Retrieves an array of all button IDs the selected trigger is attached to.

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>

    | Box Name         | Explanation                                       |
    |------------------|---------------------------------------------------|
    | Trigger Type     | Trigger type to get the button IDs attached to    |
    | Save Variable As | Variable name to save the array into              |
    {:class='table table-secondary w-auto table-hover text-break' } 

    #### Check Running Button
    **Command Name:** `ADVBTN Check Running Button`

    Checks if the given button is currently running, returns true/false. (this is NOT real time, it reflects the state when the command was executed).

    <div class="alert alert-warning mt-2" role="alert">Don't forget to use 'Wait Until Variable exists' command and delete the variable you're waiting for beforehand.</div>

    | Box Name         | Explanation                                       |
    |------------------|---------------------------------------------------|
    | Button ID        | Button ID to check if it's running                |
    | Save Variable As | Variable name to save the result into             |
    {:class='table table-secondary w-auto table-hover text-break' } 

    #### Unblock All Buttons
    **Command Name:** `ADVBTN Unblock All Buttons`

    Unblocks all currently blocked buttons, including those in disabled decks. 

    You'll receive a yellow notification alert if successful.
privacy_collect: false
---