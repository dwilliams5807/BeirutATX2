import React, { Component } from 'react'
import { Button, Card, CardBody, CardFooter } from "shards-react";
import { connect } from 'react-redux';
import { setLocation } from '../../reducers/actions/cartActions.js'
import { cartVisible } from '../../reducers/actions/cartActions.js'
import Masthead from '../../global/Masthead.js'
import TopItems from '../../global/TopItems.js'
import Footer from '../../global/Footer.js'

import { Form } from 'react-bootstrap';

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
            <Masthead />
            <TopItems />
            <Footer   />

   
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
