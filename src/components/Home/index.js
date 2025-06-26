import {Component} from 'react'

import DishItem from '../DishItem'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {menuList: [], activeCategoryId: '', isSpinnerLoading: false}

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
    this.setState({isSpinnerLoading: true})
    const api =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    const apiResponse = await fetch(api, options)

    const data = await apiResponse.json()
    const updatedData = this.getUpdatedData(data[0].table_menu_list)
    this.setState({
      menuList: updatedData,
      restaurantName: data[0].restaurant_name,
      activeCategoryId: updatedData[0].menuCategoryId,
      isSpinnerLoading: false,
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
      <div className="spinner-border" role="status" />
    </div>
  )

  render() {
    const {menuList, isSpinnerLoading, restaurantName} = this.state
    return menuList.length === 0 ? (
      this.renderSpinner()
    ) : (
      <div className="home-background">
        <Header restaurantDetails={restaurantName} />
        <ul className="tab-container">{this.renderTabMenuList()}</ul>
        {this.renderDishes()}
      </div>
    )
  }
}

export default Home
