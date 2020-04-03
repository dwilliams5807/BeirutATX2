import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ListGroup, ListGroupItem, ListGroupItemText, Button, Container, Row, Col, Card, CardBody } from "shards-react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'


class OrderDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Container>          
                 <Link to='/menu'>
                    <FontAwesomeIcon size="1x" icon={faUndo}/>
                    <h5>Return to Menu </h5>
                </Link> 
                <Row>
                    <Col>
                       <Card>
                           <CardBody>
                                <Form >
                                    <h1 className="ui centered">Order Details</h1>

                                    <h5 className="ui centered">Pickup Name</h5>
                                    <Form.Field className="ui centered">
                                       
                                        <input
                                        placeholder='Name'
                                        onChange={this.props.handleChange('name')}
                                        defaultValue={values.name}
                                        />
                                    </Form.Field><br />
                                    <h5 className="ui centered">Email to send confirmation</h5>
                                    <Form.Field className="ui centered">
                                  
                                        <input
                                        type='email'
                                        placeholder='Email Address'
                                        onChange={this.props.handleChange('email')}
                                        defaultValue={values.email}
                                        />
                                    </Form.Field ><br />
                                    <h5 className="ui centered">Order contact</h5>
                                    <Form.Field className="ui centered">
                                      
                                        <input
                                        placeholder='Phone Number'
                                        onChange={this.props.handleChange('phone')}
                                        defaultValue={values.phone}
                                        />
                                    </Form.Field><br />
                                    <Button block onClick={this.saveAndContinue}> Review Order </Button>
                                </Form>
                          </CardBody>
                      </Card>
                    </Col>
                </Row>
            </Container>
   
        )
    }
}

export default OrderDetails;