---
title: Build Extension
layout: ext
collection: extensions
permalink: /extensions/build
---

### Overview and Prerequisites

Welcome to the world of creating SAMMI (SEF) extensions! This guide is designed for beginners to understand how to create custom extensions for SAMMI. Basic knowledge of HTML/JavaScript and familiarity with SAMMI itself essential. 

SAMMI extensions are specifically structured text files with a `.sef` extension. They're written in a format that SAMMI can understand and use. 

[SAMMI Bridge](https://sammi.solutions/docs/bridge) is an html file where SAMMI installs extensions based on the `.sef` file. SAMMI takes specific parts of the extension and inserts them at specific parts of the Bridge.   

![](extensions/bridge.png)

You can think of SAMMI Bridge as a bridge between SAMMI and the extension itself. The `bridge.html` file is located in your `bridge` folder.  You can download a fresh copy of SAMMI Bridge from [Github](https://github.com/SAMMISolutions/SAMMI-Bridge/releases).

### Extension Template File

```
[extension_name]
[extension_info]
[extension_version]
[insert_external]
[insert_command]
[insert_hook]
[insert_script]
[insert_over]
```

You can find a blank extension template in the `\bridge\template.sef` file within the main SAMMI folder. 

### Extension File Sections

#### [extension_name]
This section names your extension, and is visible in SAMMI Bridge and SAMMI Core. Please use alphanumeric characters and spaces only.

#### [extension_info]
This section is for descriptive text about the extension, e.g. what the extension does. This information is displayed to the users in SAMMI Bridge-Extensions tab when they hover over the extension name inside the list of installed extensions.

#### [extension_version]
Specify your extension version here, using numbers and dots (e.g., 2.01). This is crucial for the automatic version checker in Bridge, which can notify users of updates. 

#### [insert_external]
This section appears inside the extension's tab in Bridge, and it provides a visual interface for the extension if needed. It's written in HTML and CSS. 

#### [insert_command]
In this section, you can define Extension Commands. These commands will be available to users in SAMMI Core when they install your extension. You can define multiple commands in this section. Refer to the [SAMMI Bridge documentation](https://github.com/SAMMISolutions/SAMMI-Bridge#extension-command) for Extension Command details.   
In this section, you can also automatically call your main extension function that should run as soon as SAMMI conencts to Bridge. 

#### [insert_hook]
This is an outdated, not recommend way to listen for command payloads coming from SAMMI Core. We strongly recommend using regular listeners instead. Hooks are supported for backward compatibility only.

#### [insert_script]
In this section you're encouraged to write your own JavaScript code.   

We recommend having one main function that runs as soon as SAMMI connects to Bridge, and which you call from insert_command section.  
Inside this function, you can set up listeners for extension commands coming from SAMMI, e.g. when a user actually runs a button containing your extension command you defined in insert_command section.

SAMMI Bridge provides premade helper functions for you to use, such as retrieving variables, setting variables, triggering buttons and more. You can find all the helper functions in the [SAMMI Bridge documentation](https://github.com/SAMMISolutions/SAMMI-Bridge#helper-functions)

#### [insert_over]
In this section you simply copy and paste your deck from SAMMI Core you wish to distribute with your extension. When users install your extensiosn, the deck will be automatically added to their SAMMI Core. 

You can also add the following extra keys in the JSON object to specify additional properties for your extension: 
- `"sammi_version": "2.00.0"` - Checks for minimum SAMMI version compatibility. Will refuse to install the extension if the version is lower than specified.
- `"bridge": true` - CHecks whether SAMMI Bridge is running and connected to SAMMI. Will refuse to install the extension if Bridge is not running.
- `"obswebsocket": "4.9.1"` - Checks minimum OBS Websocket version compatibility. Will refuse to install the extension if the version is lower than specified.
- `"extension_triggers": ["TRG1", "TRG", ...]` - Speciicies extension triggers that run in SAMMI Core as soon as the extension is installed. Useful for automatically triggering extension buttons upon installation. 
- `"required_extension": ["Extension name", "Another extension name", ...]` - Checks for required extensions before installation. If any of the extensions are not installed, the extension will not be installed either.

### Submitting Extensions
Once you've created your extension, you can submit it:

1. On our Discord server in #extension-releases channel.
2. To be included on our website. Please contact one of the SAMMI team members for details. 

Don't forget to also create your own extension json file and submit a PR to https://github.com/SAMMISolutions/SAMMI-Bridge/tree/main/extensions. This will allow SAMMI Bridge to automatically check for updates and notify users when a new version of your extension is available. 
Please see this [example](https://github.com/SAMMISolutions/SAMMI-Bridge/blob/main/extensions/sample.json) for details.


### Troubleshooting Extensions
You can troubleshoot extensions just as any other JavaScript code: 

1. Install the extension via SAMMI Core - Bridge - Install extension.
1. Open Bridge in a browser rather than OBS Dock
2. Open the browser developer console (F12)
3. Check for errors in the console
4. Monitor websocket traffic in the Network tab. You can see outgoing and incoming packets from SAMMI Core (must reload Bridge while console is open to see this)

You can also open `bridge.html` in your favorite text editor, find your specific extension code and debug it there. It's often simpler and easier than editing the `.sef` file directly and reinstalling it in SAMMI Core. 


### Extension Examples
[Download the example extension](https://sammi.solutions/extensions/extension_example.sef)

**Watch the video below to see the example extension in action:**
<div class="embed-responsive mb-3" ><video onclick="this.paused ? this.play() : this.pause()" controls=true class="embed-responsive-item video" width="75%" src="/assets/videos/extensions/extension_example.mp4" title="Demonstrating an example SAMMI extension usage" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>

**Example extension code:**

```sef
[extension_name]
Simple Example Extension
[extension_info]
This is a basic example extension for SAMMI that demonstrates fundamental functionalities like setting up commands and scripts
[extension_version]
1.0.0
[insert_external]
<!-- HTML interface for the extension -->
<div>
    <h1>Simple Example Extension Interface</h1>
    <p>This interface can include custom HTML elements for user interaction.</p>
</div>

[insert_command]
// Create an example command for the extension
SAMMI.extCommand('My Example Extension Command', 3355443, 52, {
    exampleBox: ['Example Text Box', 14, 'Default Text']
});
// Call the main function when the extension loads
main();

[insert_hook]
// Hooks are outdated, use listeners as recommended

[insert_script]
// Custom JavaScript for the extension
// Main function to run when SAMMI connects to the Bridge
function main() {
    console.log("Extension connected to SAMMI Bridge");
    // Use helper functions to communicate with SAMMI
    // Send alert to Bridge the extension is ready and listening
    SAMMI.alert('Example Extension is ready and listening.');

    // Set up a listener for an extension command you created earlier
    // This will run when user presses the button that triggers the command in SAMMI
    sammiclient.on('My Example Extension Command', (payload) => {
        console.log("Command triggered", payload);
        // get the button ID and instance ID from the payload which SAMMI send to the extension
        const { FromButton }  = payload.Data 
        // Get the value of the example extension box from the payload we set up earlier
        const exampleBoxValue = payload.Data.exampleBox
        // Here we can do something with the value, like append some text to it and send it back to SAMMI
        const exampleBoxValueModified = exampleBoxValue + " - Modified";
        // Send the modified value back to SAMMI by setting the variable value in the button that triggered the command
        SAMMI.setVariable('exampleVariable', exampleBoxValueModified, FromButton)
        // We can also ask SAMMI to return the value of a variable from a button
        SAMMI.getVariable('exampleVariable', FromButton).then((data) => {
            console.log("Variable value returned from SAMMI", data.Value);
        });
    });

// Define more scripts and functions here
}

// In this next section below, copy and paste your deck from SAMMI Core (right click on Deck Thumbnail -> Copy Deck)
// At the end, you can add more parameters and conditions under which the extension will install
// Notice we added this particular key to the very end of the deck json: "sammi_version": "2023.3.0" 
// This means the extension will only install if SAMMI version is 2023.3.0 or higher
[insert_over]
{ 
    "deck_data": "{ ... }", 
    "unique_id": "20231202011115293750791", 
    "deck_verification_code": "ddfbfc70160c7f600f42e97ee06d3ae2aeb1fe8a", 
    "include_image": { }, 
    "sammi_version": "2023.3.0"
}
```
