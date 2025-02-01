import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer-section container-fluid bg-light' style={{ marginTop: '100px' }}>
                <Container>
                    <figure>
                        <img src='/Images/Illustration/logo4.png' alt='' width={'250px'} />
                        <figcaption>
                            <h4 className='fw-bold'>BRINGHAM AND WOMEN'S HOSPITAL</h4>
                            <p>75 Francis Street, Boston MA 20115</p>
                            <p>General Info : <a href="#" className='text-decoration-none'>617-555-1234</a></p>
                            <p>New Patient : <a href="#" className='text-decoration-none'>555-365-9865</a></p>
                        </figcaption>
                    </figure>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={4} className='footer-content pt-5'>
                            <h6 className='fw-bolder'>ABOUT US</h6><hr></hr>
                            <ul className='list-unstyled'>
                                <li><Link to='/about' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>About</Link></li>
                                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>Contact</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>terms & conditions</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>privacy policy</Link></li>
                                <li><Link to='/news' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>News</Link></li>
                                <li><Link to='/research' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>Research</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>Blog</Link></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='footer-content pt-5'>
                            <h6 className='fw-bolder'>CENTERS</h6><hr></hr>
                            <ul className='list-unstyled'>
                                <li><Link to='/about' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>cancer center</Link></li>
                                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>heart & vascular center</Link></li>
                                <li><Link to='/news' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>the lung cancer</Link></li>
                                <li><Link to='/research' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>neurosciences center</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>orthopaedic & arthritis center</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>primary care center</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>women's health center</Link></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='footer-content pt-5'>
                            <h6 className='fw-bolder'>DEPARTMENTS</h6><hr></hr>
                            <ul className='list-unstyled'>
                                <li><Link to='/about' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>anesthesiology</Link></li>
                                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>dermatology</Link></li>
                                <li><Link to='/news' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>emergency medicine</Link></li>
                                <li><Link to='/research' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>neurology</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>neurosurgery</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>orthopaedic surgery</Link></li>
                                <li><Link to='/blog' style={{ textDecoration: 'none', color: '#36454F', textTransform: 'capitalize' }}>obstetrics & gynecology</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container >

                <Container style={{marginTop: '100px', paddingBottom: '30px'}}>
                    <div className='text-center'>
                        <p className='text-muted'>© 2022 Bringham & Women's Hospital. All rights reserved. Made by Shashank Moon</p>
                    </div>
                </Container>
            </div >
        </>
    );
}

export default Footer;
