
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Page } from './page'

const App = () => {
    return <Page />
}

createRoot(document.getElementById('root')).render(<App />)
