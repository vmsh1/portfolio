import React from 'react'
import {Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        // NotFound section
        <section className="error-section bg-light py-5 mb-5">
            <div className="container text-center single-col-max-width">
                <FaExclamationTriangle className='fs-1 mb-3'/>
                <h1 className="fw-bold mb-4 fs-1">404 Not Found</h1>
                <p className="intro mb-5 greytext">This page does not exist</p>
                <Link to='/' className='text-link'>
                    Go Back 
                </Link>
            </div>
        </section>
    )
}

export default NotFoundPage