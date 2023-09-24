---
layout: ext_single
title: Folder Files
slug: folder-files
desc: Scan, search and manage all your files
category: utilities
date: '2023-07-31T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/folder-files
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: folder-files.png
screenshots_local: folder-files-deck.png
version: 2.0
sammi_version: Any
platform: Any
overview: |
    This extension allows you scan a folder and manipulate files with lots of useful features.  

    #### Features
    **File and Folder Manipulation**
    - Scan all files in a folder and filter by extension, sort alphabetically, numerically, by date modified, or size
    - Retrieve a random file in a folder
    - Identify the last modified file in a folder
    - Get the size of a file
    - Rename, move, or delete a file (moved to the trash bin for safety)
    - Create or delete a folder (moved to the trash bin for safety)  

    **File Content Commands**
    - Read the last line of a file
    - Count lines in a file
    - Count files in a folder
    - Find specific strings in files

    **Advanced Commands**
    - Compress and uncompress a folder
    - Get the length of a media file (requires FFmpeg)

    **Disclaimer**: *This extension provides optional functionality that can be utilized if you have FFmpeg installed on your system. 
    Please note that FFmpeg is not distributed with this extension, nor is it required for the extension's primary functionality. 
    If you choose to use FFmpeg with this extension, you must download it separately from the official source: https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip, and     the extension will guide you regarding its usage. 
    Please familiarize yourself with FFmpeg's licensing terms and potential patent implications before use.*
