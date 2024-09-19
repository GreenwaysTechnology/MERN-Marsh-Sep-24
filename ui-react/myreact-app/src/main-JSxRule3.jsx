
import React from 'react'
import { createRoot } from 'react-dom/client'

const heading = () => {
    return <>
        <h1>Marsh McLennan</h1>
        <p>Marsh McLennan is the world’s leading professional services firm in risk, strategy and people</p>
    </>
}
createRoot(document.getElementById('root')).render(<heading />)
