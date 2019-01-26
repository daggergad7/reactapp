import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';

const CardExample2 = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "19rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample2;
