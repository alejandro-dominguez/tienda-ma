import React from 'react';

const ItemSugestions = ({
    productBrand,
    products
}) => {
    return (
        <div>
            <h2>
                Artículos que podrían interesarte
            </h2>
            {
                products.map(product => {
                    return (
                        <div className="" key={product.id}>
                            <div className="">
                                <img src="" alt="" />
                            </div>
                            <h3></h3>
                            <p></p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ItemSugestions;
