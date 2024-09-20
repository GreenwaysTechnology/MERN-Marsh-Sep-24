import { createRoot } from 'react-dom/client'
import { Page } from './page'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
    return <Page />
}

createRoot(document.getElementById('root')).render(<App />)
