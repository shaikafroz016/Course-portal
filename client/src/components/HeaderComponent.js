import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
     } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen1: false,
            dropdownOpen: false,
            
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogin1 = this.handleLogin1.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.myDivToFocus = React.createRef()
    }
    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
            })
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleModal1() {
        this.setState({
            isModalOpen1: !this.state.isModalOpen1
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogin1(event) {
        this.toggleModal1();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
      onMouseEnter() {
        this.setState({dropdownOpen: true});
      }
    
      onMouseLeave() {
        this.setState({dropdownOpen: false});
      }

    render() {
       
        return(
            <React.Fragment>
                <Navbar dark expand="md " fixed="top" >
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home">
                        <span className="fa fa-book fa-lg"></span>Course-S
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Courses">
                                         ALL Courses
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Instructors">
                                         Instructors
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                         About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                         Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline color="secondary" onClick={this.toggleModal}>
                                            Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                            <div className="navbar-text mr-3">
                                           <UncontrolledDropdown nav inNavbar className="d-inline-block " onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle nav caret>
                                            {this.props.auth.user.username}
                                            </DropdownToggle>
                                            <DropdownMenu className="hello" right >
                                                <DropdownItem>
                                                <NavLink className="nav-link  text-dark"  to="/mycourses">
                                                    My Courses
                                                </NavLink>
                                                </DropdownItem>
                                                <DropdownItem>
                                                <NavLink className="nav-link  text-dark"  to="/Courses">
                                                    All Courses
                                                </NavLink>
                                                </DropdownItem>
                                                <Button className="container" outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                            </DropdownMenu>
                                            </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    }
                                </NavItem>
                            </Nav>
                            <Nav  navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline color="secondary" onClick={this.toggleModal1}>
                                           Faculty Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        null
                                    }

                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                </Navbar>
                <Jumbotron>
                    <div className="container ">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 >Course-S</h1>
                                <h4 >The online Course portal for learner to grab Courses for free!</h4>
                                <p >Happy Learning</p>
                        </div>
                        </div>
                    </div>
                    <div class="arrow" onClick={this.handleOnClick} >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                            
                            </div>
                </Jumbotron>
                <div ref={this.myDivToFocus}>
                    
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                            <a href="/signup">&nbsp; Don't Have account?</a>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
                    <ModalHeader toggle={this.toggleModal1}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin1}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                            <a href="/signup">&nbsp;Signup as a new faculty</a>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

  
export default Header;