import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import "./Checkout.css";
import { Form, Input, Checkbox } from 'antd';

import OrderDetails from './OrderDetails';
import ReviewOrder from './ReviewOrder';
import Confirm from './Confirm';


class Checkout extends Component {
    state = {
        step: 1,
        Name: '',
        email: '',
        phone: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { name, email, phone } = this.state;
        const values = { name, email, phone };
        switch(step) {
        case 1:
            return <OrderDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <ReviewOrder
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirm
    
                    values={values}
                    />
        }
    }
}

export default Checkout;