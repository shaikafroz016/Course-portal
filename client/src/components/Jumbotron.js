import React, { Component }  from 'react';
import { Jumbotron} from 'reactstrap';


class Jumbot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen1: false,
            dropdownOpen: false,
            
        };
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

    render() {
       
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container downc">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 >SITS Course Portal System</h1>
                                <h4 >A high achieving multicultural community for learning.</h4>
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
            </React.Fragment>
        );
    }
}

  
export default Jumbot;