###📰 BlogVerse

###🧾 Description
BlogVerse is a responsive and user-friendly blogging platform built using React and Vite.
It allows users to view blogs, explore posts, and navigate smoothly across pages with a clean and modern interface.
The project demonstrates essential front-end concepts like routing, component reuse, and dynamic UI handling — perfect for portfolio and learning purposes.

###✨ Features
🏠 Home Page – Engaging introduction with a “Start a Blog” button redirecting to blog listings.
📚 Blog List Page – Displays all available blog entries dynamically.
ℹ️ About Page – Provides an overview of the project and its purpose.
🚀 Responsive Design – Fully adaptable across desktop, tablet, and mobile screens.
🧭 Navigation Bar – Highlights the active page with visual feedback.
💅 Clean UI – Simple, minimal, and modern styling for readability and focus.

###🧰 Technologies Used
Frontend Framework: React.js
Bundler & Dev Tool: Vite
Styling: Tailwind CSS & Inline CSS
Routing: React Router DOM
Version Control: Git & GitHub

###⚙️ How It Works
The Navbar provides navigation links (Home, Blogs, About) with active link highlighting.
The Home Page includes a description and a “Start a Blog” button that routes to the Blog List.
The Blog List Page dynamically lists all available blog posts (or placeholders).
The About Page shares project details and technology info.
All pages are rendered through React Router, ensuring smooth client-side navigation.

###🧩 Challenges and Solutions
Challenge----Solution
1. GitHub permission issues while pushing the project----Reconfigured Git username and email, cleared old credentials, and reauthenticated with the correct GitHub account.
2. Navbar not showing active link highlight----Used useLocation() hook from React Router to conditionally style the active page link.
3. Home page layout appearing left-aligned----Applied flexbox centering and limited content width using Tailwind (flex, justify-center, max-w-5xl).
4. Large image size and misalignment on the Home page----Added max-width and object-fit: cover properties to resize and center the image proportionally.
5. White blank page on navigation----Fixed incorrect import/export errors and ensured BrowserRouter correctly wrapped all components.
