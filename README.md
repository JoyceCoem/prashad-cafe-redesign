# Prashad Cafe Website Redesign

A modern, responsive restaurant website built for Prashad Cafe. This redesigned website showcases the restaurant's menu, locations, catering services, and provides an interactive experience for customers.

## Features

- **Home Page**: Hero section with call-to-action, featured dishes, testimonials, and location previews
- **Menu Page**: Browse complete menu with dish cards and categories
- **Locations Page**: View all restaurant locations with details
- **About Page**: Learn about Prashad Cafe's story and values
- **Contact Page**: Get in touch with integrated contact form
- **Catering Services**: Dedicated catering page for event bookings
- **Gallery**: Showcase of restaurant ambiance and dishes
- **Chat Agent**: Interactive AI chat support for customer inquiries
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Sticky Order Button**: Quick access to ordering on all pages

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router v7
- **UI Components**: Radix UI + shadcn/ui inspired components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JoyceCoem/prashad-cafe-redesign.git
cd prashadWebsite
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with hot module reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check and fix code quality issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── home/              # Home page components
│   ├── menu/              # Menu page components
│   ├── locations/         # Locations page components
│   ├── contact/           # Contact form components
│   ├── ui/                # Reusable UI components
│   ├── Navbar.jsx         # Main navigation
│   ├── Footer.jsx         # Site footer
│   ├── ChatAgent.jsx      # AI chat support
│   └── StickyOrderButton.jsx
├── pages/                 # Page components
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Locations.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── catering.jsx
│   └── gallery.jsx
├── lib/                   # Utilities and context
│   ├── AuthContext.jsx    # Authentication context
│   └── menuData.js        # Menu data
├── assets/                # Images and media
└── App.jsx                # Main app component
```

## Environment Setup

The project uses Vite for fast development and optimized builds. Hot Module Reloading (HMR) is enabled by default for instant updates during development.

### Key Dependencies

- **react-router-dom**: For page routing and navigation
- **framer-motion**: For smooth animations and transitions
- **tailwindcss**: For utility-first CSS styling
- **@radix-ui**: For accessible component primitives
- **sonner**: For toast notifications

## Deployment

To deploy the built application:

1. Build the project: `npm run build`
2. The `dist` folder contains the production-ready files
3. Deploy the contents to your hosting provider (Vercel, Netlify, etc.)

## Contributing

When making changes:

1. Run `npm run lint` to check code quality
2. Test changes locally with `npm run dev`
3. Build and preview with `npm run build && npm run preview`
4. Commit changes and push to your branch

## License

This project is proprietary to Prashad Cafe.
