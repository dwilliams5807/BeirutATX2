import React, { Component } from 'react'
import { Button, Card, CardBody, CardFooter, CardDeck, CardGroup } from "shards-react";
import { connect } from 'react-redux';
import { setLocation } from '../../reducers/actions/cartActions.js'
import { cartVisible } from '../../reducers/actions/cartActions.js'
import { Form } from 'react-bootstrap';
import Footer from '../../global/Footer.js'

import './Story.css';

import truck from "../../../images/truckedit.png";



  import {

    Container,
    Row,
    Col,

  } from "shards-react";

import {
    Link

  } from "react-router-dom";



export class Landing extends Component {
    componentDidMount() {
        this.props.cartVisible(false); 
        
      }
    //to add the quantity
    setLocation = (event)=>{
        
        this.props.setLocation(event.target.value);

    }

    onFinish = values => {
        console.log('Received values of form: ', values);
      };

    render() {
        return (

        <Container className="center">
            <Row>
                <Col>
                  <h1>Our Story</h1>
                </Col>
            </Row>
            <Row>
                <Col>
             <div className='container-div'>
                  <img src={truck} className='story-img' />
              </div>
                </Col>
            </Row>
            <Row>
                <Col>
             <div className='container-div'>
                    
                  <Card className='about-card'>
                      <CardBody>
                          <p>Beirut ATX is a family owned and operated food trailer located at the Domain shopping center in Austin, Texas; Serving up traditional lebanese eats in a family friendly setting.</p>
                      </CardBody>
                  </Card>
              </div>

                </Col>
            </Row>
            <Footer />

   
         </Container>

        )
    }
}

const mapStateToProps = (state)=>{
    return{
    selectedLocation: state.selectedLocation
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setLocation: (location)=>{dispatch(setLocation(location))},
        cartVisible: (visible)=>{dispatch(cartVisible(visible))},
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing)
