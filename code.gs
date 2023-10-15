// This function is used to ask for the permission to edit the document, to access the google account.
function initialize() {
  let doc = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty("key", doc.getId());
}

function doGet(request) {

  // let arr = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:E").getValues();
  // let sql = 'SELECT type, company_name, location FROM ?'
  // let data = SUPERSQL(sql, arr);

  let { query } = request.parameters;

  let parameters = 5; // Number of columns in google sheet
  let sheetName = "Sheet1";

  let doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("key"));
  let sheet = doc.getSheetByName(sheetName);

  let lastRow = sheet.getLastRow();

  let range = sheet.getRange(2, 1, lastRow, parameters);
  let values = range.getValues();

  if (!query) {
    return ContentService.createTextOutput(JSON.stringify({ "data": {}, "error": true, "errorMessage": "query not found!" })).setMimeType(ContentService.MimeType.JSON);
  }

  query = JSON.parse(query); // Parsing SQL query

  if (typeof query !== "string") {
    return ContentService.createTextOutput(JSON.stringify({ "data": {"queryType": `${typeof query}`}, "error": true, "errorMessage": "query not of type string!" })).setMimeType(ContentService.MimeType.JSON);
  }

  let arr = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:E").getValues();
  // let data = SUPERSQL(query, values);
  let data = SUPERSQL(query, arr);
  return ContentService.createTextOutput(JSON.stringify({ "data": data, "error": false })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * v1.0.10: https://script.google.com/macros/s/AKfycbxZ7fPDfjR4bjW_L9xuKT0oVUFTTNf-resBsFC_202JnUThLQN6HITKeSJppZdOLxrF/exec
 * v1.0.11: https://script.google.com/macros/s/AKfycbxPZDjobHThcRxpmYFAEnz7ladjSTbxJClU9GzrWcxmOWz1xMK_Aq8WgQpRBcK_0ggS/exec
 */