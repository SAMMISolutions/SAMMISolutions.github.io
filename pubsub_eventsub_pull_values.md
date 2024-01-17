## Old vs. new trigger pull data values (old one is first)


#### Twitch Subscription (prime in this case)

**Old**

```json
{
    "user_name": "christinnaa",
    "community_gift": false,
    "from_channel_id": 191753975.0,
    "gifted_user_name": "",
    "user_id": "29977186",
    "tier": "Prime",
    "message": "",
    "context": "sub",
    "display_name": "Christinnaa",
    "gifted_user_id": 0.0,
    "gifted_display_name": "",
    "month": 1.0,
    "trigger_type": 1.0
}
```

**New**

```json
{
    "system_message": "Christinnaa subscribed with Prime.", // added value
    "user_name": "christinnaa",
    "community_gift": 0.0,
    "cumulative_total": 0.0, // added value
    "from_channel_id": 191753975.0,
    "name_color": "#189A8D", // added value
    "gifted_user_name": "",
    "user_id": "29977186",
    "tier": "Prime",
    "message": "",
    "context": "sub",
    "emote_list": null, // added value
    "display_name": "Christinnaa",
    "message_id": "e2d6ecd6-0ef0-44b7-97f7-cdcd334e1723", // added value
    "gifted_user_id": 0.0,
    "gifted_display_name": "",
    "month": 1.0,
    "trigger_type": 1.0,
    "duration_months": 0.0, // added value
    "badge_list": [  // added value
        {
            "info": "",
            "id": "1",
            "set_id": "moderator"
        },
        {
            "info": "1",
            "id": "0",
            "set_id": "subscriber"
        }
    ]
}
```



#### Twitch Subscription (non community gift)

**Old**

```json
{
    "user_name": "christinnaa",
    "community_gift": false,
    "from_channel_id": 191753975.0,
    "gifted_user_name": "spoiledbunnybot",
    "user_id": "29977186",
    "tier": "Tier 1",
    "message": "",
    "context": "subgift",
    "display_name": "Christinnaa",
    "gifted_user_id": "573785389",
    "gifted_display_name": "spoiledBunnyBot",
    "month": 3.0,
    "trigger_type": 1.0
}
```

**New**
```json
{
    "system_message": "Christinnaa gifted a Tier 1 sub to spoiledBunnyBot! This is their first Gift Sub in the channel!", // added value
    "user_name": "christinnaa",
    "community_gift": 0.0,
    "cumulative_total": 1.0, // added value
    "from_channel_id": 191753975.0,
    "name_color": "#189A8D", // added value
    "gifted_user_name": "spoiledbunnybot",
    "user_id": "29977186",
    "tier": "Tier 1",
    "message": "",
    "context": "subgift",
    "emote_list": null, // added value
    "display_name": "Christinnaa",
    "message_id": "5138869b-98ea-42ff-a307-c6a5ad56470a", // added value
    "gifted_user_id": "573785389",
    "gifted_display_name": "spoiledBunnyBot",
    "month": 1.0,
    "trigger_type": 1.0,
    "duration_months": 0.0, // added value
    "badge_list": [ // added value
        {
            "info": "",
            "id": "1",
            "set_id": "moderator"
        },
        {
            "info": "1",
            "id": "0",
            "set_id": "subscriber"
        }
    ]
}
```



#### Twitch Subscription (community gift)

**Old**
```json
{
    "user_name": "christinnaa",
    "community_gift": true,
    "from_channel_id": 191753975.0,
    "gifted_user_name": "spoiledbunnybot",
    "user_id": "29977186",
    "tier": "Tier 1",
    "message": "",
    "context": "subgift",
    "display_name": "Christinnaa",
    "gifted_user_id": "573785389",
    "gifted_display_name": "spoiledbunnybot",
    "month": 1.0,
    "trigger_type": 1.0
}
```

**New**
```json
{
    "system_message": "Christinnaa gifted a Tier 1 sub to spoiledbunnybot!", // added value
    "community_gift_id": "13560546765088100417", // added value
    "user_name": "christinnaa",
    "community_gift": 1.0,
    "cumulative_total": 0.0, // added value
    "from_channel_id": 191753975.0,
    "name_color": "#189A8D", // added value
    "gifted_user_name": "spoiledbunnybot",
    "user_id": "29977186",
    "tier": "Tier 1",
    "message": "",
    "context": "subgift",
    "emote_list": null, // added value
    "display_name": "Christinnaa",
    "message_id": "5f92f328-1c02-4352-96d8-47ece1117f75",
    "gifted_user_id": "573785389",
    "gifted_display_name": "spoiledbunnybot",
    "month": 1.0,
    "trigger_type": 1.0,
    "duration_months": 0.0, // added value
    "badge_list": [ // added value
        {
            "info": "",
            "id": "1",
            "set_id": "moderator"
        },
        {
            "info": "1",
            "id": "0",
            "set_id": "subscriber"
        },
        {
            "info": "",
            "id": "1",
            "set_id": "sub-gift-leader"
        }
    ]
}
```



