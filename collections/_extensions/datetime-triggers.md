---
layout: ext_single
title: DateTime Triggers
slug: datetime-triggers
desc: Trigger buttons in SAMMI based on date and time triggers, including custom conditions.
category: utilities
date: '2024-08-30T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/datetime-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: datetime-triggers-icon.png
screenshots_local: datetime_triggers_ss.png, datetime_triggers_ss2.png
version: 1.0
sammi_version: 2024.3.0 and up
platform: Any
overview: |
    <div class="alert alert-info mt-3" role="alert">Currently available to my <a href="https://www.patreon.com/Christinna">Patrons</a> as an early access perk.</div>

    *DateTime Triggers* is an extension that allows you to trigger buttons in SAMMI based on date and time triggers, including custom conditions, such as whether you're currently live or a variable has a specific value.

    #### Available Trigger Types:

    - **Hourly:** Triggers at a specified minute after every hour.
    - **Daily:** Triggers at a specified hour and minute every day.
    - **Weekly:** Triggers on specified days at a set hour and minute.
    - **Monthly:** Triggers on a specified day, hour, and minute every month.
    - **Specific Day of the Year:** Triggers once a year on a specified day, hour, and minute.
    - **One-Time Trigger:** Triggers on a specified date and time.
    - **Trigger from Date:** Triggers only within a specified date range.

    #### Date Range Condition:
    - Set a date range condition for an existing trigger to only activate within a specific date range.

    #### Custom Conditions:
    - **Stream Status:** Triggers based on your Twitch stream status (Live/Offline).
    - **Stream Category:** Triggers based on your current Twitch stream category.
    - **Viewer Threshold:** Triggers based on a minimum Twitch viewer count.
    - **OBS:** Triggers based on whether OBS is connected or disconnected.
    - **OBS Scene:** Triggers based on a specific OBS scene.
    - **Variable Name == Value:** Triggers based on a specific variable having a specific value.

    #### Important Note
    Custom conditions, such as a viewer threshold, only work for your main connected Twitch account. YouTube is not supported at this time.

