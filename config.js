// Farm Fleet - Google Sheets Configuration

const CONFIG = {
    // Your Google Spreadsheet ID
    spreadsheetId: '1oac0NIhnf_cybkkNs1dQOOldPGmDWBvGWmFAgwpx6cw',

    // API Key
    apiKey: 'AIzaSyBKVC9ynvKVJ_09Ca2OLR3CAhaRR5FRxoc',

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
