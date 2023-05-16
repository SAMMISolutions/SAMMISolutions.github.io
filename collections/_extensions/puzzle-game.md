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
version: 2.0
sammi_version: Any
platform: Any
overview: |
    **Unleash the fun with the Puzzle Game extension! Transform any OBS source into an interactive game where your viewers swap pieces to solve the puzzle, right from the chat!** 

    Whether you're away from your screen or looking for a fresh way to engage with your audience, this is the perfect tool. Create a captivating puzzle from any scene or source instantly!

    **Seamless Setup**  
    Creating a new puzzle is as easy as 1-2-3! Select an OBS source, set the desired difficulty, and voila! The extension does the rest, automatically generating a new scene with all the pieces and their coordinates.  
    Just hit the 'Start' button and let the fun begin! (In some instances, minor adjustments to the size/position of the nested scene might be necessary.)

    [video](https://www.youtube.com/embed/t-nGpUvbRZk)[/video]

    **Unlimited Puzzle Scenes**  
    Why limit the fun to one scene? Create puzzles for multiple sources or scenes! Switch between them as you wish, based on your current scene!

    **Ultimate Customization**  
    Personalize your puzzle game to your taste! Choose the grid size for puzzle difficulty, tailor the borders and margins between pieces, select a font for coordinates, and handpick colors for every element!

    [video](https://www.youtube.com/embed/swqONhTFmPE)[/video]
    [video](https://www.youtube.com/embed/4rSH2JZqyzg)[/video]

    **Animated Fun and Sound Effects**  

    Watch as the puzzle pieces shuffle and move in smooth animations! Enjoy optional sound effects or swap them out with your personal favorites!

    **Automatic Winner Announcements**  
    The game knows when the puzzle is solved, and it even keeps a tally of which viewer correctly placed the most pieces!

    **Reshuffle and Surrender Commands**  
    You and your mods have the power to reshuffle or auto-solve the puzzle anytime.

    **Leaderboard**  
    Track the champions of your Puzzle games with a fully automatic leaderboard for current and past games.

    *Here's a sneak peek of the Puzzle Game extension in action, thanks to JimmyPotatoTV!*
    [video](https://clips.twitch.tv/embed?clip=CrepuscularAmazingSwanPlanking-PYMJJkW5M5i1SkEw&parent=sammi.solutions)[/video]
setup: |
    ##### Getting Started

    Check out a quick setup guide:
    [video](https://www.youtube.com/embed/xQS24mKv-dU)[/video]

    1. Ensure SAMMI is updated to the latest version. Make sure it's connected to OBS and Bridge.
        <div class="alert alert-warning mt-2" role="alert">Please note that this extension requires OBS Websocket 5.</div>
    2. Ensure the following OBS plugins are installed: 
        - OBS Shader Filter: version 1.21^ [Download](https://github.com/exeldro/obs-shaderfilter/releases)
        - Source Copy: version 0.2.2^ [Download](https://obsproject.com/forum/resources/source-copy.1261/)
        - Move Transition: version 2.4.4^ [Download](https://obsproject.com/forum/resources/move-transition.913/)
    3. Install the extension. Follow the [Extension Install Guide](https://sammi.solutions/extensions/install) for help.
    4. In the Puzzle Game premade deck (added after extension installation), modify the red INIT button:
        - `OBSWS Name`: The name of your OBS, to be used for this extension (matching the name in the SAMMI-OBS Connections menu). By default, it's 'Main'.
        - `OBSWS Port`: The OBS port for this extension (matching the one in the SAMMI-OBS Connections menu). Default is 4455.
        - `OBSWS Password`: Your OBS password, if set (matching the one in the SAMMI-OBS Connections menu).
    5. Save the changes and click the button.

    <div class="alert alert-info" role="alert">This extension sends error logs for uncaught errors to Rollbar automatically. All sensitive data is cleaned, and only the error and its origin are logged. This is to enhance the extension's performance and help me fix any bugs. Opt out via the Bridge - Puzzle Game tab.</div>

    ##### Creating a New Puzzle

    1. Modify the blue 'Create New Puzzle' button:
        - Fill out all required boxes:
            - `New Puzzle Scene Name`: A new name for your puzzle scene.
            - `Source Name`: The source for your puzzle.
            - `Scene Name`: The scene where your puzzle source is located.
            - `Rows`: The number of rows your puzzle should have, with a maximum of 26.
            - `Columns`: The number of columns your puzzle should have.
        - (Optional) Fill out the optional boxes:
            - `Border`: If you want a border around every piece.
            - `Border Thickness`: Border thickness in pixels. Adjust this if your puzzle scene is resized.
            - `Border Color`: Border color. Choose from the color picker.
            - `Text Size`: Size of the puzzle text coordinates. Adjust this if your source is significantly resized.
            - `Text Font`: Font of the puzzle text coordinates. Example: Comic Sans MS.
            - `Text Color`: Color of the puzzle text coordinates. Choose from the color picker.
            - `Outline`: If you want to show a puzzle text outline.
            - `Outline Thickness`: Puzzle text outline thickness. Adjust this based on font size and scene size.
            - `Outline Color`: Puzzle text outline color. Choose from the color picker.
    2. Save the changes and click the button.

    ##### Starting a New Puzzle Game

    <div class="alert alert-warning" role="alert">Before this step, ensure you've already created the puzzle game with the 'Create New Puzzle' button.</div>

    1. Modify the green 'Start Game' button:
        - `Puzzle Scene Name`: The puzzle scene you want to start the game on. This is the scene added with the 'Create' button.
        - `Sounds Enabled`: If you want to enable sounds when pieces are shuffled/moved.
        - `Shuffle Pieces to Mid`: If you want the pieces to first gather in the middle and then spread out when shuffling.
    2. Click the button (or add a Twitch chat trigger to the button, like '!puzzle start').
    3. A new game begins! Your chosen OBS source for the puzzle scene will be hidden and replaced with the puzzle scene. The puzzle will shuffle instantly, ready for your viewers to start playing.

    ##### Shuffling Puzzle Game

    Click the 'Shuffle Puzzle' button. It only works when a puzzle game is already in progress.

    ##### Moving Puzzle Piece

    By default, the chat trigger to move a puzzle piece is '!Puzzle move * to *'.  
    You can customize the button trigger, but don't forget to adjust the block inside the button that manages trigger data. Within the button, you can customize chat messages for when a piece is moved, an incorrect coordinate is given, or when the puzzle is solved.

    ##### Solving Puzzle

    Press the 'Solve Puzzle' button to instantly complete the current puzzle game.  
    Inside the button, check `Reset All` if you want this command to also reset all puzzle variables and clear the current puzzle game's leaderboard. Otherwise, you'll need to manually press the 'Reset Puzzle' button afterwards.

    ##### Resetting Puzzle

    Press the 'Reset Puzzle' button to reset the puzzle. This will reset all puzzle variables and clear the current puzzle game's leaderboard.

    ##### Viewing Leaderboard

    You can view the current leaderboard using the 'Leaderboard' button. Press it once to post the current leaderboard in your chat.  
    This is all managed automatically, including saving the user who made the most correct moves in the last puzzle game.  
    The leaderboard is saved into `puzzle_leaderboard.csv` file in your `SAMMI/Ext/Puzzle_Game` folder for each completed game, along with the username who made the most correct moves.  
    Please avoid manually editing the file.

    ##### Customizing Puzzle Sounds

    Within this button, you can modify the puzzle sounds for when you shuffle the puzzle, move a piece, and when the puzzle game is solved.
testers:
privacy_collect: false
---