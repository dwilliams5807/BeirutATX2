import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button } from "shards-react";

import { addToCart } from '../../reducers/actions/cartActions.js'
import {
  Card,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardBody
} from "shards-react";


class Deals extends Component {

  handleClick = (id)=>{
    this.props.addToCart(id); 
}

  render() {
    let dealList = this.props.items.map(item=>{
      return (
        
          <Col className="">
            <Card className="mt-2 mb-2 item-col" style={{ maxWidth: "500px" }}  key={item.id}>
            <CardBody>
            <CardTitle style={{ position: "absolute", top: 20, right: 20 }}>{item.title}</CardTitle>
            <CardImg style={{ maxWidth: "200px" }} src={item.img} alt={item.title} />
            <span style={{ position: "absolute", bottom: 40, right: 100 }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button pill theme="info">+</Button></span>
            <div style={{ position: "absolute", bottom: 40, right: 20 }}>${item.price}</div>
           </CardBody>
          </Card>
        </Col>
        
      )
    })
    return ( 
      <Container className="menu-item-cont"> 
        <Row> 
          {dealList}
          </Row>
      </Container> 
       );
  }

   
}
const mapStateToProps = (state)=>{
  return {
    items: state.deals
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Deals);