import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PRODUCTS } from './mock-data/products'


const ProductsList = ({ products }) => {
    return <div>
        {
            products.map(({ id, image, title, description, category, rating: { rate, count } }) => {
                return <div key={id}>
                    <h2>{title}</h2>
                    <img src={image} height={200} width={200} />
                    <span>{category}</span>
                    <section>
                        <p>{description}</p>
                        <h4> Price : {rate}$   Available Stock: {count}</h4>
                    </section>
                </div>
            })
        }
    </div>
}

//todo: Create Product component which should display production information:
//you have to pass all product details from the Productlist component as prop

const App = () => {
    return <>
        <ProductsList products={PRODUCTS} />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
