import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Force from '../Force/Force';
import './Container.css'

const Container = () => {

    // State declaration
    const [forces, setForces] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./force.JSON')
        .then(res => res.json())
        .then(data => setForces(data))
    }, []);

    // Function for update cart and handle add to squad button
    const handleAddToForce = product => {
        const matchedCartId = cart.find(singleCart => singleCart.id === product.id);

        // Initialize newCart
        let newCart = [...cart];
        
        // Cheaking if there have any duplicate cart
        if(!matchedCartId){
            newCart = [...cart, product];
        }
        
        // Update cart value
        setCart(newCart);
    }
 
    return (
        <div className="container">
            <div className="row pb-3">
                <div className="col-lg-9">
                    <div className="row">
                        {
                            forces.map(force => <Force force={force} key={force.id} handleAddToForce={handleAddToForce}></Force>)
                        }
                    </div>
                </div>

                <div className="col-lg-3">
                    <Cart carts={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;