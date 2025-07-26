import './index.css'

import App from './App.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import data from './assets/data.json';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App test={data}/>
  </StrictMode>,
)
