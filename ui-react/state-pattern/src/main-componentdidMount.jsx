import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class LifeCycleHooks extends React.Component {

    constructor() {
        super();
        console.log('constructor is called')
    }
    componentDidMount() {
        console.log('ComponentDid Mount is called')
    }

    render() {
        console.log('render is called')
        return <>
            <h1>Component Life Cycle</h1>
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
