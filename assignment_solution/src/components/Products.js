import Card from "./Card";

function Products(props) {

    const productList = props.products.map(product => {
        return (
            <Card key={product.id} product={product} addToBasket={props.addToBasket}> </Card>
        )
    });

    return productList;
}

export default Products;