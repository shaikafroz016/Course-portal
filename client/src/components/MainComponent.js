import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Favorites from './FavoriteComponent';
import FavoritesDetail from './FavoritedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Instructor from './InstructorComponent';
import Signup from './SignupComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishes, fetchComments,fetchUrls, fetchPromos, fetchLeaders, loginUser,SignupUser, logoutUser, fetchFavorites, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Four from './404/404';
import admin from './adminComponent';
import { FadeTransform } from 'react-animation-components';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      favorites: state.favorites,
      urls: state.urls,
      auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  SignupUser: (feedback) => dispatch(SignupUser(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchFavorites: () => dispatch(fetchFavorites()),
  fetchUrls:() => {dispatch(fetchUrls())},
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFavorites();
    this.props.fetchUrls();
    
  }

  render() {



    const DishWithId = ({match}) => {
      return(
        this.props.auth.isAuthenticated
        ?
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          favorite={
            this.props.favorites.favorites ? 
            this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)
            : 
            null
          }
          postFavorite={this.props.postFavorite}
          />
        :
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          favorite={false}
          postFavorite={this.props.postFavorite}
          />
      );
    }

    const favWithId = ({match}) => {
      return(
        this.props.auth.isAuthenticated
        ?
        <FavoritesDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          
          />
        :
        <FavoritesDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          />
      );
    }


    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    const SecureRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Redirect to={{
            pathname: '/home',
            state: { from: props.location }
          }} />
          :<Component {...props} /> 
          
      )} />
    );

    const AdminRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.user.admin ===true
          ?
          <Redirect to={{
            pathname: '/home',
            state: { from: props.location }
          }} />
          :
          <Component {...props} />
          
      )} />
    );

    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          />   
        <TransitionGroup>
          <CSSTransition 
        unmountOnExit key={this.props.location.key} classNames="page" timeout={200}>
          <FadeTransform 
            in
            transformProps={{
                exitTransform: 'translateX(-300px)'
            }}
            fadeProps={{
                enterOpacity: 100,
            }}>
            <Switch>
              <Route exact path="/" component={() => <Home dishes={this.props.dishes} />} />
              <Route path="/home" component={() => <Home dishes={this.props.dishes} />} />
              <Route exact path='/aboutus' component={() => <About />} />
              <Route exact path="/Courses" component={() => <Menu dishes={this.props.dishes} />} />
              <Route exact path="/Instructors" component={() => <Instructor leaders={this.props.leaders}/> }/>
              <Route exact path="/Courses/:dishId" component={DishWithId} />
              <PrivateRoute exact path="/mycourses" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
              <PrivateRoute exact path="/mycourses/:dishId" component={favWithId} />
              <SecureRoute exact path="/signup" component={()=> <Signup resetFeedbackForm={this.props.resetFeedbackForm} SignupUser={this.props.SignupUser} />}/>
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <AdminRoute path="/admin" component={admin} />
              <Route component={Four} />
            </Switch>
            </FadeTransform>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
