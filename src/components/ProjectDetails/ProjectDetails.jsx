import React from 'react'
import './ProjectDetails.css'
import { Link } from 'react-router-dom'
import { FaIndustry, FaDatabase } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Project = ({ projectdetails }) => {
    return (
        <>
            {/* Header */}
            <section className="cta-section bg-light py-5">
                <div className="container single-col-max-width">
                    <h2 className="heading text-center">Case Study: {projectdetails.title}</h2>
                    <div className="project-intro text-center">
                        <p className="mb-0 lead">
                            {projectdetails.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project body */}
            <section className="project px-3 py-5 p-md-5">
                <div className="container">

                    {/* Project Specifications */}
                    <div className="project-meta bg-light p-4">
                        <div className="row g-4 g-lg-5">
                            <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                                <img src={projectdetails.thumb} alt="icon" className="project-thumb img-fluid rounded py-auto" />
                            </div>
                            <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                                <div className="client-info">
                                    <h3 className="client-name fw-bold mb-4">Project Specifications</h3>
                                    <ul className="client-meta list-unstyled">
                                        <li className="mb-2">
                                            <FaIndustry className='svg-inline fa-fw me-2' />
                                            <strong className='me-1'>Industry:</strong>
                                            {projectdetails.industry}
                                        </li>
                                        {projectdetails?.dataset && (
                                            <li className="mb-2">
                                                <FaDatabase className='svg-inline fa-fw me-2' />
                                                <strong className='me-1'>
                                                    {projectdetails.filter === "frontend" ? 'Website:' : 'Dataset:'}
                                                </strong>
                                                <Link to={projectdetails.dataset} className='theme-link'>{projectdetails.datasetName}</Link>
                                            </li>
                                        )}
                                        <li className="mb-2">
                                            <FaLink className='svg-inline fa-fw me-2' />
                                            <strong className='me-1'>Repo:</strong>
                                            <Link to={projectdetails.git} target='_blank' className="theme-link">github.com</Link>
                                        </li>
                                    </ul>
                                    <div className="client-bio">
                                        {projectdetails.shortDesc}
                                    </div>
                                    <h4 className="subheading mt-3">Project Requirements</h4>
                                    <ul className="mt-2">
                                        {projectdetails?.requirements.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-sections py-5">

                        {/* Project Overview */}
                        {projectdetails?.overview && (
                            <div className="project-section">
                                <h3 className="project-section-title">Project Overview</h3>
                                <p className='mt-3'>{projectdetails.overview}</p>
                            </div>
                        )}

                        {/* Challenges */}
                        {projectdetails?.challenges && (
                            <div className="project-section mt-4">
                                <h3 className="project-section-title">Challenges</h3>
                                    {projectdetails.challenges.map((item, index) => (
                                        <ul className='mt-3'>
                                            <div key={index}>
                                                <li key={index}>{item}</li>
                                            </div>
                                        </ul>
                                    ))}
                            </div>
                        )}

                        {/* Approach & Solution */}
                        {projectdetails?.solution && (
                            <div className="project-section mt-4">
                                <h3 className="project-section-title">The Approach & Solution</h3>
                                {projectdetails.solution.map((item, index) => (
                                    <ul className='mt-3'>
                                        <div key={index}>
                                            <li key={index}>{item}</li>
                                        </div>
                                    </ul>
                                ))}
                            </div>
                        )}
                        <div className="row mt-3">
                            {projectdetails.pic1 !== "" ?
                                <div className="col-12 col-lg-6">
                                    <img src={projectdetails.pic1} alt="pic1" className="solution-img img-fluid rounded" />
                                </div> : <></>
                            }
                            {projectdetails.pic2 !== "" ?
                                <div className="col-12 col-lg-6">
                                    <img src={projectdetails.pic2} alt="pic2" className="solution-img img-fluid rounded" />
                                </div> : <></>
                            }
                        </div>

                        {/* Results */}
                        {projectdetails?.results && (
                            <div className="project-section mt-4">
                                <h3 className="project-section-title">The Results</h3>
                                <div className="metrics mt-3">
                                    <div className="row">
                                        {projectdetails?.metrics.map((metric, index) => (
                                            <div className="metric col-6 col-xl mb-3" key={index}>
                                                <div className="inner p-3 bg-light">
                                                    <div className="metric-name">{metric.name}</div>
                                                    <div className="metric-data mb-2">
                                                        {metric.data} <span className='unit'>{metric.unit}</span>
                                                    </div>
                                                    <div className="metric-desc">{metric.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p>{projectdetails.results}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project