import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }
    onUpdate = () => {
        this.setState((prevState) => {
            return produce(prevState, (draft) => {
                draft.house.points += 1
            })
        })
    }
    render() {
        return <ReviewDashBoard {...this.state} onUpdate={this.onUpdate} />
    }
}

const ReviewDashBoard = (props) => {
    return <div>
        <h1>House Review</h1>
        <h2>House Name : {props.house.name}</h2>
        <h2>Review Pointers : {props.house.points}</h2>
        <button onClick={props.onUpdate}>Rate</button>
    </div>
}

const App = () => {
    return <Review />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
