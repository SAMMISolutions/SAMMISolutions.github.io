---
layout: ext_single
title: Get Folder Files
slug: folder-files
desc: Scan a folder to retrieve all the file names and save them into SAMMI
category: utilities
date: '2022-05-05T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/get-folder-files
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: folder_files.png
screenshots_local: folder_files.png
version: 1.0
sammi_version: Any
platform: Any
overview: |
    This extension allows you scan a folder to retrieve all the file names, optionally filter the file types and save them into a stack and .ini file. Very useful if you need to iterate through a lot of files with different names and file types.  

    **Important Note:** This extension uses a batch file to get all file names. After downloading and unpacking the .zip file, please make sure your antivirus did not delete the file and check its contents by right clicking on the file and selecting edit.
setup: |
    1. Place the whole folder Get_Folder_Files in your SAMMI/Ext folder (create the Ext folder if it doesn't exist yet).
    2. Install the extension in your SAMMI while connected to Bridge.
    3. Edit the premade button in your Get Folder Files deck. Read the instructions inside.
    4. Press the button.
    5. Your files names will be saved in the .ini file you specified in your SAMMI folder.

    Once the button is executed, all file names are saved in the specified .ini file, including their stringified array. The paths in the .ini file will always contain forward slashes, even if you use backward slashes in your file path value. 

    If the contents of your scanned folder change, you can freely rescan the folder, which will automatically override the file names in your .ini file (and delete all non existing ones).  

    If there are any errors, you should get a yellow notification message in your Receiver.
privacy_collect: false
---