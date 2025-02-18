---
layout: ext_single
title: Web Request
desc: Send any HTTP request. Supports expression fields. 
category: utilities
date: '2021-02-02T00:00:00-05:00'
permalink: extensions/utilities/:slug
download_url: https://github.com/christinna9031/LB-Web-Request/releases
developer_name: Christina K.
developer_url: https://docs.christinak.ca/
version: 1.3
sammi_version: 1.42 
platform: Any
overview: |
    A simple SAMMI extension for web requests.\
    Useful for triggering actions without actually having to open the UTL in your browser or retrieving data from some public APIs.\
    Supports expression fields.
setup: |
    1. Install the extension. You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. Use `Send to Extension - Web Request` command and fill out all the fields. There is already a premade button that shows how to retrieve the most recent tweet from NYTimes.

    | Box name | Description |
    |-------|--------|
    | variable | variable to save the response into (`save_in_variable` must be set to yes) |
    |save_in_variable | whether you want to save the response into variable|
    |method|your web request method (GET is usually used for getting data and POST is usually used for triggering actions/posting data)|
    |proxy|Whether you want your request to go through proxy. Select yes if your requests are failing. |
    |expression|specify a JSON Path expression. In case of a single match a variable is set and in case of multiple matches a stack with the same name is created.|
    {:class='table table-primary w-auto table-hover data-toggle='table'}

    **Advanced usage of proxy**  
    Feel free to modify the .lbe file to use your own proxy (required for some APIs due to CORS errors as calling them from `file://` sets the origin to null). Simply change this line: `url = https://cors.bridged.cc/${url}` to your own URl.\
    The current proxy the extension uses requires an API key (default one I applied for is provided). You can apply for your own key at [https://grida.co/cloud/cors/register](https://grida.co/cloud/cors/register) and replace the value of `headers['x-cors-grida-api-key']` in the .lbe file with it.\
    Any modifications to the .lbe file require you to reinstall the extension.
privacy_collect: false
---