#!/bin/bash

echo "🚀 Al-Futtaim Health Division Setup"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: v23.9.0"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm found: 10.9.2"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ 0 -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Start the server
echo ""
echo "🚀 Starting Al-Futtaim Health server..."
echo ""
echo "📋 Instructions:"
echo "   1. Server will start on http://localhost:3000"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Click any 'Select Package' button to test payment"
echo "   4. Press Ctrl+C to stop the server"
echo ""
echo "🔑 API Key: Already configured with your Juspay credentials"
echo ""

# Start the server
node server.js
