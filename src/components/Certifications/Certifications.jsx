import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css'; // Ensure you have your CSS file imported properly
import certifications from './certs.json'; // Assuming you have your certifications JSON file

const Certifications = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update window width state on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine items per slide dynamically based on window width
    const getItemsPerSlide = () => {
         if(windowWidth >= 1400) {
            return 4;
        } else if (windowWidth >= 1200) {
            return 3; // Large screens: 4 items per slide
        } else if (windowWidth >= 900) {
            return 2; // Large screens: 4 items per slide
        } else {
            return 1; // Small screens: 1 item per slide
        }
    };

    const itemsPerSlide = getItemsPerSlide();

    // Group certifications into sets based on items per slide
    const groupCertifications = (certs, itemsPerSlide) => {
        const grouped = [];
        for (let i = 0; i < certs.length; i += itemsPerSlide) {
            grouped.push(certs.slice(i, i + itemsPerSlide));
        }
        return grouped;
    };

    const groupedCertifications = groupCertifications(certifications, itemsPerSlide);

    return (
        <section className="certs p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title fw-bold mb-5">Certifications</h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    
                    {/* Slide indicators */}
                    <div className="carousel-indicators">
                        {groupedCertifications.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === activeIndex ? 'active' : ''}
                                onClick={() => setActiveIndex(index)}
                                aria-current={index === activeIndex ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Inner content */}
                    <div className="carousel-inner">
                        {groupedCertifications.map((group, index) => (
                            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                <div className="row">
                                    {group.map((cert, idx) => (
                                        <div className={`col-md-${12 / itemsPerSlide} mb-5`} key={idx}>
                                            <div className="card cert-card h-100">
                                                <img
                                                    src={cert.img}
                                                    alt="cert"
                                                    className="mt-3 card-img-top mx-auto"
                                                    style={{ maxHeight: '200px' }}
                                                />
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title">
                                                        <Link to={cert.link} className="theme-link" target='_blank'>{cert.title}</Link>
                                                    </h5>
                                                    <p className="card-text flex-grow-1">{cert.desc}</p>
                                                    <div className="mt-auto"> {/* Ensures footer is always at the bottom */}
                                                        <small className="text-muted">Valid until {cert.expiry}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Certifications;