setup: |
    <div class="alert alert-info" role="info">This guide is intended for the new overhauled Folder Files extension which is currently in beta for my Patrons.</div>
    
    **Important Information**:   
    If you have the old version of this extension, Get Folder Files, installed already, please completely remove the extension first by going to SAMMI Core - Bridge - Uninstall before installing this one. You will need to migrate all your existing buttons, as this extension has been completely overhauled.

    1. Make sure you're on the [latest version of SAMMI](https://sammi.solutions/docs/getting-started/data-backup) and **install the extension**. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Make sure SAMMI is connected to Bridge. **Bridge must be running at all times and be connected to SAMMI for Folder Files extension to work.**
    3. Your basic setup is finished! Please note the premade deck only serves you to review how to use the extension, with some example buttons.   
    I recommend you create separate buttons in a different deck, so you're able to easily update the extension in the future without overriding your custom made buttons or commands (since the premade deck will be completely overriden if there are any updates). 

    <div class="alert alert-info" role="info">If you notice a command does not work as intended, please try running SAMMI as administrator to avoid permission errors.</div>

    ##### How to download and set up FFmpeg
    Get Media Length command works with both native Windows method, or with FFmpeg. FFmpeg seems to be more precise for some files, as the native Windows method rounds it down to the nearest second.
    If you wish to use Get Media Length command with FFmpeg, you will need to download FFmpeg. Please click on 'Set Up FFmpeg' button and follow the instructions. 

    #### Available Commands

    <div class="alert alert-warning" role="warning">The following commands require you to use <a href="https://sammi.solutions/docs/commands/wait#waituntilvariableexists">Wait Until Variable Exists</a> command, as they do not return the result immediately.</div>

    ##### Get Folder Files
    This command helps you find all files in a certain folder. You can choose to only return  certain types of files and order them in different ways. 

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path to the folder where the files are located |
    |File Extensions | The types of files you want to return. A comma-separated string with all allowed file extensions. Leave empty to allow all. |
    |Sort Order | Sort the results alphabetically, by last date modified or by size |
    |Save As Full Path | Save the results as full path, or just a filename |
    |Save Variable As | Name of the array to save all the files. Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Get a Random File
    This command helps you pick a file at random from a certain folder. You can choose to only pick from certain types of files.

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path to the folder where the files are located |
    |File Extensions | The types of files you want to return. A comma-separated string with all allowed file extensions. Leave empty to allow all. |
    |Save As Full Path | Save the result as full path, or just a filename |
    |Save Variable As | Variable name to save the random file name to. Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Get Last Modified File
    This command finds the most recently changed file in a folder. You can choose to only look at certain types of files.

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path to the folder where the files are located |
    |File Extensions | The types of files you want to return. A comma-separated string with all allowed file extensions. Leave empty to allow all. |
    |Save As Full Path | Save the result as full path, or just filename |
    |Save Variable As | Variable name to save the last modified file name into. Will be left blank (set to an empty string) if something goes wrong|
    {:class='table table-secondary w-auto table-hover'}

    ##### Find String in Files
    This command helps you find certain words in files in a folder.

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path to the folder where the files are located |
    |File Extensions | The types of files you want to search. A comma-separated string with all allowed file extensions. Leave empty to allow all. |
    |String to Find | The word or phrase you're looking for |
    |Recursive Search | Whether to search for the string in all subfolders. This might take a while to return results if set to true. 
    |Save Variable As (Filename) | The variable name to save the resulting file name into. Will be left blank (set to an empty string) if something goes wrong |
    |Save Variable As (Line) | The line number where the string occurred in the filename. Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Get File Size
    This command tells you how big a file is.

    | Box Name | Description|
    |--------|-------|
    |File Path | The path where the file is located |
    |Unit | Do you want the size in KB or MB? |
    |Save Variable As | The variable name to save result into (will be saved as number). Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Count Files in a Folder
    This command counts the number of files in a folder. You can choose to only count certain types of files.

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path to the folder where the files are located |
    |File Extensions | The types of files you want to return. A comma-separated string with all allowed file extensions. Leave empty to allow all. |
    |Save Variable As | Variable name to save result into (will be saved as number). Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Count Lines in a File
    This command counts the number of lines in a file.

    | Box Name | Description|
    |--------|-------|
    |File Path | The path where the file is located |
    |Save Variable As | The variable name to save result into (will be saved as number). Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Read Line in a File
    This command reads a certain line or the last line in a file.

    | Box Name | Description|
    |--------|-------|
    |File Path | The path where the file is located|
    |Line Number | The line number you want to read |
    |Read Last Line | Check this if you want to read the last line in the file |
    |Save Variable As | The variable name to save result into. Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}

    ##### Create a Folder
    Creates a new folder in the specified path.

    | Box Name | Description|
    |--------|-------|
    |Folder Path | The path where to create the new folder |
    {:class='table table-secondary w-auto table-hover'}

    ##### Move a File
    Moves a file to another location.

    | Box Name | Description|
    |--------|-------|
    |Old File Path | The current path where the file is located |
    |New File Path | The new file path to move the file to. Including the filename and its extension. |
    {:class='table table-secondary w-auto table-hover'}

    ##### Rename a File
    Renames a file.

    | Box Name | Description|
    |--------|-------|
    |File Path | The file path to rename |
    |New Name | The new name for the file. Don't forget to include the type of file (like .jpg or .txt) |
    {:class='table table-secondary w-auto table-hover'}

    ##### Delete a File/Folder
    This command puts a file or folder in the recycle bin.  
    It's a safer option than using the built in native command File: Delete File in SAMMI, which permanently deletes it.

    | Box Name | Description|
    |--------|-------|
    |File/Folder Path | Path to the file or folder where it's located |
    {:class='table table-secondary w-auto table-hover'}

    ##### Compress a File/Folder
    Compresses (zips up) the specified file or folder.

    | Box Name | Description|
    |--------|-------|
    |File/Folder Path | Path to the file or folder where it's located|
    |Compressed File Path | Path to the newly compressed file |
    {:class='table table-secondary w-auto table-hover'}

    ##### Uncompress a File
    Uncompresses (unzips) the specified file.

    | Box Name | Description|
    |--------|-------|
    |Compressed File Path | Path to the compressed file where it's located |
    |Uncompressed File Path | New path to the uncompressed file/folder |
    {:class='table table-secondary w-auto table-hover'}

    ##### Get Media Length
    This command tells you how long a media file lasts.  
    You need to have FFmpeg set up to use this if you check 'Use FFmpeg'. Please press 'Set Up FFmpeg button' if you haven't done so already.

    | Box Name | Description|
    |--------|-------|
    |Media File Path | Path to the media file |
    |Unit | Do you want the length in seconds, minutes, or hours? |
    | Use FFmpeg | Whether to use FFmpeg. Native method seems to round it down to the nearest second for some files.
    |Save Variable As | Variable name to save the result into (will be saved as a number). Will be left blank (set to an empty string) if something goes wrong |
    {:class='table table-secondary w-auto table-hover'}
privacy_collect: false
---