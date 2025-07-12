---
title: Extension Policy
layout: ext
collection: extensions
permalink: /extensions/policy
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css">
<script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>

The extension policy is a set of rules that must be followed prior to attempting to share an extension in official spaces such as:

- The Extension page
- The `extensions-releases`, or the `show-off` channel on our discord
- And anything else deemed as an official space at our discretion.

Going against this policy will mark your extension as **"restricted"** and cannot be shared in the spaces mentioned above. It is important to note however, that <u>you are still free to publish this extension anywhere you'd like in your own curated spaces such as a personal store, social media, support platform, and more.</u> Users who use restricted extensions in a project they made will not be subject to these terms if they want to share a video of their project in official spaces such as the show-off channel on our discord, however, they will not be able to release this project in official spaces as if it were restricted. This is to prevent circumvention.

## Policy rules

- Make sure your extension is not a slightly modified version of an existing one or copied from other extensions without the explicit approval from the original author, which we will reach out to in order to verify. It is encouraged to collaborate with existing extensions already listed, but not required.
- Avoid releasing extensions that, by direct use, pose a potential risk of physical harm or other hazardous condition to yourself or others.
- Refrain from using generative AI imagery in your extension's presentation, such as in its thumbnail or preview imagery. Note, this does not account for the content or purpose of your extension.
- Take time to test your extension thoroughly. The best way to test an extension is to download a clean copy of SAMMI, use a clean Bridge file and use a new scene collection in your OBS. Even better way is to share it with a few select beta testers to test it with different setups. There are plenty of people available in our discord eager to help!
- Be prepared to provide a way for the team to verify the source code of your extension. If your extension is not publicly accessible, you must provide us a way to verify its source code before having it posted on the website. This is to protect users from downloading malicious extensions. Contact one of the SAMMI Discord mods before submitting your extension in this case.
- Use a secure server (https) to host your extension. Since we do not store the extension ourselves, you are in charge of hosting your extension and providing us a link. We recommend using Github where you can easily create a new account to upload your creations. If you're looking to accept donations or host a paid extension, some top recommendations are ko-fi, and itch.
- Avoid using obscure external libraries unless you’re a verified extension developer in our Discord server. If you are uncertain, please reach out to any team member and we will clarify.
- Follow our outlined "best practices" to avoid conflicts with other extensions. Since the bridge is a shared browser environment, the following list ensures no extension overwrites another:
  - **Do not pollute global namespace**. Users can have dozens of different extensions installed. Try to avoid using global variables both in SAMMI and Bridge. When installing an extension, by default they share a global scope in the bridge. Consider a solution like IIFEs or Block scoping for scripts, and prefixed unique class names for inserts.
  - **Optimize loops in Bridge**.
  - **Beware of memory leaks in Bridge**. For example, calling an api every second might cause a memory leak and subsequent crash as some streamers run Bridge for 5+ hours without refreshing it.
  - **Do not overwrite global event handlers in Bridge**. For example, instead of window.onload use addEventListener() method.

And that's it!