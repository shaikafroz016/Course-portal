import React, { Component } from 'react';
import {  Button, Label, Col, Row,FormGroup,Input } from 'reactstrap';
import {  Form } from 'react-redux-form';



class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        this.props.sendFile(values);
        this.props.resetFeedbackForm();
    }

    render() {
        return(
            <div className=" downc">
                        <Form className=' downc1' model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Upload
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    <div className="container"><a href='https://developer-course-s.herokuapp.com/admin' target='_blank' rel="noopener noreferrer" ><h2>Visit admin section</h2></a></div>
                </div>
        );
    }

}

export default Contact;