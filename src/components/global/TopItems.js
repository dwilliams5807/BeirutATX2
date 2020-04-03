import React, { Component } from 'react'
import { Container, Card, CardBody, CardTitle, Button, Col, Row, CardHeader, CardImg } from 'shards-react'
import { connect } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addToCart} from '../reducers/actions/cartActions.js'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 420 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },};

export class TopItems extends Component {
    
    render() {
        let topList = this.props.top.map(item=>{
            return (
            <div>
                <Container className='centered'>
               
                <Card style={{ maxWidth: "300px" }}>
                <CardImg style={{ height: '40%', width:'100%' }} src={item.img} />
                <CardBody>
                    <CardTitle className="item-title">{item.title}</CardTitle>
                    <Button className='landing-button'>Order</Button>
                </CardBody>
                </Card>
                </Container>
                 </div>
            )
          })
        return (
            <Container className='item-slider'>
                <Row>
                <Col>
                <h3>Top Picks</h3>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                     {topList}
                </Carousel>
                </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      top: state.top,
     
    }
  }
  
  const mapDispatchToProps= (dispatch)=>{
      
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
  
        
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(TopItems);