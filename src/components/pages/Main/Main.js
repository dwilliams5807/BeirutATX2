import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTags, faHistory, faShoppingBag, faUserCircle, faMapMarkerAlt, faUtensils, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";
import Deals from "../Deals/Deals.js"
import Menu from "../Menu/Menu.js"
import Cart from "../Cart/Cart.js"
import Checkout from "../Checkout/Checkout.js"
import Story from "../Story/Story.js"
import Landing from "../Landing/Landing.js"

import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import logo from '../../../images/beirut_red.png'



import "./Main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Main extends React.Component {

  selectMap() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPod") != -1) || 
       (navigator.platform.indexOf("iPad") != -1))
      window.open("maps://maps.google.com/maps/dir/?daddr=30.396529,-97.727500&amp;ll=");
  
    else /* else use Google */
      window.open("https://maps.google.com/maps/dir/?daddr=30.396529,-97.727500&amp;ll=");
  }

  render() {

    const cartVisible = this.props.cartVisible
    return (

      
      <Router>
      <Container className="nav-menu-container fixed-bottom">
      <Card>
        <CardBody>
        <Row flush>
         
  
          <Col xs='3'>
            <Link className="menu-icons" onClick={this.selectMap}>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              <h6>Find</h6>
           </Link>
          </Col>
           <Col xs='3'>
             <Link className="menu-icons" to="/story">
               <FontAwesomeIcon icon={faBookReader}/>
               <h6>Story</h6>
             </Link>
           </Col>
           <div className='logo-link'>
              <Link to="/">
             <img style={{ height: '50px', width: '75px'}} src={logo}/>
           </Link>
           </div>
           <Col xs='3'>
             <Link className="menu-icons" to="/menu">
               <FontAwesomeIcon icon={faUtensils}/>
               <h6>Menu</h6>
             </Link>
           </Col>

           <Col xs='3'>
           <Animate
           change="bounce"
               >
            <div>
            {/* <div className="cart-badge" 
            style={{ display: cartVisible ? '' : 'none' }}
            > */}
              <Link className="menu-icons" to="/cart">
              {/* <Badge  theme="light"> */}
                
               <FontAwesomeIcon size="" icon={faShoppingBag}/>
               <Badge className="quantity-badge"> {this.props.totalUnits} </Badge>
             
             {/* </Badge> */}
             <h6>Bag</h6>
             </Link>
             </div>
             </Animate>
          </Col>
          
        </Row>

        </CardBody>
      </Card>
      </Container>
      <Switch>
          
      <Route exact path="/" component={Landing} />
      <Route exact path="/story" component={Story} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />




          
      </Switch>
      </Router>
      
    );
  }
}
const mapStateToProps = (state)=>{
  return{
      total: state.addedItems.length,
      totalUnits: state.totalUnits,
      cartVisible: state.isCartVisible
  }
}


export default connect(mapStateToProps)(Main)

