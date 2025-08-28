const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

// Enable CORS for your frontend
app.use(cors({
    origin: ['http://localhost:3000', 'file://', 'http://127.0.0.1:5500']
}));

app.use(express.json());

// Payment initiation endpoint
app.post('/api/payment/initiate', async (req, res) => {
    try {
        console.log('Received payment request:', req.body);
        
        // Your Juspay API credentials
        const JUSPAY_API_KEY = 'Basic NDRBMjdCNjVENkM0NTQ0Qjg4QTQyMjAwQjYwRUI4Og==';
        const MERCHANT_ID = 'alfuttaimtest';
        
        // Make the API call to Juspay from backend (no CORS issues)
        const juspayResponse = await fetch('https://sandbox.juspay.in/session', {
            method: 'POST',
            headers: {
                'version': '2021-06-01',
                'Content-Type': 'application/json',
                'Authorization': JUSPAY_API_KEY,
                'x-merchantid': MERCHANT_ID
            },
            body: JSON.stringify(req.body)
        });
        
        const juspayData = await juspayResponse.json();
        console.log('Juspay API Response:', juspayData);
        
        // Return the response to frontend
        res.json(juspayData);
        
    } catch (error) {
        console.error('Payment API Error:', error);
        res.status(500).json({ 
            error: 'Payment processing failed',
            details: error.message 
        });
    }
});

// Serve static files (your HTML)
app.use(express.static('.'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log();
    console.log('Open http://localhost:3000 to test');
});
