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
            <Link style={{ textDecoration: 'none'}} to="/recipe">
              <li>Recipes <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/quick_easy">
              <li>Quick & Easy <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel">
              <li>Travel<FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks">
              <li>Drinks <FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/baking">
              <li>Baking<FontAwesomeIcon icon={faChevronDown} size="xs" className="fontAwesomeIcon"/></li>
            </Link>
              <li>About Us</li>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </ul>
      </nav>
      </>
    );
  }
  
  export default Nav;