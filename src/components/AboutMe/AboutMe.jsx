import React from 'react'
import './AboutMe.css'
import Typing from 'react-typing-effect';
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight, FaFileDownload } from "react-icons/fa";
import { ReactComponent as Home } from '../../assets/home-3498db.svg';


const AboutMe = () => {

    const handleDownloadPDF = () => {
        const pdfFilePath = './Vamshi_Gopari.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'Vamshi_Gopari.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        // {/* Profile Section */}
        <section className="p-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        {/* Intro Summary */}
                        <div className="mb-2">
                            <h1 className='fw-bold'>Vamshi Gopari</h1>
                        </div>
                        <p className="lead greytext mb-3">
                        <Typing
                                text={['Developer', 'UI/UX Designer', 'Full Stack Engineer']}
                                speed={100}
                                eraseSpeed={50}
                                eraseDelay={1000}
                                typingDelay={500}
                                cursorRenderer={cursor => <span>{cursor}</span>}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <span>
                                            {text.split('').map((char, i) => (
                                                <span key={i}>{char}</span>
                                            ))}
                                        </span>
                                    );
                                }}
                            />
                        </p>
                        <hr />
                        <div className="row mb-2">
                            <div className="col-12">
                                <p className='greytext'>
                                I'm a Full Stack engineer specialised in frontend and backend development for complex scalable web apps.
                                I write about software development on my blog. Want to know how I may help your project?
                                Check out my project portfolio and online resume.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mb-2">
                            <Link to="/portfolio" className="btn btn-primary me-2 mb-3">
                                <FaArrowAltCircleRight className='svg-inline me-2' />
                                <span className="d-none d-md-inline">
                                    View
                                </span>{' '}
                                Portfolio
                            </Link>
                            <Link onClick={handleDownloadPDF} className="btn btn-secondary mb-3">
                                <FaFileDownload className='svg-inline me-2'/>
                                <span className="d-none d-md-inline">
                                    
                                </span>{' '}
                                Resume
                            </Link>

                        
                        </div>
                    </div>

                    {/* Picture */}
                    <div className="intro-picture col-md-5 p-2 mt-5 text-center">
                        <Home className="home-svg" />
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default AboutMe