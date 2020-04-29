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

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestMeal: () => dispatch(requestMeal()),
  onRequestRandomMeal: () => dispatch(requestRandomMeal()),
  onRequestViewMeal: (event) => dispatch(requestViewMeal(event.target.getAttribute("data-id")))
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      meal: {}
    };
  }

  onMealSearch = () => {
    // fetch(
    //   `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.props.searchField}`
    // )
    //   .then(resp => resp.json())
    //   .then(data => {
    //     this.setState({ meals: data.meals, meal: {} });
    //   })
    //   .catch(err => console.log("Error on meal search"));
    this.props.onRequestMeal(this.props.searchField);
  };

  onRandomSearch = () => {
    this.props.onRequestRandomMeal();
  };

  viewMealDetails = event => {
    // const id = event.target.getAttribute("data-id");
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     let ingredientsArr = [];
    //     for (let i = 1; i <= 20; i++) {
    //       if (data.meals[0][`strIngredient${i}`]) {
    //         ingredientsArr.push(
    //           `${data.meals[0][`strIngredient${i}`]} - ${
    //             data.meals[0][`strMeasure${i}`]
    //           } `
    //         );
    //       }
    //     }
    //     this.setState({
    //       meal: {
    //         name: data.meals[0].strMeal,
    //         category: data.meals[0].strCategory,
    //         area: data.meals[0].strArea,
    //         photoSrc: data.meals[0].strMealThumb,
    //         instructions: data.meals[0].strInstructions,
    //         ingredients: ingredientsArr,
    //         video: data.meals[0].strYoutube
    //       }
    //     });
    //   })
    //   .catch(err => console.log("Error on view meal details event"));
    this.props.onRequestViewMeal();
  };

  render() {
    const {
      searchField,
      onSearchChange,
      meals,
      onRequestRandomMeal,
      meal
    } = this.props;
    return (
      <div className="App">
        <Header />
        <InputForm
          onSearchChange={onSearchChange}
          onMealSearch={this.onMealSearch}
          onRandomSearch={onRequestRandomMeal}
        />
        <SearchValueParagraph searchValue={searchField} meals={meals} />
        <MealGrid meals={meals} viewMealDetails={this.viewMealDetails} />
        {this.state.meal.name !== undefined ? (
          <MealDetails mealDetails={meal} />
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(App);
