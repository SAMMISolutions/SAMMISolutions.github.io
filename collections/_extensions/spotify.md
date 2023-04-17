---
layout: ext_single
title: Spotify
slug: spotify
desc: Spotify overlay and full control from your Stream Deck
category: audio
date: '2022-02-18T00:00:00-05:00'
permalink: extensions/audio/spotify
download_url: https://christinak.itch.io/sammi-spotify
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: spotify.png 
trailer: https://www.youtube.com/embed/biO0ffqMn5Q
screenshots_local: spotify_ss.png
version: 1.0
sammi_version: 2022.5.0
platform: OBS
overview: |
    <div class="alert alert-success mt-2" role="alert">Spotify is compatible for both OBSWS 4.1 and OBSWS 5.0 (and OBS 25). It requires SAMMI version 2022.4.4 and newer.
    </div>


    **This Spotify extension for SAMMI allows you to display and fully control your Spotify playback directly from your SAMMI.**


    It comes with a full Spotify player for SAMMI, OBS overlay (including viewer song requests overlay), and it's very easy to set up. 

    <div class="alert alert-warning" role="alert">The extension requires Spotify premium account. Without a premium account, you can still display your currently playing track in your OBS overlay, but cannot control playback from within SAMMI.
    </div>


    ##### Overlay for your stream
    Display your current track in your OBS overlay and SAMMI Deck, updated automatically as you listen to Spotify.

    ![Spotify OBS Overlay For Current Track](spotify_ss2.png)

    <hr>

    ##### Current track info
    Send you current track's name and Spotify link (and other info if you wish) to your chat with one press of a button. 

    ![Spotify Current Track Auto Posted to Chat](spotify_track_chat.png)

    <hr>

    ##### Playback controls
    - Play and Pause
    - Next and Previous Track
    - Fast Forwards and Backwards
    - Mute and Unmute
    - Volume Sliders
    - Like and Unlike tracks
    - Toggle Shuffle

    [video](https://www.youtube.com/embed/DkDonkUnV6U)[/video]

    <hr>

    ##### Playlists
    - Display all your playlists and cycle through them, select one to listen to
    - Add a currently playing track to your selected playlist by pressing **+**
    - Remove a currently playing track from your playlist by pressing **-**
    - Create a new playlist

    [video](https://www.youtube.com/embed/2FRUJwLb9DU)[/video]

    <hr>

    ##### Search function
    - Search for tracks by their name and (optionally) their artist 
    - Display search results, cycle through them and select one to start playing it

    [video](https://www.youtube.com/embed/bZiqPZgHdAs)[/video]

    <hr>

    ##### Song Requests 
    - allow your viewers request songs by their Spotify link, or just their name and (optionally) their artist  
    - all requested tracks are added to your track queue and displayed in SAMMI  Deck and your OBS overlay, updated automatically as you progress through them
    - customize your song request tracks overlay (such as maximum amount of displayed tracks or their order)

    [video](https://www.youtube.com/embed/hlS3NAQelbE)[/video]

    <hr>

    ##### Randomize it 
    - Get a random track, album or playlist and start playing it 

    [video](https://www.youtube.com/embed/pcK_h60AsNg)[/video]

    <hr>

    ##### Lyrics
    - Get a link to lyrics of your currently playing track

    [video](https://www.youtube.com/embed/ruip07tST2g)[/video]

setup: |

    <div class="alert alert-info" role="alert">
    Spotify is fully contained in SAMMI. Your Bridge does not have to be running for the extension to work.
    </div>

    <div markdown="1">
   
    0. Update SAMMI to the newest version.
    0. *(This only applies if you already use Spotify for SAMMI/LB2/LB1)*  
    Delete your Spotify scene in your OBS. The new Spotify scene is almost the same, however it now uses move filters and must be replaced. You must not already have the following sources in your OBS either: `Spotify Song, Spotify Artist, Spotify Image, Spotify Song Req Queue, Spotify Background, Spotify Queue BG`.
    1. Install or update [OBS Move Transition filter](https://obsproject.com/forum/resources/move-transition.913/) to the latest version.
    2. Install the extension while connected to OBS. You can follow the [How to install an extension](https://sammi.solutions/docs/faq/general#installanextension) guide.
    3. A new Spotify scene should be added to your OBS. If you use multiple OBS, that's ok, we will install it in the next steps. 
    4. Go to your Spotify premade deck and press the green **Setup** button. Type F, press OK and **follow all the onscreen instructions**.   
    If the URL to retrieve your credentials doesn't open (as it's been migrated to a different platform and you might still be on an older version of the extension), please use this link to [Link your Spotify account](https://christinak.ca/extension-files/spotify-654879/auth.html).
    5. Press red **Install OBS** button to add the Spotify scene to your OBS.
    6. You're done!

    </div>
    
    <div class="alert alert-info" role="alert">Your Spotify settings (from the Setup button) are locally saved in a file. You do not need to set them up again if you reinstall Spotify extension.
    </div>

    <div markdown="1">
    <hr />
   
    ##### Protected Buttons
    This extension’s basic version has most of its buttons protected. You still get a fully functional extension and can freely modify or delete any buttons or commands, attach your own triggers etc. **You cannot open any nested commands** (these contain 'backend' commands that would be easy to break by non experienced users), **copy the commands or copy the buttons themselves**. 


    If you wish to be able to fully modify the extension (only recommended for very advanced users), you can purchase the **premium version** instead, which has all its buttons unlocked!
    **I do not provide documentation for any unlocked buttons and it's up to you to figure out their functionality.** 

    <hr />

    ##### Automatic Buttons
    You might notice these four black buttons. They're **fully automatic** (triggered from other buttons) and are not to be interacted with. 

    ![](spotify_automatic.png)

    <hr />

    </div>

    ##### Buttons: 
    <div markdown="1">
    - [Setup](#spotify_setup)
    - [Install OBS Overlay](#Install_obs)
    - [INIT](#spotifyINIT)
    - [Play](#spo_play)
    - [Like or unlike a track](#spo_like)
    - [Wake up Spotify](#spotify_wakeup)
    - [Song Request](#spotify_sr)
    - [Get Playlists](#spotify_get_playlists)
    - [Add to Playlist](#spotify_playlist_add)
    - [Remove from Playlist](#spotify_playlist_remove_)
    - [Search Tracks](#spotify_search_tracks)
    - [Random Track](#spotify_random_track)
    - [Random Album](#spotify_random_album)
    - [Random Playlist](#spotify_random_playlist)
    - [Queue a Track](#spotify_queue)
    - [Get Lyrics](#spotify_lyrics)
    </div>
    <br>

    <hr>

    <!--Setup -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    ![](spotify_setup.png)
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_setup"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    You can modify all your Spotify settings in this button. Press it and follow the on-screen instructions.
    - **Set Credentials and Refresh Token** - set up your credentials and refresh token, required for SAMMI to connect to Spotify
    - **Set Size Limit for Queue tracks displayed
    in OBS Overlay** - set the maximum amount of song request tracks displayed in your OBS overlay (default = 10)
    - **Set Length Limit for Queue tracks displayed in OBS Overlay** - set the maximum character length for request track names in your OBS overlay (default = 35)
    - **Enable or disable reverse order of Queue tracks displayed in OBS Overlay** - decide whether you want to display your Queue tracks in your OBS in reverse order (i.e. the next one in the list will be on top
    and not bottom)
    - **Set Preferred Spotify Device (optional)**- set your preferred Spotify device to transfer your playback to when you launch SAMMI or use the Wake Up button. Skip this step if you always use the same device for your
    Spotify music while streaming.
    - **Set OBS Name (optional if using multiple OBS)** - set OBS name to install and control your OBS overlay. Skip this step if you're only using one single OBS.
    - **Set Spotify Errors** to show up as alerts or
    tray notifications - any spotify error is shown as a yellow alert at the bottom of SAMMI by default. You can set them to show as tray notification bubbles instead.
    </div>
    </div>
    </div>
    <hr />

    <!--Install obs -->

    <div class="container">
    <div class="row">
    <div class="col col-3 d-flex mb-2" markdown="1">

    ![](spotify_install.png)

    </div>
    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="Install_obs"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Creates a new Spotify scene, its sources and filters in your OBS. This will fail if there is already **an existing Spotify scene in your OBS**. In this case you want to delete the scene, restart OBS and try again.
    </div>
    </div>
    </div>
    
    <hr />

    <!-- INIT -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](spo_on.png)

    </div>
    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotifyINIT">INIT</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    This button is fully automatic. But you can press it if your deck doesn't properly load up.
    </div>
    </div>
    </div>

    <hr />

    <!--Track info -->

    <div class="container">
    <div class="row">
    <div class="col col-3 d-flex mb-2" markdown="1">
    
    ![](spotify_track_info.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_random_album"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Retrieves all the info there is regarding your current track. If you just want to share a link of your currently playing track, you can press the big button showing the track name and artist to post it in the chat.
    </div>
    </div>
    </div>
    <hr />

    <!-- PLAY -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](spo_play.png)

    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spo_play">PLAY/RESUME</h4>
    </div>
    </div>
    <div class="row">
    <div class="col">
    <p>If you do not fill out the <code class="language-plaintext highlighter-rouge">id</code> inside this button, it will resume the current track.</p>
    <p>If you fill out the <code class="language-plaintext highlighter-rouge">id</code>, it will start playing the selected track/album/playlist.</p>
    <p>Id can be:</p>
    <ul>
    <li>
    track uri: <span class="user-select-all"><code>spotify:track:4boaU9XaS1g6U1nV4lEsMl</code></span>
    </li>
    <li>
    track link: <span class="user-select-all"><code>https://open.spotify.com/track/4boaU9XaS1g6U1nV4lEsMl</code></span>
    </li>
    <li>
    album uri: <span class="user-select-all"><code>spotify:album:5duyQokC4FMcWPYTV9Gpf9</code></span>
    </li>
    <li>
    album link: <span class="user-select-all"><code>https://open.spotify.com/album/5duyQokC4FMcWPYTV9Gpf9</code></span>
    </li>
    <li>
    playlist uri: <span class="user-select-all"><code>spotify:playlist:1N0YOYoITjQMeyZMMFhkid</code></span>
    </li>
    <li>
    playlist link: <span class="user-select-all"><code>https://open.spotify.com/playlist/1N0YOYoITjQMeyZMMFhkid</code></span>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <hr />

    <!-- LIKE UNLIKE -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">

    ![](spo_like.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spo_like">LIKE/UNLIKE A TRACK</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Adds or removes a currently playing track from your library.
    </div>
    </div>
    </div>
    <hr />

    <!-- WAKE UP -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](spo_wakeup.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_wakeup">WAKE UP</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Spotify might sleep if there's no activity (i.e. it's paused) after a while. You can use this button to wake it up, so it can get your current track and start receiving commands from SAMMI again.
    </div>
    </div>
    </div>
    <hr />

    <!-- song request -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
       
    ![](spo_sr.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_sr">SONG REQUEST</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Let your viewers request a specific song and add it to your track queue.
    
    Chat trigger is `!sr *` (only enabled for broadcaster and mods by default)
    - the * can be a full spotify link or uri
    - the * can be also a song name (with an optional artist name separated by #)
    
    **Examples of chat commands:**  
    - `!sr https://open.spotify.com/track/4boaU9XaS1g6U1nV4lEsMl`
    - `!sr Kiss from a rose`
    - `!sr Kiss from a rose # Seal`  

    Channel point redeem name is `Song Request` (change it if you wish) and the message is the `*`.  
    
    **Examples of channel point redeem messages:**
    - `https://open.spotify.com/track/4boaU9XaS1g6U1nV4lEsMl`
    - `Kiss from a rose`
    - `Kiss from a rose # Seal` 
    
    Once this button is triggered, the track will be added to the end of your current track queue.

    You can go inside the button and modify messages sent to your chat (look for **EDITABLE** comments).  

    ![](spotify_songRequest.png)

    </div>
    </div>
    </div>
    <hr />

    <!-- GET PLAYLISTS -->

    <div class="container">
    <div class="row">
    <div class="col col-4 d-flex mb-2" markdown="1">
    
    ![](spotify_get_playlists.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_get_playlists"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    By default this button **retrieves your playlists**.  

    Fill in the user ID inside the button to retrieve playlists from another user or leave empty for your own playlists.  

    Your playlists will be displayed in a list above the button and you
    can cycle through them by using the arrows.  
    Click on a playlist to start playing it.

    ![](spotify_playlist_list.png)

    <div class="alert alert-warning" role="alert">All your playlists must be added to your profile for SAMMI to see them. Right click on a playlist in your Spotify player - Add to profile</div>

    </div>
    </div>
    </div>
    <hr />

    <!--Add to playlist -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](spo_add2.png)

    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_playlist_add">ADD TO PLAYLIST</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Adds a currently playing track to your playlist marked with **green** color (the one in the middle).
    </div>
    </div>
    </div>
    <hr />

    <!--Remove from playlist -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](spo_remove2.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_playlist_remove_">REMOVE FROM PLAYLIST</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Removes a currently playing track from your current playlist.
    </div>
    </div>
    </div>
    <hr />

    <!--Create a playlist -->

    <div class="container">
    <div class="row">
    <div class="col col-2 d-flex mb-2" markdown="1">
    
    ![](addplaylist2.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_playlist_remove_">CREATE A PLAYLIST</h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Creates a new playlist.   

    Press the button to fill out the **playlist name**, **description** (optional) and whether you want the playlist to be made **public**. (Note: The popup comes from your SAMMI, not Stream Deck)    


    You can also go inside the button and manually fill out the variables.
    </div>
    </div>
    </div>
    <hr />

    <!--Search tracks -->

    <div class="container">
    <div class="row">
    <div class="col col-4 d-flex mb-2" markdown="1">
    
    ![](spotify_search_Tracks.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_search_tracks"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Searches for a track by its name and (optionally) its artist.  
    
    **Press the button to fill out the track name and artist.** (Note: The popup comes from your SAMMI, not Stream Deck)  

    You can also go inside the button and manually fill out the variable `query` instead:
    - To search ONLY by track name: Use the name of the track: `Caribbean Blue`.
    - To search by a track AND artist: Use the name of the track + # + artist name: `Carribean Blue # Enya`  
    
    Your search results will be displayed in a list above the button and you can cycle through them by
    using the arrows. Click on a result to start playing it.


    ![](spotify_search_list.png)

    </div>
    </div>
    </div>
    <hr />

    <!--Random Track -->

    <div class="container">
    <div class="row">
    <div class="col col-4 d-flex mb-2" markdown="1">
    
    ![](spotify_random_Tracks.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_random_track"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Retrieves a random Spotify track and starts playing it.  

    Modify the button commands if you wish, there's an example showing how to post the random's track name in your chat.
    </div>
    </div>
    </div>
    <hr />

    <!--Random Album -->

    <div class="container">
    <div class="row">
    <div class="col col-4 d-flex mb-2" markdown="1">
    
    ![](spotify_random_album.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_random_album"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Retrieves a random newly released album (from Spotify featured) and starts playing it.  
    
    Modify the button commands if you wish, there's an example showing how to post the random's album name in your chat.
    </div>
    </div>
    </div>
    <hr />

    <!--Random Playlist -->

    <div class="container">
    <div class="row">
    <div class="col col-4 d-flex mb-2" markdown="1">
    
    ![](spotify_random_playlist.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_random_playlist"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Retrieves a random playlist for the selected tag (edit it inside the button) and starts playing it.   
    
    If no tag is provided, retrieves a completely random playlist from a random tag.  
    
    **Examples of tag ids:**  

    `hiphop, pop, country, rock, party, netflix, latin, workout, rnb, holiday, mood, indie_alt, sleep, regional_mexican, edm_dance, inspirational, chill, kids_family, decades, fresh_finds, frequency, student, focus, equal, gaming, roots, kpop, instrumental, wellness,  ambient, alternative, pride, romance, in_the_car, classical, jazz, soul, sessions, at_home, dinner, punk, sports, popculture, blues, arab, desi, radar`  
    
    Modify the button commands if you wish, there's an example showing how to post the random's album name in your chat.
    </div>
    </div>
    </div>
    <hr />

    <!--Queue -->

    <div class="container">
    <div class="row">
    <div class="col col-3 d-flex mb-2" markdown="1">
    
    ![](sptoify_queue.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_queue"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Adds a track to the end of the user's current playback queue.  
    
    Modify the id inside the button.
    Id can be:  
    - track uri: `spotify:track:4boaU9XaS1g6U1nV4lEsMl`
    - track link: `https://open.spotify.com/track/4boaU9XaS1g6U1nV4lEsMl`
    </div>
    </div>
    </div>
    <hr />

    <!--Lyrics -->

    <div class="container">
    <div class="row">
    <div class="col col-3 d-flex mb-2" markdown="1">
    
    ![](spotify_get_lyrics.png)
    
    </div>

    <div class="col d-flex align-items-center">
    <h4 class="anchor-header" id="spotify_lyrics"></h4>
    </div>
    </div>
    <div class="row">
    <div class="col" markdown="1">
    Retrieves URL for the lyrics for the current track and opens it in your browser (you can disable this command inside the button).  
    This is by no means perfect, but it should find lyrics for any fairly known songs.
    </div>
    </div>
    </div>
privacy_collect: false
---