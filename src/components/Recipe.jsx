import React, { Component } from 'react';
import "../header.css"
class Recipe extends Component {
    state = {
      datafromparent : this.props.datafromapi.meals,
      dataarray: [],
      datameasure:[]
      }
     
     
    render() {
      for(let a=0;a<20;a++){
         this.state.dataarray.push("strIngredient"+(a+1))
         this.state.datameasure.push("strMeasure"+(a+1))
      }
      
        return ( <div id="recipe">
          <div id="recipe-header">
          {this.state.datafromparent[0].strMeal}
          </div>
          <div id="mealsdetails">
          <img id="img" src={this.state.datafromparent[0].strMealThumb} alt="" />
          <div id="division">
          <form >
            <p>{"category of Mela  - "+this.state.datafromparent[0].strCategory}</p>
            <p>{"Area of Meal  - "+this.state.datafromparent[0].strArea}</p>
            <label>Ingrediants</label>
            <div id="ingrediants">
             {this.state.dataarray.map((ele)=>{
               return <p>{this.state.datafromparent[0][ele]}</p>
             })}
            </div>
            <p >Recpie</p>
            <div id="process"><p>{this.state.datafromparent[0].strInstructions}</p>
            </div>
            
          </form>
          </div>
          
          </div>
          
        </div>);
    }
}
 
export default Recipe;