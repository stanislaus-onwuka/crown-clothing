import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import { ReactComponent as ShoppingBag } from '../../assests/shopping-bag.svg'

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden }) =>{
    return(
        <div className="cart-icon" onClick={ toggleCartHidden }>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default  connect(null, mapDispatchToProps)(CartIcon);