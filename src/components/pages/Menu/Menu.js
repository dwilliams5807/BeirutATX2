import React, { Component } from "react";
import { connect } from 'react-redux'
import './Menu.css';
import { addToCart, cartVisible } from '../../reducers/actions/cartActions.js'


import  store  from '../../reducers/store/store.js'


import {
  Button,
  Card,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardBody,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader
} from "shards-react";
import toggleCartOn from '../Main/Main.js'
import Main from "../Main/Main";




class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleEntres = this.toggleEntres.bind(this);
    this.toggleSides = this.toggleSides.bind(this);
    this.toggleBeverages = this.toggleBeverages.bind(this);



   

    this.state = {  collapseEntres: false, collapseSides: false, collapseBeverages: false };
  }


  toggleEntres() {
    this.setState({ collapseEntres: !this.state.collapseEntres });
  }
  toggleSides() {
    this.setState({ collapseSides: !this.state.collapseSides });
  }
  toggleBeverages() {
    this.setState({ collapseBeverages: !this.state.collapseBeverages });
  }



  handleClick = (id)=>{
    this.props.addToCart(id); 
    this.props.cartVisible(true); 
}

componentDidMount() {
  this.props.cartVisible(true); 
  
}


  render() {

    let entreList = this.props.entres.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let sideList = this.props.sides.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })
    let beverageList = this.props.beverages.map(item=>{
      return (
        
        <Col sm="12" md="6" className="">
        <Container fluid className='centered'>
         <Card className="mt-2 mb-2 center item-card" style={{ width: "100%"}}  key={item.id}>
         <CardBody>
           <Row>
             <Col className={item.style} sm='5'>
               <img style={{ height: "75px", marginBottom: "10px", }} src={item.img} />
                </Col>
                <Col >
                <CardTitle className="item-card-title" >{item.title}</CardTitle><p>${item.price}</p>
                </Col>
                </Row>
                <Row>
                  <Col sm='12'>
                    <span style={{  }} to="/" onClick={()=>{this.handleClick(item.id)}}><Button block className='add-button' pill theme="info">ADD TO CART</Button></span>
                </Col>
                </Row>
                </CardBody>
              </Card>
              </Container>
            </Col>
        
      )
    })

    return ( 
      
   <div className="menu-div">  

      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleEntres}><h5 className='cat-button-text'>Entres</h5></Button>
          <Collapse open={this.state.collapseEntres}>
             <Row> 
            {entreList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleSides}><h5 className='cat-button-text'>Sides</h5></Button>
          <Collapse open={this.state.collapseSides}>
             <Row> 
            {sideList}
            </Row>
         </Collapse>
      </Container> 
      <br></br>
      <Container className="menu-item-cont"> 
         <Button theme="info" className="cat-button" block onClick={this.toggleBeverages}><h5 className='cat-button-text'>Beverages</h5></Button>
          <Collapse open={this.state.collapseBeverages}>
             <Row> 
            {beverageList}
            </Row>
         </Collapse>
      </Container> 

    
       
   </div>
       );
  }

   
}
const mapStateToProps = (state)=>{
  return {
    items: state.items,
    entres: state.entres,
    sides: state.sides,
    beverages: state.beverages,
   
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      cartVisible: (visible)=>{dispatch(cartVisible(visible))},

      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);