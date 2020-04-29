import React, { Component } from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import SearchValueParagraph from "../../components/SearchValueParagraph/SearchValueParagraph";
import MealGrid from "../../components/MealGrid/MealGrid";
import MealDetails from "../../components/MealDetails/MealDetails";
import { connect } from "react-redux";
import {
  setSearchField,
  requestRandomMeal,
  requestMeal,
  requestViewMeal
} from "../../actions";
import "./App.css";

const mapStateToPros = state => {
  return {
    searchField: state.searchMeals.searchField,
    meals: state.requestRandomMeal.meals,
    isPending: state.requestRandomMeal.isPending,
    error: state.requestRandomMeal.error,
    meal: state.requestViewMeal.meal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMeal: () => dispatch(requestMeal()),
    onRequestRandomMeal: () => dispatch(requestRandomMeal()),
    onRequestViewMeal: event =>
      dispatch(requestViewMeal(event.target.getAttribute("data-id")))
  };
};

class App extends Component {
  
  onMealSearch = () => {
    this.props.onRequestMeal(this.props.searchField);
  };

  render() {
    const {
      onRequestMeal,
      searchField,
      onSearchChange,
      meals,
      onRequestRandomMeal,
      meal,
      onRequestViewMeal
    } = this.props;
    return (
      <div className="App">
        <Header />
        <InputForm
          onSearchChange={onSearchChange}
          onMealSearch={() => onRequestMeal(searchField)}
          onRandomSearch={onRequestRandomMeal}
        />
        <SearchValueParagraph searchValue={searchField} meals={meals} />
        <MealGrid meals={meals} viewMealDetails={onRequestViewMeal} />
        {meal.name !== undefined ? <MealDetails mealDetails={meal} /> : null}
      </div>
    );
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(App);
