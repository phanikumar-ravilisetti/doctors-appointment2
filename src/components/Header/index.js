import {Component} from 'react'
import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'
import './index.css'

class Header extends Component {
  state = {cartItemsCount: 0}

  renderCartIcon = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartCount = cartList.reduce(
          (total, item) => total + item.quantity,
          0,
        )
        return (
          <div>
            <Link to="/cart">
              <button type="button">
                <p>icon</p>
              </button>
            </Link>

            <div>
              <p>{cartCount}</p>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    const {restaurantDetails} = this.props
    return (
      <div>
        <h1>{restaurantDetails}</h1>

        <div>
          <p>My Orders</p>
          <button type="button">Logout</button>
          {this.renderCartIcon()}
        </div>
      </div>
    )
  }
}

export default Header
