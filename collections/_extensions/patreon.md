---
layout: ext_single
title: Patreon Triggers
slug: patreon
desc: Patreon events delivered straight to your SAMMI
category: social
date: '2022-08-21T00:00:00-05:00'
permalink: extensions/social/:slug
download_url: https://christinak.itch.io/patreon-triggers
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: patreon.png
trailer: https://www.youtube.com/embed/t4HbQWAniMA
screenshots_local: patreon_ss.png
version: 1.0
sammi_version: Any
platform: Any
overview: |
    **Patreon events delivered straight to your SAMMI!**  

    Honoring your loyal Patrons and automatically thanking for their contributions while you stream is now finally possible with this extension!  

    **Triggers**  
    Create, Update and Delete member - every time someone follows you or pledges to you\
    Create, Update and Delete Member pledge - every time someone pledges to you and becomes your patron

    **Important Note**  
    There are testing buttons on Patreon for all the triggers. However, they tend to deliver slightly different payloads than the real events. The extension is configured for real events. 

setup: |
    You can follow all the steps below while watching the video guide. 
    *Please note this video guide was originally recorded with LioranBoard 1, however the setup is the exact same (just the buttons look a bit different).*

    [video](https://www.youtube.com/embed/BqH--eZ-LCQ)[/video]

    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Reload your Bridge. It must be running at all times for the extension to function properly.
    3. Go to the Patreon premade deck in your SAMMI Receiver and edit the red INIT button. In the Patron Triggers INIT command edit the following boxes: 
        - `Itch Key` = key you received upon purchase on Itch.io page (the link will be in your email too)
        ![Itch key redeem example](itch_key.png)
        - `Websocket Token` = retrieve yours using your Itch key below
        <div class="input-group ms-4 mt-2"><div class="col col-8"><input title="Insert your Itch key" type="text" class="form-control form-control-sm" id="patreon-itch-key" placeholder="Itch Key" aria-label="name"></div><div class="col-auto"><button style="margin-left:10px;" type="button" class="btn btn-secondary btn-sm" onclick="patreonGetToken()" title="Get Patreon websocket token">Get Access Token</button></div></div><div class="mt-2 ms-4"><span id="patreon-token"></span></div>  

        - `Webhok Secret` = go to [Patreon webhook page](https://www.patreon.com/portal/registration/register-webhooks)
            - Paste this url next to the + button (double check your itch key in the url is correct: 
            <code class="user-select-all">https://lioranboard-websocket-7we7k.ondigitalocean.app/patreonhook/<span id="patreonhook">YOUR_ITCH_KEY</span></code>
            - Click on the + button to add the webhook.
            - Activate all non deprecated events.
            - Click on COPY SECRET and paste it into `Webhok Secret`.
    
    3. Once you're done editing the INIT button, **press Save and Save** again until you're in the main menu.
    4. Refresh your Bridge. Press the INIT button. You should now see connected in your Patreon tab in Bridge.\
    *You should not need to press the INIT button manually again as there's a trigger attached to it which will press it for you every time you reload Bridge*.
    5. Go back to your [Patreon webhook page](https://www.patreon.com/portal/registration/register-webhooks) and click on the Send test buttons.
    6. Your premade buttons should activate and a premade chat message should show up in your Twitch chat (if connected to Twitch).

    *The test buttons have slightly different (wrong) payload than real events. This extension was tested with real events. Math: Trigger pull might not work correctly with test events.*

    ##### Triggers

    **Members Create**  
    Triggers when a new member is created, either by pledging or by following a campaign.\
    Extension Trigger: `Patreon Members Create` 
    <div class="alert alert-warning" role="alert"> For new pledges, both Members Create and Pledge Create triggers will fire.</div>
    

    **Members Update**  
    Triggers when a membership has been updated.\
    Extension Trigger: `Patreon Members Update` b
    <div class="alert alert-warning" role="alert"> Both Members Update and Pledge Delete triggers will fire if someone cancels their pledge.</div>  
    

    **Members Delete**  
    According to the documentation it triggers when an existing membership is deleted.\
    However, in my own tests unfollowing Patreon user actually triggered **Members Edit** instead.\
    Extension Trigger: `Patreon Members Delete` 

    The following Trigger Pull Data values are the same for **Members Create, Update** and **Delete** triggers

    | Trigger Pull Data Value | Description|
    |-------|--------|
    |name|Full name of the new member.|
    |userId|User ID of the member. |
    |isFollower|Member status. `True` = member is a follower, false = member is not a follower|
    |status|Pledge status. Can be `none` (for non patrons), `active_patron`, `declined_patron` or `former_patron`|
    {:class='table table-primary w-auto table-hover' }

    <div class="alert alert-info" role="alert">If you only wish to receive pledge or member triggers, you can always adjust your triggers on the Patreon Webhook page.</div>

    **Pledge Create**  
    Triggers when a new member is creatd by pleding or an existing member who is following converts to pledging member.\
    Extension Trigger: `Patreon Members Pledge Create` 

    **Pledge Update**  
    Triggers when the pledge on a membership has been updated.\
    Extension Trigger: `Patreon Members Pledge Update` 

    **Pledge Delete**  
    Triggers when an existing pledge on a membership is deleted.\
    Extension Trigger: `Patreon Members Pledge Delete` 

    The following Trigger Pull Data values are the same for **Pledge Create, Update** and **Delete** triggers

    | Trigger Pull Data Value | Description|
    |-------|--------|
    |name|Full name of the new patron.|
    |userId|User ID of the patron. |
    |email|Patron's email.| 
    |status|Pledge status. Can be `none` (for non patrons), `active_patron`, `declined_patron` or `former_patron`|
    |currentAmount|The amount in cents that the member is entitled to. Current pledge or payment that covers the current payment period. |
    |totalAmount|The total amount in cents that the member has ever paid to the campaign in campaign's currency.|
    |months|Number of months between charges.|
    |tiers|Array of all tier IDs the patron is entitled to|
    {:class='table table-primary w-auto table-hover' }

    <script>
    async function patreonGetToken (){
    const itchKey = document.getElementById('patreon-itch-key').value 
    const tokenUrl = 'https://w4x72atqt4.execute-api.us-west-2.amazonaws.com/main/token'
    const headers = {
    'x-api-key': itchKey
    }
    fetchRequest(tokenUrl, headers)
    .then (data => {
    const token = data.body.token || 'N/A'  
    document.getElementById('patreon-token').innerHTML = `<b>YOUR wsToken:</b> <code class="user-select-all">${token}</code> (copy and paste it)`
    })
    .catch (e => document.getElementById('patreon-token').innerHTML = `Error retrieving token: <code>${e}</code>`)
    document.getElementById('patreonhook').innerHTML = itchKey
    }
    async function fetchRequest(url, headers, body, method = 'GET') {
    const params = {};
    params.method = method;
    params.headers = headers;
    if (body) params.body = JSON.stringify(body);
    const response = await fetch(url, params);
    let content;
    const text = await response.text();
    try {
        content = JSON.parse(text);
    } catch (e) { content = text; }
    if (!response.ok) {
        const error = (content.error) ? content.error.message || 'Something went wrong.' : 'Something went wrong.';
        throw error;
    }
    return content;
    }
    </script>
testers: Landie and Andilippi
privacy_collect: false
---
