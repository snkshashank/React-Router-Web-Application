import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";


const About = () => {
    return (
        <>
            <div className="about-hero-section">
                <h1>ABOUT MEDICARE</h1>
            </div>

            <Container className="about-info">
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <img src="/Images/Illustration/about-1.jpg" alt="img-1" className="about-img-1" />
                    </Col>
                    <Col sm={12} md={6} lg={8} style={{ textAlign: "justify" }}>
                        <small><p style={{ fontWeight: "bold", color: "DarkSeaGreen" }}>INTRODUCING</p></small>
                        <h2 style={{ fontWeight: "medium", color: "darkblue" }}>Tackle the challenge of delivering health care in 21st century.</h2>
                        <h5 style={{ color: "#696969" }}>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</h5>
                        <p style={{ color: "grey" }}>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                        <p style={{ color: "grey" }}>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eaque.</p>
                    </Col>
                </Row>
            </Container>

            <div className="container-fluid" style={{ backgroundColor: 'darkblue', marginTop: '100px' }}>
                <Row className="p-3">
                    <Col sm={12} md={3} lg={3}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/happy-1.png" alt="" width={'55px'} />
                            <figcaption className="pt-3">
                                <h3 className="text-light fw-bold">35468</h3>
                                <p className="text-light"><small>Clients</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/shop.png" alt="" width={'55px'} />
                            <figcaption className="pt-3">
                                <h3 className="text-light fw-bold">512</h3>
                                <p className="text-light"><small>Hospital Rooms</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/pie-chart.png" alt="" width={'55px'} />
                            <figcaption className="pt-3">
                                <h3 className="text-light fw-bold">25</h3>
                                <p className="text-light"><small>Years of Experiance</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/like.png" alt="" width={'55px'} />
                            <figcaption className="pt-3">
                                <h3 className="text-light fw-bold">130</h3>
                                <p className="text-light"><small>Professional Staffs</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </div >

            <div className="container-fluid text-center" style={{ marginTop: "100px" }}>
                <p className="fw-bold"><small>Meet Our Experienced Team</small></p>
                <h2 style={{ color: "darkblue", fontWeight: "bolder" }}>Our Dedicated Doctors Team</h2>
            </div>

            <Container style={{ marginTop: '70px' }}>
                <Row style={{ display: "flex", flexDirection: "row" }}>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members-1 text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-2.jpeg" alt="" style={{ backgroundPosition: "fill", borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Maureen M. Achebe</h5>
                                <p><small>MD Hematology,MS Pediatric Medicine</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members-1 text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-1.jpeg" alt="" style={{ backgroundPosition: "cover", borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Elis Abdulhayoglu</h5>
                                <p><small>MD, MS Pediatric Medicine, Neonatology</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-3.jpg" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Jessica Fency</h5>
                                <p><small>MBBS, DEM (DU), MD (Endocrinology)</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-4.jpg" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Diler Acar</h5>
                                <p><small>MBBS, DDSc (UK), MDSc (USA) Venereology</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-5.png" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Reza Abdi</h5>
                                <p><small>MBBS, FRCP (Glasgow), DDV, MCPS, MD</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-6.png" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Susan Abookire</h5>
                                <p><small>MBBS, Diploma in Dermatology and Venereology</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-7.jpg" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Modhu Maria</h5>
                                <p><small>MBBS, FCPS (Dermatology, Endocrinology & VD)</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-8.jpg" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Thomas A. Abrams</h5>
                                <p><small>MBBS, MS (Gen. Surgery), M. Ch. (Plastic Surgery)</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members-1 text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-9.jpg" alt="" style={{ backgroundPosition: "cover", borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Janet L. Abrahm</h5>
                                <p><small>MBBS, MRCP (UK), D.Card. (London)</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <figure className="team-members text-center" style={{ borderRadius: "40px 5px 40px 5px" }}>
                            <img src="/Images/Illustration/team-10.jpg" alt="" style={{ borderRadius: "40px 5px 40px 0" }} />
                            <figcaption>
                                <h5>Carrie P. Aaron</h5>
                                <p><small>MBBS, D.Card. (DU), FCPS (Medicine)</small></p>
                                <div className="team-social-icons">
                                    <a href="#"><img src="/Images/Icons/twitter.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/linkedin.png" alt="" /></a>
                                    <a href="#"><img src="/Images/Icons/insta.png" alt="" /></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;