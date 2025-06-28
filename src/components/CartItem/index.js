import {Component} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

class CartItem extends Component {
  onClickDecrement = (decrementCartItemQuantity, dishId) => {
    decrementCartItemQuantity(dishId)
  }

  onClickIncrement = (incrementCartItemQuantity, dishId) => {
    incrementCartItemQuantity(dishId)
  }

  onRemoveCartItem = (removeCartItem, dishId) => {
    removeCartItem(dishId)
  }

  render() {
    const {
      incrementCartItemQuantity,
      decrementCartItemQuantity,
      removeCartItem,
    } = this.context
    const {cartItemDetails} = this.props
    const {
      dishId,
      dishName,
      dishPrice,
      dishCurrency,
      dishImage,
      quantity,
    } = cartItemDetails

    return (
      <li className="cart-item">
        <img src={dishImage} alt={dishName} className="cart-item-image" />
        <div className="cart-item-details">
          <h1 className="cart-item-name">{dishName}</h1>
          <p className="cart-item-price">
            {dishCurrency} {dishPrice}
          </p>
          <div className="cart-item-controller">
            <button
              type="button"
              className="cart-qty-btn"
              onClick={() =>
                this.onClickDecrement(decrementCartItemQuantity, dishId)
              }
            >
              -
            </button>
            <p className="cart-qty-value">{quantity}</p>
            <button
              type="button"
              className="cart-qty-btn"
              onClick={() =>
                this.onClickIncrement(incrementCartItemQuantity, dishId)
              }
            >
              +
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => this.onRemoveCartItem(removeCartItem, dishId)}
        >
          Remove Cart Item
        </button>
      </li>
    )
  }
}

CartItem.contextType = CartContext

export default CartItem
