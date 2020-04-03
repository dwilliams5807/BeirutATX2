import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { connect} from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody, CardFooter, CardHeader } from "shards-react";
import "./Checkout.css";


class ReviewOrder extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

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
                  <Link to='/menu'>
                   <FontAwesomeIcon size="1x" icon={faUndo}/>
                  <h5>Return to Menu </h5>
                  </Link> 
                    
                    <Card>
                        <CardHeader>
                           <h1 className="centered">Review Your Order</h1>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs='8'>
                                <ListGroup className="" small flush>
                                   {addedItems}
                                    </ListGroup>
                                </Col>
                                <Col xs='4'>
                                <div className="">
                                        <h5 style={{ color:'Purple'}}>Order Details</h5>
                                        <h6>Pickup name</h6><p>{name}</p>
                                        <h6>Contact</h6><p>{email} {phone}</p>
                                        <h6>Location</h6><p>{this.props.location}</p>
                                        <h6>Order Ready</h6><p>15 to 20 minutes</p>
                                        <p style={{ color:'blue'}}onClick={this.back}>edit details</p>
                                    </div>
                                </Col>
                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col>       
                                    <ListGroup className="centered" small flush>
                                    <ListGroupItem>Subtotal: ${this.props.subtotal} Tax: ${this.props.tax}</ListGroupItem>
                                    <ListGroupItem><h5>Total: ${this.props.total}</h5></ListGroupItem> 
                                    </ListGroup>
                                </Col>
                            </Row>        
                            <Row>
                                <Col>
                                    <Button block onClick={this.saveAndContinue}><h5>Place order</h5></Button>
                                    </Col>
                                </Row>
                        </CardFooter>


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
    }
  }
  
  export default connect(mapStateToProps)(ReviewOrder)