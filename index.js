require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Authentication Middleware
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.redirect('/');
            }
            req.user = user;
            next();
        });
    } else {
        res.redirect('/');
    }
};

// 1. Redirect to GitHub for login
app.get('/auth/github', (req, res) => {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user`;
    res.redirect(redirectUri);
});

// 2. Handle GitHub callback
app.get('/auth/github/callback', async (req, res) => {
    const code = req.query.code;
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    try {
        // Exchange code for access token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        }, {
            headers: {
                accept: 'application/json'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Fetch user data from GitHub
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });

        const userData = userResponse.data;

        // Create a JWT token for the user
        const token = jwt.sign(
            { id: userData.id, username: userData.login },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Set JWT as a secure HTTP-only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        // Redirect to dashboard (2.html)
        res.redirect('/2.html');
    } catch (error) {
        console.error('Error during GitHub authentication:', error.response?.data || error.message);
        res.redirect('/?error=auth_failed');
    }
});

// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
});

// Protect the dashboard route (2.html)
app.get('/2.html', authenticateJWT, (req, res, next) => {
    next(); // If authenticated, allow the static file server to serve it
});

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
