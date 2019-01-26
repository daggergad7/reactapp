import React from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer } from "mdbreact";

import Header from './Header';
import CardExample2 from './CardExample2';
import LandingCard from './LandingCard';
import Footer from './Footer';
import './App.css';


const App = () => {
  return (
    <div>
        <Header />
        <MDBContainer fluid>
          <LandingCard />
        </MDBContainer>

        <Footer />
    </div>



  );
};

export default App;
