---
layout: ext_single
title: Crowd Control
slug: cc
desc: Control your game experience through crowd interaction using Crowd Control and SAMMI
category: utilities
date: '2025-07-15T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://ko-fi.com/s/56084d80e5
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: cc_icon.png
screenshots_local: cc_ss1.png, cc_ss2.png
version: 1.1
sammi_version: '2025.1.0^'
platform: Any
overview: |
##Description
Control your game experience through crowd interaction using Crowd Control and SAMMI

## Setup

1. Inside SAMMI go to **SAMMI Bridge**, select **Install an Extension** and then the `Crowd Control.sef` file  
2. Select the platform, username, game, and pack in the Bridge.

## Crowd Control Commands

SAMMI offers several commands for Crowd Control. These commands may take a short time to execute. It is recommended to use **Wait Until Variable Exists** for handling results.

| Command                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Get Effects for current game | Returns an object with all the available effects for the selected game/pack in the bridge. |
| Get Game List           | Returns an object array with all available Crowd Control games.             |
| Get Connection Status   | Returns `0` if not connected, and `1` if connected.                        |
| Toggle Connection Status| Toggles your connection status based on bridge settings; returns `0` or `1`. |

## Crowd Control Triggers

The following triggers are natively available in SAMMI:

| Trigger                 | Description                                                                             |
|-------------------------|-----------------------------------------------------------------------------------------|
| Effect Success          | Triggered whenever an effect is successfully activated.                                |
| Effect Failure          | Triggered whenever an effect fails to trigger.                                         |
| Effect Request          | Triggered whenever an effect is requested—followed by either Effect Success or Failure.|
| Timed Effect Update     | Triggered when a timed effect is updated (e.g. beginning, pausing, resuming).          |


setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