#### Twitch Community Gift Subs (1 sub gifted)

**Old**
```json
{
    "user_name": "christinnaa",
    "from_channel_id": 191753975.0,
    "user_id": "29977186",
    "tier": "Tier 1",
    "display_name": "Christinnaa",
    "channel": "twospoiledbunnies",
    "amount": "1",
    "trigger_type": 2.0
}
```

**New**
```json
{
    "user_name": "christinnaa",
    "cumulative_total": 2.0, // added value
    "from_channel_id": 191753975.0,
    "user_id": "29977186",
    "tier": "Tier 1",
    "id": "13560546765088100417",
    "display_name": "Christinnaa",
    "channel": "twospoiledbunnies",
    "amount": 1.0,
    "trigger_type": 2.0
}
```



#### Twitch Bits

**Old**

```json
{
    "user_name": "testfromuser",
    "from_channel_id": 29977186.0,
    "user_id": 76159058.0,
    "message": "This is a test event.",
    "total_amount": 1.0, // removed value
    "amount": 100.0,
    "trigger_type": 5.0
}
```

**New**
```json
{
    "user_name": "testFromUser",
    "from_channel_id": 28526837.0,
    "user_id": "26026416",
    "message": "This is a test event.",
    "display_name": "testFromUser", // added value
    "amount": 100.0,
    "trigger_type": 5.0
}
```

#### Twitch Raid

**Old**
```json
{
    "user_name": "spoiledbunnybot",
    "from_channel_id": 29977186.0,
    "user_id": "573785389",
    "display_name": "spoiledBunnyBot",
    "channel": "christinnaa",
    "amount": "1",
    "trigger_type": 4.0
}
```
**New**
```json
{
    "user_name": "spoiledbunnybot",
    "from_channel_id": 29977186.0,
    "picture_url": "https:\\/\\/static-cdn.jtvnw.net\\/user-default-pictures-uv\\/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", // added value
    "user_id": "573785389",
    "display_name": "spoiledBunnyBot",
    "channel": "christinnaa",
    "amount": 1.0,
    "trigger_type": 4.0
}
```



#### Twitch Shoutout Create

**Old**
```json
{
    "recent_categories": "", // removed value
    "user_name": "spoiledbunnybot2",
    "from_channel_id": 573785389.0,
    "name_color": "", // removed value
    "picture_url": "https:\\/\\/static-cdn.jtvnw.net\\/user-default-pictures-uv\\/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", // removed value
    "user_id": "577561557",
    "id": "0e142e3a-cbc1-4daa-ac40-d8826e06b595",
    "display_name": "spoiledbunnybot2",
    "trigger_type": 28.0
}
```

**New**
```json
{
    "started_at": "2024-01-07T01:22:49Z", // added value
    "user_name": "spoiledbunnybot2",
    "target_cooldown_ends_at": "2024-01-07T02:22:49Z", // added value
    "cooldown_ends_at": "2024-01-07T01:24:49Z", // added value
    "from_channel_id": 573785389.0,
    "moderator_user_name": "spoiledbunnybot", // added value
    "user_id": "577561557",
    "viewer_count": 1.0, // added value
    "display_name": "spoiledbunnybot2",
    "moderator_user_id": "573785389", // added value
    "trigger_type": 28.0,
    "moderator_display_name": "spoiledBunnyBot" // added value
}
```



#### Twitch Shoutout Received

```json
{
    "started_at": "2024-01-07T02:31:28.450207Z",
    "from_channel_id": 24623301.0,
    "from_display_name": "testFromUser",
    "from_user_name": "testFromUser",
    "viewer_count": 87.0,
    "from_user_id": "16621744",
    "trigger_type": 37.0
}
```



#### Twitch Channel Points

**Old**
```json
{
    "redeem_id": "cfc3565c-d702-4fcf-8400-351e737ef6d2",
    "cost": 1.0,
    "user_name": "spoiledbunnybot",
    "from_channel_id": 191753975.0,
    "channel_id": "191753975",
    "reward_id": "44395640-67b1-43a2-b29a-80be22ffd759",
    "user_id": "573785389",
    "message": "",
    "image": "https:\/\/static-cdn.jtvnw.net\/custom-reward-images\/default-4.png", // removed value
    "redeem_name": "heyyyy",
    "display_name": "spoiledBunnyBot",
    "trigger_type": 3.0
}
```

