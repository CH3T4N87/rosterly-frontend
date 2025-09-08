# 🎓 Rosterly Frontend

Rosterly is a student management application built with **React.js**.  
This frontend allows users to **register students, view them, update details, and delete records**.  
It connects with the backend server and Cloudinary for image uploads.

---

## 🚀 Features
- Student Registration form with validation
- File upload for profile picture
- Fetch list of students from backend
- Update & Delete functionality
- Fetch available courses dynamically from API
- Responsive UI with Bootstrap
- Toast notifications for success/error states

---

## 🛠️ Tech Stack
- **React.js** (Frontend framework)
- **React Router DOM** (Routing)
- **Axios** (HTTP requests)
- **Bootstrap 5** (UI styling)
- **React-Toastify** (Notifications)

---

## ⚡ How It Works
1. User fills the registration form.
2. On submit:
   - Inputs validated (name, email, course required).
   - Image and data packed into **FormData**.
   - Sent via `axios.post` to backend `/student/addStudent`.
3. On success → Student stored in DB & profile image stored in Cloudinary.
4. Dashboard fetches students from `/student/getAll` and displays them.
5. Each student card has:
   - Edit → Navigates to update page.
   - Delete → Sends DELETE request.

---

## 🖼️ Screens
- Hero Section with app intro.
- Registration Page.
- Dashboard with student cards.
- Courses Page fetching from API.

---

## ⚡ Scripts
```bash
# install dependencies
npm install

# run dev server
npm run dev

# build for production
npm run build
