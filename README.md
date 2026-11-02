# Counter App

A simple counter application built with React and Vite. Use the controls to increase the count, decrease it without going below zero, or reset it to zero.

## Features

- Increment the current count.
- Decrement the count; it cannot go below zero.
- Reset the count to zero.
- Display a warning if you try to decrement when the count is already zero.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build in `dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project Structure

```text
Counter/
├── public/          # Static assets
├── src/
│   ├── Counter.jsx  # Counter component and behavior
│   ├── main.css     # Application styles
│   └── main.jsx     # React entry point
├── index.html       # HTML page
└── package.json     # Dependencies and npm scripts
```

## Built With

- React
- Vite
- JavaScript
- CSS
