---
layout: ext_single
title: Google Sheets
slug: google-sheets
desc: Read and manipulate data in your Google Sheets directly from SAMMI
category: productivity
date: '2022-10-15T00:00:00-05:00'
permalink: extensions/productivity/:slug
download_url: https://christinak.itch.io/sammi-google-sheets
developer_name: Christina K.
developer_url: https://christinak.itch.io
icon_local: gsheets.png
screenshots_local: g_sheets_deck.png
version: 1.0
sammi_version: 2022.4.4
platform: Any
overview: |

    **Read and manipulate data in your Google Sheets directly from SAMMI!**\
    For example, you could create your own leaderboard sheet and easily share it with others.

    **Important Note**\
    This extension only works with public Google Spreadsheets that have been previously created with it. It cannot read or modify any of your other files.    
    Some read and write quotas per minute apply (more in documentation). 

    **Available commands**
    - Get Data, Find Data
    - Append Data, Update Data, Batch Update, Copy Paste, Clear Data
    - Auto Fill, Auto Sort, Randomize, Find and replace, Delete Duplicates, Split Text
    - Merge Cells, Unmerge Cells, Insert Range, Delete range
    - Create Spreadsheet, Duplicate Sheet, Add Sheet

    **Who is it for?**\
    This extension expects you to have some basic to advanced Google Spreadsheets knowledge. You will also need to have some basic understanding of SAMMI (such as understanding of how objects and arrays work).
    With this knowledge you can easily add new data, modify them, sort them, retrieve them and much more  directly from SAMMI! 
