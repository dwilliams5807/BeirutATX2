import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { connect} from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody, CardFooter, CardHeader } from "shards-react";
import "./Checkout.css";


class Confirm extends Component{


    render(){
        const {values: { name, email, phone }} = this.props;
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(

                        
                          <ListGroupItem className="" key={item.id}>
                              
                                  <p>{item.quantity} X {item.title} ${item.price * item.quantity}</p>
                             
                          </ListGroupItem>
                      
                                             
                    )
                })
            ):
            (
                <ListGroupItem>
                <p>There are no items in your order.</p>
                </ListGroupItem>
             )
        return(
            
                <Container>           
                    
                    <Card>
                        <CardHeader>
                           <h1 className="centered">Thank you!</h1>
                           <h6 className="centered">Your order was recieved.</h6>
                           <h6 className="centered">Order Number {this.props.orderNumber}</h6>


                        </CardHeader>
                        <CardBody>
                            <Row>
            
                                <Col xs='12'>
                                 <div className="">
                                        <h5>Order Contact: <p>{name}. Confirmation email will be sent to {email}</p></h5>
                                        <p>Ready in 15-20 minutes at <h5>{this.props.location}</h5></p>
                                        <h5>Total due at pickup <p>${this.props.total}</p></h5>
                                    </div>
                                </Col>
                            </Row>

                        </CardBody>
    

                 </Card>
                </Container>
                

                
           
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        
        location: state.selectedLocation,
        items: state.addedItems,
        subtotal: (state.total).toFixed(2),
        tax: (state.total * 0.0825).toFixed(2),
        total: ( state.total * 0.0825 + state.total).toFixed(2),
        orderNumber: state.orderNumber
    }
  }
  
  export default connect(mapStateToProps)(Confirm)