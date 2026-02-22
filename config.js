// Farm Fleet - Google Sheets Configuration

const CONFIG = {
    // Your Google Spreadsheet ID
    spreadsheetId: '1oac0NIhnf_cybkkNs1dQOOldPGmDWBvGWmFAgwpx6cw',

    // API Key
    apiKey: 'AIzaSyCutuniWpAu5NC3uPXWgnodAhx0on26Mx8',

    // Advanced Options
    refreshInterval: 5000,
    sheetNames: {
        cars: 'Cars',
        status: 'Status'
    }
};

// Validation
if (typeof window !== 'undefined') {
    window.FARM_FLEET_CONFIG = CONFIG;
}
