// app.js

// Import required modules
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render dynamic content
app.get('/', (req, res) => {
    // Sample data
    const user = { name: 'John', age: 30 };

    // Render the 'index.ejs' template
    // and pass data to it
    res.render('index.ejs', { user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
