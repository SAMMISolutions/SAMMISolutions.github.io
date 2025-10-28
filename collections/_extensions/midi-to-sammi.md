---
layout: ext_single
title: MIDI to SAMMI
slug: midi-to-sammi
desc: Connect to MIDI in/output!
category: utilities
date: '2025-10-27T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://downgit.github.io/#/home?url=https://github.com/prodzpod/SAMMI-Extensions/blob/main/MIDI.sef
developer_name: prod
developer_url: https://prod.kr
icon_local: midi-to-sammi-0.png
screenshots_local: midi-to-sammi-1.png, midi-to-sammi-2.png
version: 1.0
sammi_version: '2025.2.0^'
platform: Any
overview: |
    # Features

    Allows you to send and recieve MIDI data through external devices.

    ## Commands

    - `MIDI: Get List of Devices`: gets a list of names for a specific category.
    - `MIDI: Send Bytes`: sends an arbiturary list of bytes as a MIDI output.
    - `MIDI: Press Note`: sends a note press event to a MIDI output, with delay and hold time.
    - `MIDI: Release Note`: sends a note release event in case note duration was not set while using *MIDI: Press Note*.

    ## Parameters

    - `channel`: channel found during the MIDI survey, defaults to 0. should work in most circumstances.
    - `byte`: the raw bytes to send. in hexadecimal with or without "0x".
    - `note`: the note value to send. letter name + octave (C4, D#7, A-1, etc...)
    - `velocity`: the volume of the note played, from 0 to 127.
    - `release`: time to wait before releasing the note back in milliseconds.
    - `time`: time to wait before firing in milliseconds.
    - `relative`: if unchecked, use the absolute *time* value to judge when it is sent.

    ## Triggers

    - `MIDI Input`: Triggered whenever a MIDI input sends a message.
    - `input`: the midi input the message originated from.
    - `timestamp`: the time this message was originally made.
    - `data`: the raw bytes of the message in hexadecimal.
    - `status`: the type of message, is either "note on", "note off", "mono aftertouch", "poly aftertouch", "control change", "program change", or "other".
    - `channel`: the channel of the midi being played.
    - `key` / `octave` / `velocity` / `pressure`: the target message's parameters.

    The code is available to examine and download on [github](https://github.com/prodzpod/SAMMI-Extensions/tree/main).

    # Disclaimer

    If you have any **questions**, **help** or **bugs to report** while using this extension, please message me at @pr_d on discord! I'd be glad to help you out.
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---