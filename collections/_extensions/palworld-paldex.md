---
layout: ext_single
title: Palworld Paldex
slug: palworld-paldex
desc: Search for Pals in Palworld Paldex and display their stats
category: games
date: '2024-01-25T00:00:00-05:00'
permalink: extensions/games/:slug
download_url: https://christinak.itch.io/palworld-paldex
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: palworld-paldex-icon.png
trailer: https://www.youtube.com/embed/RzzlE1tZMWk
screenshots_local: palworld-paldex-deck.png, palworld-paldex-chat.png
version: 1.0
sammi_version: 2023.3.1 and up
platform: Any
overview: |
    **Palworld Paldex** is an extension for **SAMMI** that allows you to search for Pals in Palworld Paldex and display their stats.

    **Features**  
    - Search for Pals by Name, Paldex Number, Type, Suitability, or Drop.
    - Get detailed stats for each Pal including name, description, types, and more.
    - Easy integration with your SAMMI.
    - Premade deck with all available commands, including example Twitch Chat triggers

    **Important Notes**  
    Paldeck Palworld utilizes some parts of code from an API under the MIT license, available at [https://github.com/mlg404/palworld-paldex-api](https://github.com/mlg404/palworld-paldex-api), deployed on our server. 
    Access to this server is exclusively reserved for use with the SAMMI extension. Unauthorized use of this server for external queries is strictly prohibited.

setup: |
    #### Quick Start 

    1. Install the .sef extension you just downloaded from this page to your SAMMI. Ensure you're on the latest versions of SAMMI.
    2. Open Bridge. It must be running for the extension to work.
    3. Review the premade deck "Palworld Paldex" for all available extension commands. 

    #### Get Pal By Name
    Allows you to search for a Pal by name and get its stats.  
    Use Palworld Paldex Get Pal extension command with the following parameters:

    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Get Pal By | The way you want to search for a Pal | Select "Name" from the dropdown |
    | Max Amount of Results | Not applicable if searching by Name or Paldex Number | N/A |
    | Input | What Pal you're searching for (case insensitive) | Relaxaurus |
    | Save Variable As | Variable name to save the result into, empty string if no results | result |
    {:class='table table-secondary table-hover'}  

    #### Get Pal By Paldex Number
    Allows you to search for a Pal by its Paldex Number and get its stats.  
    Use Palworld Paldex Get Pal extension command with the following parameters:

    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Get Pal By | The way you want to search for a Pal | Select "Paldex Number" from the dropdown |
    | Max Amount of Results | Not applicable if searching by Name or Paldex Number | N/A |
    | Input | Paldex Number you're searching for. Will NOT accept numbers without leading zeroes, e.g. 12 instead of 012. | 050 |
    | Save Variable As | Variable name to save the result into, empty string if no results | result |
    {:class='table table-secondary table-hover'}  

    #### Get Pal By Type
    Allows you to search for a Pal by its Type and get its stats.  
    Use Palworld Paldex Get Pal extension command with the following parameters:


    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Get Pal By | The way you want to search for a Pal | Select "Type" from the dropdown |
    | Max Amount of Results | Maximum amount of pals returned with this type (default is 10) | 5 |
    | Input | Type you're searching for (case insensitive) | water |
    | Save Variable As | Variable name to save the result into, empty string if no results | result |
    {:class='table table-secondary table-hover'}  

    #### Get Pal By Suitability
    Allows you to search for a Pal by its Suitability and get its stats.  
    Use Palworld Paldex Get Pal extension command with the following parameters:

    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Get Pal By | The way you want to search for a Pal | Select "Suitability" from the dropdown |
    | Max Amount of Results | Maximum amount of pals returned with this suitability (default is 10) | 5 |
    | Input | Suitability you're searching for (case insensitive) | watering |
    | Save Variable As | Variable name to save the result into, empty string if no results | result |
    {:class='table table-secondary table-hover'}  

    #### Get Pal By Drop
    Allows you to search for a Pal by its Drop When Captured/Killed and get its stats.  
    Use Palworld Paldex Get Pal extension command with the following parameters:

    | Parameter | Description | Example |
    |-----------|-------------|---------|
    | Get Pal By | The way you want to search for a Pal | Select "Drop" from the dropdown |
    | Max Amount of Results | Maximum amount of pals returned with this drop (default is 10) | 5 |
    | Input | Drop you're searching for (case insensitive) | leather |
    | Save Variable As | Variable name to save the result into, empty string if no results | result |
    {:class='table table-secondary table-hover'}   

    #### General Information
    Each search will return an object (if searching by Name or Paldex Number) or array of objects with detailed Pal information: 

    ```
    name: Pal's name
    key: Paldex Number
    description: Pal description
    aura: - description: Abilities of the aura.
          - name: Name of the aura.
    types: Array of all Pal types
    drops: Array of droppable items.
    image: URL of the Pal's wiki image
    suitabilities: Array of suitable activities.
    suitability: Object of all suitabilities and their levels
    ```

    Example for Relaxaurus entry:

    ```json
    {
        "name": "relaxaurus",
        "key": "085",
        "description": "Contrary to its blasé appearance, it's quite ferocious.\nIt perceives everything in its sight as prey and will stop at nothing to devour it.",
        "aura": {
            "description": "Can be ridden.\nCan rapidly fire a missile launcher while mounted.",
            "name": "Hungry Missile"
        },
        "types": [
            "dragon",
            "water"
        ],
        "drops": [
            "high quality pal oil",
            "ruby"
        ],
        "image": "https:\/\/static.wikia.nocookie.net\/palworld\/images\/0\/01\/Relaxaurus_menu.png\/",
        "suitabilities": [
            "watering",
            "transporting"
        ],
        "suitability": [
            {
                "type": "watering",
                "level": 2
            },
            {
                "type": "transporting",
                "level": 1
            }
        ]
    }
    ```
privacy_collect: false
---