// src/main.jsx (Example)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App.jsx'
import './index.css' // Your Tailwind CSS import
import "@fortawesome/fontawesome-free/css/all.min.css"; // <--- Add it here

// Initialize Vercel Web Analytics
inject()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)