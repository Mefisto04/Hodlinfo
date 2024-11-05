# NodeJS Developer Profile

## Overview
This project is a Stock Data Display website that fetches stock ticker data from the WazirX API and presents it in a user-friendly format. It utilizes Node.js for the backend, PostgreSQL for the database, and HTML/CSS for the frontend.

## Features
- **Real-time Stock Data**: Fetches and displays the latest stock ticker information.
- **Pagination**: Displays stock data in a paginated format for better user experience.
- **Search Functionality**: Allows users to search for specific stock tickers.
- **Stock Detail View**: Click on a stock ticker to view more details about it.

## Technologies Used
- **Frontend**: 
  - HTML
  - CSS
- **Backend**: 
  - Node.js
  - Express.js
  - Axios (for API requests)
- **Database**: 
  - PostgreSQL

## API Used
- [WazirX API](https://api.wazirx.com/api/v2/tickers): Used to fetch the latest stock ticker data.

## Database Schema
The PostgreSQL database has the following structure for the `tickers` table:

```sql
CREATE TABLE tickers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    last NUMERIC,
    buy NUMERIC,
    sell NUMERIC,
    volume NUMERIC,
    base_unit VARCHAR(50),
    quote_unit VARCHAR(50),
    low NUMERIC,
    high NUMERIC,
    type VARCHAR(50),
    open NUMERIC,
    at TIMESTAMP
);
```


## Code Snippets
Here are some key code snippets from the project:

### Fetching Data from the API
```javascript
async function fetchData() {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    // Process the data and store it in the database...
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

### Displaying Ticker Data
```javascript
function displayData() {
  // Logic to display paginated data in the HTML table...
}
```

### Express.js Server Setup
```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/tickers", async (req, res) => {
  // Logic to retrieve and send ticker data...
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Screenshots
![image](https://github.com/user-attachments/assets/5932b21e-0776-4fa8-8510-62616f3eb71b)
![image](https://github.com/user-attachments/assets/7758e75e-4021-4e1c-b8d6-fe584826577d)
