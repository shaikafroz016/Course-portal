import React,{ Component } from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem,ModalBody,ModalHeader,Modal,ModalFooter } from 'reactstrap';
import { Media,  Button } from 'reactstrap';
import {LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish, deleteFavorite , onClick}) {
    return(
        <div className="col-12 col-md m-1">
        <Media tag="li">
            <Card className="col-sm-6">
                <Link to={`/mycourses/${dish._id}`} >
                    <CardImg src={baseUrl + dish.image} alt={dish.name} />
                </Link>
            </Card>

            {/*<Media left middle>
            
               {/* <iframe width="560" height="315" src={ dish.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myframe"></iframe>
            </Media>*/}
            <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
                <CommentForm dishId={dish._id} deleteFavorite={deleteFavorite} dish={dish}/>
            </Media>
        </Media>
        </div>
        
    );
}
class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.deleteFavorite(this.props.dishId)
    }

    render() {
        return(
        <div>
            <Button  outline color="danger" onClick={this.toggleModal}>UNENROLL</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Confirm Delete</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <h5>Are You Sure? want To Delete {this.props.dish.name} From Your Courses</h5>
                    <ModalFooter>
                    <Button color="danger">UNENROL</Button>
                    <Button color="primary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </LocalForm>
            </ModalBody>
           </Modal>
        </div>
        );
    }

}

const Favorites = (props) => {

    if (props.favorites.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites) {

        const favorites = props.favorites.favorites.dishes.map((dish) => {
            return (
                <div  key={dish._id} className="col-12 mt-5">
                    <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Courses</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 ">
                        <h3>My Courses</h3>
                        <hr />
                    </div>
                </div>
                <div className="row ">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no Courses</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;