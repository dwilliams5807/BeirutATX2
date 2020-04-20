import React, { Component } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardDeck } from "shards-react";
import { connect } from 'react-redux';
import main from "../../images/Beirut-land.png";
import "./Masthead.css";




  import {

    Container,
    Row,
    Col,

  } from "shards-react";

import {
    Link
  } from "react-router-dom";



export class Landing extends Component {

openUberEats() {
  window.open("https://www.ubereats.com/en-US/austin/food-delivery/beirut/SvCfBW8ORX-KCxULG4MehA");
}

    render() {
        return (

        <Container className="masthead-container">

            <Row>
                <Col>
             <div className='container-div'>
                  <img src={main} className='main-img' />
              </div>
                </Col>
            </Row>
            <Row>
                <Col>
             <div className='container-div'>
                    
                  <Card className='mast-card'>
                      <CardBody>
                        <div>
                          <h1 className='mast-text'>True Lebanese Food</h1>
                          <h4 className='mast-text'>Austin, Texas</h4>
                          <Link to='/menu'>
                          <Button outline theme="light" className='mast-btn mast-btn-1' block >
                            Order Pickup
                          </Button>
                          </Link>
                          <Button outline theme="light" className='mast-btn mast-btn-2' block onClick={this.openUberEats}>
                          Order Delivery
                          </Button>
                          </div>
                      </CardBody>
                  </Card>
              </div>

                </Col>
            </Row>
  
            {/* <Card className='masthead-text-bg'>
                            <CardBody >     
                            <Link to='/menu'>
                            <Button className='landing-button'>Order Pickup</Button>
                           </Link> 
                           <Link to='/menu'>
                            <Button className='landing-button'>Order Delivery</Button>
                           </Link>
                         </CardBody>
                       </Card> */}
   
         </Container>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return{
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
 
//     }
// }
export default Landing
