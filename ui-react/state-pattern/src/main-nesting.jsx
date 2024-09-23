import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }

    render() {
        return <div>
            <h1>House Review</h1>
            <h2>House Name : {this.state.house.name}</h2>
            <h2>Review Pointers : {this.state.house.points}</h2>
            <button onClick={() => {
                this.setState((prevState) => {
                    return {
                        ...prevState, // level-0 copy: copy all outside keys
                        house: {
                            ...prevState.house, //level-1 Copy: copy all house keys
                            points: prevState.house.points + 1
                        }
                    }
                })
            }}>Rate</button>
        </div>
    }
}
const App = () => {
    return <Review />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
