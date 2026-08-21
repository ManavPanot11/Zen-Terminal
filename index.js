const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve the main HTML file
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the Express API for Vercel
module.exports = app;
