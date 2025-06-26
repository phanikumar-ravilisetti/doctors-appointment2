import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import CartContext from './context/CartContext'

import './App.css'

//write your code here
class App extends Component {
  state = {cartList: []}

  addCartItem = dish => {
    this.setState(prevState => {
      const ifdishExists = prevState.cartList.find(
        eachdish => eachdish.dishId === dish.dishId,
      )

      if (ifdishExists) {
        const updatedCart = prevState.cartList.map(eachDish =>
          eachDish.dishId === dish.dishId
            ? {...eachDish, quantity: dish.quantity}
            : eachDish,
        )

        return {cartList: updatedCart}
      } else {
        return {cartList: [...prevState.cartList, dish]}
      }
    })
  }

  removeCartItem = dish => {
    this.setState(prevState => {
      const existingDish = prevState.cartList.find(
        eachDish => eachDish.dishId === dish.dishId,
      )

      if (existingDish) {
        if (dish.quantity === 0) {
          const updatedCartList = prevState.cartList.filter(
            eachDish => eachDish.dishId !== dish.dishId,
          )
          return {cartList: updatedCartList}
        } else {
          const updatedCartList = prevState.cartList.map(eachDish =>
            eachDish.dishId === dish.dishId
              ? {...eachDish, quantity: dish.quantity}
              : eachDish,
          )
          return {cartList: updatedCartList}
        }
      }

      return null
    })
  }

  render() {
    const {cartList} = this.state
    const cartListLength = cartList.length
    if (cartListLength > 0) {
      console.log(cartList[0].quantity)
    }

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
        }}
      >
        <Home />)
      </CartContext.Provider>
    )
  }
}

export default App
