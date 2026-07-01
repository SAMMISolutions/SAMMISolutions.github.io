---
layout: ext_single
title: Pokemon Race
slug: pokemon-race
desc: An interactive Twitch chat minigame where viewers can join an open race through chat converted in a random Pokemon.
category: games
date: '2026-07-01T00:00:00-00:00'
permalink: extensions/games/:slug
download_url: https://ko-fi.com/s/99150f651e
developer_name: KevinPorKevin
developer_url: https://kevinporkevin.carrd.co/
icon_local: PokemonRaceIcon.png
screenshots_local: PokemonRaceIcon.png
trailer: https://www.youtube.com/watch?v=TzFw1R8_VZU
version: 1.0
sammi_version: '2026.5.0^'
platform: Twitch
overview: |
    Pokemon Race is an interactive Twitch chat minigame for SAMMI Core and OBS Studio. Viewers can join an open race through chat, receive a random Pokemon, and watch their racers move toward a shared finish line.

	Races support up to 10 players and continue until every participant finishes. Once the race ends, the overlay displays the complete finishing order, while SAMMI receives the ordered player and Pokemon results for use in other buttons and automations.

	The extension includes customizable race settings, editable language fields, automatic OBS overlay setup, and support for more than 1000 Pokemon through externally loaded sprites.

	#### Main Features
	- Join to the race from Twitch chat
	- Random Pokemon assignment
	- Support for 2 to 10 players
	- Configurable join duration time
	- Optional player limit for individual races
	- Complete finishing order
	- Configurable race speed and distance
	- Optional duplicate Pokemon
	- Automatic OBS scene and browser source setup
	- And more!

	#### Included Commands
	- SPR: Start Race: starts a new race.
	- SPR: Join Player: adds a player while registration is open.
	- SPR: Cancel Race: cancels the active race and resets the overlay.

	#### Included Deck Buttons
	- SETTINGS: configures player limits, timings, movement, duplicate Pokemon, and result messages
	- LANGUAGE: customizes overlay text and Twitch chat messages
	- SETUP: configures OBS WebSocket and generates the overlay HTML
	- HELP: sends the configured help message to Twitch chat
	- START RACE: opens a new race
	- JOIN PLAYER: adds a participant through Twitch chat
	- CANCEL RACE: cancels the current race
	- CHAT OUTPUT: sends race Twitch  chat messages
	
	#### Disclaimer
	- This extension is an independent, fan-made project and is not affiliated with Nintendo, Game Freak, or The Pokémon Company.
	- No official Pokemon image assets are bundled. Sprites are loaded from configurable public URLs. The images are not associated with SAMMI.
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---