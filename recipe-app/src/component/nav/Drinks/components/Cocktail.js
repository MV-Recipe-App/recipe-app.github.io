import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import '../../../../style/drinks.css'

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
// const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${}`

function Drinks(props) {

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
            getDrinkByName('Cocktail')
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
      
      
       
       {(!single)?( 
          <section className="theCocktailSection">
            {alc?.map((alchol, key) => {
            return (
                <div className="productContainerC" onClick={() => {
                    handleclick(key)
                }}>
                    <img src={alchol.strDrinkThumb}  alt="cocktails" />
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
             <img src={singleDrink[0].strDrinkThumb}  alt="cocktails" />
          <h3 className="nameC" >
              {singleDrink[0].strDrink}
          
        </h3>
    </section>
    </div>
    )}
    

      
      </>
    );
  }
  
  export default Drinks;
