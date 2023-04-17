---
layout: ext_single
title: Active Window
slug: active-window
desc: Get your current active window and its state as a variable in SAMMI. 
category: utilities
date: '2022-08-03T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/sammi-active-window
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: active_window.png
trailer: https://www.youtube.com/embed/psPiUVRTFnc
screenshots_local: active_window_ss.png , active_window_ss2.png
screenshots_ex: 
version: 1.0
sammi_version: any
platform: Any
overview: |
    **Simple extension to get your current active window and its state (full screen vs. windowed) as a variable in SAMMI.**

    For example, it can be useful for when you want to switch your scenes depending on what game you're playing and whether it's in full screen mode or not. 

    **Important Note**
    - Fullscreen state is only detected for apps running on your main monitor/desktop.  
    - The extension uses AutoIt script to work.  You do not need to install any dependencies as it is already all compiled. 
    - It has been tested only on Windows 10.

    **Special thanks goes to [MisterK](twitch.tv/misterk_qc) for migrating the extension to SAMMI.** 
setup: |
    1. Place the *inner* Active_Window folder in `SAMMI/SAMMI Receiver(PC)/Ext` folder.
    2. Install the extension. You can follow the [Extension Install Guide](/install).
    3. Press **Active Window Start Scanning** button. 
    4. Press **Example Use** button to see an example of how you can use this exension. Your active window and its state will be displayed as a yellow notification alert in your Receiver.
    5. Press **Active Window Stop Scanning** button if you wish to terminate the script and stop scanning for active window. 

    If your Antivirus doesn't like running the .exe file, you can use the .a3x file instead. Instructions can be found in the **blue button in your premade deck**. 

    Please do NOT rename or move this folder outside of Receiver/Ext folder and do NOT rename of move any of the files within this folder. 
    They're all important for the extension to correctly function. 

    **Folder Contents**\
    `LBActiveWindow.exe` - compiled script which scans for active window process name and size\
    `LBActiveWindow.a3x` - compiled script but without the final exe. Must be run with AutoIt installed. Might work better than the .exe version if your antivirus is too aggressive.\\
    `LBActiveWindow.au3` - uncompiled script. Can be edited in AutoIt. \
    `activewindow.txt` - the script saves the active window process name and size into this txt file\
    `LBActiveWindowKill.bat` - batch file to kill the currently running script \
    `LBActiveWindowKill.vbs` - visual basic script to run the batch file silently

    *Note: Your antivirus may not like the .exe file included in the zip, which is a compiled AutoIt script to detect your active window.  
    You can give it a permission to execute it or use its non exe version, just follow the instructions in the blue button in your premade deck!*
testers: Melonax
privacy_collect: false
---


