---
layout: ext_single
title: Parachute Game
slug: parachute
desc: This extension let's your viewers jump out of a plane while trying to land on a moving platform
category: games
date: '2025-05-12T00:00:00-00:00'
permalink: extensions/games/:slug
download_url: https://ko-fi.com/s/b165c9077d
developer_name: Chrizzz
developer_url: https://linktr.ee/chrizzz_1508
icon_local: parachute_icon.png
screenshots_local: parachute_ss1.png
trailer: https://sammi.solutions/assets/videos/extensions/parachute.mp4
version: 1.0
sammi_version: '2025.1.1^'
platform: Any
overview: |
    #### Description
    Your viewers can jump out of a moving plane LIVE on stream using their Twitch profile image and try to land on a moving platform for points! 
    The closer they land to the center 🎯, the more points they earn. 
    That way they can compete with others and climb the leaderboard!
    
    #### 🛫 HOW IT WORKS 
    
    Viewers type !jump in chat to skydive from a plane.
    Their profile image floats down with gravity 🌍 and wind 💨 affecting their fall.
    There’s a moving platform to land on — bonus points for landing dead center 💥
    
    #### 🧑‍🚀 VIEWER COMMANDS
    
    !jump → Jump from the plane with your profile pic
    !pg-rank → See your personal rank & number of jumps
    !pg-top10 / !pg-leaderboard → View the top 10 players 🏆
    
    #### 🔧 MOD/ADMIN COMMANDS 
    
    !pg-start → Start the game
    !pg-stop / !pg-end → End the game
    !gravity+ / !gravity- → Increase/decrease gravity
    !wind+ / !wind- → Adjust wind
    !plane+ / !plane- → Control plane speed
    !platform+ / !platform- → Control platform speed
    
    #### ⚙️ CUSTOMIZABLE GAME SETTINGS
    
    All values are fully tweakable to match your stream’s vibe:
    
    gravity → How fast images fall (higher = faster)
    wind → Horizontal drift (higher = more sway)
    plane_speed → Speed of the plane
    platform_speed → Speed of the landing platform
    keep_data → true to keep leaderboard between games, false to reset each time
    
    #### 🧩 EXTENSION COMMANDS
    
    🪂 PG: Jump
    
    Starts a jump (if game is running)
    Returns points earned and saves them in a variable
    
    ⚙️ PG: Modify Values
    
    Change game settings in real-time:
    Gravity, Wind, Plane Speed, Platform Speed
    
    
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
