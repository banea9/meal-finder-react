import React, { Component } from "react";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import SearchValueParagraph from "../../components/SearchValueParagraph/SearchValueParagraph";
import MealGrid from "../../components/MealGrid/MealGrid";
import MealDetails from "../../components/MealDetails/MealDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      meals: [],
      meal: {}
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  onMealSearch = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.searchField}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ meals: data.meals });
      })
      .catch(err => console.log(err));
  };

  onRandomSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ meals: data.meals });
      });
  };

  viewMealDetails = event => {
    const id = event.target.getAttribute("data-id");
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(resp => resp.json())
      .then(data => {
        let ingredientsArr = [];
        for (let i = 1; i <= 20; i++) {
          if (data.meals[0][`strIngredient${i}`]) {
            ingredientsArr.push(
              `${data.meals[0][`strIngredient${i}`]} - ${
                data.meals[0][`strMeasure${i}`]
              } `
            );
          }
        }
        this.setState({
          meal: {
            name: data.meals[0].strMeal,
            category: data.meals[0].strCategory,
            area: data.meals[0].strArea,
            photoSrc: data.meals[0].strMealThumb,
            instructions: data.meals[0].strInstructions,
            ingredients: ingredientsArr
          }
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm
          onSearchChange={this.onSearchChange}
          onMealSearch={this.onMealSearch}
          onRandomSearch={this.onRandomSearch}
        />
        <SearchValueParagraph />
        <MealGrid
          meals={this.state.meals}
          viewMealDetails={this.viewMealDetails}
        />
        <MealDetails mealDetails={this.state.meal} />
      </div>
    );
  }
}

export default App;
