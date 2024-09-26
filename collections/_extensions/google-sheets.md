---
layout: ext_single
title: Google Sheets
slug: google-sheets
desc: Read and manipulate data in your Google Sheets directly from SAMMI
category: productivity
date: '2022-10-15T00:00:00-05:00'
permalink: extensions/productivity/:slug
download_url: https://christinak.itch.io/sammi-google-sheets
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: gsheets.png
screenshots_local: g_sheets_deck.png
version: 1.0
sammi_version: 2022.4.4
platform: Any
overview: |
    **Access and manipulate data in your Google Sheets straight from SAMMI!**  
    For instance, you can set up your own leaderboard and easily share it with others.

    **Important Reminder**  
    This extension only works with public Google Spreadsheets that were created using it. It won’t be able to access or edit any of your other files.  
    There are some limits on the number of read and write actions you can perform per minute (more details in the documentation).

    **Available commands**  
    - Get Data, Find Data  
    - Append Data, Update Data, Batch Update, Copy Paste, Clear Data  
    - Auto Fill, Auto Sort, Randomize, Find and Replace, Delete Duplicates, Split Text  
    - Merge Cells, Unmerge Cells, Insert Range, Delete Range  
    - Create Spreadsheet, Duplicate Sheet, Add Sheet  

    **Who is this for?**  
    This extension is ideal for users with a basic to advanced knowledge of Google Spreadsheets. You should also be somewhat familiar with SAMMI (like understanding how objects and arrays work).  
    With these skills, you can quickly add, edit, sort, and retrieve data directly within SAMMI!
setup_url: https://docs.christinak.ca/docs/extensions/google-sheets#setup
privacy_collect: true
privacy_policy: The extension ulitizes a custom AWS secure API to retrieve your refresh token, as this is only possible server-side and cannot be done from your Bridge. It never stores or shares any of your credentials and can only ever access public spreadsheets that have been previously created with it.
privacy_auth: true
---