**New**
```json
{
    "redeem_id": "cfc3565c-d702-4fcf-8400-351e737ef6d2",
    "cost": 1.0,
    "reward_description": "", // added value
    "user_name": "spoiledbunnybot",
    "from_channel_id": 191753975.0,
    "channel_id": "191753975",
    "reward_id": "44395640-67b1-43a2-b29a-80be22ffd759",
    "user_id": "573785389",
    "message": "",
    "redeemed_at": "2024-01-07T01:58:39.168313181Z", // added value
    "redeem_name": "heyyyy",
    "display_name": "spoiledBunnyBot",
    "status": "unfulfilled", // added value
    "trigger_type": 3.0
}
```



#### Twitch Announcement

```json
{
    "user_name": "twospoiledbunnies",
    "from_channel_id": 191753975.0,
    "name_color": "PRIMARY",
    "user_id": "191753975",
    "message": "test",
    "emote_list": null,
    "display_name": "twospoiledbunnies",
    "message_id": "c437dea2-1a37-4de5-836f-6adaf202c9d9",
    "trigger_type": 35.0,
    "badge_list": [
        {
            "info": "",
            "id": "1",
            "set_id": "broadcaster"
        },
        {
            "info": "41",
            "id": "3012",
            "set_id": "subscriber"
        }
    ]
}
```



#### Twitch Stream Started

```json
{
    "started_at": "2024-01-07T02:00:21Z",
    "user_name": "spoiledbunnybot",
    "from_channel_id": 573785389.0,
    "user_id": "573785389",
    "id": "43355732987",
    "display_name": "spoiledBunnyBot",
    "type": 0.0,
    "trigger_type": 38.0
}
```



#### Twitch Stream Ended

```json
{
    "user_name": "spoiledbunnybot",
    "from_channel_id": 573785389.0,
    "user_id": "573785389",
    "display_name": "spoiledBunnyBot",
    "type": 1.0,
    "trigger_type": 38.0
}
```



#### Twitch Moderation Ban

**Old**
```json
{
    "target": "spoiledbunnybot2",
    "duration": 0.0, // removed value
    "from_channel_id": 191753975.0,
    "moderator": "twospoiledbunnies",
    "type": 0.0,
    "trigger_type": 11.0
}
```
**New**
```json
{
    "target_user_id": "577561557", // added value
    "target": "spoiledbunnybot2",
    "moderator_user_login": "twospoiledbunnies", // added value
    "target_user_login": "spoiledbunnybot2", // added value
    "from_channel_id": 191753975.0,
    "ends_at": 0.0, // added value
    "event": "ban",
    "moderator": "twospoiledbunnies",
    "is_permanent": 1.0, // added value
    "moderator_user_id": "191753975",
    "type": 0.0,
    "banned_at": "2024-01-07T02:02:33.04548226Z", // added value
    "target_display_name": "spoiledbunnybot2", // added value
    "reason": "", // added value
    "trigger_type": 11.0,
    "moderator_display_name": "twospoiledbunnies" // added value
}
```



#### Twitch Moderation Unban

**Old**
```json
{
    "target": "spoiledbunnybot2",
    "duration": 0.0,
    "from_channel_id": 191753975.0,
    "moderator": "twospoiledbunnies",
    "type": 1.0,
    "trigger_type": 11.0
}
```
**New**
```json
{
    "target_user_id": "577561557", // added value
    "target": "spoiledbunnybot2",
    "target_user_login": "spoiledbunnybot2", // added value
    "from_channel_id": 191753975.0,
    "event": "unban",
    "moderator_user_name": "twospoiledbunnies", // added value
    "moderator": "twospoiledbunnies",
    "moderator_user_id": "191753975", // added value
    "type": 1.0,
    "target_display_name": "spoiledbunnybot2", // added value
    "trigger_type": 11.0,
    "moderator_display_name": "twospoiledbunnies" // added value
}
```



#### Twitch Moderation Clear Chat

**Old**
```json
{
    "target": "",
    "duration": 0.0,
    "from_channel_id": 191753975.0,
    "moderator": "twospoiledbunnies",
    "type": 4.0,
    "trigger_type": 11.0
}
```
**New**
```json
{
    "from_channel_id": 191753975.0,
    "event": "clear chat",
    "moderator": "twospoiledbunnies",
    "type": 4.0,
    "trigger_type": 11.0
}
```



#### Twitch Moderation Delete Chat Message

