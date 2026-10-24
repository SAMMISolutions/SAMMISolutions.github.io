---
layout: ext_single
title: RearSilver Avatar Suite
slug: rearsilver-avatar-suite
desc: Control RearSilver Avatar Suite from SAMMI using its local WebSocket integration.
category: miscellaneous
date: '2026-10-23T00:00:00-00:00'
permalink: extensions/miscellaneous/:slug
download_url: https://raw.githubusercontent.com/rearsilvergaming/RearSilver-Avatar-Suite-SAMMI/main/RearSilver%20Avatar%20Suite.sef
developer_name: RearSilver
developer_url: https://imperialinfusions.com
icon_local: rearsilver-avatar-suite-icon.png
screenshots_local: rearsilver-avatar-suite-sammi.png
version: 0.4.0
sammi_version: 2026.6.0
platform: Windows
overview: |
    Connect SAMMI to RearSilver Avatar Suite and control your avatar through SAMMI buttons, triggers, and actions.

    #### Features

    - Check whether Avatar Suite is available and save its response as a SAMMI object
    - Activate presets
    - Show or hide layers and groups
    - Switch configured effects on or off
    - Run several Avatar Suite changes as one ordered action
    - Use friendly selectors populated from the active Avatar Suite setup
    - Refresh automatically when Avatar Suite's catalogue changes
    - Start with the included example deck

    The extension connects only to Avatar Suite on the same computer. It does not require Twitch credentials and does not send personal information to RearSilver or Imperial Infusions.
setup: |
    This extension requires RearSilver Avatar Suite, SAMMI, and SAMMI Bridge to be running on the same Windows computer.

    1. Download the `.sef` file.
    2. Start RearSilver Avatar Suite.
    3. In SAMMI Core, choose **Bridge**, then **Install an Extension**.
    4. Select the downloaded `RearSilver Avatar Suite.sef` file.
    5. Open the **RearSilver Avatar Suite** tab in SAMMI Bridge.
    6. Confirm that the extension reports **Connected and verified**.
    7. Accept the included **Avatar Suite Examples** deck when SAMMI offers to install it.

    Avatar Suite must be running when a SAMMI action is triggered. Full installation and command details are available in the [integration repository](https://github.com/rearsilvergaming/RearSilver-Avatar-Suite-SAMMI).
privacy_collect: false
privacy_policy: '[RearSilver software privacy policy](https://imperialinfusions.com/pages/rearsilver-software-policy)'
privacy_website: false
policy_declare: 'on'
---
