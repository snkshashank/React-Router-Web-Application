import React from 'react';
import { Col, Row } from "react-bootstrap";


const Service = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'darkblue', marginTop: '100px' }}>
                <Row className="p-3">
                    <Col sm={12} md={4} lg={4}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/customer-service.png" alt="" width={'60px'} />
                            <figcaption className="pt-3">
                                <h5 className="text-light fw-bold">+123 456 78910</h5>
                                <p className="text-light"><small>Have a question? call us now</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/mail-5.png" alt="" width={'60px'} />
                            <figcaption className="pt-3">
                                <h5 className="text-light fw-bold">help@medicare.com</h5>
                                <p className="text-light"><small>Need support ? Drop us an email</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className="home-service text-center pt-3">
                            <img src="/Images/Illustration/clock-2.png" alt="" width={'60px'} />
                            <figcaption className="pt-3">
                                <h5 className="text-light fw-bold">Mon – Sat 07:00 – 21:00</h5>
                                <p className="text-light"><small>We are open on</small></p>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </div >
        </>
    );
};


export default Service;
