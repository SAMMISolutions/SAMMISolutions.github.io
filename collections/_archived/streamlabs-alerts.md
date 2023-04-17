---
layout: ext_single
title: StreamLabs Alerts
desc: Alerts for new followers, donations, loyalty points, YouTube and more! 
category: alerts
date: '2020-11-01T21:00:00-05:00'
permalink: extensions/alerts/:slug
download_url: https://github.com/christinna9031/LB-Streamlabs-Alerts/releases
developer_name: Christina K.
developer_url: https://christinak.itch.io
version: 1.2a
sammi_version: 1.42 
platform: Twitch, YouTube
overview: |
    SAMMI extension for Streamlabs alerts.  

    **Available Alerts**:  
    Twitch Follower, Donation, YouTube Follower, Loyalty Store Redemption, Merchandise 
    The follower alert in this extension is instant compared to the preinstalled one in SAMMI.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Edit Streamlabs Alerts INIT button.\
    Fill out all the values and refresh your Bridge (or close and reopen SAMMI). The button will be automatically initiated every time you connect to Bridge. You can retrieve your socket API token at [https://streamlabs.com/dashboard#/settings/api-settings](https://streamlabs.com/dashboard#/settings/api-settings) in API Tokens. You can enable/disable alerts you wish to receive.
    3. The extension comes with premade buttons to make it easier to understand how it works.

    **Follower Alert**\
    This button can replace your default Follower button. As it is connected to Streamlabs websocket, the follower alerts are instantaneous.\
    Trigger: `SLFollowerAlert`

    **Donation Alert**\
    Triggers with any donations coming through StreamLabs.\
    Trigger: `SLDonationAlert`

    **Streamlabs Loyalty Points Redeem**\
    Triggers whenever your viewers redeem StreamLabs loyalty points (not to be confused with Twitch channel points). It only retrieves the username and reward name.\
    Trigger: `SLPoints <rewardname>`. For example, if your reward name is Test, the trigger name will be `SLPoints Test` (case sensitive).

    **Merchandise**\
    Triggers with any product purchased from the Merch Store.\
    Trigger: `SLMerch`  

    **YouTube Subscriber Alert**\
    Triggers with any new YouTube subscribers. Your StreamLabs account needs to be merged with your YouTube account for this to work.\
    Trigger: `SLYTSubAlert`
privacy_collect: false
---