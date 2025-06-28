import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'

import './App.css'

// write your code here
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
      }
      return {cartList: [...prevState.cartList, dish]}
    })
  }

  removeCartItem = dishId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(
        eachDish => eachDish.dishId !== dishId,
      ),
    }))
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = dishId => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.map(eachDish => {
        if (eachDish.dishId === dishId) {
          return {...eachDish, quantity: eachDish.quantity + 1}
        }
        return eachDish
      })

      return {cartList: updatedCartList}
    })
  }

  decrementCartItemQuantity = dishId => {
    this.setState(prevState => {
      const existingDish = prevState.cartList.find(
        eachDish => eachDish.dishId === dishId,
      )

      if (existingDish) {
        if (existingDish.quantity === 1) {
          // Remove if quantity is going to be 0
          const updatedCartList = prevState.cartList.filter(
            eachDish => eachDish.dishId !== dishId,
          )
          return {cartList: updatedCartList}
        }

        // Decrease quantity by 1
        const updatedCartList = prevState.cartList.map(eachDish =>
          eachDish.dishId === dishId
            ? {...eachDish, quantity: eachDish.quantity - 1}
            : eachDish,
        )

        return {cartList: updatedCartList}
      }

      return null
    })
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
