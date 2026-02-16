import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//createroot: make a container to render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
