# BetterMode Echo Project | BetterMode Assignment

BetterMode Echo is designed to provide a dynamic user experience around posts management. It features a Post Gallery where users can browse a paginated list of posts, with the ability to load more posts using Bettermode’s API. Users can click on a post to view Post Details on a dedicated page, with navigation handled by React Router. A Like Feature is incorporated, allowing users to interact with posts by liking them, with real-time updates to the like count. All data fetching and mutations, such as managing posts and likes, are handled via GraphQL integration.

## Project Live Demo

Check out the live demo of the website at [BetterMode Echo Live Demo](https://bettermodecho.vercel.app/).

## Getting Started

BetterMode Echo focuses on building a web application using modern front-end technologies to create a smooth and responsive user experience. The tech stack includes Vite as the build tool, React with functional components and hooks for the core framework, TypeScript for static typing, and Tailwind CSS for styling. React Router is used for navigation between different pages of the app, while GraphQL manages data fetching and mutations, making the app highly efficient in handling post data and interactions. Authentication is achieved by retrieving an access token from Bettermode. The project also emphasizes clean, modern UI/UX, ensuring a responsive design that meets best practices for user interfaces.

## Installation and Setup Instructions

### Prerequisites

Ensure you have Node.js and pnpm installed globally on your machine.

### Installation

```bash
# 1. Clone the repository:
git clone https://github.com/diyarkarimzadeh/bettermode.git

# 2. Navigate to the project directory:
cd bettermode

# 3. Install dependencies
pnpm install
```

### Running the Application

```bash
# 1. Start the development server:

   pnpm run dev

# 2. Visit the application at:

   http://localhost:5173
```

## Built With

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/en/main)
- [GraphQL](https://graphql.org/)

## Project Structure

```

├── assets # Contains files and images used in the project.
├── pages # Contains pages to be rendered.
├── components # Contains components used in each page.
├── config # Contains web app config.
├── utils # Contains utility and validator functions.
├── router # Contains React Router config and routes.
└── services # Contains GraphQl config with queries and mutations.

```

Feel free to explore the project. For any issues, contact me via [email](mailto://diyar1379@gmail.com) or my [Linkedin](https://www.linkedin.com/in/diyarkarimzadeh/) account.
