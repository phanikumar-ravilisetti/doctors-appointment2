import {Component} from 'react'

import CartContext from '../../context/CartContext'
import './index.css'

class DishItem extends Component {
  state = {quantity: 0}

  onAddItemToCart = addCartItem => {
    const {dishDetails} = this.props
    const {quantity} = this.state
    addCartItem({...dishDetails, quantity})
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  onDecrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0,
    }))
  }

  renderControllerButton = (addCartItem, removeCartItem) => {
    const {quantity} = this.state
    return (
      <div className="controller-container">
        <button
          className="button"
          type="button"
          onClick={this.onDecrementQuantity}
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          className="button"
          type="button"
          onClick={this.onIncrementQuantity}
        >
          +
        </button>
      </div>
    )
  }

  render() {
    const {quantity} = this.state
    const {dishDetails} = this.props
    const {
      dishName,
      dishType,
      dishPrice,
      dishCurrency,
      dishDescription,
      dishImage,
      dishCalories,
      addonCat,
      dishAvailability,
    } = dishDetails
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem, removeCartItem} = value
          return (
            <li className="dish-item-container">
              <div className="veg-border" />
              <div className="dish-details-container">
                <h1 className="dish-name">{dishName}</h1>
                <p className="dish-currency-price">
                  {dishCurrency} {dishPrice}
                </p>
                <p className="dish-description">{dishDescription}</p>
                {dishAvailability &&
                  this.renderControllerButton(addCartItem, removeCartItem)}

                {!dishAvailability && <p>Not available</p>}
                {addonCat.length !== 0 && <p>Customizations available</p>}
                {quantity > 0 && (
                  <button
                    type="button"
                    onClick={() => this.onAddItemToCart(addCartItem)}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>

              <p className="dish-calories">{dishCalories} calories</p>
              <img className="dish-image" alt={dishName} src={dishImage} />
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default DishItem
