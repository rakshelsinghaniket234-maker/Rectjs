import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createContext} from 'react'
let cobject = createContext()
//let data = "cybrom"
let data  = {
  name:"name",
  age:24,
  city:"auragabad"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <cobject.Provider value ={data}>
    <App />
    </cobject.Provider>
  </StrictMode>,
)
export {cobject}
