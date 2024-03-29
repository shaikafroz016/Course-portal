import React from 'react';
import { Card, CardImg,CardTitle,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import MyLeaderBoardAd from './addcomponent'
import Fade from 'react-reveal/Fade';
import Jumbot from './Jumbotron';
import CardBody from 'reactstrap/lib/CardBody';


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);

    function RenderHomeItem({ dish}) {
       
        return(
            <FadeTransform 
            in
            transformProps={{
                exitTransform: 'translateX(-200px)'
            }}
            fadeProps={{
                enterOpacity: 100,
            }}><Fade left>
           
                <Card className="shadow-lg">
                    <CardImg height="300px" src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody><h3><CardTitle>{dish.name}</CardTitle></h3>
                <ColoredLine color="black" />
                <Link to={`/Courses/${dish._id}`} >
                <Button outline color="primary">Go To Course</Button>
                </Link>
                </CardBody>
                </Card>
                </Fade>
            </FadeTransform>
        );
    }

    const Home = (props) => {

        const home = props.dishes.dishes.filter(dish => dish.featured).map((dish) => {
            return (
                <div key={dish._id} className="col-12 col-md-4  sks">
                    <RenderHomeItem dish={dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Loading />
                        </div>
                        <div className="col-12 col-md-4">
                            <Loading />
                        </div>
                        <div className="col-12 col-md-4">
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
                <div>                
                    <Jumbot />
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <h3>Featured Courses</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {home}
                        <MyLeaderBoardAd />

                    </div>
                </div>
                </div>
            );
    }

export default Home;