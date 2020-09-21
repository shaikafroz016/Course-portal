import React from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
//reactbootstrap tabs
import { Tab, Row, Col, Nav,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform} from 'react-animation-components';

    function RenderDish({dish}) {
            return(
                <div className="col-12 container m-1">
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            {/*itrating through array to render all the vedios associated to dish */}
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col md={2}>
                                        <Nav variant="pills" className="flex-column">
                                            {dish.links.map((link, index) => (
                                                <Nav.Item >
                                                    <Nav.Link eventKey={index+1} > Lecture {index + 1}</Nav.Link>
                                                </Nav.Item>
                                                ))}
                                        </Nav>
                                    </Col>
                                    <Col md={10}>
                                        <Tab.Content>
                                        {dish.links.map((link, index) => (
                                                <Tab.Pane eventKey={index+1}>
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" src={link.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myframe"></iframe>
                                                    </div>
                                                </Tab.Pane>
                                                ))}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                    </FadeTransform>
                </div>
            );

    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null)        
            return (
                <div className="container ">
                    <div className="row ">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/mycourses'>My Courses</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 ">
                            <h3>All Lecture's for {props.dish.name} Happy learning!!</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row ">
                        <RenderDish dish={props.dish} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;