**Old**
```json
{
    "target_user_id": "573785389",
    "target": "",
    "target_user_login": "spoiledbunnybot",
    "duration": 0.0,
    "from_channel_id": 191753975.0,
    "message": "test", // removed value
    "moderator": "twospoiledbunnies",
    "type": 18.0,
    "message_id": "38b181f6-0347-40ce-89ea-fcbd8e0c3a6c",
    "trigger_type": 11.0
}
```
**New**
```json
{
    "target_user_id": "573785389",
    "target_user_login": "spoiledbunnybot",
    "from_channel_id": 191753975.0,
    "event": "delete chat message",
    "moderator": "twospoiledbunnies",
    "message_id": "38b181f6-0347-40ce-89ea-fcbd8e0c3a6c",
    "type": 18.0,
    "target_display_name": "spoiledBunnyBot", // added value
    "trigger_type": 11.0
}
```

#### Twitch Moderation Unraid

**Old**
```json
{
    "target": "",
    "duration": 0.0,
    "from_channel_id": 573785389.0,
    "moderator": "spoiledBunnyBot",
    "type": 6.0,
    "trigger_type": 11.0
}
```
**New**
```json
{
    "user_name": "spoiledbunnybot", // added value
    "from_channel_id": 573785389.0,
    "event": "unraid",
    "user_id": "573785389", // added value
    "moderator": "spoiledBunnyBot",
    "display_name": "spoiledBunnyBot", // added value
    "type": 6.0,
    "trigger_type": 11.0
}
```

#### Twitch Moderation Raid Create

Note: Old Pubsub fires as soon as raid is created. New Eventsub fires only after the raid goes through already.

**Old**
```json
{
    "target": "Christinnaa",
    "duration": 0.0,
    "from_channel_id": 573785389.0,
    "moderator": "spoiledBunnyBot",
    "type": 5.0,
    "trigger_type": 11.0
}
```

**New**
```json
{
    "target": "christinnaa", // added value
    "user_name": "christinnaa", // added value
    "from_channel_id": 573785389.0,
    "event": "raid",
    "user_id": "29977186",
    "moderator": "spoiledbunnybot",
    "display_name": "Christinnaa", // added value
    "amount": 1.0,
    "type": 5.0,
    "trigger_type": 11.0
}
```

#### Twitch Moderation Add Moderator


```json
{
    "from_channel_id": 191753975.0,
    "event": "add moderator",
    "moderator_user_name": "spoiledbunnybot2",
    "moderator_user_id": "577561557",
    "type": 19.0,
    "trigger_type": 11.0,
    "moderator_display_name": "spoiledbunnybot2"
}
```


#### Twitch Moderation Remove Moderator

```json
{
    "from_channel_id": 191753975.0,
    "event": "remove moderator",
    "moderator_user_name": "spoiledbunnybot2",
    "moderator_user_id": "577561557",
    "type": 20.0,
    "trigger_type": 11.0,
    "moderator_display_name": "spoiledbunnybot2"
}
```



#### Twitch Poll Begin

**Old**
```json
{
    "vote_total_points": 0.0,
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Created",
    "choice_amount": 3.0,
    "vote_total": 0.0,
    "vote_total_base": 0.0,
    "top_vote_list": [
        0.0,
        1.0,
        2.0
    ],
    "vote_total_bits": 0.0,
    "type": 0.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```

**New**
```json
{
    "vote_total_points": 0.0,
    "started_at": "2024-01-07T02:11:50.921660672Z",
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "channel_points_voting": { // added value
        "is_enabled": 1.0,
        "amount_per_vote": 3.0
    },
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Created",
    "ends_at": "2024-01-07T02:13:50.921660672Z", // added value
    "choice_amount": 3.0,
    "vote_total": 0.0,
    "vote_total_base": 0.0,
    "top_vote_list": [
        0.0,
        0.0,
        0.0
    ],
    "vote_total_bits": 0.0,
    "type": 0.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```



#### Twitch Poll Voted

**Old**
```json
{
    "vote_total_points": 0.0,
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Voted",
    "choice_amount": 3.0,
    "vote_total": 2.0,
    "vote_total_base": 2.0,
    "top_vote_list": [
        0.0,
        2.0,
        1.0
    ],
    "vote_total_bits": 0.0,
    "type": 1.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 50.0,
        "total_voters": 1.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 50.0,
        "total_voters": 1.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```

**New**
```json
{
    "vote_total_points": 0.0,
    "started_at": "2024-01-07T02:11:50.921660672Z", // added value
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "channel_points_voting": { // added value
        "is_enabled": 1.0,
        "amount_per_vote": 3.0
    },
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Voted",
    "ends_at": "2024-01-07T02:13:50.921660672Z", // added value
    "choice_amount": 3.0,
    "vote_total": 2.0,
    "vote_total_base": 2.0,
    "top_vote_list": [
        2.0,
        0.0,
        1.0
    ],
    "vote_total_bits": 0.0,
    "type": 1.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 50.0,
        "total_voters": 0.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 50.0,
        "total_voters": 0.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```



