
import React from 'react'
import { createRoot } from 'react-dom/client'

const Heading = () => {
    return <header>
        <h1> Marsh McLennan</h1>
    </header>
}
const Body = () => {

    return <section>
        <p>
            Marsh McLennan is the world’s leading professional services firm in risk, strategy and people.
        </p>
        <p>
            We bring together experts from across our four global businesses — Marsh, Guy Carpenter, Mercer and Oliver Wyman — to help make organizations more successful and societies more resilient
        </p>
    </section >
}
const Footer = () => {
    return <footer>
        <h3>Marsh McLennan is the leader in risk, strategy and people, helping clients navigate a dynamic environment through four global businesses</h3>
    </footer>
}

const Page = () => {
    return <>
        <Heading />
        <Body />
        <Footer />
    </>
}
const App = () => {
    return <Page />
}


createRoot(document.getElementById('root')).render(<App/>)
