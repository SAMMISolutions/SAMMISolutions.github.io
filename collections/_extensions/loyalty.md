---
layout: ext_single
title: Loyalty System
slug: loyalty
desc: Custom Loyalty Point System
category: utilities
date: '2024-12-09T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://ko-fi.com/s/dfb767ca05
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: loyalty_icon.png
screenshots_local: loyalty_ss1.png
version: 2.0
sammi_version: '2024.4.0^'
platform: Any
overview: |
    #### Description
    - This extension lets your viewers earn points on Twitch and YouTube and use them for various actions
    
    #### Features
    - Fully customize everything
    - Earn titles by collecting points
    - Gamble your points
    - Create SAMMI point redemptions
    - Automatically creates backups of the database

    #### How to earn Points on Twitch
    - Watching the stream
    - Writing chat messages
    - Supporting with bits
    - Supporting with subs / gift subs
    - Raiding the channel
    
    #### How to earn Points on YouTube
    - Writing chat messages
    - Subscriptions
    - Super Chat
    - Super Sticker
    - Memberships
    
    #### Available Twitch commands
    - !addpoints "<user>" <amount> - Adds a specific amount of points to a user
    - !bits - Check your current bits
    - !followage - Check how long you have been following the channel
    - !gamble <amount> - Gamble a specific amount of points
    - !giftpoints "<user>" <amount> - Gift another user some of your points
    - !messages - Check how many messages you have written
    - !points - Check your current points
    - !raids - Check how often you raided this channel
    - !subs - Check with how many subs you supported this channel
    - !title - Check your current title
    - !top10 - Check the top 10 leaderboard
    - !top10watchtime - Check the top 10 leaderboard for watchtime
    - !watchtime - Check your watchtime
    
    #### Available YouTube commands
    - !addpoints "<user>" <amount> - Adds a specific amount of points to a user
    - !gamble <amount> - Gamble a specific amount of points
    - !giftpoints "<user>" <amount> - Gift another user some of your points
    - !membership - Check how many month you had a membership
    - !messages - Check how many messages you have written
    - !points - Check your current points
    - !subscriber - Check if you are subscribed to this channel
    - !superchat - Check with how much you supported this channel in super chats
    - !supersticker - Check with how much you supported this channel in super stickers
    - !title - Check your current title
    - !top10 - Check the top 10 leaderboard
    
    #### Available extension commands
    - LS: Modify Points - Add / Remove / Set the points a specific user has
    - LS: Check Points - Check the amount of Points a user has
    - LS: Pay Points - Check if a user has enough points to redeem something. If yes, it will substract this amount of points and return true in the variable. Otherwise it will return false.
    - LS: Modify Watchtime - Add / Remove / Set watchtime for a user (amount is in minutes)
    - LS: Check Watchtime - Check the watchtime of a specific user
    - LS: Check Follow Duration - Check the follow duration of a specific user (returns false if they are not following)
    - LS: Modify Values - Add / remove / set the amount of subs / bits / raids / etc a specific user has
    - LS: Check Values - Check the amount of subs / bits / raids / etc a specific user has
    - LS: Check Title - Check the current title of the user, returns undefined if titles are deactivated
    
    #### Disclaimer
    - This extension can not track what users have used before the installation, so the amount of messages, bits, subs, etc will be counted from the start of this extension installation and will only count up, as long as SAMMI is running
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