#### Twitch Poll End

**Old**
```json
{
    "vote_total_points": 0.0,
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Ended",
    "choice_amount": 3.0,
    "vote_total": 2.0,
    "vote_total_base": 2.0,
    "top_vote_list": [
        0.0,
        2.0,
        1.0
    ],
    "vote_total_bits": 0.0,
    "type": 2.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 50.0,
        "total_voters": 1.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 50.0,
        "total_voters": 1.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```

**New**
```json
{
    "vote_total_points": 0.0,
    "started_at": "2024-01-07T02:11:50.921660672Z", // added value
    "poll_name": "What's the best show?",
    "duration": 120.0,
    "channel_points_voting": { // added value
        "is_enabled": 1.0,
        "amount_per_vote": 3.0
    },
    "choice_2_info": {
        "choice_id": "ee97b68f-2a29-4171-b531-229a46438fad",
        "votes": {
            "base": 0.0,
            "total": 0.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Atlantis",
        "percentage": 0.0,
        "total_voters": 0.0
    },
    "from_channel_id": 191753975.0,
    "event": "Ended",
    "choice_amount": 3.0,
    "vote_total": 2.0,
    "ended_at": "2024-01-07T02:13:50.921660672Z", // added value
    "vote_total_base": 2.0,
    "top_vote_list": [
        2.0,
        0.0,
        1.0
    ],
    "vote_total_bits": 0.0,
    "type": 2.0,
    "choice_1_info": {
        "choice_id": "d8f6c8df-fe87-4a7b-9790-602ca950407b",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate SG-1",
        "percentage": 50.0,
        "total_voters": 0.0
    },
    "choice_3_info": {
        "choice_id": "ba36bb77-615b-4a7f-af51-9d9eeb59a9a3",
        "votes": {
            "base": 1.0,
            "total": 1.0,
            "channel_points": 0.0,
            "bits": 0.0
        },
        "tokens": {
            "channel_points": 0.0,
            "bits": 0.0
        },
        "title": "Stargate Universe",
        "percentage": 50.0,
        "total_voters": 0.0
    },
    "poll_id": "3486d949-61db-4fe9-9ca5-ddcdb06b9af9",
    "trigger_type": 16.0
}
```



#### Twitch Prediction Begin

**Old**
```json
{
    "outcome_1_info": {
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Yes"
    },
    "outcome_3_info": {
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Created",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 0.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "total_user": 0.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 0.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```

**New**
```json
{
    "outcome_1_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Yes"
    },
    "vote_total_points": 0.0,
    "started_at": "2024-01-07T02:18:37.16018452Z", // added value
    "outcome_3_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Created",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 0.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 0.0,
    "winning_outcome": "",
    "locks_at": "2024-01-07T02:19:37.16018452Z", // added value
    "trigger_type": 15.0
}
```



#### Twitch Prediction Voted

**Old**
```json
{
    "outcome_1_info": {
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Yes"
    },
    "outcome_3_info": {
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Voted",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 1.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```

**New**
```json
{
    "outcome_1_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Yes"
    },
    "vote_total_points": 10.0,
    "started_at": "2024-01-07T02:18:37.16018452Z", // added value
    "outcome_3_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Voted",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "color": "blue", // added value
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "top_predictors": [
            {
                "channel_points_used": 10.0, // added value
                "channel_points_won": null,
                "user_name": "spoiledBunnyBot",
                "user_id": "573785389",
                "user_login": "spoiledbunnybot"
            }
        ],
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 1.0,
    "winning_outcome": "",
    "locks_at": "2024-01-07T02:19:37.16018452Z", // added value
    "trigger_type": 15.0
}
```



#### Twitch Prediction Locked

**Old**
```json
{
    "outcome_1_info": {
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Yes"
    },
    "outcome_3_info": {
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Locked",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 2.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```

**New**
```json
{
    "outcome_1_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Yes"
    },
    "vote_total_points": 10.0,
    "started_at": "2024-01-07T02:18:37.16018452Z", // added value
    "outcome_3_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Maybe?"
    },
    "locked_at": "2024-01-07T02:19:36.295862914Z", // added value
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Locked",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "color": "blue", // added value
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "top_predictors": [
            {
                "channel_points_used": 10.0, // added value
                "channel_points_won": null,
                "user_name": "spoiledBunnyBot",
                "user_id": "573785389",
                "user_login": "spoiledbunnybot"
            }
        ],
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 2.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```



#### Twitch Prediction Resolved

