import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import '../../../../style/drinks.css'

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

function OrdinaryDrink(props) {

  const [alc, setAlc] = useState()
  const [single, setSingle] = useState(false)
  const [singleDrink, setSingleDrink] = useState()
  const [idDrink, setIdDrink] = useState()

    const getDrinkByName = async (name) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
        const data = await response.json();
        return data.drinks;
      }
      const getOneDrinkByName = async (idDrink) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
        const data = await response.json();
        return data.drinks;
      }
      useEffect(() => {
        if (!single){
        getDrinkByName('Ordinary_Drink')
        .then(data => setAlc(data));
      } 
      else {
          getOneDrinkByName(idDrink)
      .then(data => setSingleDrink(data));
      }
    }, [])
  const handleclick = async (key) => {
     if (key) {
      console.log(key)
      const oneDrink = await getOneDrinkByName(alc[key].idDrink)
      console.log(oneDrink);
      await setSingleDrink(oneDrink)
      console.log(alc[key].idDrink)
    }
      await setSingle(!single)
  }
  return (
    <>       
     {(!single)?( 
        <section className="theCocktailSection">
          {alc?.map((alchol, key) => {
          return (
              <div className="productContainerC" onClick={() => {
                  handleclick(key)
              }}>
                  <img src={alchol.strDrinkThumb}  alt="ordinary_drink" />
                  <h3 className="nameC" >
                      {alchol.strDrink}
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
           <img src={singleDrink[0].strDrinkThumb}  alt="ordinary_drink" />
        <h3 className="nameC" >
            {singleDrink[0].strDrink}
        
      </h3>
  </section>

  <div>{singleDrink[0].strGlass}</div>
      <div class="ing"> Ingridients: 
      <ul>
        <li>{singleDrink[0].strMeasure1} {singleDrink[0].strIngredient1}</li>
        <li>{singleDrink[0].strMeasure2} {singleDrink[0].strIngredient2} </li>
        <li>{singleDrink[0].strMeasure3} {singleDrink[0].strIngredient3} </li>
        <li>{singleDrink[0].strMeasure4} {singleDrink[0].strIngredient4} </li>
        <li>{singleDrink[0].strMeasure5} {singleDrink[0].strIngredient5} </li>
        <li>{singleDrink[0].strMeasure6} {singleDrink[0].strIngredient6} </li>
        <li>{singleDrink[0].strMeasure7} {singleDrink[0].strIngredient7} </li>
        <li>{singleDrink[0].strMeasure8} {singleDrink[0].strIngredient8} </li>
        <li>{singleDrink[0].strMeasure9} {singleDrink[0].strIngredient9} </li>
        <li>{singleDrink[0].strMeasure10} {singleDrink[0].strIngredient10} </li>
        <li>{singleDrink[0].strMeasure11} {singleDrink[0].strIngredient11} </li>
        <li>{singleDrink[0].strMeasure12} {singleDrink[0].strIngredient12} </li>
        <li>{singleDrink[0].strMeasure13} {singleDrink[0].strIngredient13} </li>
        <li>{singleDrink[0].strMeasure14} {singleDrink[0].strIngredient14} </li>
        <li>{singleDrink[0].strMeasure15} {singleDrink[0].strIngredient15} </li>
      </ul>
  </div>
  <div class="ing"> Instructions:
  <div>{singleDrink[0].strInstructions}</div>
  </div>
  </div>
  )}
    </>
  );
}
  
  export default OrdinaryDrink;