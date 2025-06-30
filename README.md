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

## Media Queries

The project includes responsive design with the following breakpoints:

- **Mobile**: `max-width: 768px`
- **Tablet**: `769px - 1024px`
- **Desktop**: `min-width: 1025px`

Additional specific breakpoints:

- **Mobile Small**: `max-width: 480px`
- **Mobile Large**: `max-width: 767px`
- **Desktop Small**: `1025px - 1366px`
- **Desktop Large**: `min-width: 1367px`

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

## Creating New Pages

1. Create a new directory in `pages/`
2. Add `index.html` and optionally `script.js`
3. Include modules using the module loader pattern from the home page

## LESS Variables

Key variables available globally:

### Colors

- `@primary-color: #3e441d`
- `@secondary-color: #c39d79`
- `@background-color: #fff`
- `@text-color: #212121`

### Spacing

- `@spacing-xs: 0.5rem`
- `@spacing-sm: 1rem`
- `@spacing-md: 2rem`
- `@spacing-lg: 3rem`
- `@spacing-xl: 4rem`

### Transitions

- `@transition-fast: 0.2s ease`
- `@transition-normal: 0.3s ease`
- `@transition-slow: 0.6s ease`

## Mixins

Useful mixins available:

- `.container()` - Responsive container with max-width
- `.flex()` - Flexbox helper with parameters
- `.flex-center()` - Center content with flexbox
- `.heading()` - Responsive typography for headings
- `.text()` - Text styling with parameters
- `.button()` - Button styling with hover effects
- `.section-spacing()` - Consistent section padding

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- IE11+ (with some limitations)

## Development Tips

1. Use the modular structure to keep code organized
2. Leverage LESS variables and mixins for consistency
3. Test responsive design at different breakpoints
4. Use semantic HTML and proper accessibility attributes
5. Keep modules self-contained and reusable

## Contributing

1. Follow the existing code structure
2. Use meaningful class names with BEM methodology where appropriate
3. Test changes across different screen sizes
4. Ensure LESS compiles without errors
5. Keep modules independent and reusable
