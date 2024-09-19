import { createRoot } from 'react-dom/client'

//create dom element
// const Heading = document.createElement('h1') //plain js
const Heading = <h1>Hello React</h1>  // react jsx code

// const rootElemement = document.getElementById('root')
// createRoot(rootElemement).render(Heading)

createRoot(document.getElementById('root')).render(Heading)
