# THINK-CELL TEMPLATE

A simple template showcasing a custom HTML template styled with Tailwind CSS and few Javascript interactions.

# 1. GETTING STARTED

## Clone the repository:

Use "git clone <repository-url>" or use GitHub desktop app.

## Navigate to the project directory:

Use "cd think-cell-template" to navigate to the project directory.

## Install dependencies:

Node.js: Ensure you have Node.js installed to use npm.

Use "npm install" to install dependencies.

## Install live-server for a local development server:

Use "npm install live-server --save-dev" to run the project locally.

## Start the project:

Use "npm start" to run the project.

This will start a local development server and open the project in your default browser. The live-server will also enable live reload whenever changes are made to your files.

# 2. PREREQUISITES

- Node.js: Ensure you have Node.js installed to use npm.
- Any modern web browser: (e.g., Google Chrome, Firefox, Edge, Safari).

# 3. FILE STRUCURE

```
Think-cell template/
├── index.html # Main HTML file
├── css/
│ ├── main.css # Source CSS file for Tailwind directives
│ ├── output.css # Generated and minified Tailwind CSS file
├── js/
│ ├── main.js # Custom JavaScript for interactivity
├── assets/
│ ├── [images] # Folder containing all images used in the template
│ ├── icons/ # Folder containing icon files
├── package.json # Manages project dependencies and scripts
├── package-lock.json # Locks exact versions of installed dependencies
├── tailwind.config.js # Tailwind CSS configuration file
└── README.md # Project documentation
```

# 4. IMAGE AND ICON FORMATS

# Icons

Format: SVG

Reason: SVG was chosen for icons because it is a lightweight, scalable vector format that ensures high-quality rendering at any resolution. This makes it ideal for responsive designs and future-proofing against screen size variations.
Hero Section Images

Format: 2x Exported PNG

Reason: For the hero section, 2x resolution PNGs were used to ensure crisp and detailed visuals on high-resolution (Retina) screens. PNG format was selected for its ability to maintain image quality, especially for complex designs and graphics.

# 5. TOOLS AND TECHNOLOGIES USED

- HTML: Provides the structure of the web page.
- Tailwind CSS: Used for styling the project. Configured to include custom classes and extended styles.
- Custom JavaScript: Adds small interactive features.

# 6. CUSTOM CONFIGURATIONS

The Tailwind CSS configuration (tailwind.config.js) includes the following customizations:

# Custom Colors: Added shades like:

- green-850 (#378F53)
- neutral-150 (#f8f8f8)
- slate-1000 (#231F20)

NOTE: These colors are not part of the default Tailwind color palette and were registered using Tailwind's format.

# Font Family:

The Jost font was used as a substitute for Futura PT, which is not a free font. Jost was chosen because it is part of the same font family and resembles Futura PT.

# Container Centering:

- Configured the container to be centered, with a fixed width of 1264px for extra-large (xl) and 2xl screens.

# Custom Utilities:

Extended utilities for:

- Letter spacing
- Background size

These were tailored for specific uses based on the Figma design.

# 7. VIEWING THE PROJECT

To view the project:

- Navigate to the project directory.
- Run the project using [npm start].

For mobile preview you can view the project at https://think-cell-project.duoadv.ro/
