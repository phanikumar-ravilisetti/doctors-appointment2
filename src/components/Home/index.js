import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import DishItem from '../DishItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    menuList: [],
    activeCategoryId: '',
    restaurantName: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchRestaurantApi()
  }

  getUpdatedData = tableMenuList =>
    tableMenuList.map(eachMenu => ({
      menuCategory: eachMenu.menu_category,
      menuCategoryId: eachMenu.menu_category_id,
      menuCategoryImage: eachMenu.menu_category_image,
      categoryDishes: eachMenu.category_dishes.map(eachDish => ({
        dishId: eachDish.dish_id,
        dishName: eachDish.dish_name,
        dishPrice: eachDish.dish_price,
        dishImage: eachDish.dish_image,
        dishCurrency: eachDish.dish_currency,
        dishCalories: eachDish.dish_calories,
        dishDescription: eachDish.dish_description,
        dishAvailability: eachDish.dish_Availability,
        dishType: eachDish.dish_Type,
        addonCat: eachDish.addonCat,
      })),
    }))

  fetchRestaurantApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {headers: {Authorization: `${jwtToken}`}}
    const res = await fetch(url, options)
    const data = await res.json()
    const updatedData = this.getUpdatedData(data[0].table_menu_list)
    this.setState({
      menuList: updatedData,
      restaurantName: data[0].restaurant_name,
      activeCategoryId: updatedData[0].menuCategoryId,
      apiStatus: apiStatusConstants.success,
    })
  }

  onUpdateActiveCategoryId = menuCategoryId => {
    this.setState({activeCategoryId: menuCategoryId})
  }

  renderTabMenuList = () => {
    const {menuList} = this.state

    return menuList.map(eachCategory => {
      const onClickHandler = () =>
        this.onUpdateActiveCategoryId(eachCategory.menuCategoryId)

      return (
        <li key={eachCategory.menuCategoryId} onClick={onClickHandler}>
          <button type="button">{eachCategory.menuCategory}</button>
        </li>
      )
    })
  }

  renderDishes = () => {
    const {menuList, activeCategoryId} = this.state
    const category = menuList.find(
      eachCategory => eachCategory.menuCategoryId === activeCategoryId,
    )

    if (!category) return null

    return (
      <ul className="dishes-list-container">
        {category.categoryDishes.map(eachDish => (
          <DishItem key={eachDish.dishId} dishDetails={eachDish} />
        ))}
      </ul>
    )
  }

  renderSpinner = () => (
    <div className="spinner-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {restaurantName} = this.state
    return (
      <>
        <div className="home-background">
          <Header restaurantDetails={restaurantName} />
          <ul className="tab-container">{this.renderTabMenuList()}</ul>
          {this.renderDishes()}
        </div>
      </>
    )
  }

  renderHomeRoute = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderSpinner()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return <>{this.renderHomeRoute()}</>
  }
}

export default Home
