import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
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
        }
        const updatedCartList = prevState.cartList.map(eachDish =>
          eachDish.dishId === dish.dishId
            ? {...eachDish, quantity: dish.quantity}
            : eachDish,
        )
        return {cartList: updatedCartList}
      }

      return {cartList: [...prevState.cartList]}
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
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
