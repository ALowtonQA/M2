import { useState } from "react";
import "../style/main.css";

function ShoppingBasket(props) {

    let total = 0;

    // Object that will be used to contain basket items & quantities
    const counts = {}; 

    // Loop through the existing basket
    props.basket.forEach(product => { 
        // For each product in the basket, create an object property that contains the quantity
        counts[product.ProductName] = {
            // If the current product already exists, increment the quantity by 1
            quantity: (counts[product.ProductName] ? counts[product.ProductName].quantity : 0) + 1,
            price: product.UnitPrice,
            id: product.id
        }
    });

    // Add the product to the basket using the addToBasket handler function that was passed down from Welcome.js
    // The state for the basket lives in Welcome.js so that both the Products and ShoppingBasket components can share access
    const incQuantity = (event) => {
        props.addToBasket(props.basket.find((product) => product.id == event.target.parentElement.id));
    }

    const decQuantity = (event) => {
       props.remove(event.target.parentElement.id);
    }

    const basket = [];

    // Populate the basket array with entries for each basket item (now including quantity)
    for (let product in counts) {
        total = total + (counts[product].price * counts[product].quantity);
        basket.push(
            <div id="basketEntry" key={counts[product].id}>
                <div>Name:{product}</div>
                <div>Price: £{counts[product].price}</div>
                <div>Quantity: {counts[product].quantity}</div>
                <div id={counts[product].id}>
                    <button className="addBtn" onClick={incQuantity}>+</button>
                    <button className="subBtn" onClick={decQuantity}>-</button>
                </div>
            </div>
        );
    }

    return (
        <>
            <span id="total">Total: £{total}
                <button id="checkout" onClick={decQuantity}> Checkout </button>
            </span>
            {basket}
        </>
    );
}

export default ShoppingBasket;