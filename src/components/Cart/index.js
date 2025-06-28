import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

class Cart extends Component {
  renderEmptyView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty view"
        className="empty-view-image"
      />
      <p className="empty-description">Your cart is Empty.</p>
      <Link to="/">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </Link>
    </div>
  )

  renderCartItems = removeAllCartItems => {
    const {cartList} = this.context
    return (
      <>
        <div className="cart-items-header">
          <h1>Cart Items</h1>
          <button
            type="button"
            className="remove-all-btn"
            onClick={removeAllCartItems}
          >
            Remove All
          </button>
        </div>
        <ul>
          {cartList.map(dish => (
            <CartItem key={dish.dishId} cartItemDetails={dish} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {cartList, removeAllCartItems} = this.context

    return (
      <div className="cart-page-container">
        <Header />
        <div className="cart-body-container">
          {cartList.length === 0
            ? this.renderEmptyView()
            : this.renderCartItems(removeAllCartItems)}
        </div>
      </div>
    )
  }
}

Cart.contextType = CartContext

export default Cart
