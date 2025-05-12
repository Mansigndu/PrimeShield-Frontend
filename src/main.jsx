import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/authContex.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProfilePRovider } from './context/profileContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProfilePRovider>
      <App />
      </ProfilePRovider>
    </AuthProvider>
    </BrowserRouter>
  // </StrictMorsde>,
)
