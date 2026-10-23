const products = [
    { id : 1, name: "Laptop" },
    { id : 2, name: "Phone" },
    { id : 3, name: "Headphones" },
]

export {products };

export default function Products(){
    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <p key={product.id}>
                    <a href={'/product/${product.if}'}>{product.name}</a>
                </p>
            ))}
        </div>
    );
}