import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Blog = () => {
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

    return (
        <>
            <div className="blog-hero-section text-center">
                <h1>MEDICARE BLOG</h1>
            </div>

            <Container className='blog-box-content' style={{ marginTop: '100px' }}>
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
}

export default Blog;
