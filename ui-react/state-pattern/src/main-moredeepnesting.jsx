import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Customer extends React.Component {
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            <button onClick={() => {
                this.setState((prevState) => {
                    return {
                        ...prevState, // leve-0 copy
                        customer: {
                            ...prevState.customer, // level-1 copy
                            contact: {
                                ...prevState.customer.contact, // level-2 copy
                                communcation: {
                                    ...prevState.customer.communcation,
                                    mobileNo: '4444444'
                                }
                            }
                        }
                    };

                })
            }}>Update Mobile No</button>
        </div>
    }
}
const App = () => {
    return <Customer />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
