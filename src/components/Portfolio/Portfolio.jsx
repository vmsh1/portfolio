import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPaperPlane } from "react-icons/fa";
import './Portfolio.css'
import ProjectCard from '../ProjectCard/ProjectCard.jsx';

const Portfolio = () => {

    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            {/* Header Section */}
            <section className="cta-section bg-light py-5">
                <div className="container text-center single-col-max-width">
                    <h2 className="heading mb-3">
                        Portfolio
                    </h2>
                    <div className="intro">
                        <p>
                            Welcome to my online Portfolio. I'm taking on freelance work at the moment. 
                            Want some help building your website?
                        </p>
                    </div>
                    <Link className="btn btn-primary" to="/contact">
                        <FaPaperPlane className='svg-inline me-2'/>
                        Hire Me
                    </Link>
                </div>
            </section>

            {/* Project Section */}
            <section className="projects-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="text-center">
                        <ul id="filters" className="filters mb-5 mx-auto ps-0">
                            <li 
                                className={`type mb-3 mb-lg-0 ${activeFilter === '*' ? 'active' : ''}`} 
                                data-filter="*"
                                onClick={() => handleFilterClick('*')}
                            >
                                All
                            </li>
                            <li 
                                className={`type mb-3 mb-lg-0 ${activeFilter === 'webapp' ? 'active' : ''}`} 
                                data-filter=".webapp"
                                onClick={() => handleFilterClick('webapp')}
                            >
                                Full Stack
                            </li>
                            <li 
                                className={`type mb-3 mb-lg-0 ${activeFilter === 'frontend' ? 'active' : ''}`} 
                                data-filter=".frontend"
                                onClick={() => handleFilterClick('frontend')}
                            >
                                UI/UX
                            </li>
                            <li 
                                className={`type mb-3 mb-lg-0 ${activeFilter === 'backend' ? 'active' : ''}`} 
                                data-filter=".backend"
                                onClick={() => handleFilterClick('backend')}
                            >
                                Backend
                            </li>
                            <li 
                                className={`type mb-3 mb-lg-0 ${activeFilter === 'ml' ? 'active' : ''}`} 
                                data-filter=".ml"
                                onClick={() => handleFilterClick('ml')}
                            >
                                AI/ML
                            </li>
                            
                        </ul>
                    </div>

                    {/* Project cards */}
                    <ProjectCard activeFilter={activeFilter} isHome={false}/>

                </div>
            </section>
        </>
    )
}

export default Portfolio