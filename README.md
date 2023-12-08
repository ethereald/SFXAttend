# SFX Attend Project

## Overview

- QR Code attendance scanner to serve as a webapp.

- The webapp scan QR code, which host user information.

- The webapp then use the obtained user information to fill in an active Google Form, and submit the form to generate a record in an pre-defined Google Sheet.



## Major Artifects Explain

| File                | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| index.html          | Main site page, which redirect to a different website so that people cannot guess the actual locations.      |
| scanner.html        | Actual webapp to host the QR code scanner.                                                                   |
| getqr.html          | QR Code Generating Page to generate the QR code and embedded it inside a document for printing.              |
| SFX Attendance.xlsm | Sample exported spreadsheet from Google, with VBA code trying to mimic what Google Apps Script is composing. |
| encodeString.js     | Backup of the Google Apps Script being used to encode the QR code content.                                   |



## Example of Using getqr.html

Sample URL: [getqr.html?code=000000001pFGTg4Wa2xWZLtTahx0OyEDNzITMzITM](https://sfxattend01.000webhostapp.com/getqr.html?code=000000001pFGTg4Wa2xWZLtTahx0OyEDNzITMzITM)
