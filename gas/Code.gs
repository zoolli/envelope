// --- CONFIGURATION ---
// 1. Create a Google Sheet and paste its ID here
// 2. Add columns: [Timestamp, User Email, Mode, Subdivisions/Points]
const SPREADSHEET_ID = '1BPES3pOnN__RnGZql5SJ-aWrg-hQaexj0URo2DFGVj4'; 

function doGet(e) {
  // Optional: Log visit info to the Spreadsheet
  recordVisit(e);
  
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Envelope Math Paint | Interactive String Art')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/**
 * Records user visit into a Google Spreadsheet
 */
function recordVisit(e) {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID_HERE') return;
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0];
    
    const timestamp = new Date();
    const userEmail = Session.getActiveUser().getEmail() || 'Anonymous';
    const parameters = e.parameter || {}; // Captures URL params if any
    
    sheet.appendRow([timestamp, userEmail, JSON.stringify(parameters)]);
  } catch (err) {
    console.error('Logging failed: ' + err.toString());
  }
}
