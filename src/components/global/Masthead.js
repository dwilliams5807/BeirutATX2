import React, { Component } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardDeck } from "shards-react";
import { connect } from 'react-redux';


  import {

    Container,
    Row,
    Col,

  } from "shards-react";

import {
    Link
  } from "react-router-dom";



export class Landing extends Component {



    render() {
        return (

        <Container className="masthead-container">
            <Card className="">
                <CardBody className="masthead">
                    <Card className='masthead-header'>
                        <CardBody>
                        <h3>True Lebanese Food</h3>
                        <h6 className='masthead-subheader'>Austin, TX</h6>
                        </CardBody>
                    </Card>


       
                </CardBody>

            </Card>
            <Card className='masthead-text-bg'>
                            <CardBody >     
                            <Link to='/menu'>
                            <Button className='landing-button'>Order Pickup</Button>
                           </Link> 
                           <Link to='/menu'>
                            <Button className='landing-button'>Order Delivery</Button>
                           </Link>
                         </CardBody>
                       </Card>
   
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
