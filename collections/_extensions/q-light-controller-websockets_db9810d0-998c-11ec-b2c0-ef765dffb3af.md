---
_id: db9810d0-998c-11ec-b2c0-ef765dffb3af
permalink: extensions/miscellaneous/q-light-controller-websockets
developer_name: Przemysław S.
discord_username: '* Hantick'
developer_url: 'https://github.com/Hantick'
title: Q Light Controller+ websockets
category: miscellaneous
desc: Control your DMX lights by SAMMI
icon_ex: >-
  https://progsoft.net/images/qlc--icon-99580bdaa965704d3290db57a53f17e7a9891601.png
trailer_ex: ''
screenshots_ex: ''
sammi_version: '1.41'
platform: Any
version: '2.0'
download_url: 'https://github.com/Hantick/LB-QLC-Control/releases'
setup_url: ''
overview: >-
  This QLC+.lbe is a SAMMI extension to control Q Light Controller Plus
  software using webSockets.<br>Control your DMX lights by SAMMI
setup: >-
  To setup the extension simply install it on SAMMI
  software.<br>To prepare QLC + you have to run the program with websocket
  flags. To do it simply run it with `-w` flag which means websockets have to be
  turned on.<br>Ref:
  https://www.qlcplus.org/docs/html_en_EN/commandlineparameters.html<br><br>Personally
  I prefer to create some `.bat` file with following command:<br>```<br>cd
  "C:\QLC+" (Path to your QLC)<br>start qlcplus.exe -w -p -o
  "C:/Path/YourWorkspace.qxw"<br>```<br>where:<br><br>`-w` -
  websockets<br><br>`-p` - program starts in performance mode<br><br>`-o` -
  program loads up a workspace on startup<br><br><br>You can also create a
  shortcut with
  flags<br><br>![image](https://user-images.githubusercontent.com/36815427/156162647-161fa0dd-cea0-453b-a947-a0523549544f.png)<br><br>Now
  you open SAMMI software and run transmiter.html file (normally you would
  put it in OBS as a source)<br>On the Bridge page you can check your
  connection to QLC
  +<br>![image](https://user-images.githubusercontent.com/36815427/156151422-6f7696b8-1cb7-46c6-9d3e-683c3128e980.png)<br>Here
  you can load your defined QLC functions with corresponding IDs, which will be
  needed for using SAMMI commands.<br><br>
  **Commands**<br><br>![image](https://user-images.githubusercontent.com/36815427/156152154-f050e1f0-e9dc-4c0c-91ab-77cf41b6e3bf.png)<br>`Set
  Function` - Sets a function to be turned on, turned off, toogled with forcing
  other scenes to be turned off or not<br><br>Parameters:<br>1. `FunctionId` -
  Id of the function (You can see a list of functions on Bridge.html page,
  QLC+ section).<br>2. `Visible` - Turn On, Turn Off or toogle.<br>3.
  `ForceOthersToStop` - Variable to decide if you want to turn off other
  functions off and leave only this one as
  active.<br><br>![image](https://user-images.githubusercontent.com/36815427/156152191-e1a53671-b7e9-420e-9298-cce550378c82.png)<br>`Get
  Function Status` - Gets a status of the function as Running, Stopped or
  Undefined<br><br>Parameters:<br>1. `FunctionId` - Id of the function (You can
  see a list of functions on Bridge.html page, QLC+ section).<br>2.
  `Variable` - Variable to put function status.
privacy_website: ''
privacy_policy: ''
policy_declare: 'on'
layout: ext_single
external: true
date: '2022-03-01T18:24:40.240Z'
filename: q-light-controller-websockets
---

