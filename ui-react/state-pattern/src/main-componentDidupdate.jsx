
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class LifeCycleHooks extends React.Component {

    state = {
        value: 0
    }
    constructor() {
        super();
        console.log('constructor is called')
    }
    componentDidMount() {
        console.log('ComponentDid Mount is called')
    }

    componentDidUpdate(){
        console.log('Component Did Update is called')
    }
    render() {
        console.log('render is called')
        return <>
            <h1>Component Life Cycle {this.state.value}</h1>
            <button onClick={() => {
                this.setState((oldState) => {
                    return {
                        value: oldState.value + 1
                    }
                })
            }}>+</button>
        </>
    }
}


const App = () => {
    return <>
        <LifeCycleHooks />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);