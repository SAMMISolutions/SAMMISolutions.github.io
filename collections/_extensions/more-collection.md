---
layout: ext_single
title: More Collection
slug: more-collection
desc: Array/Object functions not included by default!
category: utilities
date: '2025-10-27T00:00:00-00:00'
permalink: extensions/utilities/:slug
download_url: https://downgit.github.io/#/home?url=https://github.com/prodzpod/SAMMI-Extensions/blob/main/More%20Collection.sef
developer_name: prod
developer_url: https://prod.kr
icon_local: more-collection-0.png
screenshots_local: more-collection-1.png, more-collection-2.png, more-collection-3.png
version: 1.0
sammi_version: '2025.1.1^'
platform: Any
overview: |
    # Features

    Includes array and object functions not included in base SAMMI.
    - `Object Get Entries`: Returns a list of key/value pair of an object. `{a: 1, b: 2}` becomes `[["a", 1], ["b", 2]]`
    - `Entries to Object`: A reverse operation of `Object Get Entries`.
    - `Array Reverse`: Reverses an array.
    - `Array Flatten`: Turns multi-dimensional array into single dimension. `[[1, 2], [3, [4]]]` becomes `[1, 2, 3, 4]`.
    - `Array Transpose`: Transposes a 2d array matrix. `[[1, 2, 3], [4, 5, 6]]` becomes `[[1, 4], [2, 5], [3, 6]]`.
    - `Array Zip`: Converts two arrays into a single array of pairs. `[1, 2, 3]` and `[4, 5, 6]` becomes `[[1, 4], [2, 5], [3, 6]]`.
    - `Array Make Unique`: Removes all elements that is not unique. Keeps the first element if possible.
    - `Array Intersect`, `Array Exclusion` and `Array Union`: Takes two arrays and set operates on it. 
    - `Object Union`: Takes two objects and unions them based on key. value of the second object is preserved over the first.
    - `Object Filter by Key`/`Object Filter by Value`: Runs Array filter over an object's keys/values and leaves entries that matches.
    - `Object Map Value`: Runs Array map over an object's values.
    - `Object Get Sorted Keys by Value`: Returns a sorted list of keys in alphabetical order.
    - `Get Random Element`: Get a random element from the array.
    - `Get Random Element From Weighted List`: Get a random element with weights as values. All weights must be a number. `{a: 1, b: 3}` has 75% chance to return `"b"` and 25% chance to return `"a"`.
    - `String Pad Start`/`String Pad End`: Pads strings with a given substring to match the length.

    Example deck is available in [the Examples directory](https://github.com/prodzpod/SAMMI-Extensions/tree/main/Examples) in the code repository. The code is available to examine and download on [github](https://github.com/prodzpod/SAMMI-Extensions/tree/main).

    # Disclaimer

    If you have any **questions**, **help** or **bugs to report** while using this extension, please message me at @pr_d on discord! I'd be glad to help you out.
setup_url: https://sammi.solutions/extensions/install
privacy_collect: false
---
