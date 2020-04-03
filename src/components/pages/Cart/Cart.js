import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../../reducers/actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { cartVisible } from '../../reducers/actions/cartActions.js'

import "./Cart.css";


import {
    Card,
    CardTitle,
    CardImg,
    CardHeader,
    Button,
    Container,
    Row,
    Col,
    ButtonGroup,
    CardBody,
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    CardFooter
  } from "shards-react";


  
class Cart extends Component{
   //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    componentDidMount() {
        this.props.cartVisible(false); 
        
      }

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        
                            
                           <ListGroupItem className="" key={item.id}>
                               <Row>
                             <Col xs="4">
                                 <p>{item.quantity}&nbsp;
                                  <Link to='/cart'>
                                  <ButtonGroup vertical>
                                        <Button outline pill size='sm' onClick={()=>{this.handleAddQuantity(item.id)}}>&#9650;</Button>
                                        <Button outline pill size='sm' onClick={()=>{this.handleSubtractQuantity(item.id)}}>&#9660;</Button>
                                 </ButtonGroup></Link></p>  </Col>
                                 <Col xs='4'><p>{item.title}</p>   </Col>
                                 <Col xs='4'><p>${item.price}</p></Col>
                              
                    
                              </Row>
                          </ListGroupItem>
                      
                          
                       
                    )
                })
            ):

             (
                <p>The cart is empty. </p>
             )
       return(
           <Container className='menu-return'>
           <Link to='/menu'>
           <FontAwesomeIcon size="1x" icon={faUndo}/>
           <h5>Return to Menu </h5>
           </Link>
            <Container className="cart-order-sum">
                <Card>
                    <CardHeader>
                       <h5>Your Order:</h5>
                </CardHeader>
                   <CardBody>
                    <ListGroup flush>
                    
                    
                        {addedItems}
                     
               
                  </ListGroup>
                 </CardBody>
                 <CardFooter>
                  <p>Subtotal: ${this.props.subtotal} Tax: ${this.props.tax}</p>
                  <h5>Total: ${this.props.total}</h5>
                    <Link to="/checkout">
                        <Button block>
                            <h5>Checkout</h5>
                        </Button>
                    </Link>
               </CardFooter>
             
                </Card>
            </Container>
            

          </Container>
            
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        subtotal: (state.total).toFixed(2),
        tax: (state.total * 0.0825).toFixed(2),
        total: ( state.total * 0.0825 + state.total).toFixed(2),
        cartState: state.isCartVisible
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        cartVisible: (visible)=>{dispatch(cartVisible(visible))},


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)