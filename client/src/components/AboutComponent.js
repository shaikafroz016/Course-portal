import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 text-black">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6 text-black">
                    <h2>Our History</h2>
                    <p>Swathi Institute of Technology and Sciences an umbrella institute under Swathi group was established in 2009 with the inspiration of Late Prof. <em>Dr. Mrs. D. Swathi</em>, a visionary and teacher par excellence. Her inspiration and vision is guiding us to climb new heights in the field of education.Hence we are one of the best Engineering colleges in Andhra Pradesh
Within a short span of time, swathi group garnered reputation of being a premier engineering college (Among top 10 colleges affiliated to <em>Osmania University</em>) committed to train and produce intellectual and ethical professionals capable of keeping pace with evergrowing demands in the global village by disseminating the knowledge and rendering skills for economic empowerment.
</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Swathi Institute of Technology and Sciences</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt class="col-6">Motto</dt>
                                <dd class="col-6">Lighted to Enlighten. </dd>
                                <dt class="col-6">Type</dt>
                                <dd class="col-6">Private Institution</dd>
                                <dt class="col-6">Established</dt>
                                <dd class="col-6">2009</dd>
                                <dt class="col-6">Affiliation</dt>
                                <dd class="col-6">Osmania University</dd>
                                <dt class="col-6">Website</dt>
                                <dd class="col-6"><a href="http://www.swathistanfordcolleges.in/about-college.php">Visit College Website</a></dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Leadership and learning are indispensable to each other</p>
                                <footer className="blockquote-footer">John F. Kennedy
                                <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;