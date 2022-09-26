import React from "react";
import Products from '../products/Products'
import './StartUps.css'
const StartUps = () =>{
    return(
        <div className="products">
            {
                Products && Products.map( product =>{
                    return(
                        <div id="product">
                        <img src={ product.source } alt="" />

                        <br />
                        <div className="navbar.items">
                       { product.name}
                       <br />
                       { product.founder }
                       <br />
                       {product.rating}
                        </div>
                     </div>
                    )
                })
            }
        </div>
    )
}

export default StartUps;

