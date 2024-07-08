import ReactDOM, { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Logo } from '@pmndrs/branding'
import { BrowserRouter } from 'react-router-dom'
import useDimensions from './hooks/useDimensions'

function Overlay() {
  return (
    <div style={{ color: '#00c174', fontFamily: 'Inter', position: 'absolute', top: 0, left: 0 }}>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.innerWidth)

root.render(
  <>
    {window.innerWidth > 946 && <Overlay />}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
