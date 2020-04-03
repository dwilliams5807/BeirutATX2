import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import "./Checkout.css";
import { Form, Input, Checkbox } from 'antd';

const { Step } = Steps;

const onFinish = values => {
    this.next()
    alert('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    alert('Order Failed:', errorInfo);
  };

const steps = [
    
  {
    title: 'Order Details',
    content: 
    
    <Form
      name="details"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter your email.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="number"
        rules={[{ required: true, message: 'Please enter your phone number.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      
    </Form> ,
  },
  {
    title: 'Review Order',
    content: 'Second-content',
  },
  {
    title: 'Confirmation',
    content: 'Last-content',
  },
];

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() {
        const { current } = this.state;
        return (
            <div>
     
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        )
    }
}

export default Checkout
