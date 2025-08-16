# Lipack Frontend Task

A responsive Nuxt 3 web application that fetches and displays user
information from the [JSONPlaceholder
API](https://jsonplaceholder.typicode.com/users). The app supports
searching, and handles loading, error, and empty states of search user with
a clean UI powered by TailwindCSS.

---

## 🚀 Features

- **Nuxt 3 + Composition API** with `<script setup>`
- **Pinia** for state management (users & search state)
- **TailwindCSS** for responsive and modern UI
- **User List Page** (`/users`)
  - Fetches user data from API on page load
  - Displays name, email, and company name
  - Search users by name (case-insensitive, partial matches)\
- **State Handling**
  - ✅ Loading: shows a skeleton loading
  - ⚠️ Error: shows error message
  - 📭 Empty: message when no users match search and button to clear search
- **Responsive Layout** (works across mobile, tablet, desktop)

---

## 📂 Project Structure

    .
    ├── assets/              # Global styles, fonts, images
    ├── components/          # Reusable UI components
    │   ├── Base/            # Base components (inputs, card, etc.)
    │   ├── icons/           # Icons as a component
    │   └── users/           # User page related components
    ├── composable/          # Composables (e.g., API handling)
    │   └── useUsersApi.js
    ├── pages/               # Nuxt pages
    │   ├── index.vue        # Main page
    │   └── users.vue        # Users list page
    ├── store/               # Pinia stores
    │   └── userStore.js     # User store
    ├── public/              # Static files
    ├── app.vue              # Main app entry
    ├── nuxt.config.ts       # Nuxt configuration
    ├── package.json
    └── README.md

---

## ⚡ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

App will be available at: <http://localhost:3000>

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

- [Nuxt 3](https://nuxt.com/) -- Framework
- [Pinia](https://pinia.vuejs.org/) -- State Management
- [TailwindCSS](https://tailwindcss.com/) -- Styling
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) --
  Mock Data

---

## 📌 Task Requirements Checklist

- ✅ Nuxt 3 + Composition API with `<script setup>`
- ✅ Pinia store for users & search state
- ✅ TailwindCSS responsive design amd style
- ✅ `/users` route displaying list
- ✅ Search functionality (case-insensitive)
- ✅ Loading, error, empty states of search

---
