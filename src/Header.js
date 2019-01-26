import React from 'react';
import './Header.css';
import { MDBCol , MDBInput } from "mdbreact";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="wrapper">
          <header>

                <nav>

                      <div className="menu-icon">
                            <FontAwesomeIcon icon={faBars} />
                      </div>

                      <div className="logo">
                            klavona
                      </div>

                      <div className="menu">
                            <ul>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">Products</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li className="searchbar">
                                  <MDBCol md="6">
                                    <MDBInput className="text-white" hint="Search" type="text" containerClass="mt-0" />
                                  </MDBCol>
                                  </li>
                            </ul>
                      </div>
                </nav>

          </header>

          <div className="content">

          </div>
    </div>

  )
}

export default Header;
