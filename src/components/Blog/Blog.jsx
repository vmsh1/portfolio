import React, { useState, useEffect } from 'react';
import './Blog.css';
import blogsData from './Blogs.json'; // Import your JSON data
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulating fetch or import of JSON data
        setBlogs(blogsData);
    }, []);

    // Function to calculate days since publication
    const calculateDaysSincePublished = (publishDate) => {
        const today = new Date();
        const publishedDate = new Date(publishDate);
        const difference = today.getTime() - publishedDate.getTime();
        const daysSincePublished = Math.floor(difference / (1000 * 60 * 60 * 24));
        return daysSincePublished;
    };

    return (
        <>
            {/* Header section */}
            <section className="cta-section bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">A Blog about Software Development and Life</h2>
                    <div className="intro">Welcome to my blog.  </div>
                        {/* Subscribe and get my latest blog post in your inbox</div> */}
                    {/* <div className="single-form-max-width pt-3 mx-auto">
                        <form action="" className="signup-form row g-2 g-lg-2 align-items-center">
                            <div className="col-12 col-md-9">
                                <label htmlFor="semail" className="sr-only">Your email</label>
                                <input 
                                    type="email" 
                                    id="semail" 
                                    name="semail1" 
                                    className="form-control me-md-1 semail" 
                                    placeholder='Enter email' 
                                />
                            </div>
                            <div className="col-12 col-md-2">
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </section>

            {/* Blog cards */}
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="row">
                        {/* Mapping over blog posts */}
                        {blogs.map((blog, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div className="card blog-post-card " style={{ height: '100%' }}>
                                    <img src={blog.thumb} alt={blog.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href={blog.url} className="theme-link">{blog.title}</a>
                                        </h5>
                                        <p className="card-text">{blog.intro}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Published {calculateDaysSincePublished(blog.pbdate)} days ago</small>
                                        <p className="mb-0">
                                            <Link to={blog.url} target='_blank' className="btn-primary">Read more</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    {/* <nav className="blog-nav nav nav-justified my-5">
                        <Link className="nav-link-prev nav-item nav-link d-none rounded-left">
                            Previous
                            <FaLongArrowAltLeft className='svg-inline arrow-prev' />
                        </Link>
                        <Link className="nav-link-next nav-item nav-link rounded">
                            Next
                            <FaLongArrowAltRight className='svg-inline arrow-next' />
                        </Link>
                    </nav> */}
                </div>
            </section>
        </>
    );
};

export default Blog;
