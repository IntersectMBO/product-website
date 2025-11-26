# Intersect Product Committee Website

Official documentation website for the [Intersect Product Committee](https://product.cardano.intersectmbo.org) - a strategic initiative to define and communicate Cardano's Vision 2030.

## About

This website serves as the primary platform for the Intersect Product Committee to:

- Share the development of Cardano's long-term vision and strategy
- Document community workshops and insights from around the world
- Facilitate transparent collaboration on Cardano's strategic direction
- Provide a central resource for Vision 2030 proposals and community feedback

## Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm** or **yarn**: Package manager (comes with Node.js)

## Installation

### Using npm

```bash
# Clone the repository
git clone https://github.com/IntersectMBO/product-website.git
cd product-website

# Install dependencies
npm install

# Start the development server
npm start
```

### Using Nix (Alternative)

If you have Nix installed:

```bash
nix develop
just setup
just run
```

## Available Scripts

| Command          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `npm start`      | Start the development server at `http://localhost:3000` |
| `npm run build`  | Build the website for production                        |
| `npm run serve`  | Serve the production build locally                      |
| `npm run clear`  | Clear the Docusaurus cache                              |
| `npm run deploy` | Deploy the website (requires proper permissions)        |

## Project Structure

```
product-website/
├── docs/              # Documentation content (MDX/Markdown files)
│   ├── vision/       # Vision 2030 documents
│   └── workshops/    # Workshop summaries and outcomes
├── src/
│   ├── components/   # React components
│   ├── css/          # SCSS stylesheets
│   └── pages/        # Custom pages
├── static/           # Static assets (images, fonts, icons)
├── docusaurus.config.js  # Docusaurus configuration
└── sidebars.js       # Sidebar navigation structure
```

## Development Workflow

1. **Start the development server**: `npm start`
2. **Make your changes** to documentation or code
3. **Preview locally** - changes auto-reload in the browser
4. **Build to verify**: `npm run build` to ensure no errors
5. **Submit a pull request** with your improvements

## Contributing

We welcome contributions! Here are some ways you can help:

- **Documentation**: Improve clarity, fix typos, add examples
- **Workshops**: Add summaries from community workshops
- **Design**: Enhance UI/UX, improve accessibility
- **Code**: Fix bugs, add features, optimize performance

### Making Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit with clear messages (`git commit -m "Add: description of changes"`)
5. Push to your fork (`git push origin feature/your-feature-name`)
6. Open a Pull Request

## Technology Stack

- **[Docusaurus 3](https://docusaurus.io/)**: Static site generator built with React
- **React 19**: UI framework
- **SCSS/Sass**: Styling
- **Mermaid**: Diagram support
- **TypeScript**: Type-safe development

## Links

- **Live Website**: https://product.cardano.intersectmbo.org
- **GitHub Repository**: https://github.com/IntersectMBO/product-website
- **Intersect**: https://www.intersectmbo.org
- **Product Committee Docs**: https://productcommittee.docs.intersectmbo.org

## License

Copyright © 2025 Intersect Product Committee

## Support

For questions or issues, please open an issue on GitHub or reach out through the Intersect community channels.

---

Built with ❤️ by the Cardano community using [Docusaurus](https://docusaurus.io/)
