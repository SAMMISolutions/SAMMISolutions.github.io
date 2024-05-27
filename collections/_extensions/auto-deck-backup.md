---
layout: ext_single
title: Auto Deck Backup
slug: auto-deck-backup
desc: Automatically backup your decks to local and cloud storage.
category: utilities
date: '2024-05-25T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://christinak.itch.io/auto-deck-backup
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: auto_deck_backup.png
screenshots_local: auto_deck_backup_ss.png, auto_deck_backup_ss2.png, auto_deck_backup_ss3.png
version: 1.0
sammi_version: 2024.2.0
platform: Any
overview: |
    <div class="alert alert-info mt-3" role="alert">Currently available to my <a href="https://www.patreon.com/Christinna">Patrons</a> as an early access perk.</div>

    **Auto Deck Backup** is an extension that allows you to automatically backup your decks to local and cloud (Github) storage. You can set the interval for backups and choose the storage location.

    #### Features
    - **Backup Decks Locally**
    - **Backup Decks to Github (optional)**
    - **Set Backup Interval**
    - **Automatically delete old backups (local only)**
    - **Cloud backup comes with encryption**
    - **Premade deck with all available commands and explanations**

    **Important Note**  
    - The extension may not properly work on non Windows devices.
    - The developer is not responsible for any data loss or corruption due to the use of this extension, nor for any issues with the cloud storage provider.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Configure the extension inside the Settings button in the premade deck that comes with the extension:
        1. **Local Backups**
            - `Enable Local Backups` - Check this option to enable local backups.
            - `Backup Folder Path` - Specify the full folder path where the backup files will be saved.
                                - By default, it's in your SAMMI/ext/Auto Deck Backup folder.
            - `Backp Freq.` - Set how often to back up your files, in minutes.
            - `Auto Remove Old Backups` - Choose whether to automatically delete old backup files
            - `Max. Backup Days` - Set the maximum number of days to keep backup files
                                (if Auto Remove Old Backups is enabled.)
        2. **Cloud Backups**
            - `Enable Local Backups` - Check this option to enable cloud backups.
            - `Backp Freq.` - Set how often to back up your files, in minutes.
            - `Github Username` - Your GitHub username, which will be used to back up your decks
            - `Github Repo` - Name of the GitHub repository where you want to back up your decks.
            - `Github Branch` - Name of the GitHub branch where you want to back up your decks. 
                            - The default is main when you create a new repository.
            - `Github token` - your fine grained GitHub token with write access to this backup repository.
            - `Encryption password` - Set a password to encrypt your deck data with AES 256.
                                - The more complex the password, the more secure the files will be.
                                - WARNING: If you forget your password, you will NOT be able to restore
                                  your files, and I will not be able to help you.  

            *Please don't forget to regularly manually clear your backup repository of old backup files.*
        3. Click on **Save** and **Ok** to save the button, and reload your Bridge.\
           Your decks data should now be automatically backed up depending on the settings you've chosen.\
           Please **double check the backups are getting created**. If you encounter any issues, please try using paths that do NOT contain any special or non English characters.\
           The extension will automatically load when you connect to Bridge.

    #### How to setup your Github account and repository for backups {#github-backup}
    1. First, create a new **[GitHub](https://github.com) account** if you don't have one yet.
    2. Navigate to **[GitHub](https://github.com)**, click on the + sign dropdown, and select **New Repository**.
       ![image](auto_deck_backup_setup//1.png)
    3. Set the name for your new repository, and make it **Private**. Click on **Create Repository**.
       ![image](auto_deck_backup_setup//2.png)
    3. Click on your profile icon and go to **Settings**. Click on **Developer settings** in the left bar all the way down.
       ![image](auto_deck_backup_setup//3.png)
    5. Click on **Personal access tokens** and then **Fine-grained tokens**. Click on **Generate new token**:
       ![image](auto_deck_backup_setup//4.png)
    6. Adjust the settings as follows:
        - Name your new token and set its expiration date (you'll need to refresh it in SAMMI when it expires).
        - Under **Repository Access**, choose **Only select repositories** and select the backup repository you created in step 2.
        ![image](auto_deck_backup_setup//5.png)
        - Under **Permissions** - **Repository permissions**, select **Contents - Read and write**.
        ![image](auto_deck_backup_setup//6.png)
        - Click on **Generate token**.
        ![image](auto_deck_backup_setup//7.png)
        - Save the generated token somewhere safe, and input it in the **GitHub Token** box inside the **Settings** button in your premade deck.
        ![image](auto_deck_backup_setup//8.png)

    #### How to restore your decks from a backup {#restore-decks}
    **Local Backups**
    1. Manually back up your current `decks_data.json` file found in `SAMMI/json/decks_data.json`. You can locate this file by pressing **Open Current Decks Data Folder** button in the premade deck.
    2. Navigate to the backup folder by pressing **Open Local Backup Folder** button
    3. Find and rename the backup file you wish to restore to `decks_data.json`.
    4. Move this renamed file to `SAMMI/json` folder, replacing the existing `decks_data.json` file.\
       **WARNING**: This will overwrite your current decks data.
    5. Reopen SAMMI.

    **Cloud Backups**
    1. Manually back up your current `decks_data.json` file found in `SAMMI/json/decks_data.json`. You can locate this folder by pressing **Open Current Decks Data Folder** button in the premade deck.
    2. Navigate to the repository by pressing**"Open Backup Repository** button.
    3. Download the file you wish to restore.
    3. Use "Decrypt Cloud Backup File" button to decrypt this file.
    3. Rename the decrypted backup file to decks_data.json.
    4. Move this renamed file to `SAMMI/json` folder, replacing the existing `decks_data.json` file.\
       **WARNING**: This will overwrite your current decks data.
    5. Reopen SAMMI.
privacy_collect: false
---