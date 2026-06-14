# 📚 Book Vibe

A modern, highly interactive, and responsive book management web application built with React 19 and Tailwind CSS v4. Users can easily browse books, manage their personal "Readlist" and "Wishlist", and dynamically sort them based on rating or page count.

## 🌐 Live Demo
👉 **[Explore Book Vibe Live](https://sprightly-llama-7dfa43.netlify.app/)**

---

## 📸 Project Preview

<img width="800" height="451" alt="Recording2026-06-14100213aaaa-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/27ea5661-8a09-4bb3-81a7-debe61594a6d" />


---

## 🚀 Features

- **Dynamic Data Fetching:** Efficiently fetches and renders book data dynamically from a local JSON dataset to generate interactive book cards.
- **Dual-List Management (Readlist & Wishlist):** Allows users to categorize books into a "Readlist" (books already read) or a "Wishlist" (books planned to read) with absolute control.
- **Interactive Tabbing System:** Separate, clean, and organized list views for both categories, allowing seamless switching without page reloads.
- **Advanced Sorting Engine:** Features a smart dropdown sorting functionality allowing users to instantly sort listed books by **Ratings** or **Page Count**.
- **Robust Route Management:** Implements conditional routing using React Router v7 to ensure a smooth user experience while navigating between details and lists.
- **Responsive UI/UX:** Designed with a mobile-first approach using **Tailwind CSS v4** and **DaisyUI v5** for beautiful, modern components on all screen sizes.

---

## 🛠️ Tech Stack & Tools

### Core Technologies
![React](https://img.shields.io/badge/react-19.2.6-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361dafb)
![Vite](https://img.shields.io/badge/vite-8.0.12-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.16.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Styling & UI Components
![TailwindCSS](https://img.shields.io/badge/tailwindcss-4.3.0-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyui-5.5.20-%235A0EF8.svg?style=for-the-badge&logo=daisyui&logoColor=white)

### Dependencies Breakdown
- **React 19 & Vite 8:** Powering the app with ultra-fast performance and hot module replacement.
- **React Router v7:** Managing all sub-routes and dynamic paths cleanly.
- **React Tabs & Toastify:** Delivering a smooth multi-tab experience with elegant user feedback via beautiful toast notifications.
- **ESLint 10:** Enforcing code quality and best practices throughout development.

---

## 🧠 Challenges I Faced & What I Learned

- Spent hours debugging how to properly sync the `LocalStorage` data with the React state for the tab views so that lists persist upon page reloads.
- Learned how Tailwind v4 operates differently with Vite (using the new `@tailwindcss/vite` plugin) compared to older versions.
- Gained a solid understanding of managing conditional component rendering and building robust sorting algorithms in JavaScript.
