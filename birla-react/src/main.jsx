import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Segment from './components/Segment/Segment.jsx'
import Inspiration from './components/Inspiration/Inspiration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Segment />
    <Inspiration />
  </StrictMode>,
)