setup: |
    1. Ensure you're on the latest version of SAMMI.
    2. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    
    #### To Set Up a DateTime Trigger
    1. Fill out and run the 'DateTime Triggers: Add X Trigger' command, depending on the trigger type you need.
    2. Attach the extension trigger to any button in SAMMI you wish to be triggered once it goes off: 
        - Right click on a button within a deck
        - Select 'Edit Triggers'
        - Click on the + icon to add a new trigger
        - Select 'Extension Trigger' from the dropdown
        - The 'Message' field should be the name of the trigger you set up in the DateTime Triggers extension command

    **Key Points to Remember**
    - This only needs to run once; the trigger will persist even after restarting SAMMI.
    - Bridge must be running and connected to SAMMI at all times for this to work.

    #### Hourly Trigger
    **Command name:** DateTime Triggers: Add Hourly Trigger  

    To set up an hourly trigger, specify the minute after the hour when the trigger should activate.

    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Minute    | The specific minute after the hour | 15 (activates at 1:15, 2:15, etc.) |
    | Trigger Name | Name for the trigger | Hourly Reminder |
    {:class='table table-secondary table-hover'}

    #### Daily Trigger
    **Command name:** DateTime Triggers: Add Daily Trigger  

    To set up a daily trigger, specify the hour and minute.

    | Parameter   | Description                          | Example    |
    |-------------|--------------------------------------|------------|
    | Hour | The specific hour and minute to trigger | 08 (triggers at 8:00 AM) |
    | Minute | The specific minute after the hour | 00 (triggers at 8:00 AM) |
    | Trigger Name | Name for the trigger | Morning Alarm |
    {:class='table table-secondary table-hover'}

    #### Weekly Trigger
    **Command name:** DateTime Triggers: Add Weekly Trigger  

    To set up a weekly trigger, specify the days, hour, and minute.

    | Parameter  | Description                          | Example             |
    |------------|--------------------------------------|---------------------|
    | Day       | The specific day(s) to trigger       | Monday, Wednesday   |
    | Hour | The specific hour to trigger | 12 (triggers at 12:00 PM) |
    | Minute | The specific minute after the hour | 00 (triggers at 12:00 PM) |
    | Trigger Name | Name for the trigger | Weekly Update |
    {:class='table table-secondary table-hover'}

    #### Monthly Trigger
    **Command name:** DateTime Triggers: Add Monthly Trigger  

    To set up a monthly trigger, specify the day, hour, and minute.

    | Parameter   | Description                           | Example    |
    |-------------|---------------------------------------|------------|
    | Day of Month | The specific day of the month to trigger | 1 (triggers on the 1st of every month) |
    | Hour | The specific hour to trigger | 00 (triggers at 12:00 AM) |
    | Minute | The specific minute after the hour | 00 (triggers at 12:00 AM) | 
    | Trigger Name | Name for the trigger | Monthly Report |
    {:class='table table-secondary table-hover'}

    #### Specific Day of the Year Trigger
    **Command name:** DateTime Triggers: Add Specific Day Trigger  

    To set up a specific day trigger, specify the month, day, hour, and minute.

    | Parameter       | Description                                   | Example            |
    |-----------------|-----------------------------------------------|--------------------|
    | Month           | The specific month to trigger                 | August             |
    | Day             | The specific day of the month to trigger      | 25                 |
    | Hour            | The specific hour to trigger                  | 14 (triggers at 2:00 PM) |
    | Minute          | The specific minute after the hour           | 15 (triggers at 2:15 PM) |
    | Trigger Name | Name for the trigger | Yearly Celebration |
    {:class='table table-secondary table-hover'}

    #### One-Time Trigger
    **Command name:** DateTime Triggers: Add One Time Trigger

    Create a one-time trigger based on a specific date. 

    | Parameter      | Description                                        | Example                          |
    |----------------|----------------------------------------------------|----------------------------------|
    | Year          | The specific year to trigger                       | 2024                             |
    | Month         | The specific month to trigger                      | August                           |
    | Day           | The specific day of the month to trigger           | 30                               |
    | Hour          | The specific hour to trigger                       | 14 (triggers at 2:00 PM)         |
    | Minute        | The specific minute after the hour to trigger      | 15 (triggers at 2:15 PM)         |
    | Trigger Name   | Name for the trigger | One-Time Event |
    {:class='table table-secondary table-hover'}

    #### Date 
    **Command name:** DateTime Triggers: Add Date Trigger

    Advanced command to create a trigger based on a specific date. 
    It's handy when the date comes from existing services or APIs, like Twitch, so there's no need for manual conversion.

    The following date formats have been tested and are fully supported:
    - Twitch/ISO 8601 (e.g., 2024-08-25T14:15:22Z)
    - RFC 2822 (e.g., Tue, 27 Aug 2024 22:35:00 PDT)
    - Unix timestamps (e.g., 1724829572)

    If you're working with a new date format, please try adding it first. 
    After that, go to the "DateTime Triggers" tab in the Bridge and double-check that the trigger has been added correctly with the accurate date.

    | Parameter      | Description                                              | Example               |
    |----------------|----------------------------------------------------------|-----------------------|
    | Date          | The specific date to trigger                             | 2024-08-25T14:15:22Z  |
    | Trigger Name   | Name for the trigger | Special Event |
    {:class='table table-secondary table-hover'}

    #### Date Range Condition
    **Command name:** DateTime Triggers: Add Date Range Condition  

    Attach to an existing trigger to only activate within a specific date range.

    | Parameter      | Description                                                    | Example                        |
    |----------------|----------------------------------------------------------------|--------------------------------|
    | Start Year    | The start year for the date range                               | 2024 |
    | Start Month   | The start month for the date range                              | September |
    | Start Day     | The start day for the date range                                | 1 |
    | End Year      | The end year for the date range                                 | 2024 |
    | End Month     | The end month for the date range                                | September |
    | End Day       | The end day for the date range                                  | 30 |
    | Trigger Name   | Existing Trigger Name                                          | Seasonal Event |
    {:class='table table-secondary table-hover'}

    #### Custom Condition
    **Command name:** DateTime Triggers: Add Custom Condition  

    Attach to an existing trigger to only activate when specific conditions are met.

    | Parameter      | Description                                                    | Example                        |
    |----------------|----------------------------------------------------------------|--------------------------------|
    | Stream Status  | The stream status to trigger on                                | Live |
    | Stream Category | The stream category to trigger on                             | Just Chatting |
    | Viewer Threshold | The minimum viewer count threshold to trigger on             | 50 |
    | OBS | Triggers only if OBS is connected/disconnected from SAMMI                 | Connected |
    | OBS Scene | The OBS scene to trigger on                                         | Main Scene |
    | Variable Name == Value | Triggers only if the variable has the specified value  | IsLive == true |
    | Trigger Name   | Existing Trigger Name                                          | My Daily Trigger |
    {:class='table table-secondary table-hover'}

privacy_collect: false
---
