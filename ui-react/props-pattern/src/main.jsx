import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Title = props => {
    return <h2>Title goes</h2>
}

const Header = ({ children }) => {
    return <div>
        {/* <Title /> */}
        {/* {props.children} */}
        {children}
    </div>
}
const Carousel = props => {
    return <div>
        <h1>Carousel</h1>
    </div>
}


const App = () => {
    return <>
        {/* <Header /> */}
        <Header>
            {/* Component as prop */}
            {/* <Title /> */}
            <Carousel />
        </Header>
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
