---
title: Submit Extension
layout: ext
collection: extensions
permalink: /extensions/submit
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css">
<script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>

#### Create an extension
SAMMI communicates with all its extensions via Bridge.html and its own websocket.\
Information about how to make your own extension can be found in `SAMMI/Bridge/how to make an extension.txt` file.\
We encourage you to go over a few premade extensions to understand the process.

#### Test an extension
Developed a new extension? Head over to our *#development* channel in the official [SAMMI Discord
server](https://discord.gg/dXez8Zh) where you can post it for testing!

#### Release an extension
Is your extension ready to be released to public? Have you fully tested its functionality? Great! You can use the form
below to submit it!

##### Rules for submitting a new extension
1. **The extension and its name is unique**\
Do not release slightly modified existing extensions or extensions with a very similar functionality, but rather
collaborate with the original author. Do not copy and paste code from other extensions without the explicit approval
from the original author.
2. **You've tested the extension extensively**\
The best way to test an extension is to download a clean copy of SAMMI, use a clean Bridge file and use a new
scene collection in your OBS. Even better way is to share it with a few select beta testers to test it with different
setups.
3. **Publicly accessible source code**\
If your extension is not publicly accessible, you must provide us a way to verify its source code before having it
posted on the website. This is to protect users from downloading malicious extensions. Contact one of the SAMMI
Discord mods before submitting your extension in this case.
4. **The extension is hosted on a secure server (`https`)**\
We recommend using [Github](https://github.com/) where you can easily create a new account to upload your creations.
6. **No obscure external libraries**\
Unless you're a verified extension developer in our Discord server, do not link to obscure external libraries in the
extension file.
7. **Follow best coding practices**
- do not pollute global namespace\
*Users can have dozens of different extensions installed. Try to avoid using global variables both in SAMMI and
Bridge.*
- optimize loops in Bridge
- beware of memory leaks in Bridge\
*For example, calling an api every second might cause a memory leak and subsequent crash as some streamers run
Bridge for 5+ hours without refreshing it.*
- do not overwrite global event handlers in Bridge\
*For example, instead of `window.onload` use `addEventListener()`method.*
- leave comments where needed
8. **We reserve the right to reject or delete an existing extension for any reason or no reason, and without notice to
you.**

<div class="mt-2 mb-3">
  <h3>Submission Form</h3>
</div>
<form id="extsubmit" method="POST"
  action="https://sammi-extensions.fly.dev/v3/entry/github/SAMMISolutions/SAMMISolutions.github.io/main/comments">
  <input name="options[redirect]" type="hidden" value="https://sammi.solutions/extensions/success">
  <input name="options[type]" type="hidden" value="extensions">
  <input name="fields[permalink]" id ="permalink" type="hidden" value="">
  <input type="hidden" name="options[reCaptcha][siteKey]" value="6LfngIchAAAAACHlqsIJfug4hklCbQ-xVtj-cYgr">
  <input type="hidden" name="options[reCaptcha][secret]"
    value="wJ00df8IWnE9HQUfoz1/srMkPRbhKAZIXTR2Nntf6Grp/tVRrDjj9HDaQkCezYc7huo9X34OY4E9Huu4pGhVufWoJYTgYovqjtyteJzhnCtQSWS4Etwyqiv+ZEWPQJQnxEqsF+Gy+mkVc79OT0vJPjUKt40Mz6o+YI1ja3fPtc1keCmOuEcVKiH7zfNc5bxaZDx+TRnXDnjoC8No8C0Mn45oozaEuUGBsqu7JKX3ody+iysYbzEursdduXsmcEpDjfME3OGVo8S9fTIbdN6w6M+0qZxWgPKo9GDXG8J7aBbGgihray+fKFbiMSypAbJvCc8BUHV01fBRRIINj2xY1g==">
  <div class="mt-2 mb-3">
    <h5>Developer Information</h5>
  </div>
  <div class="input-group">
    {% include input_multi.html type="text" name="developer_name" desc="Developer Name" required="true" %}
    {% include input_multi.html type="text" name="discord_username" desc="Discord Username" %}
  </div>
  <div class="mx-2 mt-0 pt-0 mb-2">Your email and access key can be later used to modify your existing extension.</div>
  <div class="input-group">
    {% include input_multi.html type="text" name="developer_email" desc="Developer Email" required="true" %}
    {% include input_multi.html type="text" name="password" desc="Access Key" required="true" %}
  </div>
  {% include input.html type="url" name="developer_url" desc="Developer Url (include https)" %}
  <div class="mt-2 mb-3">
    <h5>Extension Information</h5>
  </div>
  <div class="input-group">
    {% include input_multi.html type="text" name="title" desc="Title" required="true" %}
    <select class="form-select mx-2 mb-2 w-auto required" id="category" name="fields[category]" aria-label="Category" required>
      <option selected value="">Category</option>
      <option value="alerts">Alerts</option>
      <option value="audio">Music & Audio</option>
      <option value="games">Games</option>
      <option value="productivity">Productivity</option>
      <option value="social">Social & Communication</option>
      <option value="utilities">Utilities</option>
      <option value="twitch">Twitch</option>
      <option value="youtube">YouTube</option>
      <option value="miscellaneous">Miscellaneous</option>
    </select>
  </div>

  {% include input.html type="text" name="desc" desc="Short Description (10 words or less)" required="true" %}

  {% include input_image.html name="icon_ex" desc="Icon URL" info="Icon must be 315x250 maximum Imgur link, for example:
  <code>https://i.imgur.com/XXX.png</code>" %}

  {% include input.html type="text" name="trailer_ex" desc="YouTube Trailer" info="Trailer must be YouTube Embed URL, for
  example <code>https://www.youtube.com/embed/biO0ffqMn5Q</code>" %}

  {% include input.html type="text" name="screenshots_ex" desc="Screenshots" info="Screenshots must be Imgur links
  separated by commas, for example: <code>https://i.imgur.com/XXX.png, https://i.imgur.com/YYY.png</code>"%}

  <div class="input-group">
    {% include input_multi.html type="text" name="sammi_version" desc="Min SAMMI Version" required="true" %}
    {% include input_multi.html type="text" name="platform" desc="Platform (Twitch, YouTube, Any)" required="true" %}
  </div>

  <div class="input-group">
    {% include input_multi.html type="text" name="version" desc="Latest Version" required="true" %}
    {% include input_multi.html type="url" name="download_url" desc="Download URL (include https)" required="true"%}
  </div>
  <div class="mb-3">
  {% include input.html type="url" name="setup_url" desc="Setup URL (include https)" info="Fill out setup URL if you prefer to use your
  own source" %}
 </div>

  {% include input_text.html name="overview" desc="Overview" info="Overview of extension's functionalities. Accepts
  markdown. <br />Special
  YouTube video insertion formatting: <code>[video](https://www.youtube.com/embed/XXX)[/video]</code>" required="true"%}


  {% include input_text.html name="setup" desc="Setup" info="Extension setup guide. Accepts markdown. <br/> Special YouTube video insertion
  formatting: <code>[video](https://www.youtube.com/embed/XXX)[/video]</code>"%}
  <div class="mt-2 mb-3">
    <h5>Privacy Policy Information</h5>
  </div>

  {% include input_checkbox.html name="privacy_collect" desc="Check if your extension will be collecting any user
  data."%}

  <div class="ms-3 mt-2"><b>If you checked you will be collecting user data, please check all that you will be
      collecting from the users below:</b></div>
  <div class="mt-2">
    {% include input_checkbox.html name="privacy_personal" desc="Personally identifying information, such as name,
    address, email, age." %}
    {% include input_checkbox.html name="privacy_financial" desc="Financial and payment information, such as
    transactions, credit card numbers, credit ratings, financial statements, payment history" %}
    {% include input_checkbox.html name="privacy_auth" desc="Authentication information, such as passwords, credentials,
    security questions " %}
    {% include input_checkbox.html name="privacy_communication" desc="Personal communications, such as emails, text or
    chat messages, social media posts, or conference calls" %}
    {% include input_checkbox.html name="privacy_location" desc="Location data, such as region, IP, address, GPS
    coordinates, or information about things near the user's device" %}
    {% include input_checkbox.html name="privacy_useractivity" desc="User activity, such as network monitoring, clicks,
    mouse position, scroll, or keystroke logging" %}
  </div>
  <div class="mt-3">
    {% include input.html type="url" name="privacy_website" desc="Privacy Policy Website" %}
    {% include input_text.html name="privacy_policy" info="Please provide your extension's privacy policy (optional)" %}
  </div>
  <div class="mb-1 mt-3">
    <h5>Developer Declaration (mandatory)</h5>
    <b class="mb-1 mt-3"> {% include input_checkbox.html name="policy_declare" desc="I declare that user data is:" required="true" %} </b> 
    <ul>
      <li class="mb-2">Not being sold to third parties.</li>
      <li class="mb-2">Not being used or transferred for purposes that are unrelated to the extension's core functionality</li>
      <li class="mb-2">Not being used or transferred to determine creditworthiness or for lending purposes</li>
    </ul>
  </div>

<div id='recaptcha' data-callback="onSubmit" data-sitekey="6LfngIchAAAAACHlqsIJfug4hklCbQ-xVtj-cYgr" class="g-recaptcha" data-size="invisible"></div>
<button id="submit-ext"  class="btn btn-primary mt-2 mx-2 mb-5" type="submit">Submit for review</button>
</form>


<script>

let overviewMd; let setupMd; let policyMd; 

document.addEventListener('DOMContentLoaded', loadIt)

function loadIt() {
overviewMd = createMD('overview', 'Extension overview and info about its functionalities', "250px", 'overview')
setupMd = createMD('setup', 'Extension setup guide', "250px", 'setup')
policyMd = createMD('privacy_policy', 'Extension Privacy Policy', "100px", 'privacy_policy')
const btn = document.getElementById('submit-ext')
btn.onclick = validate;
  };

function validate (e) {
const form = document.getElementById('extsubmit')
  if(form.checkValidity()) {
        e.preventDefault();
        try {
        grecaptcha.execute();
        grecaptcha.getResponse();
        }
        catch (e){}
      }
    };

function createMD (e, p, h, id) {
const newMDE = new EasyMDE ({
element: document.getElementById(e),
minHeight: h,
autosave: {
		enabled: true,
		uniqueId: id,
		delay: 1000,
	},
placeholder: p

});
return newMDE
}

slugify = ( text ) => {
    return text
    .toString()
    .normalize( 'NFD' )                   
    .replace( /[\u0300-\u036f]/g, '' )  
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-'); 
  };

  function onSubmit(token) {
    const category = document.getElementById('category').value
    const title = document.getElementById('title').value
    const overview = document.getElementById('overview')
    const setup = document.getElementById('setup')
    const policy = document.getElementById('privacy_policy')
    const permalink = `extensions/${category}/${slugify(title)}`
    document.getElementById('permalink').value = permalink
    const policyReplaced = policyMd.value().replace(/(?:\r\n|\r|\n)/g, '<br>');
    const overviewReplaced = overviewMd.value().replace(/(?:\r\n|\r|\n)/g, '<br>');
    const setupReplaced = setupMd.value().replace(/(?:\r\n|\r|\n)/g, '<br>');
    policyMd.value(policyReplaced)
    overviewMd.value(overviewReplaced);
    setupMd.value(setupReplaced);
    policy.value = policyReplaced
    overview.value = overviewReplaced
    setup.value = setupReplaced
    document.getElementById("extsubmit").submit();
  }


</script>
<script src="https://www.google.com/recaptcha/api.js" async defer>
</script>