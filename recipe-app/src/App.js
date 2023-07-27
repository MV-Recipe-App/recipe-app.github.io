import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './component/Home'
import Nav from "./component/nav/Nav"
import Drinks from './component/nav/Drinks/Drinks';
import Cocktail from './component/nav/Drinks/components/Cocktail'
import DrinksOverview from './component/nav/Drinks/DrinksOverview';
import Beer from './component/nav/Drinks/components/Beer';
import Cocoa from './component/nav/Drinks/components/Cocoa';
import HomemadeLiqueur from './component/nav/Drinks/components/HomemadeLiqueur';
import OrdinaryDrink from './component/nav/Drinks/components/OrdinaryDrink';
import OtherUnknown from './component/nav/Drinks/components/OtherUnknown';
import PunchPartyDrink from './component/nav/Drinks/components/PunchPartyDrink';
import Shot from './component/nav/Drinks/components/Shot';
import SoftDrink from './component/nav/Drinks/components/SoftDrink';
import OtherUnkown from './component/nav/Drinks/components/OtherUnknown';
import CoffeeTea from './component/nav/Drinks/components/CoffeeTea';
import Shake from './component/nav/Drinks/components/Shake';
import Travel from './component/nav/Travel/Travel';
import American from './component/nav/Travel/components/American';
import TravelOverview from './component/nav/Travel/TravelOverview';
import Chinese from './component/nav/Travel/components/Chinese';
import British from './component/nav/Travel/components/British';
import Indian from './component/nav/Travel/components/Indian';
import French from './component/nav/Travel/components/French';
import Jamaican from './component/nav/Travel/components/Jamaican';
import Italian from './component/nav/Travel/components/Itailian';
import Moroccan from './component/nav/Travel/components/Moroccan';
import Greek from './component/nav/Travel/components/Greek';
import Portuguese from './component/nav/Travel/components/Portuguese';
import Quick from './component/nav/Quick/Quick';
import QuickOverview from './component/nav/Quick/QuickOverview';
import Starter from './component/nav/Quick/components/Starter';
import Side from './component/nav/Quick/components/Side';
import Vegan from './component/nav/Quick/components/Vegan';
import Vegetarian from './component/nav/Quick/components/Vegetarian';
import Baking from './component/nav/Recipes/components/Baking';
import Beef from './component/nav/Recipes/components/Beef';
import Breakfast from './component/nav/Recipes/components/Breakfast';
import Chicken from './component/nav/Recipes/components/Chicken';
import Lamb from './component/nav/Recipes/components/Lamb';
import More from './component/nav/Recipes/components/More';
import Pasta from './component/nav/Recipes/components/Pasta';
import Pork from './component/nav/Recipes/components/Pork';
import Seafood from './component/nav/Recipes/components/Seafood';
import RecipesOverview from './component/nav/Recipes/RecipesOverview';
import Recipes from './component/nav/Recipes/Recipes';

function App() {
  return (
    <>
    <div className='app-NavBar'>
    <Nav />
      </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/drinks' element={<Drinks/>}>
      <Route path="/drinks" element={<DrinksOverview />} />
      <Route path="beer" element={<Beer/>}/>
      <Route path='coffee_tea' element={<CoffeeTea/>}/>
      <Route path='cocoa' element={<Cocoa/>}/>
      <Route path='homemade' element={<HomemadeLiqueur/>}/>
      <Route path='ordinary' element={<OrdinaryDrink/>}/>
      <Route path='party' element={<PunchPartyDrink/>}/>
      <Route path='shake' element={<Shake/>}/>
      <Route path='shot' element={<Shot/>}/>
      <Route path='softdrink' element={<SoftDrink/>}/>
      <Route path='more' element={<OtherUnkown/>}/>
      <Route path="cocktail" element={<Cocktail />} />
    </Route>
    <Route path='/travel' element={<Travel/>}>
      <Route path="/travel" element={<TravelOverview/>} />
      <Route path="american" element={<American/>} />
      <Route path="chinese" element={<Chinese/>} />
      <Route path="british" element={<British/>} />
      <Route path="indian" element={<Indian/>} />
      <Route path="french" element={<French/>} />
      <Route path="jamaican" element={<Jamaican/>} />
      <Route path="italian" element={<Italian/>} />
      <Route path="moroccan" element={<Moroccan/>} />
      <Route path="greek" element={<Greek/>} />
      <Route path="portuguese" element={<Portuguese/>} />
    </Route>
    <Route path='/quick_easy' element={<Quick/>}>
      <Route path="/quick_easy" element={<QuickOverview/>} />
      <Route path="starter" element={<Starter/>} />
      <Route path="side" element={<Side/>} />
      <Route path="vegan" element={<Vegan/>} />
      <Route path="vegetarian" element={<Vegetarian/>} />
    </Route>
    <Route path='/recipe' element={<Recipes/>}>
      <Route path="/recipe" element={<RecipesOverview/>} />
      <Route path="beef" element={<Beef/>} />
      <Route path="breakfast" element={<Breakfast/>} />
      <Route path="chicken" element={<Chicken/>} />
      <Route path="lamb" element={<Lamb/>} />
      <Route path="pasta" element={<Pasta/>} />
      <Route path="pork" element={<Pork/>} />
      <Route path="seafood" element={<Seafood/>} />
      <Route path="more" element={<More/>} />
    </Route>
      <Route path="/Baking" element={<Baking/>} />
    <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
    </>
  );
}

export default App;
