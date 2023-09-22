import { useState, useEffect } from "react";
import Products from "./Products";
import "../style/main.css";
import ShoppingBasket from "./ShoppingBasket";

function Welcome() {
    const [products, setProducts] = useState(null);
    const [basket, setBasket] = useState([]);
    const [showBasket, setShowBasket] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const addToBasket = (item) => {
        if (!basket) {
             // if basket is empty, add the first item to the basket array
            setBasket([item]);
        } else {
            // If basket isn't empty, then push the next item into the array
            basket.push(item); 

            // Find the index of this item from the basket, but in the products array.
            // Use that index to decrement the stock value of that product
            let index = products.findIndex(product => product.id == item.id);
            products[index].UnitsInStock--;

            // This triggers a change of state and re-render
            setBasket([...basket]);
            setProducts([...products]);
        }
    }

    const removeFromBasket = (toRemove) => {

        if (toRemove == "total") {
            setBasket([]);
            setShowBasket(false); 
            return;
        }

        // Find the index of this item in the basket using the id
        let bIndex = basket.findIndex(product => product.id == toRemove);

        // Find the index of this item from the basket, but in the products array.
        let pIndex = products.findIndex(product => product.id == toRemove);

        // Remove that item from the array
        basket.splice(bIndex, 1);

        // Hide basket div once basket is empty
        if (basket.length == 0)
            setShowBasket(false);

        // Increment the stock value of that product
        products[pIndex].UnitsInStock++;

        // This triggers a change of state and re-render
        setBasket([...basket]);
        setProducts([...products]);
    }

    const showBasketHandler = () => {
        setShowBasket(true);
    }

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(res => {

            if (!res.ok) {
                throw new Error('Could not get data for that resource.');
            }

            return res.json();
        }).then(data => {
            // Success!!
            setIsLoading(false);
            setError(null);
            setProducts(data);
        }).catch(err => {
            setError(err.message);
        });
    }, []);

    return (
        <div>
            <h2> Welcome! </h2>
            {error && <div>{error}</div>}
            {isLoading && <div>Please wait. Loading data...</div>}
            <div id="wrapper">
                {
                    products && 
                    <div id="productContainer"> 
                        <Products products={products} addToBasket={addToBasket} />
                    </div>
                }
                {
                    showBasket && 
                    <div id="basket"> 
                        <ShoppingBasket basket={basket} addToBasket={addToBasket} remove={removeFromBasket} /> 
                    </div>
                }
            </div>
            {basket.length != 0 && <span id="showBasket" onClick={showBasketHandler}> click here to view your basket. </span>}
        </div>
    );
}

export default Welcome