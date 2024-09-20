import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//
const List = ({ numberList }) => {
    return <>
        <ul>
            {
                //loop iterate array.
                // numberList.map(item => {
                //     return <li>{item}</li>
                // })
                numberList.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

const App = () => {
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return <>
        <List numberList={numberList} />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
