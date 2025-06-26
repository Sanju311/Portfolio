# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Contact form with Formspree integration
- Modern UI with Tailwind CSS
- TypeScript support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Push your code to GitHub** (if not already done)
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`
3. **Push to main branch** - The GitHub Action will automatically build and deploy your site

### Manual Deployment (if needed):

```bash
npm run build
# The built files will be in the `out` directory
```

## Configuration

- **Formspree**: Update the form ID in `ContactForm.tsx` if needed
- **Styling**: Modify `tailwind.config.js` for custom styling
- **Content**: Update `pages/index.json` for your personal information

## Technologies Used

- Next.js 13
- TypeScript
- Tailwind CSS
- Formspree
- GitHub Actions
