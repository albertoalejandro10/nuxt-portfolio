# Nuxt.js 3 Portfolio

![Nuxt.js 3](https://img.shields.io/badge/Nuxt.js-3.x-green?style=for-the-badge) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue?style=for-the-badge)  ![Storyblok](https://img.shields.io/badge/Storyblok-CMS-orange?style=for-the-badge) ![pnpm](https://img.shields.io/badge/pnpm-fast-red?style=for-the-badge)

![MIT License](https://img.shields.io/badge/license-MIT-green)

An open-source, fully customizable portfolio built with **Nuxt.js 3** and **Storyblok**. This project aims to help new Nuxt.js developers create stunning portfolios that capture the attention of both developers and recruiters. 

Check out the [live demo](https://albertoalejandro10.netlify.app/) of the portfolio.

## Features

- **Nuxt.js 3**: Static site generation and server-side rendering.
- **Storyblok CMS**: Manage your portfolio content with an intuitive headless CMS.
- **i18n**: Internationalization for multilingual support.
- **Tailwind CSS**: For modern, responsive, and customizable design.
- **TypeScript**: Type-safe development.
- **ESLint & Prettier**: Code linting and formatting tools for maintaining high-quality code.
- **Sitemap**: Automatically generated sitemap for SEO.
- **Google Analytics (gtag)**: Track user interactions on your portfolio.

## Installation
Make sure you have [pnpm](https://pnpm.io/) installed.
1. Clone the repository:
   ```bash
    git clone https://github.com/albertoalejandro10/portfolio.git
    cd portfolio
   ```

2. Make sure to install the dependencies:
    ```bash
    pnpm install
    ```
    
You will also need to set up your Storyblok environment and a localhost-key.pem file for local development. Follow the official [@storyblok/nuxt](https://nuxt.com/modules/storyblok) documentation for setup instructions.
    
### Storyblok Setup
1. Create a free Storyblok account.
2. Create a new space and configure the components needed for your portfolio.
3. Set up the localhost-key.pem file to connect Storyblok with your local environment.

## Development Server
Start the development server on http://localhost:3000
```bash
pnpm run dev
```
Build the application for production:
## Production
```bash
pnpm run build
```
Locally preview the production build:
```bash
pnpm run preview
```
For more deployment options, check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

