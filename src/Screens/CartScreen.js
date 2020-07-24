import React, { useEffect } from 'react'
function CartScreen(props) {


    const productid = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;


    return <div className="cart">
        <div className="cart-Lsit">
            <ul className="cart-List-container">
                <li>
                    <h3>Shopping Cart</h3>
                    <div>
                        Price
                  </div>

                </li>
                {
                    cartItems.length === 0 ?
                        <div>Cart is Empty

                </div>
                        :
                        cartItems.map(item =>
                            <div>
                                <img src={item.image} alt="product" />
                                <div className="cart-name">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        Qty:
                                <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>

                                        </select>
                                    </div>

                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        )



                }


            </ul>
        </div>


    </div>

}

export default CartScreen;