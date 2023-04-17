---
layout: ext_single
title: Puzzle Game
slug: puzzle-game
desc: Transform any OBS source into a puzzle game for your viewers.
category: games 
date: '2022-07-13T00:00:00-05:00'
permalink: extensions/games/:slug
download_url: https://christinak.itch.io/sammi-puzzle-game
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: puzzle_game.png
trailer: https://www.youtube.com/embed/fL8GVWe1bv8
screenshots_local: puzzle_game_ss0.png, puzzle_game_ss.png, puzzle_game_ss2.png, puzzle_game_ss3.png
version: 1.0
sammi_version: Any
platform: Any
overview: |
    **This extension allows you to transform any OBS source into a puzzle game. Your viewers can use the chat to swap the individual pieces to solve it!**  

    Great interactive game for when you're away from your screen. You can create a new puzzle game out of any source or scene on the fly! 

    **Fully Automatic**  
    It's extremely simple to create a new puzzle game! You just tell the extension which OBS source to use and how difficult you'd like it to be. It will automatically create a new scene with all the pieces (and their coordinates) and add it as a source to your original scene.\
    After that you can just press the Start button! (in some cases there might be some minor adjusting needed for size/position of the nested scene)  

    [video](https://www.youtube.com/embed/t-nGpUvbRZk)[/video]

    **Multiple puzzle scenes**  
    Create a puzzle game for multiple sources or scenes! You can have as many as you'd like and freely swap between them, depending on your current scene! 

    **Huge Customization**  
    Choose the grid size (difficulty of the puzzle), customize borders and margins between the pieces, pick a font for the  coordinates and choose your own colors for everything!

    [video](https://www.youtube.com/embed/swqONhTFmPE)[/video]
    [video](https://www.youtube.com/embed/4rSH2JZqyzg)[/video]

    **Animations and sound effects**  

    Shuffling and moving pieces is fully animated and comes with optional sound effects! And you can easily swap out the sound effects for your own as well!

    **Automatically announce winners**  
    The game can automatically detect when the puzzle is solved and even keeps track of which viewer placed the most pieces right! 

    **Reshuffle and Give up commands**  
    You or your mods can reshuffle or auto solve the puzzle at any time. 

    **Leaderboard**
    Fully automatic Leaderboard for your current and all the previous Puzzle games.

    **Important note**  
    The extension requires the following OBS plugins to be installed (minimum recommended versions): OBSWS,  ShaderFilter (1.21), StreamFX (0.10.0.0) and Move Transition (2.4.4). Move transition is especially important to update to the latest version.\
    There's no migration function for your current puzzle scenes from LioranBoard 1, you will need to recreate them in SAMMI.

    *Check out the extension in action, thank you  JimmyPotatoTV !*
    [video](https://clips.twitch.tv/embed?clip=CrepuscularAmazingSwanPlanking-PYMJJkW5M5i1SkEw&parent=sammi.solutions)[/video]
setup: |

    <div class="alert alert-warning mt-2" role="alert">There's no migration function for your current puzzle scenes from LioranBoard 1, you will need to recreate them in SAMMI.</div>

    1. Place `puzzle_game` folder in `SAMMI/Ext` folder (create the Ext folder if it does not exist yet). 
    2. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install). 
    3. Read all the comments in the red **Puzzle Settings** button in your premade deck. It contains information on how to fill out all the values. Save all the changes. 
    4. Press the blue **Create Puzzle** button while connected to OBS and Bridge, and wait. You should get a popup once it's done creating your puzzle scene. You might need to make small adjustments to the position/size of the newly created nested scene, but in most cases it should perfectly overlap with your original source. 
    5. Edit the green **Start Game** button. Read the comments and only edit the required fields. Save all the changes. 
    6. Press **Start Game** button while you're connected to OBS and on your scene from where the Puzzle Game was created. You can now use a chat command `!puzzle A1 to B1` (for example) to move the puzzle pieces.
    
    - **Current Game Info** button will show you information about the currently running puzzle game
    - Press **Leaderboard** button to send current Leaderboard information to your chat. Leaderboard is saved into `puzzle_leaderboard.csv` file in your `SAMMI/Ext/Puzzle_Game` folder for each completed game with the username who had the most correct moves. Do not manually edit the file. 
    - Press **Solve Puzzle** button if you want to prematurely end the game. 
    - Press **Shuffle Puzzle** button to reshuffle the puzzle.
    - Press **Reset Puzzle** button to clear all current puzzle variables and reset current game's leaderboard
    - Edit **Puzzle Sounds** button if you wish to use your own sounds for when pieces are shuffled/moved
testers:
privacy_collect: false
---