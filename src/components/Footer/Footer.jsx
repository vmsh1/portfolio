import React from 'react'
import './Footer.css'
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="promo-section bg-light py-5 text-center bottom-0">
            <div className="container single-col-max-width">
                <h2 className="title">Need help with your project?</h2>
                <p>
                    Whether it's data analysis or full-stack applications, I'm here for you. 
                    Let's chat about your needs and bring your ideas to life.
                </p>
                <div className="text-center">
                    <Link to="/contact" className='btn btn-primary'>
                        <FaPaperPlane className='svg-inline me-2'/>
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer