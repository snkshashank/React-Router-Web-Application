import React, { useState } from 'react';
import { Col, Container, Row, Button, Carousel } from 'react-bootstrap';

const Home = () => {

    const blogs = [
        {
            id: 1,
            title: "Should You Be Worried About Microplastics in Your Food?",
            author: "Dr. John Doe",
            date: "10 Jan, 2019",
            description: "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
            imgSrc: "/Images/Illustration/blog1.jpg"
        },
        {
            id: 2,
            title: "What to Expect During and After a Breast Biopsy",
            author: "Wiliam Petro",
            date: "03 Feb, 2019",
            description: "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to...",
            imgSrc: "/Images/Illustration/blog2.jpg"
        },
        {
            id: 3,
            title: "How Heart Attack Signs Differ in Men & Women",
            author: "Sultan Sentu",
            date: "05 Mar, 2019",
            description: "Is there ‘gender equality’ in heart attacks? The short answer is no. Here’s what you need to know...",
            imgSrc: "/Images/Illustration/blog3.jpg"
        },
        {
            id: 4,
            title: "Prenatal Infections and How to Avoid Them",
            author: "Marry Com",
            date: "29 Jun, 2019",
            description: "Prenatal infections can interfere with the health of both you and your baby, so it’s important to take steps to prevent them...",
            imgSrc: "/Images/Illustration/blog4.jpg"
        },
        {
            id: 5,
            title: "What are the Screening Options for Heart Disease?",
            author: "Illiana Daina",
            date: "29 Jun, 2019",
            description: "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...",
            imgSrc: "/Images/Illustration/blog5.jpg"
        },
        {
            id: 6,
            title: "Should You Be Worried About Microplastics?",
            author: "Tom Andrew",
            date: "29 Jan, 2019",
            description: "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
            imgSrc: "/Images/Illustration/blog1.jpg"
        },
        {
            id: 2,
            title: "What to Expect During and After a Breast Biopsy",
            author: "Wiliam Petro",
            date: "03 Feb, 2019",
            description: "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to...",
            imgSrc: "/Images/Illustration/blog2.jpg"
        },
        {
            id: 1,
            title: "Should You Be Worried About Microplastics in Your Food?",
            author: "Dr. John Doe",
            date: "10 Jan, 2019",
            description: "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
            imgSrc: "/Images/Illustration/blog1.jpg"
        },
        {
            id: 3,
            title: "How Heart Attack Signs Differ in Men & Women",
            author: "Sultan Sentu",
            date: "05 Mar, 2019",
            description: "Is there ‘gender equality’ in heart attacks? The short answer is no. Here’s what you need to know...",
            imgSrc: "/Images/Illustration/blog3.jpg"
        },
        {
            id: 4,
            title: "Prenatal Infections and How to Avoid Them",
            author: "Marry Com",
            date: "29 Jun, 2019",
            description: "Prenatal infections can interfere with the health of both you and your baby, so it’s important to take steps to prevent them...",
            imgSrc: "/Images/Illustration/blog4.jpg"
        },
        {
            id: 6,
            title: "Should You Be Worried About Microplastics?",
            author: "Tom Andrew",
            date: "29 Jan, 2019",
            description: "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
            imgSrc: "/Images/Illustration/blog1.jpg"
        },
        {
            id: 5,
            title: "What are the Screening Options for Heart Disease?",
            author: "Illiana Daina",
            date: "29 Jun, 2019",
            description: "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...",
            imgSrc: "/Images/Illustration/blog5.jpg"
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className='container-fluid'>
                <Row>
                    <Col>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {/* First Slide */}
                            <Carousel.Item className="carousel-img">
                                <img
                                    src="/Images/Background/carousel1.jpg" // Replace with actual image URL
                                    alt="First slide" width={'100%'}   
                                />
                                <Carousel.Caption className="carousel-caption offset-sm-0 offset-md-4 offset-lg-4">
                                    <h2>One Stop Solution<br />Medical Services</h2>
                                    <p>Call to schedule an appointment today</p>
                                    <Button href="#" className='btn'>Learn More</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* Second Slide */}
                            <Carousel.Item className="carousel-img">
                                <img
                                    className="d-block w-100"
                                    src="/Images/Background/carousel2.jpg" // Replace with actual image URL
                                    alt="Second slide"
                                />
                                <Carousel.Caption className="carousel-caption offset-sm-0 offset-md-4 offset-lg-4">
                                    <h2>Small Injuries May<br />Lead to Big Problems</h2>
                                    <p>Your environment could affect your fertility.</p>
                                    <Button href="#" className='btn'>Learn More</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>

            <div className="container-fluid text-center" style={{ marginTop: "100px" }}>
                <p className="fw-bold"><small>Bringham Health</small></p>
                <h1 style={{ color: "darkblue", fontWeight: "bolder", textTransform: 'uppercase' }}>Helping our patients</h1>
            </div>

            <Container style={{ marginTop: '100px' }}>
                <Row className='home-help-content'>
                    <Col sm={12} md={4} lg={4}>
                        <div className='home-content-box-1'>
                            <h4>How can we help you?</h4>
                            <Col>
                                <Button href="#" className='btn ps-5 pe-5'>Learn More</Button>
                                <Button href="#" className='btn ps-5 pe-5'>Learn More</Button>
                                <Button href="#" className='btn ps-5 pe-5'>Learn More</Button>
                                <Button href="#" className='btn ps-5 pe-5'>Learn More</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className='home-box-content-2'>
                            <img src="/Images/Illustration/home-help-img-1.jpg" alt="" width={'100%'} />
                            <figcaption className='home-help-caption p-3 bg-light'>
                                <h5 style={{ fontWeight: "bold", color: "darkblue", textAlign: 'justify' }}>Bringham Health Physician Named 'Top Doctors'</h5>
                                <p style={{ color: "grey", textAlign: 'justify' }}>More than 275 Bringham Health Physicians were included on Boston magazine 2019 list of Top Doctors. To prepare the annual list, Boston magazine partners with castle.</p>
                                <Button variant="primary" className='btn'>Learn More</Button>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <figure className='home-box-content-2'>
                            <img src="/Images/Illustration/home-help-img-2.jpg" alt="" width={'100%'} />
                            <figcaption className='home-help-caption p-3 bg-light'>
                                <h5 style={{ fontWeight: "bold", color: "darkblue" }}>BWH Named to US News & World Report's Honor Roll</h5>
                                <p style={{ color: "grey", textAlign: 'justify' }}>Bringham and Women's hospital has ranked among the top 20 best hospitals in the nation on ( #US News and World Report's ) US News and World Report's</p>
                                <Button variant="primary" className='btn'>Learn More</Button>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        {/* blank col for spacing */}
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                        <div className='home-content-box-3 bg-light'>
                            <h4>LATEST NEWS</h4>
                            <ul style={{ textAlign: 'justify' }}>
                                <li>Scientists create molecular tool to remove toxic protein from neuronal models of dementia</li>
                                <li>Older women benefit significantly when screened with 3-D mammographyOlder women benefit significantly when screened with 3-D mammography</li>
                                <li>Older women benefit significantly when screened with 3-D mammography</li>
                                <li>Public announcement concerning a proposed health care project</li>
                            </ul>
                            <Button variant="primary" className='btn'>View More News</Button>
                        </div>
                    </Col>
                </Row>
            </Container>


            <div className='home-all-centers-content' style={{ marginTop: '100px' }}>
                <div className="container text-center" style={{ paddingTop: "70px" }}>
                    <p className="fw-bold text-white"><small>All Centers</small></p>
                    <h1 style={{ color: "white", fontWeight: "bolder", textTransform: 'uppercase' }}>centers of excellence</h1>
                </div>

                <Container style={{ marginTop: '70px' }}>
                    <Row className='home-center-button text-center'>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Cancer Centers</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Orthopedic center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Heart and vascular center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>The lung center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Neuroscience center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Women Health Center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>Primary Care Center</Button>
                            </div>
                        </Col>
                        <Col sm={6} md={3} lg={3}>
                            <div className='home-center-box'>
                                <Button variant="primary" className='btn'>All Services</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className='home-center-discription' style={{ marginTop: '60px' }}>
                    <Row>
                        <Col sm={12} md={3} lg={3}>
                            {/* black col for spacing */}
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div style={{ textAlign: 'center', textAlign: 'justify' , color: 'whitesmoke', fontFamily: 'sans-serif' }}>
                                <p>
                                    " Although there is no magic formula for a long, healthy life, decades of research confirm certain behaviors improve your chances. After 43 years, The Nurses’ Health Study continues to find new insights for maintaining healthy lifestyle. "
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            {/* black col for spacing */}
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="container text-center" style={{ paddingTop: "100px" }}>
                <p className="fw-bold"><small>Recent Post</small></p>
                <h1 style={{ color: "darkblue", fontWeight: "bolder", textTransform: 'uppercase' }}>from our blog</h1>
            </div>

            <Container className='blog-box-content' style={{ marginTop: '100px'}}>
                <Row>
                    {selectedBlogs.map((blog) => (
                        <Col sm={12} md={4} lg={4} key={blog.id}>
                            <div className='blog-content-info'>
                                <figure className='blog-card bg-light'>
                                    <img src={blog.imgSrc} alt={blog.title} width={'100%'} />
                                    <figcaption className='blog-caption p-3'>
                                        <h5>{blog.title}</h5>
                                        <p><small>{blog.author} • {blog.date}</small></p>
                                        <p>{blog.description}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Pagination */}
                <div className="pagination text-center mt-4">
                    {[...Array(totalPages)].map((_, index) => (
                        <Button
                            key={index}
                            variant={currentPage === index + 1 ? "primary" : "secondary"}
                            className="mx-1"
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </div>
            </Container>

        </>
    );
};

export default Home;