setup: |
    **Important to know**\
    The extension only works with **public spreadsheets** specifically created with it (see [how to make a spreadsheet public](https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop)). It cannot read or modify any of your other files.     


    Your **read quota** is 60 requests/minute and you do not share it with other extension users. There is no daily limit.\
    Your **write quota** is 30 requests/minute (you can send batch requests that count as 1 request) and you share it with other extension users.\
    Total quota is 300 requests/minute. The extension assumes there will be no more 10 users making 30 write requests per minute at the same time, but this might be a subject to change later. There is no daily limit.   

    **How it works**\
    The extension utilizes Google Sheets API endpoints to read and write data.\
    While reading data is easy, as it only requires an API key, writing data is more complex. The extension ulitizes a custom made API to retrieve your refresh token, as this is only possible server-side and cannot be done from your Bridge.\

     <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="initsetup-tab" data-bs-toggle="tab" data-bs-target="#initsetup" type="button" role="tab" aria-controls="initsetup" aria-selected="true">Initial Setup</button>
        <button class="nav-link" id="genparams-tab" data-bs-toggle="tab" data-bs-target="#genparams" type="button" role="tab" aria-controls="genparams" aria-selected="false">General Parameters</button>
        <button class="nav-link" id="extbuttons-tab" data-bs-toggle="tab" data-bs-target="#extbuttons" type="button" role="tab" aria-controls="extbuttons" aria-selected="false">Buttons</button>
    </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active mt-3" id="initsetup" role="tabpanel" aria-labelledby="initsetup-tab" markdown=1>
 
    
    1. **Install the extension**  
    You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install).
    2. **Configure INIT Settings button**  
    You should see a new premade deck in your SAMMI. Right click on the red INIT Settings button - edit commands.
        - `Refresh Token` - you need to allow the extension to access your Google Sheets and retrieve the refresh token. Please follow [this link and all its instructions after you get redirected](https://accounts.google.com/o/oauth2/v2/auth?client_id=772733629610-952dp5qu1gm9802ka1t6f73o6u8m7drn.apps.googleusercontent.com&redirect_uri=https://christinna9031.github.io/LioranBoard-Files/sheetsauth.html&response_type=code&scope=https://www.googleapis.com/auth/drive.file&access_type=offline&prompt=consent).\
        Note: This will allow the extension to read and modify only files that have been previously created with it. It does not have permissions to do anything else.
        - `Api Key` - you will need your own Google API Key.
        Follow the [video guide](https://www.youtube.com/watch?v=JFtBLf44ONs) showing all the steps below: 
            1. Go to the Google Cloud Console.
            2. Click the project drop-down and select or create the project for which you want to add an API key.
            3. Click the menu button and select APIs & Services.
            4. Click on the + Enable APIs and services. Search for Google Sheets, click on the search result - Enable. Repeat the same process for Google Drive API (search and enable it as well).
            5. Click the menu button again and select APIs & Services > Credentials.
            6. On the Credentials page, click + Create Credentials > API key. You can optionally restrict it to Google Sheets API.
            7. Copy the newly created key and paste it in the apiKey field in your INIT button.

        - `Itch Key` - key which was provided to you on the Itch.io purchase page. You can click on the purchase confirmation link that was sent to your email to retrieve it again. If you have any issues retrieving your key, please join our Discord server and ask for assistance.
        - `Show Alerts` - whether you want to show yellow notification messages for successful requests. If you set it to false, only errors are shown.
        - Configure `Google Sheets OPTIONS` commands. Check which Google Sheets commands you wish to use and display in your commands list to prevent clutter.
        Default commands which are always available: Get Data, Append Data, Update Data, Batch Update, Find Data, Sort Range.
    3. Use **Create Spreadsheet** button to create your first Spreadsheet, as this extension can only modify Spreadsheets specifically created with it (you can create as many as you want). 
        - Once the Spreadsheet is created, navigate to it in your [browser](https://docs.google.com/spreadsheets/u/0/) and manually [make it public](https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop), as the extension cannot otherwise read it. 
        - (optionally) Go back to your INIT Settings button and fill out the `spreadsheetID` in Set String Variable command if you're going to use the extension only with one specific SpreadSheet. Your Spreadsheet ID can be retrieved by going to your spreadsheet in the browser and copying it from the URL: `https://docs.google.com/spreadsheets/d/YOURSPREADSHEETID/edit?usp=sharing`
    4. Your basic set up is now done and you're ready to start using the extension! Please review the **General Parameters** and **Buttons** tabs on this page as well, as they contain important information regarding each Google Sheet extension command. 

    </div>

    <div class="tab-pane fade mt-3" id="genparams" role="tabpanel" aria-labelledby="genparams-tab" markdown=1>

    A lot of buttons share the same parameters, which are going to be skipped in the Buttons section.

    **SpreadsheetID**  
    
    You can either fill it out manually for each button or set up `spreadsheetID` variable in your INIT button if you intend to use a single Spreadsheet.   

    Spreadsheet ID can be retrieved by going to your spreadsheet in the browser and copying it from the URL: `https://docs.google.com/spreadsheets/d/YOURSPREADSHEETID/edit?usp=sharing`

    **SheetName**  

    Name of the particular Sheet you want to Get or Edit data in.
    <div class="alert alert-warning" role="alert">The extension automatically converts your sheet name to your sheet ID to make it easier to work with. If you rename a sheet to another sheet's name that previously existed in your SpreadSheet (i.e. Sheet1 becomes Sheet2 and Sheet2 becomes Sheet1), you must completely close and reopen Bridge to reset your session. Otherwise it will still assign the old sheet ID to the name.</div> 

    **Range**  
    Range you wish to Get or Edit data in, such as `A1:B10`.  

    **Dimension**  
    Major dimension to Get or Edit data in.  

    For example, if you use the Get Data command and set the range to `A1:B10` and your dimension to ROWS, it will return 10 stacks, each containing one row (first stack will be `A1-B1` values, second one `A2-B2` values, etc.).  

    If you change your dimension to COLUMNS, it will return 2 stacks, each containing 1 column (first stack will be `A1-A10` values and second stack will have `B1-B10` values).  

    **Values** (applies to Append Data, Update Data and Batch Update commands)  

    You can send values to the extension in two different ways:  

    1. A string of values separated by `|` marking individual cells. For example, if you want to insert values in A1:A7 range (make sure dimension is COLUMNS), you can enter them like this: `Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday`.
    2. A stringified array. All values from the array will be inserted into the selected range, starting from position 0 and ending with the last position.
        1. Create an array with some entries.
        2. Use Stringify Array command.
        3. Insert the stringified array variable in the Values field.

    </div>

    <div class="tab-pane fade mt-3" id="extbuttons" role="tabpanel" aria-labelledby="extbuttons-tab" markdown=1>
     
    **Append by value/array**  
    Appends values to a spreadsheet, either by a single variable or an array. Must be either a single column or single row.

    | Input box | Description | 
    |-------|--------|
    | inputType | How the data should be interpreted. Default is [User Entered](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption).
    |InsertTypeHow | How the input data should be [inserted](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append#InsertDataOption).
    {:class='table table-secondary table-hover' }


    **Update Data**  
    Same as Append Data command, except it will update (=overwrite) data in the selected range instead of appending them.  

    **Batch Update**  
    This is a very important button to understand if you want to perform update data batch requests. Instead of sending multiple single requests, use Batch Update command instead.  

    Please remember that you share write request quota with all other users using the extension, so try your best to group up your `Update Data` requests.  

    | Input box | Description |
    |-------|--------|
    |Amount | amount of Update Data requests you're sending|
    {:class='table table-secondary table-hover' }

    1. Send 'Google Sheets Batch Update' command and specify the amount of requests.
    2. Send all your following Update Data requests as you normally would.
    3. The extension will queue up the requests and wait for the last request to send them all at once. If you fail to supply all requests within the next 10 seconds, the queue will be deleted and resetted. Simply said, either all requests are sent or none.  

    **Get Data**  
    Retrieves data based on the range and dimension, and saves them into an array.

    | Input box | Description |
    |-------|--------|
    | Render | How values should be represented in the output. Default is [formatted value](https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption). |
    |Delete Empty | Whether to delete empty values before putting them into the stack.|
    |saveVariable| Name of the array for the retrieved data. 
    {:class='table table-secondary table-hover'}

    **Find Data**  
    Matches a string/value to a cell in a single column or row and returns its coordinates + related values. Must be an exact match. Finds the first occurence only.  

    <div class="alert alert-warning mt-2" role="alert">This command uses a custom formula and works only if you're using Google Sheets in English or have added English as 'Other language I understand'. See <a href="https://www.bettercloud.com/monitor/the-academy/using-formulas-in-different-languages-in-google-sheets/">Using formulas in different languages.</a></div>

   
    | Input box | Description |
    |-------|--------|
    |Range|Range to search. Must be exactly one column or one row, i.e. `A1:A10` or `A1:K1`.|
    |Find | string to find (must exactly match the cell contents, case sensitive). <br/> There are some exceptions. For example for a date you need to use the following format: `DATE(YYYY,MM,DD)` (i.e. `DATE(2012,1,1)` ), see [MATCH function](https://support.google.com/docs/answer/3093378?hl=en). |
    |Dimension | select COLUMNS or ROWS depending on whether your range is a column or row.|
    |Span| The span of the rows/columns to retrieve. If set to `0`, the whole column/row is returned. If Span is set to `1:5`, it will return row 1-5 if you search by column and column A-E if you search by row.|
    |saveVariable| variable to save the cell's coordinates. Returns an object containing the "cell" key which contains our cell coordinates and the "values" key which is an array containing all the values in the dimension and range specified. If the value is not found, returns an empty string `""`. | 
    {:class='table table-secondary table-hover' }

    **Create SpreadSheet**  
    Creates a new SpreadSheet. The extension can only modify spreadsheets specifically created with this command.

    | Input box | Description |
    |-------|--------|
    |Title | Name for your new SpreadSheet|
    |saveVariable | variable to save your new SpreadSheet ID into|
    {:class='table table-secondary table-hover' }

    <div class="alert alert-warning" role="alert">You need to manually make the newly created spreadsheet public.</div>

    There will be a hidden sheet added to every spreadsheet you create. This sheet serves as sort of a look up sheet for Find Data command. Please don't delete or rename it.  


    **Duplicate Sheet**  
    Duplicates an existing sheet.

    | Input box | Description |
    |-------|--------|
    |SourceSheetName | name of the sheet you wish to duplicate |
    |newSheetName | name of the new duplicated sheet |
    |insertSheetIndex | where in your SpreadSheet you want to insert the duplicated sheet |
    {:class='table table-secondary table-hover' }

    **Add Sheet**  
    Adds a new sheet to the selected SfalsedSheet

    | Input box | Description |
    |-------|--------|
    |Name | name for your new sheet|
    |Index | where in your SpreadSheet you want to insert the new sheet|
    |Hidden | whether you want to make the sheet hidden|
    {:class='table table-secondary table-hover' }


    **Copy Paste**    
    Copies data from the source to the destination

    | Input box | Description |
    |-------|--------|
    |Range | source range to copy |
    |TargetSheet | sheet name to paste the data to |
    |TargetRange | range to paste the data to |
    |PasteType | what kind of data to paste |
    |PasteOrientation | how the pasted data should be oriented. Transpose = all rows become columns.|
    {:class='table table-secondary table-hover' }


    **Auto Fill**    
    Fills in more data based on existing data.

    | Input box | Description |
    |-------|--------|
    |Range | range to autofill.|
    | useAlternateSeries | generate data with the "alternate" series. Differs based on the type and amount of data.|
    {:class='table table-secondary table-hover' }

    **Find Replace**   
    Finds and replaces data in cells over a selected rfalse.

    | Input box | Description |
    |-------|--------|
    |Range | range to find/replace over
    |Find | value to search (string). If you want to use regex, prefix the expression with `regex`. Example: find `regex o.* (.*)`, replace `$1 Hello` Your formatting must follow Java regex rules.|
    |Replace | value to use as the replacement|
    |matchCase | true if the search is case sensitive|
    |matchEntireCell | true if the find value should match the entire cell|
    {:class='table table-secondary table-hover' }


    **Split Text**   
    Splits a column of text into multiple columns, based on a delimiter in each cell.

    | Input box | Description |
    |-------|--------|
    |Range | the source data range. This must span exactly one column. |
    |Delimiter | the delimiter to use. For example :> or ,>. |
    {:class='table table-secondary table-hover' }


    **Sort Range**  
    Sorts data in rows based on a sort order per column.

    | Input box | Description |
    |-------|--------|
    |range | the range to sort|
    |sortOrder | the order the data should be sorted.|
    |dimIndex | the dimension index the sort should be applied to, for example B or 1 (which is the same as B).|
    {:class='table table-secondary table-hover' }

    **Randomize**  
    Randomizes the order of the rows in a selected rfalse.

    | Input box | Description |
    |-------|--------|
    |Range | the range to randomize |
    {:class='table table-secondary table-hover' }


    **Merge Cells**    
    Merges cells for row or column.

    | Input box | Description |
    |-------|--------|
    |Range | the range of cells to merge |
    |mergeType | how the cells should be merged. `MERGE_ALL` creates a single merge from the range. `MERGE_COLUMNS` will create a merge for each column in the range. `MERGE_ROWS` will create a merge for each row in the range.
    {:class='table table-secondary table-hover' }

    **Unmerge Cells**    
    Unmerges previously merged cells.

    | Input box | Description |
    |-------|--------|
    | Range | The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge.|
    {:class='table table-secondary table-hover' }

    **Clear Data**    
    Clears all data in the selected rfalse.

    | Input box | Description |
    |-------|--------|
    Range | range to clear the data from. Example: `A1:A10`.|
    {:class='table table-secondary table-hover' }

    **Insert Range**   
    Inserts cells into a range, shifting the existing cells over or down.

    | Input box | Description |
    |-------|--------|
    |Range | range to insert new cells into |
    | Shift | dimension to be shifted when inserting cells. ROWS = shifted down. COLUMNS = shifted right.|
    {:class='table table-secondary table-hover' }

    **Delete Range**  
    Deletes a range.

    | Input box | Description |
    |-------|--------|
    |Range | the range of cells to delete |
    |Shift | ROWS = existing cells will be shifted upward, COLUMNS = cells will be shifted left |
    {:class='table table-secondary table-hover' }

    **Delete Duplicates**  
    Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Removes duplicates with different letter cases, formatting, or formulas.

    | Input box | Description |
    |-------|--------|
    |Range | the range to remove duplicates rows from.|
    |Dimension | dimension to analyze for duplicate values|
    |StartIndex | The start (inclusive) of the span. The columns in the range to analyze for duplicate values.|
    |EndIndex | The end (exclusive) of the span. The columns in the range to analyze for duplicate values.|
    {:class='table table-secondary table-hover' }

    </div>
    </div>
privacy_collect: true
privacy_policy: The extension ulitizes a custom AWS secure API to retrieve your refresh token, as this is only possible server-side and cannot be done from your Bridge. It never stores or shares any of your credentials and can only ever access public spreadsheets that have been previously created with it.
privacy_auth: true
---