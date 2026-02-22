// Farm Fleet - Google Sheets Configuration
// 
// INSTRUCTIONS:
// 1. Follow SETUP_GUIDE.md to get your credentials
// 2. Fill in the values below
// 3. Save this file
// 4. Make sure this file is in the same folder as admin.html, driver.html, and dashboard.html
//
// SECURITY WARNING:
// Never share this file publicly or commit it to public repositories!

const CONFIG = {
    // Your Google Spreadsheet ID (from the URL)
    // Example: https://docs.google.com/spreadsheets/d/1ABC...XYZ/edit
    // The ID is the part: 1ABC...XYZ
    spreadsheetId: 'PASTE_YOUR_SPREADSHEET_ID_HERE',

    // CHOOSE ONE METHOD BELOW:

    // ========================================
    // METHOD 1: API Key (Simpler, Less Secure)
    // ========================================
    // Uncomment the line below and paste your API key
    // apiKey: 'PASTE_YOUR_API_KEY_HERE',

    // ========================================
    // METHOD 2: Service Account (More Secure, Recommended)
    // ========================================
    // Uncomment the lines below and paste your service account details
    // serviceAccountEmail: 'your-service-account@project.iam.gserviceaccount.com',
    // serviceAccountPrivateKey: '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n',

    // Advanced Options (usually don't need to change)
    refreshInterval: 5000, // Dashboard refresh rate in milliseconds (5000 = 5 seconds)
    sheetNames: {
        cars: 'Cars',
        status: 'Status'
    }
};

// Validation - don't edit below this line
if (typeof window !== 'undefined') {
    window.FARM_FLEET_CONFIG = CONFIG;
}