**Old**
```json
{
    "outcome_1_info": {
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Yes"
    },
    "outcome_3_info": {
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Resolved",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 3.0,
    "winning_outcome": "9cbea490-36eb-434a-a58f-3d5fd685287b",
    "trigger_type": 15.0
}
```

**New**
```json
{
    "outcome_1_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "0d33108c-4792-473a-b8d3-c5f42ec7d67c",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Yes"
    },
    "vote_total_points": 10.0,
    "started_at": "2024-01-07T02:18:37.16018452Z", // added value
    "outcome_3_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "ff84634c-66cd-4930-8d74-49ec860d00b0",
        "total_points": 0.0,
        "percentage": 0.0,
        "top_predictors": [], // added value
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Resolved",
    "prediction_id": "d32cf35b-f906-4eff-b194-00afa6a7c968",
    "vote_total": 1.0,
    "ended_at": "2024-01-07T02:20:02.73362957Z", // added value
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "color": "blue", // added value
        "total_user": 1.0,
        "id": "9cbea490-36eb-434a-a58f-3d5fd685287b",
        "total_points": 10.0,
        "percentage": 100.0,
        "top_predictors": [
            {
                "channel_points_used": 10.0, // added value
                "channel_points_won": 10.0,
                "user_name": "spoiledBunnyBot",
                "user_id": "573785389",
                "user_login": "spoiledbunnybot"
            }
        ],
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 3.0,
    "winning_outcome": "9cbea490-36eb-434a-a58f-3d5fd685287b",
    "trigger_type": 15.0
}
```



#### Twitch Prediction Cancelled

**Old**
```json
{
    "outcome_1_info": {
        "total_user": 0.0,
        "id": "a8bfb5de-a426-4fad-bf26-13a3ef6450d5",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Yes"
    },
    "outcome_3_info": {
        "total_user": 0.0,
        "id": "899d9698-e11a-419d-9a09-0f1caf4417a9",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Canceled",
    "prediction_id": "f03f034e-82e7-4243-b100-bdea14faa30d",
    "vote_total": 0.0,
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "total_user": 0.0,
        "id": "88343bcc-0471-4f4d-aac1-881b59e99d8d",
        "total_points": 0.0,
        "percentage": 0.0,
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 4.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```

**New**
```json
{
    "outcome_1_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "a8bfb5de-a426-4fad-bf26-13a3ef6450d5",
        "total_points": 0.0,
        "percentage": "nan",
        "top_predictors": [], // added value
        "name": "Yes"
    },
    "vote_total_points": 0.0,
    "started_at": "2024-01-07T02:24:03.593291655Z", // added value
    "outcome_3_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "899d9698-e11a-419d-9a09-0f1caf4417a9",
        "total_points": 0.0,
        "percentage": "nan",
        "top_predictors": [], // added value
        "name": "Maybe?"
    },
    "duration": 60.0,
    "from_channel_id": 191753975.0,
    "event": "Canceled",
    "prediction_id": "f03f034e-82e7-4243-b100-bdea14faa30d",
    "vote_total": 0.0,
    "ended_at": "2024-01-07T02:24:12.886381243Z", // added value
    "outcome_amount": 3.0,
    "outcome_2_info": {
        "color": "blue", // added value
        "total_user": 0.0,
        "id": "88343bcc-0471-4f4d-aac1-881b59e99d8d",
        "total_points": 0.0,
        "percentage": "nan",
        "top_predictors": [], // added value
        "name": "No"
    },
    "prediction_name": "My Prediction",
    "type": 4.0,
    "winning_outcome": "",
    "trigger_type": 15.0
}
```



#### Twitch HypeTrain Started

**Old**
```json
{
    "total_progress": 495.0,
    "from_channel_id": 29977186.0,
    "goal_progress": 495.0,
    "data": { // removed value
        "participations": {
            "BITS.POLL": 874.0,
            "SUBS.TIER_1_SUB": 7.0
        },
        "started_at": 1704594671682.0,
        "expires_at": 1704594971682.0,
        "conductors": {},
        "ending_reason": null,
        "channel_id": "528140333",
        "updated_at": 1704594671682.0,
        "config": {},
        "ended_at": null,
        "id": "61b8f628-5075-4213-95ac-6ceeac9426fe",
        "progress": {
            "remaining_seconds": 299.0,
            "total": 495.0,
            "value": 495.0,
            "goal": 1173.0,
            "level": {
                "impressions": 835.0,
                "rewards": [
                    {
                        "id": "emotesv2_3114c3d12dc44f53810140f632128b54",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeSleep",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_7d457ecda087479f98501f80e23b5a04",
                        "reward_level": 0.0,
                        "group_id": 1.0,
                        "token": "HypePat",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_e7a6e7e24a844e709c4d93c0845422e1",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeLUL",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_e2a11d74a4824cbf9a8b28079e5e67dd",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeCool",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_036fd741be4141198999b2ca4300668e",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeLove1",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    }
                ],
                "value": 3.0,
                "goal": 1173.0
            }
        },
        "is_boost_train": 0.0
    },
    "current_goal": 1173.0,
    "type": 1.0,
    "current_level": 3.0,
    "trigger_type": 17.0
}
```


