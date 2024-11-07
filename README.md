# 📓 nOteSy

Welcome to **nOteSy** – a modern and interactive prototype note-taking app. Built with **React** and **Firebase**, **nOteSy** provides a sleek dark theme and markdown support, making note management easy and visually engaging. While **nOteSy** is currently a work in progress, we’re excited to share what’s already functional!

![nOteSy Preview](https://github.com/Priyank911/nOteSy/blob/main/public/Notesy.png)

> **Note**: This website is currently under maintenance, and our team is actively working to improve its features and functionality. You can explore it live on [Vercel](https://notesy-app.vercel.app/).

## 🌟 Features

- **🖋 Markdown Support**: Write notes in markdown and view live previews.
- **🔒 User Roles**: Admins can create and edit notes, while Students have read-only access.
- **🌑 Dark Theme**: An easy-on-the-eyes dark theme for an enjoyable experience.
- **📱 Fully Responsive**: Optimized for both desktop and mobile devices.
- **🔥 Firebase Integration**: Real-time data storage and retrieval.

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nOteSy.git
   cd nOteSy
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Firebase**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
   - Add Firebase config to `firebase.js`:

     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getFirestore } from 'firebase/firestore';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     export const db = getFirestore(app);
     ```

4. **Run the App**

   ```bash
   npm start
   ```

   Access it at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```plaintext
nOteSy/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── firebase.js       # Firebase configuration
│   ├── App.js            # Main application file
│   └── index.js          # Entry point for React
├── .env                  # Firebase API keys (gitignored)
├── README.md             # Project documentation
└── package.json          # Dependencies and scripts
```

## ✨ Key Components

- **Navbar**: Interactive navigation with 3D hover effects and a MetaMask status indicator.
- **NoteEditor**: Markdown editor for creating notes, editable for Admins, view-only for Students.
- **NotesList**: Displays notes in a clean layout with hover effects showing the title and subject.

---
