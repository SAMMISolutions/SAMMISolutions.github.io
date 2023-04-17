---
layout: basic
title: SAMMI
description: "Free and powerful Stream Deck"
permalink: /webhookreference756
---

<div class="container" markdown="1">

# Webhook reference

Enable webhooks by going to settings.ini file in SAMMI folder and adding the following keys:

`open_server = 1`  

`server_port = <your selected localhost port>` (default = 9450) 

The server will start running as soon as SAMMI is launched.  

As of now it only supports POST requests to the `/webhook` endpoint.  

Webhook trigger can be only added if developer mode is enabled

Url:  `http://localhost:<server_port>/webhook` (default = `http://localhost:9450/webhook`)

Headers: Not required, authorization will be added later.

Body: Plain text or JSON

<hr>

### SAMMI accepts body in the following formats: 
1. Plain text = sends a webhook trigger with `webhook` as message and data as plain text

    Example Request: 
    ```
    Hi there
    ```
    Response: 
    ```json
    {
        "data": "Ok. No proper JSON found, webhook trigger sent with plain text data."
    }
    ```
2. JSON: 
    1. With `trigger` value = sends a webhook trigger with the `trigger` value as message and `data` as data object
    
    **Example Request:**
      ```json
      {
        "trigger": "My webhook trigger",
        "data": "Hello World"
      }
      ```
    **Response:**
      ```json
      {
          "data": "Ok. Webhook trigger sent."
      }
      ```

    2. With `request` object = will perform the specified request (see examples below)
   

<hr>

## Available Requests

#### triggerButton
`buttonID` = ID of the button you wish to trigger

Example Request:  
```json
{
	"request": "triggerButton",
	"data": {
		"buttonID": "ID16"
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### releaseButton
`buttonID` = ID of the button you wish to release

Example Request:  
```json
{
	"request": "releaseButton",
	"data": {
		"buttonID": "ID16"
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### modifyButton
`buttonID` = ID of the button you wish to modify


`id` - button ID to modify
`color` - decimal button color (BGR)
`text` - button text
`image` - button image file name
`border` - border size, 0-7

*leave parameters empty to reset button back to default values*

Example Request:  
```json
{
	"request": "modifyButton",
	"data": {
		"buttonID": "ID13",
        "text": "Hello World", 
        "border": 2
        
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### popupMessage
`message` = text to show

Example Request:  
```json
{
	"request": "popupMessage",
	"data": {
		"message": "Hello World!"
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### alertMessage
`message` = text to show

Example Request:  
```json
{
	"request": "alertMessage",
	"data": {
		"message": "Hello World!"
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### notificationMessage
`title` = title for the tray message


`message` = text to show

Example Request:  
```json
{
	"request": "notificationMessage",
	"data": {
    "title": "My Webhook",
	  "message": "Hello World!"
	}
}
```

Response:
```json
{
    "data": "Ok."
}
```

#### getVariable
`buttonID` = button ID where the variable lives, use "global" for global variables


`name` = name of the variable to retrieve

Example Request for a regular variable:  
```json
{
	"request": "getVariable",
	"data": {
    "buttonID": "ID16",
	  "name": "myVariable"
	}
}
```

Response: 
```json
{
    "data": "Test Hello"  // this is the value of the `myVariable` variable
}
```

Example Request for an object:  
```json
{
	"request": "getVariable",
	"data": {
    "buttonID": "ID16",
	  "name": "myObject"
	}
}
```

Response: 
```json
{
    "data": "{ 

"value

": { 

"key

": 

"bla

" } }"   // this is the stringified object 'myObject'
}
```

#### setVariable
`buttonID` = button ID where the variable will live, use "global" for global variables


`name` = name of the variable to set


`value` = variable value

Example Request for setting a regular string variable:
```json
{
	"request": "setVariable",
	"data": {
    "buttonID": "ID16",
	  "name": "myVariable",
    "value": "Hi there!" 
	}
}
```

Response: 
```json
{
    "data": "Ok."
}
```

Example Request for setting a new object variable:
```json
{
	"request": "setVariable",
	"data": {
		"buttonID": "ID16",
		"name": "myObject",
		"value": {
			"firstKey": "Hi there",
			"secondKey": "Hello there"
		}
	}
}
```

Response: 
```json
{
    "data": "Ok."
}
```

#### deleteVariable
`buttonID` = button ID where the variable lives, use "global" for global variables


`name` = name of the variable to delete

Example Request:  
```json
{
	"request": "deleteVariable",
	"data": {
    "buttonID": "ID16",
	  "name": "myVariable", 
	}
}
```

Response: 
```json
{
    "data": "Ok."
}
```

#### insertArray
`buttonID` = button ID where the array lives, use "global" for global variables


`name` = name of the array to insert the value into


`index` = index (position) in the array to insert the value into, first position has an index 0


`value` = value to insert

Example Request:  
```json
{
	"request": "insertArray",
	"data": {
    "buttonID": "ID16",
	  "name": "myArray", 
    "index": 1, 
    "value": "Hello World"
	}
}
```

Response: 
```json
{
    "data": "Ok."
}
```

#### deleteArray
`buttonID` = button ID where the array lives, use "global" for global variables


`name` = name of the array to delete the index in


`index` = index (position) in the array to delete, the first position has index of 0

Example Request:  
```json
{
	"request": "deleteArray",
	"data": {
    "buttonID": "ID16",
	  "name": "myArray", 
    "index": 0, 
	}
}
```

Response: 
```json
{
    "data": "Ok."
}
```

<hr>

## Command Line

You can perform all the requests above from Command Line by using `curl`. 

**Example curl request for json formatted body:** 

```batch
curl -d "{

"someValue

": 

"Hello World!

", 

"trigger

": 

"some trigger

"}" -X POST http://localhost:9450/webhook
```
The `some trigger` trigger will be the webhook trigger message.

**Example curl request for text formatted body:** 

```batch
curl -d "yay" -X POST http://localhost:9450/webhook
``` 
If there’s no trigger found, the webhook trigger message will be automatically set to "webhook".


## Errors
SAMMI will respond with status 404 if the request does not exist or it is missing required data 

Example of sending misspelled request:
```json
{
	"request": "triggerrButton",
	"data": {
    "buttonID": "ID16",
	}
}
```

Response (404):
```json
{
    "data": "Unknown request. Send Webhook trigger instead. See protocol for all documented requests."
}
```

Example of sending correct request with missing required data: 
```json
{
	"request": "setVariable",
	"data": {
    "buttonID": "ID16"
	}
}
```

Response (404):
```json
{
    "data": "Set Variable request is missing Data object: {name, value, buttonID}."
}
```







</div>