**New**
```json
{
    "total_progress": 888.0,
    "expires_at": "2024-01-07T02:36:19.2601425Z",
    "from_channel_id": 93907934.0,
    "event": "begin",
    "top_other_contribution": {}, // added value
    "goal_progress": 888.0,
    "id": "f38f6208-8edc-eba3-da03-437a3db1bf57",
    "current_goal": 58084.0,
    "last_contribution": { // added value
        "user_name": "cli_user2",
        "user_id": "55126364",
        "total": 586.0,
        "display_name": "cli_user2",
        "type": "bits"
    },
    "type": 1.0,
    "current_level": 4.0,
    "top_subscription_contribution": {}, // added value
    "top_bits_contribution": { // added value
        "user_name": "cli_user1",
        "user_id": "47074512",
        "total": 275.0,
        "display_name": "cli_user1"
    },
    "trigger_type": 17.0
}
```



#### Twitch Hypetrain Progressed

**Old**
```json
{
    "total_progress": 1281.0,
    "from_channel_id": 29977186.0,
    "goal_progress": 1281.0,
    "data": { // removed value
        "sequence_id": 2174.0,
        "user_profile_image_url": "https:\/\/static-cdn.jtvnw.net\/custom-reward-images\/default-4.png",
        "user_id": "478335805",
        "source": "BITS",
        "user_login": "dearasmax",
        "progress": {
            "remaining_seconds": 48.0,
            "total": 1281.0,
            "value": 1281.0,
            "goal": 1435.0,
            "level": {
                "impressions": 379.0,
                "rewards": [
                    {
                        "id": "emotesv2_3114c3d12dc44f53810140f632128b54",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeSleep",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_7d457ecda087479f98501f80e23b5a04",
                        "reward_level": 0.0,
                        "group_id": 1.0,
                        "token": "HypePat",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_e7a6e7e24a844e709c4d93c0845422e1",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeLUL",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_e2a11d74a4824cbf9a8b28079e5e67dd",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeCool",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    },
                    {
                        "id": "emotesv2_036fd741be4141198999b2ca4300668e",
                        "reward_level": 0.0,
                        "group_id": "",
                        "token": "HypeLove1",
                        "type": "EMOTE",
                        "set_id": "1a8f0108-5aee-4125-8067-d39e983e934b"
                    }
                ],
                "value": 3.0,
                "goal": 1435.0
            }
        },
        "user_display_name": "DearAsMax",
        "is_boost_train": 0.0,
        "quantity": 100.0
    },
    "current_goal": 1435.0,
    "type": 6.0,
    "current_level": 3.0,
    "trigger_type": 17.0
}
```

**New**
```json
{
    "total_progress": 194.0,
    "expires_at": "2024-01-07T02:36:22.2640692Z",
    "from_channel_id": 93566099.0,
    "event": "progress",
    "top_other_contribution": {}, // added value
    "goal_progress": 183.0,
    "id": "9573f64f-4d7d-9648-a731-ace084f9df45",
    "current_goal": 63424.0,
    "last_contribution": { // added value
        "user_name": "cli_user2",
        "user_id": "66766283",
        "total": 761.0,
        "display_name": "cli_user2",
        "type": "bits"
    },
    "type": 6.0,
    "current_level": 3.0,
    "top_subscription_contribution": { // added value
        "user_name": "cli_user1",
        "user_id": "99926932",
        "total": 651.0,
        "display_name": "cli_user1"
    },
    "top_bits_contribution": { // added value
        "user_name": "cli_user2",
        "user_id": "66766283",
        "total": 761.0,
        "display_name": "cli_user2"
    },
    "trigger_type": 17.0
}
```



#### Twitch HypeTrain Ended

**Old**
```json
{
    "ending_reason": "COMPLETED", // removed value
    "from_channel_id": 29977186.0,
    "data": { // removed value
        "ending_reason": "COMPLETED",
        "ended_at": 1704594893062.0,
        "is_boost_train": 0.0
    },
    "type": 4.0,
    "trigger_type": 17.0
}
```

