import { useState } from "react";
import "../style/main.css";

function Card(props) {
    const product = props.product;

    // const [stock, setStock] = useState(product.UnitsInStock);

    // Added conditional rendering of stock alert message and add button, based on the 'stock' state above.
    return (
        <div className="card">
            <div>Name:{product.ProductName}</div>
            <div>Price: {product.UnitPrice}</div>
            {product.UnitsInStock <= 0 && <span id="stockAlert">Out Of Stock</span>} 
            {product.UnitsInStock > 0 && <button onClick={() => {props.addToBasket(product)}}>Add</button>}
        </div>
    );
}

export default Card;