---
layout: ext_single
title: Input Validator
slug: input-validator
desc: Validate your viewers input, such as checking for valid URLs, safe images or using regex.
category: utilities
date: '2023-01-07T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/input-validator/patreon-access
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: input_validator.png
screenshots_local: input_validator_ss.png
trailer: https://www.youtube.com/embed/zo-PAYc0yRs
version: 1.0
sammi_version: 2022.5.3 and up
platform: Any
overview: |
    Allows you to validate your viewers input, supports regex as well. 

    ##### Features
    **URL Validator**
    - Is URL, Is Image URL, Is Safe Image URL, Is YouTube Video URL   

    **String Validator**
    - Is Alphanumeric,Is Alpha, Is Numeric, Is Ascii, Is Base64, Is Email, Is Hexadecimal, Is Hex Color, Is JSON      

    **Profanity Validator**
    - default English dictionaty, option to add custom words, choose your own replacement character/word     

    **Regex Validator**
    - Replace, Search, Match and Test

    *Safe Image Validator requires a Google Cloud Account and an API key. Free quota of 1000 validations/month.*

setup: |
    1. Make sure you're on the latest version of SAMMI and install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. In the Settings button, fill it your Google API key if you wish to use Safe Image Validator (see instructions below) and any custom words you wish to filter out in Profanity Validator. 
    2. In each button you will find a comment explaining how to use the commands and one or two examples.

    ##### Safe Image Validator
    This validator requires you to have Google Clount Account which gives you 1000 free units each month (so you can validate 1000 images for free). See pricing info at [https://cloud.google.com/vision/pricing](https://cloud.google.com/vision/pricing).     

    **How to get an API key:**
    [video](https://www.youtube.com/embed/CfSN1OsebBs)[/video]

    1. Go to your [Google Cloud Console](https://console.cloud.google.com/)
    2. Create a new project or use an existing one
    3. Click on `+ Enable APIs` and Servicse
    4. Type 'Cloud Vision API' in the search bar and enable it 
    5. Click on `Credentials -> + Create Credentials -> API key`
    6. Copy paste the API key below
    7. Click on the three dots on the `API key - Edit API Key`
    8. Restrict the key to 'Cloud Vision API'
privacy_collect: false
---