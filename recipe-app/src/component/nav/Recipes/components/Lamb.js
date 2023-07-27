import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import '../data.json'
// import '../../../../style/drinks.css'

function Lamb(props) {

    const [food, setFood] = useState()
    const [single, setSingle] = useState(false)
    const [singleMeal, setSingleMeal] = useState()
    const [idMeal, setIdMeal] = useState()
  
      const getMealByName = async (name) => {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
          const data = await response.json();
          return data.meals;
        }
        const getOneMealByName = async (idMeal) => {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
          const data = await response.json();
          return data.meals;
        }
  
        useEffect(() => {
          if (!single){
          getMealByName('Lamb')
          .then(data => setFood(data));
        }         else {
          getOneMealByName(idMeal)
      .then(data => setSingleMeal(data));
      }
      },[])
  
      const handleclick = async (key) => {
          if (key) {
           console.log(key)
           const oneMeal = await getOneMealByName(food[key].idMeal)
           console.log(oneMeal);
           await setSingleMeal(oneMeal)
           console.log(food[key].idMeal)
         }
           await setSingle(!single)
       }
      return (
        <>
         {(!single)?( 
            <section className="theCocktailSection">
              {food?.map((meals, key) => {
              return (
                  <div className="productContainerC" onClick={() => {
                      handleclick(key)
                  }}>
                      <img src={meals.strMealThumb}  alt="cocktails" />
                      <h3 className="nameC" >
                          {meals.strMeal}
                      </h3>
                  </div>
              )
            })}
            </section>
            
        ): ( 
          <div className="productContainerC" onClick={() => {
            handleclick()
        }}>
              <section className="theCocktailSection"> 
               <img src={singleMeal[0].strMealThumb}  alt="cocktails" />
            <h3 className="nameC" >
                {singleMeal[0].strMeal}
            
          </h3>
      </section>
      <div>{singleMeal[0].strGlass}</div>
      <div class="ing"> Ingridients: 
      <ul>
      <li>{singleMeal[0].strMeasure1} {singleMeal[0].strIngredient1}</li>
        <li>{singleMeal[0].strMeasure2} {singleMeal[0].strIngredient2} </li>
        <li>{singleMeal[0].strMeasure3} {singleMeal[0].strIngredient3} </li>
        <li>{singleMeal[0].strMeasure4} {singleMeal[0].strIngredient4} </li>
        <li>{singleMeal[0].strMeasure5} {singleMeal[0].strIngredient5} </li>
        <li>{singleMeal[0].strMeasure6} {singleMeal[0].strIngredient6} </li>
        <li>{singleMeal[0].strMeasure7} {singleMeal[0].strIngredient7} </li>
        <li>{singleMeal[0].strMeasure8} {singleMeal[0].strIngredient8} </li>
        <li>{singleMeal[0].strMeasure9} {singleMeal[0].strIngredient9} </li>
        <li>{singleMeal[0].strMeasure10} {singleMeal[0].strIngredient10} </li>
        <li>{singleMeal[0].strMeasure11} {singleMeal[0].strIngredient11} </li>
        <li>{singleMeal[0].strMeasure12} {singleMeal[0].strIngredient12} </li>
        <li>{singleMeal[0].strMeasure13} {singleMeal[0].strIngredient13} </li>
        <li>{singleMeal[0].strMeasure14} {singleMeal[0].strIngredient14} </li>
        <li>{singleMeal[0].strMeasure15} {singleMeal[0].strIngredient15} </li>
        <li>{singleMeal[0].strMeasure16} {singleMeal[0].strIngredient16} </li>
        <li>{singleMeal[0].strMeasure17} {singleMeal[0].strIngredient17} </li>
        <li>{singleMeal[0].strMeasure18} {singleMeal[0].strIngredient18} </li>
        <li>{singleMeal[0].strMeasure19} {singleMeal[0].strIngredient19} </li>
        <li>{singleMeal[0].strMeasure20} {singleMeal[0].strIngredient20} </li>
      </ul>
  </div>
  <div class="ing"> Instructions:
  <div>{singleMeal[0].strInstructions}</div>
  </div>
      </div>
      )}
        </>
      );
    }
  
  export default Lamb;