import React from 'react';
import { Card, CardImg,  Breadcrumb, BreadcrumbItem, CardTitle ,CardBody,CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import ReadMoreReact from 'read-more-react';
import Fade from 'react-reveal/Fade';


    function RenderMenuItem({ dish, onClick }) {
        return(
        <Fade left>
            <Card>
                <Link to={`/Courses/${dish._id}`} >
                    <CardImg  height="300px" src={baseUrl + dish.image} alt={dish.name} />                    
                </Link>
                <CardBody>
                            <h3><CardTitle>{dish.name}</CardTitle></h3>
                            <CardText>
                                <ReadMoreReact  text={dish.description}
                                 readMoreText="click here to read more"/>
                                </CardText>
                        </CardBody>
                    </Card>
                    </Fade>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish._id} className="col-12 col-md-6  sks">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-md-4">
                            <Loading />
                        </div>
                        <div className="col-4 col-md-4">
                            <Loading />
                        </div>
                        <div className="col-4 col-md-4">
                            <Loading />
                        </div>
                </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>All Courses</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 ">
                            <h3>All Courses</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;