import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import './index.css'

const Products = () => {
    const initialState = {
        products: [],
        isLoading: false, //to show spinner
        error: null
    }
    const [state, setState] = useState(initialState)


    //api function
    const getProducts = async () => {
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const products = await response.json()
            setState(prevState => {
                return produce(prevState, (draft) => {
                    draft.products = products
                    draft.isLoading = true
                })
            })
        }
        catch (err) {
            console.log(err)
            setState(prevState => {
                return produce(prevState, (draft) => {
                    draft.err = err
                    draft.isLoading = true
                })
            })
        }
    }
    useEffect(() => {
        //api call
        getProducts()
    }, [])

    //conditional rendering: how to use if...else..elseif
    if (state.error) {
        return <div>
            <h1>Error : {error.message}</h1>
        </div>
    } else if (!state.isLoading) {
        return <h2>Loading...</h2>
    } else {
        return <div>
            <h1>Products</h1>
            <hr />
            <div>
                {
                    state.products.map(product => {
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

const App = () => {
    return <Products />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
