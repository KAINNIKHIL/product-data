Product Management Dashboard (Frontend Assignment)

A responsive Product Management Dashboard built using React, Vite, and Tailwind CSS.
This project demonstrates frontend fundamentals including state management, form handling, search with debounce, pagination, and multiple view layouts — all without a backend.

✨ Features

📋 Product Listing

Table View

Card View

Toggle between views

🔍 Real-time Search

Search products by name

500ms debounce for better performance

➕ Add & Edit Products

Form with validation

Fields: Name, Price, Category, Stock, Description

Data stored in memory (no backend)

📄 Pagination

Paginated product list

Prev / Next navigation with active state

📱 Responsive UI

Works seamlessly across desktop, tablet, and mobile

🧰 Tech Stack

React – UI library

Vite – Fast development & build tool

Tailwind CSS – Utility-first styling

JavaScript (ES6+)

📁 Project Structure
src/
├── components/
│   ├── ProductTable.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── SearchBar.jsx
│   └── Pagination.jsx
│
├── App.jsx
├── main.jsx
└── index.css
