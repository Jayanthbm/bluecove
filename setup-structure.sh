#!/bin/bash

set -e

BASE="src"

echo "📁 Creating folders..."

mkdir -p $BASE/components/layout
mkdir -p $BASE/components/ui
mkdir -p $BASE/components/common

mkdir -p $BASE/pages
mkdir -p $BASE/routes
mkdir -p $BASE/styles

mkdir -p $BASE/assets/images
mkdir -p $BASE/assets/icons

echo "📄 Creating files..."

# Layout components
touch $BASE/components/layout/Navbar.jsx
touch $BASE/components/layout/Footer.jsx

# UI components
touch $BASE/components/ui/Button.jsx
touch $BASE/components/ui/Card.jsx

# Common components
touch $BASE/components/common/Loader.jsx

# Pages
touch $BASE/pages/Home.jsx
touch $BASE/pages/Rooms.jsx
touch $BASE/pages/Gallery.jsx
touch $BASE/pages/Amenities.jsx
touch $BASE/pages/About.jsx
touch $BASE/pages/Contact.jsx

# Routes
touch $BASE/routes/AppRoutes.jsx

# Styles
touch $BASE/styles/globals.css

echo "✅ Folder structure created successfully!"
