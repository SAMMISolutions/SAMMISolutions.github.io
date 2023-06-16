---
layout: ext_single
title: Twitter
slug: twitter
desc: Send, retrieve and monitor Tweets straight from SAMMI 
category: social
date: '2023-06-10T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/sammi-twitter
icon_local: twitter.png
screenshots_local: twitter_deck.png
developer_name: Christina K. 
developer_url: https://christinak.itch.io
version: 2.0
sammi_version: 2023.2.1
platform: Any
overview: |

    Send Tweets and update your Twitter profile directly from SAMMI.

    **Features**
    - Tweet
    - Reply to Tweets
    - Create Polls
    - Delete Tweets
    - Update your Profile information, including your profile image and banner
    - Get profile information, such as your followers, latest tweet etc.

    <div class="alert alert-info" role="alert">Purchasing this product provides you with a code specifically designed to simplify your engagement with the Twitter API. The code is executed on your local computer, giving you the flexibility to modify it. It's crucial to understand that there's absolutely no server or service usage on my part involved in this process.</div>

setup: |

    <div class="alert alert-info" role="alert">Updating from a previous 1.X Twitter version? Please completely uninstall the current Twitter extension by navigating to SAMMI Core-Bridge-Uninstall extension, and delete the premade Twitter deck before proceeding. The commands names have changed, none of your existing commands will work anymore.</div>

    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Sign into Twitter
        - Go to your Bridge - Twitter Tab.
        - Click on Login, select Open or Copy Twitter URL (and open it).
        - Copy the provided PIN
        - Fill out the "Enter PIN" input field and click on Authenticate. Once it says `Logged in`, you're all good to go.
    3. Please be careful when using the 'Tweet', 'Reply' and 'Create Poll' commands. If you see a 429 error (quota exceeded), it means that the default App has reached its limit for the day. This limit only applies to Tweet and Reply. When this happens, you have two choices:

        1. Wait until the next day to post more tweets (recommended)
        2. While I don't officially support or suggest this option, the code is open and can be modified. Because it runs on your own computer, you could adjust it to use your own credentials if you need to tweet beyond the default limit. But remember:
            <div class="alert alert-warning mt-2" role="alert">If you decide to use your own Twitter App and API keys to get past the standard limit, it's entirely on you. For more info, take a look at <a href="https://twittercommunity.com/t/policy-clarification-multiple-applications-for-the-same-use-case/92080">this article</a>.</div>
            - Only make these changes if you're okay with the risks, and make sure to use a secondary or throwaway Twitter account, not your main one.
            - Watch the step-by-step guide video here:   

             [video](https://www.youtube.com/embed/xM6rdzYcEd8)[/video] 
    Please remember, even though you can change the code, it's best to stick to the Twitter API's rules for things to run smoothly.
    4. Now you can send Tweets directly from your SAMMI. Open the premade deck and follow the instructions in the comments of each button.
privacy_collect: false
---