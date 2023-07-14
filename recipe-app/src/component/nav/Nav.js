import React from "react";
import {NavLink, Link} from "react-router-dom";
import "../../style/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


function Nav() {
    return (
      <>
      <nav>
        <ul>
            <li>Recipes <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            <li>Quick & Easy <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            <Link style={{ textDecoration: 'none'}} to="/drinks/cocktail">
              <li>Drinks <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
            <li>Popular <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            <li>About Us</li>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </ul>
      </nav>
      </>
    );
  }
  
  export default Nav;