**New**
```json
{
    "total_progress": 438.0,
    "cooldown_ends_at": "2024-01-07T03:31:24.6541966Z", // added value
    "from_channel_id": 1584750.0,
    "event": "end",
    "top_other_contribution": {}, // added value
    "ended_at": "2024-01-07T02:31:24.6541966Z",
    "id": "e646d2a9-67b9-bc29-1882-0917e6c24e4b",
    "last_contribution": { // added value
        "user_name": "cli_user2",
        "user_id": "26357361",
        "total": 253.0,
        "display_name": "cli_user2",
        "type": "subscription"
    },
    "type": 4.0,
    "current_level": 3.0,
    "top_subscription_contribution": { // added value
        "user_name": "cli_user1",
        "user_id": "18430733",
        "total": 786.0,
        "display_name": "cli_user1"
    },
    "top_bits_contribution": {},
    "trigger_type": 17.0
}
```



#### Twitch Charity Start


```json
{
    "target_amount": 1500000.0,
    "charity_website": "https:\/\/www.example.com",
    "started_at": "2024-01-07T02:31:40.6097965Z",
    "from_channel_id": 88539007.0,
    "event": "start",
    "charity_description": "Example Description",
    "target_amount_currency": "USD",
    "charity_name": "Example Charity",
    "id": "dce01786-41cf-04c6-6219-a5ebe15bd3c1",
    "charity_logo": "https:\/\/abc.cloudfront.net\/ppgf\/1000\/100.png",
    "current_amount_currency": "USD",
    "current_amount": 0.0,
    "type": 0.0,
    "trigger_type": 34.0
}
```


#### Twitch Charity Progress

```json
{
    "target_amount": 1500000.0,
    "charity_website": "https:\/\/www.example.com",
    "from_channel_id": 53766263.0,
    "event": "progress",
    "charity_description": "Example Description",
    "target_amount_currency": "USD",
    "charity_name": "Example Charity",
    "id": "b21218cf-9285-6410-0fbb-34d3f76cb4be",
    "charity_logo": "https:\/\/abc.cloudfront.net\/ppgf\/1000\/100.png",
    "current_amount_currency": "USD",
    "current_amount": 260000.0,
    "type": 1.0,
    "trigger_type": 34.0
}
```



#### Twitch Charity Stop

```json
{
    "target_amount": 1500000.0,
    "charity_website": "https:\/\/www.example.com",
    "stopped_at": "2024-01-07T02:31:49.6769229Z",
    "from_channel_id": 2175702.0,
    "event": "stop",
    "charity_description": "Example Description",
    "target_amount_currency": "USD",
    "charity_name": "Example Charity",
    "id": "a5361c0d-b4ae-9ba2-59a0-3878ee928e83",
    "charity_logo": "https:\/\/abc.cloudfront.net\/ppgf\/1000\/100.png",
    "current_amount_currency": "USD",
    "current_amount": 1450000.0,
    "type": 2.0,
    "trigger_type": 34.0
}
```



#### Twitch Charity Donate

```json
{
    "charity_website": "https:\/\/www.example.com",
    "user_name": "testFromUser",
    "from_channel_id": 45774329.0,
    "event": "donate",
    "charity_description": "Example Description",
    "user_id": "30227007",
    "campaign_id": "06d77f21-659e-c3e9-1f92-f6201237cddf",
    "charity_name": "Example Charity",
    "id": "d63da6b1-f0be-48ab-fbd2-6d844e242082",
    "display_name": "testFromUser",
    "charity_logo": "https:\/\/abc.cloudfront.net\/ppgf\/1000\/100.png",
    "amount": 10000.0,
    "currency": "USD",
    "type": 3.0,
    "trigger_type": 34.0
}
```



#### Twitch Whispers

**Old**
```json
{
    "recipient_display_name": "Christinnaa",
    "from_channel_id": 29977186.0,
    "sent": 0.0,
    "recipient_user_id": 29977186.0,
    "recipient_user_name": "christinnaa",
    "message": "this is a test",
    "sender_color": "#00FF7F",
    "emote_list": [],
    "sender_user_id": 191753975.0,
    "recipient_color": "#189A8D", // removed value, only default provided now
    "sender_user_name": "twospoiledbunnies",
    "sender_display_name": "twospoiledbunnies",
    "trigger_type": 13.0,
    "badge_list": []
}
```

**New**
```json
{
    "recipient_display_name": "Christinnaa",
    "from_channel_id": 29977186.0,
    "sent": 0.0,
    "recipient_user_id": 29977186.0,
    "recipient_user_name": "christinnaa",
    "message": "this is a test",
    "sender_color": "00FF7F",
    "emote_list": [],
    "sender_user_id": 191753975.0,
    "recipient_color": "#000000", // only default provided now
    "sender_user_name": "twospoiledbunnies",
    "sender_display_name": "twospoiledbunnies",
    "trigger_type": 13.0,
    "badge_list": []
}
```
