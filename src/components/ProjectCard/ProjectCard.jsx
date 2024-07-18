import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import projectcards from './project-cards';
import './ProjectCard.css'

const ProjectCard = ({ isHome, activeFilter }) => {
    const [projectData, setProjectData] = useState([]);
    const [transitionState, setTransitionState] = useState('entered');

    useEffect(() => {
        // Trigger exit transition
        setTransitionState('exiting');
        const timer = setTimeout(() => {
            let filteredData;
            if (isHome) {
                // const firstTwo = projectcards.slice(0, 2);
                // const lastTwo = projectcards.slice(-2);
                // filteredData = [...firstTwo, ...lastTwo];
                filteredData = [projectcards[4], projectcards[3], projectcards[0], projectcards[1]];
            } else {
                if (activeFilter !== '*') {
                    filteredData = projectcards.filter(project => project.filters.includes(activeFilter));
                } else {
                    filteredData = projectcards;
                }
            }
            setProjectData(filteredData);

            // Trigger enter transition
            setTransitionState('entering');
            setTimeout(() => {
                setTransitionState('entered');
            }, 300);
        }, 300); // Match this duration with the CSS transition duration

        return () => clearTimeout(timer);
    }, [isHome, activeFilter]);

    return (
        <div className={`row project-cards isotope`}>
            {projectData.map((project, i) => (
                <div className={`col-md-6 mb-5 isotope-item ${transitionState}`} key={i}>
                    <div className="card project-card h-100">
                        <div className="row no-gutters">
                            <div className="col-12 col-xl-5 card-img-holder ">
                                <img src={project.icon} alt="card" className="m-auto rounded-start card-img" />
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link className="theme-link">{project.title}</Link>
                                    </h5>
                                    <p className="card-text">
                                        {project.description}
                                        <div className='mt-1'>
                                            <small className="text-muted">{project.tools}</small>
                                        </div>
                                    </p>
                                    {/* <p className="card-text"> */}
                                        
                                    {/* </p> */}
                                </div>
                            </div>
                        </div>

                        {/* Mask on Hover */}
                        <div className="link-mask">
                            <Link className="link-mask-link"></Link>
                            <div className="link-mask-text">
                                <Link to={`/projects/${project.id}`} className="btn btn-secondary">
                                    <FaEye className='svg-inline me-2'/>
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;