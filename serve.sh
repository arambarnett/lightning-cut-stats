#!/bin/bash

echo "Starting local server for LightningCut Analytics Dashboard..."
echo "Access the dashboard at: http://localhost:8000"
echo "Password: investor"
echo "Press Ctrl+C to stop the server"

# Check if Python is available
if command -v python3 &>/dev/null; then
    python3 -m http.server
elif command -v python &>/dev/null; then
    python -m http.server
else
    echo "Error: Python is not installed. Please install Python to use this script."
    exit 1
fi