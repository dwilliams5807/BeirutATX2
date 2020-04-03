import React, { Component } from 'react'
import { Container, Row, Col } from "shards-react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faPhone, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import menuly from '../../images/menuly-horizontal.png'


export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Container>
                <Row>
                    <Col >
                    <h5 >Connect with us</h5>
                    <h5><FontAwesomeIcon size='4x' icon={faFacebookSquare} /></h5>
                    <h5><FontAwesomeIcon size='4x' icon={faInstagramSquare} /></h5>


                  

                    </Col>
                    <Col >
                    <h5 size='2x'><FontAwesomeIcon icon={faMapMarkerAlt} /></h5>
                    <h5>11228 Domain Dr</h5>
                    <h5>Austin, TX 78758</h5>
                    <h5 size='2x'><FontAwesomeIcon icon={faPhone} /></h5>
                    <h5>512-758-3377</h5>
                    <h5 size='2x'><FontAwesomeIcon icon={faEnvelopeOpenText} /></h5>
                    <h5>beirut.atx@gmail.com</h5>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className='menuly-container'>
                   <img className="menuly-logo" src={menuly}></img>
                    </div>
                    </Col>
                </Row>
                </Container>

            </div>
        )
    }
}

export default Footer
