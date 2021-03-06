import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    console.log(props.match.params.id);

    const product = data.products.find(x => x._id === props.match.params.id);
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty" + qty)
    }
    return (<div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
        </div>
        <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Stars ({product.numReviews}Reviews)
                </li>
                <li>
                    Price: ${product.price}
                </li>
                <li>
                    Description : <div>{product.description}</div>
                </li>

            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price : ${product.price}
                </li>
                <li>
                    Status :{product.status}
                </li>
                <li>
                    Qty :
                    <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </li>
                <li>
                    <button onClick={handleAddToCart} className="button">Add to Cart</button>
                </li>
            </ul>

        </div>

    </div>);
}

export default ProductScreen;
