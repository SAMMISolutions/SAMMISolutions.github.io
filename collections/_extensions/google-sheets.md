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
    **Access and manipulate data in your Google Sheets straight from SAMMI!**  
    For instance, you can set up your own leaderboard and easily share it with others.

    **Important Reminder**  
    This extension only works with public Google Spreadsheets that were created using it. It won’t be able to access or edit any of your other files.  
    There are some limits on the number of read and write actions you can perform per minute (more details in the documentation).

    **Available commands**  
    - Get Data, Find Data  
    - Append Data, Update Data, Batch Update, Copy Paste, Clear Data  
    - Auto Fill, Auto Sort, Randomize, Find and Replace, Delete Duplicates, Split Text  
    - Merge Cells, Unmerge Cells, Insert Range, Delete Range  
    - Create Spreadsheet, Duplicate Sheet, Add Sheet  

    **Who is this for?**  
    This extension is ideal for users with a basic to advanced knowledge of Google Spreadsheets. You should also be somewhat familiar with SAMMI (like understanding how objects and arrays work).  
    With these skills, you can quickly add, edit, sort, and retrieve data directly within SAMMI!
setup: |
    **Important to know**  
    The extension only works with **public spreadsheets** created specifically with it (see [how to make a spreadsheet public](https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop)). It cannot access or modify any other files.

    Your **read quota** is 60 requests per minute, and it's exclusive to you (not shared with other users). There is no daily limit.  
    Your **write quota** is 30 requests per minute (you can send batch requests that count as one), but it is shared with other extension users.  
    The total quota is 300 requests per minute. The extension assumes no more than 10 users making 30 write requests per minute at the same time, though this might change in the future. No daily limit applies.

    **How it works**  
    The extension uses Google Sheets API endpoints to read and write data.  
    Reading data only requires an API key, while writing data is more complex. The extension uses a custom API to retrieve your refresh token, as this can only be done server-side and cannot be handled by your Bridge.

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
    You should see a new premade deck in your SAMMI. Right-click on the red INIT Settings button - edit commands.


        - `Refresh Token` - allows the extension to access your Google Sheets and retrieve the refresh token. Please use [this link](https://accounts.google.com/o/oauth2/v2/auth?client_id=772733629610-952dp5qu1gm9802ka1t6f73o6u8m7drn.apps.googleusercontent.com&redirect_uri=https://christinna9031.github.io/LioranBoard-Files/sheetsauth.html&response_type=code&scope=https://www.googleapis.com/auth/drive.file&access_type=offline&prompt=consent) to authorize the extension, and follow the instructions after you get redirected.  
            <div class="alert alert-warning mt-2" role="alert">If you get the 'Something went wrong' error, try opening the link in a different browser or incognito window. Firefox has been known to have issues at times.</div>
            <div class="alert alert-info mt-2" role="alert">This only grants access to files created with the extension, with no permissions for other files.</div>
        - `API Key` - you will need your own Google API Key.  
        Follow the [video guide](https://www.youtube.com/watch?v=JFtBLf44ONs) showing the steps below:
            1. Go to the Google Cloud Console.
            2. Select or create a project for the API key.
            3. In the menu, choose APIs & Services.
            4. Enable the Google Sheets and Google Drive APIs.
            5. Create an API key under APIs & Services > Credentials.
            6. Optionally restrict the key to the Google Sheets API.
            7. Copy the key and paste it into the `apiKey` field of the INIT button.

        - `Itch Key` - this key was provided on the Itch.io purchase page. Retrieve it via the purchase confirmation email. For issues, join our Discord server for assistance.
        - `Show Alerts` - choose whether to show yellow notifications for successful requests (only errors are shown if set to false).
        - Configure `Google Sheets OPTIONS` commands. Select which Google Sheets commands to display in your command list to avoid clutter.  
        Default commands: Get Data, Append Data, Update Data, Batch Update, Find Data, Sort Range.
    3. Use the **Create Spreadsheet** button to generate your first spreadsheet. The extension can only modify spreadsheets it created.  
    - After creating the spreadsheet, go to [Google Sheets](https://docs.google.com/spreadsheets/u/0/) and manually [make it public](https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop) so the extension can read it.
    - (Optional) Return to the INIT Settings button and set the `spreadsheetID` if you plan to use a single spreadsheet. The ID can be found in the URL: `https://docs.google.com/spreadsheets/d/YOURSPREADSHEETID/edit?usp=sharing`.
    4. Setup is now complete, and you can start using the extension! Review the [**General Parameters**](#genparams) and [**Buttons**](#extbuttons) tabs for more information on each command.
    </div>

    <div class="tab-pane fade mt-3" id="genparams" role="tabpanel" aria-labelledby="genparams-tab" markdown=1>

    Many buttons share the same parameters, so they will be omitted in the Buttons section.

    **SpreadsheetID**  

    You can either enter it manually for each button or set the `spreadsheetID` variable in your INIT button if you're using a single Spreadsheet.

    The Spreadsheet ID can be found by going to your spreadsheet in the browser and copying it from the URL: `https://docs.google.com/spreadsheets/d/YOURSPREADSHEETID/edit?usp=sharing`.

    **SheetName**  

    Name of the specific Sheet you want to Get or Edit data in.
    <div class="alert alert-warning" role="alert">The extension automatically converts the sheet name to a sheet ID. If you rename a sheet to a previously used name (e.g., Sheet1 to Sheet2 and vice versa), you must fully close and reopen Bridge to reset your session. Otherwise, the old sheet ID will still be used.</div>

    **Range**  
    The data range you wish to Get or Edit, such as `A1:B10`.

    **Dimension**  
    The major dimension to Get or Edit data in.

    For example, if you're using the Get Data command with the range `A1:B10` and the dimension set to ROWS, it will return 10 stacks, each containing one row (e.g., `A1-B1`, `A2-B2`, etc.).

    If the dimension is set to COLUMNS, it will return 2 stacks, each containing 1 column (e.g., `A1-A10`, `B1-B10`).

    **Values** (applies to Append Data, Update Data, and Batch Update commands)  

    You can send values to the extension in two ways:

    1. A string of values separated by `|`, representing individual cells. For example, if you want to insert values in the A1:A7 range (with the dimension set to COLUMNS), you can format them like this: `Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday`.
    2. A stringified array, where values will be inserted into the selected range starting from the first position.
        1. Create an array with some entries.
        2. Use the Stringify Array command.
        3. Insert the stringified array variable in the Values field.

    </div>


    <div class="tab-pane fade mt-3" id="extbuttons" role="tabpanel" aria-labelledby="extbuttons-tab" markdown=1>

    **Append by value/array**  
    Appends values to a spreadsheet using either a single variable or an array. The values must be arranged in either a single column or a single row.

    | Input box | Description | 
    |-------|--------|
    | inputType | Specifies how the data should be interpreted. The default is [User Entered](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption). |
    | insertType | Determines how the input data should be [inserted](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append#InsertDataOption). |
    {:class='table table-secondary table-hover' }

    **Update Data**  
    Functions similarly to the Append Data command, but instead of adding new data, it updates (overwrites) data in the specified range.

    **Batch Update**  
    Use the Batch Update command to perform multiple update data requests in one batch. Instead of sending each request separately, Batch Update groups them together to reduce API calls.

    Remember, the write request quota is shared with other users of the extension, so it's best to group as many `Update Data` requests as possible.

    | Input box | Description |
    |-------|--------|
    | Amount | The number of Update Data requests you're sending. |
    {:class='table table-secondary table-hover' }

    1. Use the 'Google Sheets Batch Update' command and specify the number of requests.
    2. Send your Update Data requests as usual.
    3. The extension will queue all the requests and send them together once the last request is received. If you don't send all requests within 10 seconds, the queue is cleared and reset. Simply put, either all requests are sent at once, or none are sent.


    **Get Data**  
    Retrieves data based on the specified range and dimension, and stores the results in an object.

    <div class="alert alert-warning mt-2" role="alert">Note: The returned data is stored as an object with numeric keys (1, 2, 3, etc.), not as an array.</div>

    | Input box | Description |
    |-------|--------|
    | Render | Determines how values are represented in the output. The default is [formatted value](https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption). |
    | Delete Empty | Specifies whether to remove empty values before adding them to the stack. |
    | saveVariable | The name of the object in which the retrieved data will be saved. |
    {:class='table table-secondary table-hover'}

    **Find Data**  
    Searches for a string/value in a single column or row and returns its coordinates along with related values. The search must be an exact match and only finds the first occurrence.

    <div class="alert alert-warning mt-2" role="alert">This command relies on a custom formula and works only if Google Sheets is set to English or if English is added as an additional language. See <a href="https://www.youtube.com/watch?v=jgqZYC0ZJHk">Using formulas in different languages</a> for more details.</div>

    | Input box | Description |
    |-------|--------|
    | Range | The range to search within, must be a single column or row, e.g., `A1:A10` or `A1:K1`. |
    | Find | The string to match, must exactly match the cell contents (case sensitive). For dates, use the format: `DATE(YYYY,MM,DD)` (e.g., `DATE(2012,1,1)`), see the [MATCH function](https://support.google.com/docs/answer/3093378?hl=en). |
    | Dimension | Select whether the search range is in COLUMNS or ROWS. |
    | Span | The number of rows/columns to return. Set to `0` for the whole column/row, or specify a range like `1:5` to retrieve rows 1-5 if searching by column, or columns A-E if searching by row. |
    | saveVariable | The variable to store the cell's coordinates. The returned object contains a "cell" key with the coordinates and a "values" key with the values in the specified dimension and range. If no match is found, an empty string `""` is returned. |
    {:class='table table-secondary table-hover'}


    **Create Spreadsheet**  
    Creates a new spreadsheet. The extension can only modify spreadsheets created specifically with this command.

    | Input box | Description |
    |-------|--------|
    | Title | The name for your new spreadsheet. |
    | saveVariable | The variable to store the newly created spreadsheet ID. |
    {:class='table table-secondary table-hover'}

    <div class="alert alert-warning" role="alert">You must manually make the newly created spreadsheet public.</div>

    Each created spreadsheet will have a hidden sheet added, which serves as a lookup for the Find Data command. Do not delete or rename this sheet.

    **Duplicate Sheet**  
    Duplicates an existing sheet within the spreadsheet.

    | Input box | Description |
    |-------|--------|
    | SourceSheetName | The name of the sheet you want to duplicate. |
    | newSheetName | The name for the duplicated sheet. |
    | insertSheetIndex | The position in the spreadsheet where the duplicated sheet should be inserted. |
    {:class='table table-secondary table-hover'}

    **Add Sheet**  
    Adds a new sheet to the selected spreadsheet.

    | Input box | Description |
    |-------|--------|
    | Name | The name of your new sheet. |
    | Index | The position where the new sheet should be inserted in the spreadsheet. |
    | Hidden | Whether or not to hide the new sheet. |
    {:class='table table-secondary table-hover'}


    **Copy Paste**  
    Copies data from a source range and pastes it into a specified target range.

    | Input box | Description |
    |-------|--------|
    | Range | The source range to copy. |
    | TargetSheet | The name of the sheet to paste the data into. |
    | TargetRange | The range to paste the data into. |
    | PasteType | Specifies what kind of data to paste. |
    | PasteOrientation | Determines how the pasted data should be oriented. Setting to Transpose swaps rows and columns. |
    {:class='table table-secondary table-hover'}

    **Auto Fill**  
    Automatically fills in additional data based on the existing data in the specified range.

    | Input box | Description |
    |-------|--------|
    | Range | The range to autofill. |
    | useAlternateSeries | Whether to generate data with the "alternate" series. This varies depending on the type and amount of data. |
    {:class='table table-secondary table-hover'}

    **Find Replace**  
    Finds and replaces data within the specified range.

    | Input box | Description |
    |-------|--------|
    | Range | The range to search and replace values in. |
    | Find | The value to search for (string). To use regex, prefix the expression with `regex`. For example: `regex o.* (.*)`, replace with `$1 Hello`. Must follow Java regex rules. |
    | Replace | The value to use as a replacement. |
    | matchCase | Set to true if the search should be case sensitive. |
    | matchEntireCell | Set to true if the find value should match the entire cell. |
    {:class='table table-secondary table-hover'}


    **Split Text**  
    Splits the text in a single column into multiple columns based on a specified delimiter.

    | Input box | Description |
    |-------|--------|
    | Range | The source data range. It must span exactly one column. |
    | Delimiter | The delimiter used to split the text. For example, `:>` or `,>`. |
    {:class='table table-secondary table-hover'}

    **Sort Range**  
    Sorts rows of data based on the sort order for a specific column.

    | Input box | Description |
    |-------|--------|
    | Range | The range of data to sort. |
    | sortOrder | The order in which the data should be sorted. |
    | dimIndex | The dimension index the sort should apply to, such as B or 1 (B is equivalent to 1). |
    {:class='table table-secondary table-hover'}

    **Randomize**  
    Randomizes the order of the rows in the selected range.

    | Input box | Description |
    |-------|--------|
    | Range | The range of rows to randomize. |
    {:class='table table-secondary table-hover'}



        **Merge Cells**  
    Merges a range of cells either by row or column.

    | Input box | Description |
    |-------|--------|
    | Range | The range of cells to merge. |
    | mergeType | Specifies how the cells should be merged. `MERGE_ALL` creates a single merge from the range, `MERGE_COLUMNS` merges each column, and `MERGE_ROWS` merges each row. |
    {:class='table table-secondary table-hover'}

    **Unmerge Cells**  
    Unmerges cells that were previously merged.

    | Input box | Description |
    |-------|--------|
    | Range | The range within which all cells will be unmerged. If the range spans multiple merged areas, all will be unmerged. The range must not partially span any merge. |
    {:class='table table-secondary table-hover'}

    **Clear Data**  
    Clears all data in the selected range.

    | Input box | Description |
    |-------|--------|
    | Range | The range to clear data from. Example: `A1:A10`. |
    {:class='table table-secondary table-hover'}


    **Insert Range**  
    Inserts new cells into a specified range, shifting existing cells either down or to the right.

    | Input box | Description |
    |-------|--------|
    | Range | The range where new cells will be inserted. |
    | Shift | Specifies the dimension to shift. `ROWS` shifts cells down, and `COLUMNS` shifts cells to the right. |
    {:class='table table-secondary table-hover'}

    **Delete Range**  
    Deletes a range of cells.

    | Input box | Description |
    |-------|--------|
    | Range | The range of cells to delete. |
    | Shift | Specifies the direction to shift existing cells after deletion. `ROWS` shifts cells upward, and `COLUMNS` shifts cells to the left. |
    {:class='table table-secondary table-hover'}

    **Delete Duplicates**  
    Removes rows in the specified range that contain duplicate values in the specified columns. This includes duplicates with variations in letter case, formatting, or formulas.

    | Input box | Description |
    |-------|--------|
    | Range | The range from which duplicate rows will be removed. |
    | Dimension | The dimension to analyze for duplicate values. |
    | StartIndex | The starting column (inclusive) of the range to check for duplicates. |
    | EndIndex | The ending column (exclusive) of the range to check for duplicates. |
    {:class='table table-secondary table-hover'}


    </div>
    </div>
privacy_collect: true
privacy_policy: The extension ulitizes a custom AWS secure API to retrieve your refresh token, as this is only possible server-side and cannot be done from your Bridge. It never stores or shares any of your credentials and can only ever access public spreadsheets that have been previously created with it.
privacy_auth: true
---