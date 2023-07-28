import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

function TravelOverview() {
  return (
    <>
    <div className="content">
    <Link style={{ textDecoration: 'none'}} to="/recipe/breakfast">
    <img src='https://thebigmansworld.com/wp-content/uploads/2022/01/healthy-breakfast-ideas-for-weight-loss.jpg'className='breakfast'/>
    <div className="child">
    Perfect pancakes are easier to make than you think. This pancake recipe produces thick, fluffy, and all-around delicious pancakes with just a few ingredients (and it's so much better than the boxed stuff).
    <ul>
    <li className='more-break'>
      Click To View More Breakfast
    </li>
    </ul>
    </div>
    </Link>
    </div>
    </>
  );
}

export default TravelOverview;