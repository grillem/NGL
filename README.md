# NGL Project

A modular web development project with LESS preprocessing and a component-based structure.

## Project Structure

```
NGL/
├── package.json              # Dependencies and scripts
├── src/                      # Source files
│   └── less/                 # LESS stylesheets
│       ├── style.less        # Main LESS entry point
│       ├── variables.less    # Global variables and media queries
│       ├── mixins.less       # LESS mixins and utilities
│       └── reset.less        # CSS reset/normalize
├── modules/                  # Reusable modules
│   ├── hero/                 # Hero section module
│   │   ├── tpl.html         # HTML template
│   │   ├── style.less       # Module styles
│   │   └── script.js        # Module JavaScript
│   └── footer/              # Footer module
│       ├── tpl.html         # HTML template
│       └── style.less       # Module styles
├── pages/                   # Page templates
│   └── home/                # Home page
│       ├── index.html       # Main page file
│       └── script.js        # Page-specific JavaScript
├── assets/                  # Static assets
│   └── images/              # Image files
└── dist/                    # Compiled/build files
    └── css/                 # Compiled CSS
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

Start the development server with live reloading and LESS compilation:

```bash
npm run dev
```

This will:

- Start a live server on `http://localhost:3000`
- Watch for LESS file changes and auto-compile
- Open the home page automatically

### 3. Manual LESS Compilation

To manually compile LESS files:

```bash
# Compile to development CSS
npm run build-less

# Compile to compressed/minified CSS
npm run build-less-compressed

# Build both versions
npm run build
```

## Available Scripts

- `npm run dev` - Start development server with live reload and LESS watching
- `npm run serve` - Start live server only
- `npm run watch-less` - Watch LESS files for changes
- `npm run build-less` - Compile LESS to CSS
- `npm run build-less-compressed` - Compile LESS to minified CSS
- `npm run build` - Build both development and production CSS

## Creating New Modules

1. Create a new directory in `modules/`
2. Add the following files:
   - `tpl.html` - HTML template
   - `style.less` - Module styles
   - `script.js` - Module JavaScript (optional)
3. Import the styles in `src/less/style.less`:
   ```less
   @import "../../modules/your-module/style";
   ```

## LESS Variables

Key variables available globally:
