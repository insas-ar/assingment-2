import React from "react";
import Money from '../money/Money'
import './Investor.css'
const Investor = () =>{
    return(
        <div className="products">
            {
                Money && Money.map( product =>{
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

export default Investor;