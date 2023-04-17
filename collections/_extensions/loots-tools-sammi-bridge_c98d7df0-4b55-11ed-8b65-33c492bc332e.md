---
_id: c98d7df0-4b55-11ed-8b65-33c492bc332e
permalink: extensions/alerts/loots-tools-sammi-bridge
developer_name: Darye
discord_username: '@Darye.#1315'
developer_url: 'https://github.com/DaryeDev'
title: Loot's Tools SAMMI Bridge
category: alerts
desc: Connect Loot's Tools and SAMMI to automate Streamloots Events here on SAMMI!
icon_ex: 'https://i.imgur.com/jiIyipD.png'
trailer_ex: ''
screenshots_ex: 'https://i.imgur.com/kpSYhik.png, https://i.imgur.com/YS98EW9.png'
sammi_version: 2022.4.4
platform: 'https://twitch.tv/darye'
version: v1
download_url: >-
  https://raw.githubusercontent.com/DaryeDev/LootsToolsSAMMIBridge/master/LootsToolsBridge.sef
setup_url: ''
overview: >-
  This SAMMI extension allows connecting to
  Loot's Tools Desktop and both hear Streamloots Events from it and tell it to
  simulate Events, or call the SAMMI Event if the SAMMI EXtension is installed
  on Loot's Tools.<br><br>Loot's Tools is an Automation Tool centered on, but
  not limited to, Streamloots.<br><br>**NOTE: Some things, like installing the
  SAMMI EXtension on Loot's Tools Desktop or some Events, require Loot's Tools
  Plus.**<br><br>---<br>##### Triggers and Trigger Data:<br>**LootsToolsStreamlootsCard**<br>- user (String)<br>- fields (Object)<br>-
  cardName (String)<br>- data (Object)<br>**LootsToolsStreamlootsPurchase**
  (Needs Loot's Tools Plus)<br>- user (String)<br>- packQuantity (Number)<br>-
  collectionName (String)<br>- data (Object)<br><br>**LootsToolsStreamlootsGift**
  (Needs Loot's Tools Plus)<br>- user (String)<br>- giftee (String)<br>-
  packQuantity (Number)<br>- collectionName (String)<br>- data (Object)<br><br>**LootsToolsStreamlootsSubscriptionCommunityGift (Needs Loot's Tools Plus)**<br>-
  user (String)<br>- packQuantity (Number)<br>- collectionName (String)<br>-
  data (Object)<br><br>**LootsToolsStreamlootsSubscription (Needs Loot's Tools
  Plus)**<br>- user (String)<br>- data (Object)<br><br>**LootsToolsStreamlootsSubscriptionGift (Needs Loot's Tools Plus)**<br>- user
  (String)<br>- giftee (String)<br>- data (Object)<br><br>**LootsToolsStreamlootsCommunityGiftSubscription (Needs Loot's Tools Plus)**<br>-
  user (String)<br>- data (Object)<br><br>**LootsToolsStreamlootsReaction (Needs
  Loot's Tools Plus)**<br>- user (String)<br>- reactionName (String)<br>- videoUrl
  or imageUrl (String)<br>- data (Object)<br><br>**LootsToolsCustomEvent**<br>- name
  (String)<br>- data (Object)
setup: >-
  You'll need Loot's Tools Desktop installed ([Setup guide clicking
  here](https://lootstools.darye.dev/docs/guides/gettingStarted)), and Loot's
  Tools Plus purchased to be able to listen to some Events.<br><br>Once it's
  installed and running, it should be straight-forward. Reconnect SAMMI to
  Loot's Tools Desktop from the SAMMI Bridge if necessary.
privacy_website: ''
privacy_policy: ''
policy_declare: 'on'
layout: ext_single
external: true
date: '2022-10-14T00:18:54.791Z'
filename: loots-tools-sammi-bridge
---

