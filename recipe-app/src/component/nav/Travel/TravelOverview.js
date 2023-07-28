import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

function TravelOverview() {
  return (
    <>
    <div className="content">
    <Link style={{ textDecoration: 'none'}} to="/travel/french">
    <img src='https://www.aworldtotravel.com/wp-content/uploads/2018/10/best-countries-for-food-around-the-world-a-world-to-travel.jpg'className='breakfast'/>
    <div className="child">
    Think of the many times you’ve traveled or gone on vacation. You’ll notice that your food experience has had an impact on your overall travel experience. Get a taste Of The different countries around the World!
    <ul>
    <li className='more-break'>
      Click To View More Food
    </li>
    </ul>
    </div>
    </Link>
    </div>
    </>
  );
}

export default TravelOverview;