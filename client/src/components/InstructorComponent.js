import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody,CardImg, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

import { baseUrl } from '../shared/baseUrl';



function LeaderList(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            
            <div key={leader._id} className="col-12 col-sm-4 m-0 sks">
                <Card className="b-0">
                    <CardImg  height="250px" width="250px" src={baseUrl + leader.image} alt={leader.name} />
                    <CardBody>
                        <h3>{leader.name}</h3>
                        <CardText>{leader.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });

    if (props.leaders.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.leaders.errMess) {
        return(
            <div className="col-12"> 
                <h4>{props.leaders.errMess}</h4>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>All Instructors</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 text-dark">
                            <h3>All Instructors</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {leaders}
                    </div>
                </div>
        );
    }
}

export default LeaderList;    