import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Contact = () => {
    return (
        <>
            <div className="research-hero-section">
                <h1>MEDICARE CONTACT</h1>
            </div>

            <Container style={{marginTop: '100px'}}>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="contact-info p-4">
                            <h3>Important Phone Numbers</h3>
                            <p>
                                Thank you for your interest in medicare – a teaching affiliate of
                                Medical School that stands at the forefront of clinical care, medical
                                research, and the training and education of physicians.
                            </p>

                            <div className="contact-table">
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Hospital General Information and Emergency</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Primary Number</td>
                                            <td>03 9643 1234</td>
                                        </tr>
                                        <tr>
                                            <td>Patients Enquiry</td>
                                            <td>03 9643 5678</td>
                                        </tr>
                                        <tr>
                                            <td>Ambulance Operator</td>
                                            <td>03 9643 9012</td>
                                        </tr>
                                        <tr>
                                            <td>Emergency</td>
                                            <td>03 9643 4567</td>
                                        </tr>
                                        <tr>
                                            <td>Blood Bank</td>
                                            <td>03 9643 7890</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Helpline</td>
                                            <td>03 9643 7890</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} style={{alignContent: 'center'}}>
                        <div className="text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.501064654882!2d-74.00601588437493!3d40.74844052983723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33e843f%3A0x42320ba5b9a84aae!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sus!4v1694578207876!5m2!1sen!2sus"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;