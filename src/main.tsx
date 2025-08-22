import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AiSummitLinkedInShare from './AiSummitLinkedInShare.tsx'
import QRCodePage from './QRCodePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/panel-talk" element={<AiSummitLinkedInShare />} />
        <Route path="/qr" element={<QRCodePage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
