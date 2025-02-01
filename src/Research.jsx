import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Research = () => {
    return (
        <>
            <div className="research-hero-section">
                <h1>MEDICARE RESEARCHES</h1>
            </div>

            <Container className="research-info" style={{ marginTop: "100px" }}>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-1.jpg" alt="img-1" className="research-img-1" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Rehabilitation center</h5>
                                <p><small>Cardiology, Pharmacy</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-2.jpg" alt="img-1" className="research-img-2" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Rehabilitation center</h5>
                                <p><small>Cardiology, Pharmacy</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-3.jpg" alt="img-1" className="research-img-3" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Dentures Center</h5>
                                <p><small>Oncology, Pharmacy</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-4.jpg" alt="img-1" className="research-img-1" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Oral Cancer Screening</h5>
                                <p><small>Oncology, Pharmacy</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-5.jpg" alt="img-1" className="research-img-2" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Women's Health Research</h5>
                                <p><small>Division of Women Health</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-6.jpg" alt="img-1" className="research-img-3" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Skin Diesease Research Center</h5>
                                <p><small>Dermatology</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-7.jpg" alt="img-1" className="research-img-1" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Fitness Guidance to Paitent</h5>
                                <p><small>Cardiology, Oncology</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-8.jpg" alt="img-1" className="research-img-2" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Daignostic Center</h5>
                                <p><small>Orthopedic, Pharmacy</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="research-info-content bg-light">
                            <img src="/Images/Illustration/research-9.jpg" alt="img-1" className="research-img-3" width={'100%'} />
                            <figcaption className="research-content pt-3">
                                <h5>Rehabilitation center</h5>
                                <p><small>Cardiology, Oncology</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Research;