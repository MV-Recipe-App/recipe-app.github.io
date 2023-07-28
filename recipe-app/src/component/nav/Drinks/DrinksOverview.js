import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
function DrinksOverview() {
  return (
    <>
    <div className="content">
    <Link style={{ textDecoration: 'none'}} to="/drinks/party">
    <img src='https://hips.hearstapps.com/hmg-prod/images/super-bowl-drinks-dark-and-stormy-1674236551.jpeg?resize=480:*'className='breakfast'/>
    <div className="child">
    Some things are classic for a reason. So whether you're brushing up on your at-home mixology menu or looking for a go-to order for your next cocktail hour, you'll never be sorry you opted for one of these classics!
    <ul>
    <li className='more-break'>
      Click To View More Drinks
    </li>
    </ul>
    </div>
    </Link>
    </div>
    </>
  );
}

export default DrinksOverview;