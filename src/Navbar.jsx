import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className='container-fluid bg-light'>
                <Row className='p-2'>
                    <Col xs={2} md={4} lg={4}>
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                <img src="/Images/Icons/united-kingdom.png" alt="Flag" className="flag-icon" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">German</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Hindi</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Russian</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">Chinese</Dropdown.Item>
                                <Dropdown.Item href="#/action-8">Japanese</Dropdown.Item>
                                <Dropdown.Item href="#/action-9">Portuguese</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={10} md={8} lg={8}>
                        <input type="text" placeholder="Search..." className="search-input border border-primary" aria-label="Search" />
                        <Button variant="outline-primary" className="search-button">Search</Button>
                    </Col>
                </Row>
            </div>

            <div className='container-fluid bg-light p-3'>
                <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: 'darkblue' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <h1 className="brand-name">
                                <span className="red text-danger fw-bolder fs-1">+</span> <span className="blue text-white fw-bolder fs-3">Medicare</span>
                            </h1>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item me-5">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link" to="/Blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link" to="/Research">
                                        Researches
                                    </Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Navbar;