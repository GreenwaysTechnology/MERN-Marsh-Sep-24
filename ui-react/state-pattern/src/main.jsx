import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

class Products extends React.Component {

    state = {
        products: [],
        isLoading: false, //to show spinner
        error: null
    }

    render() {
        const { products, error, isLoading } = this.state
        //conditional rendering: how to use if...else..elseif
        if (error) {
            return <div>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h2>Loading...</h2>
        } else {
            return <div>
                <h1>Products</h1>
                <hr />
                <div>
                    {
                        products.map(product => {
                            return <section>
                                <img src={product.category.image} height={200} width={200} />
                                <h1>{product.title} </h1>
                                <p>{product.description}</p>
                                <h5>{product.price}</h5>
                            </section>
                        })
                    }
                </div>
            </div>
        }

    }
    async componentDidMount() {
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const products = await response.json()
            console.log(products)
            this.setState(prevState => {
                return produce(prevState, (draft) => {
                    draft.products = products
                    draft.isLoading = true
                })
            })
        }
        catch (err) {
            console.log(err)
            this.setState(prevState => {
                return produce(prevState, (draft) => {
                    draft.err = err
                    draft.isLoading = true
                })
            })
        }
    }
}
const App = () => {
    return <Products />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
