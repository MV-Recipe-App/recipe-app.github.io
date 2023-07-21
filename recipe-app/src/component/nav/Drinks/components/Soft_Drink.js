import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import '../../../../style/drinks.css'

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

function Drinks(props) {

    const [alc, setAlc] = useState()

    const getDrinkByName = async (name) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
        const data = await response.json();
        return data.drinks;
      }
      useEffect(() => {
        getDrinkByName('Soft-Drink')
        .then(data => setAlc(data));
      },[])
    
    
    
      // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    // useEffect(() => {
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => setAlc(res))
    //     .catch(console.error)
    //     // console.log("setAlc:", setAlc)
    //     console.log("alc:", alc)
    // }, [])
    return (
      <>
      {/* <h1>{alc.drinks?alc.drinks:null}</h1> */}
      
      {<section className="theCocktailSection">
        {alc?.map(alchol => {
        return (
            <div className="productContainerC">
                <img src={alchol.strDrinkThumb} alt="Soft-Drink" />
                <h3 className="nameC">
                    {alchol.strDrink}
                </h3>
            </div>
        )
      })}
      </section>
      }
      {/* {console.log("setAlc:", setAlc)} */}
      {console.log("alc:", alc)}
      </>
    );
  }
  
  export default Drinks;