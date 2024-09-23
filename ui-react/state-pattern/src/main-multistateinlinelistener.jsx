import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Review extends React.Component {
    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        return <div>
            <h1>Review</h1>
            <h3>Like {this.state.like} Dislike {this.state.dislike}</h3>
            <button onClick={() => {
                this.setState((prevState) => {
                    return {
                        ...prevState, like: prevState.like + 1
                    }
                })
            }} >Like</button>
            <button onClick={() => {
                this.setState((prevState) => {
                    return {
                        ...prevState, dislike: prevState.dislike + 1
                    }
                })
            }} >Dislike</button>

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
