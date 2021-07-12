import logo from './logo.svg';
import React, { Component } from 'react';
import './header.css'
import Recipe from './components/Recipe';

class App extends Component {
  state = {
    value:"",
    info:"",
    on:false,
    postion:false,
  }
    
   callApi = async(e)=>{
    const valu = document.getElementById("input").value;
    const URL=`https://themealdb.com/api/json/v1/1/search.php?s=${valu}`;
    try{
      let data =  await fetch(URL);
      const apiinfo = await data.json();
      this.setState({info:apiinfo})
      this.setState({on:!this.state.on,postion:!this.state.postion});

    }
  catch{
   this.state.handel()
  }   

  }
  render() { 
    return ( 
      <React.Fragment>
 <div className="container">
    <h2 > Recipe Finder</h2>
    <input id="input" type="text"  placeholder="Enter the Name of the dish" />
   <button  onClick={()=>this.callApi()} id="but">
     Get Ingrediants
   </button>
  <h3>Type a Dish Name to Search For its Ingrediant</h3>
   </div>
   <div>
  {this.state.on && this.state.postion?<Recipe datafromapi={this.state.info}/>:null} 
 </div> 
      </React.Fragment>
   );
  }
}
 
export default App;
