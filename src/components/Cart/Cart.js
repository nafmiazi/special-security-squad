import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {carts} = props;
    
    // Updating total payment cost
    let totalPayment = 0;
    for(const person of carts){
        totalPayment = totalPayment + person.salary;
    }

    // Return cart sections value
    return (
        <div className="text-warning pt-3 text-end">
            <h3 className="special-font">Squad Summary</h3>
            <h6 className="text-white special-font">
                <i className="fas fa-user-secret icon"></i> Security Force Added : {carts.length}
            </h6>
            <p className="special-font">Total Salary Cost : <i className="fas fa-dollar-sign icon"></i> {totalPayment.toFixed(2)}</p>

            {
                carts.map(cart => <div className="row cart-color ms-2 p-2 rounded border border-2 border-danger mt-2" key={cart.id}>
                    <div className="col-lg-4 text-end border-end border-danger">
                        <img src={cart.img} className="card-img-to border border-2 border-danger rounded-circle" width="50px" height="50px" alt="..." />
                    </div>

                    <div className="col-lg-8 mt-2 fw-bold text-danger">
                        <p>{cart.name}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;