import React, { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn, FaLaptopCode } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";
import { FaEnvelopeOpenText, FaHome } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { CgMoreO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom'
import { FaRegPaperPlane } from "react-icons/fa";

import './SideBar.css'
import '../../App.css'

const SideBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768 ? true : false);

    useEffect(() => {
        if (isSidebarOpen && window.innerWidth < 768) {
            window.scrollTo(0, 0);
        }
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        if (window.innerWidth > 768) {
            window.location.href = '/';
        }
        else {
            setIsSidebarOpen(prevState => !prevState)
        }
    };

    return (
        <>
            <div className={`sidebar col-sm-2 bg-theme-color d-flex flex-column ${isSidebarOpen ? 'open' : 'closed'}`}>
                {/* Nav button */}
                <nav className="navbar p-2 d-md-none position-absolute start-0">
                    <button
                        onClick={() => toggleSidebar()}
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse"
                        aria-expanded={isSidebarOpen ? "true" : "false"}
                        aria-label="Toggle Sidebar"
                        className="btn btn-sm nav-toggler border-1 border-white"
                    >
                        <FiMenu color="white" size={25} />
                    </button>
                </nav>

                {/* Home button */}
                <div className='home end-0 d-md-none position-absolute p-2 my-1 mx-1'>
                    <NavLink to="/" className="nav-link" activeclassname="active">
                        <FaHome size={35} className='mx-1' />
                    </NavLink>
                </div>

                {/* Special Name Font */}
                <div className="p-md-1 mb-md-1 p-2 pb-0">
                    <h2 className='text-center '>
                        <button
                            onClick={() => toggleSidebar()}
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarCollapse"
                            aria-controls="sidebarCollapse"
                            aria-expanded={isSidebarOpen ? "true" : "false"}
                            aria-label="Toggle Sidebar"
                            className="no-text-decoration bg-transparent border-0 pt-2 pb-2 pb-md-0 text-white"
                        >
                            <div className='sp-font fs-3'>Vamshi Gopari</div>
                        </button>
                    </h2>
                </div>

                {/* Profile Section */}
                <div
                    id="sidebarCollapse"
                    className={`p-2 pt-md-0 pb-md-0 collapse collapse-vertical ${window.innerWidth > 768 ? 'show' : ''}`}
                >
                    <div>
                        <img className='profile-image w-75 rounded mx-auto d-block'
                            src='./images/profile.png'
                            alt="Avatar" />
                    </div>
                    <div className="tagline py-md-1 px-md-0 pt-3 p-3 mt-md-2 text-center text-white">
                        <p className='sidebar-intro'>Hello, my name is <span>Vamshi Gopari</span> and I'm a Full Stack Engineer. Welcome to my developer website!</p>
                    </div>
                    {/* Social Icons */}
                    <div className="d-flex flex-row justify-content-center">
                        <div className="px-2">
                            <Link to="https://www.linkedin.com/in/vgopari" target='_blank'>
                                <div className="icon-box">
                                    <FaLinkedinIn size={18} className='icon' color='#16316F' />
                                </div>
                            </Link>
                        </div>
                        <div className="px-2">
                            <Link to="https://www.github.com/vgopari" target='_blank'>
                                <div className="icon-box">
                                    <BsGithub size={18} className='icon' color='#16316F' />
                                </div>
                            </Link>
                        </div>
                        <div className="px-2">
                            <Link to="https://medium.com/@vamshi6g" target='_blank'>
                                <div className="icon-box">
                                    <SiMedium size={18} className='icon' color='#16316F' />
                                </div>
                            </Link>
                        </div>
                        <div className="px-2">
                            <Link to="https://leetcode.com/u/vgopari/" target='_blank'>
                                <div className="icon-box">
                                    <SiLeetcode size={18} className='icon' color='#16316F' />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr className='mt-4' />
                </div>

                <div id="sidebarCollapse" className={`collapse collapse-vertical ${window.innerWidth > 768 ? 'show' : ''}`}>
                    {/* Tabs Section */}
                    <ul className='navbar-nav flex-column my-md-0 ms-md-4 mx-0  mb-4'>
                        <li className="nav-item fw-bold text-white">
                            <NavLink to="/" className="nav-link px-2" activeclassname="active">
                                <CgProfile size={18} className='me-2' />About Me
                            </NavLink>
                        </li>
                        <li className="nav-item fw-bold text-white">
                            <NavLink to="/portfolio" className="nav-link px-2" activeclassname="active">
                                <FaLaptopCode size={18} className='me-2' />Portfolio
                            </NavLink>
                        </li>
                        {/* <li className="nav-item fw-bold text-white">
                        <NavLink to="/resume" className="nav-link px-2" activeclassname="active">
                            <FaFileLines size={18} className='me-2'/> Resume
                        </NavLink>
                    </li> */}
                        <li className="nav-item fw-bold text-white">
                            <NavLink to="/Blogs" className="nav-link px-2" activeclassname="active">
                                <FaBloggerB size={18} className='me-2' />Blog
                            </NavLink>
                        </li>
                        <li className="nav-item fw-bold text-white">
                            <NavLink to="/contact" className="nav-link px-2" activeclassname="active">
                                <FaEnvelopeOpenText size={18} className='me-2' />Contact
                            </NavLink>
                        </li>
                        <li className="nav-item fw-bold text-white dropdown">
                            <NavLink className="nav-link text-white px-2" activeclassname="active" data-bs-toggle="dropdown" aria-expanded="false">
                                <CgMoreO size={18} /> More Pages <IoIosArrowDown />
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/portfolio" className="nav-link more-nav-link px-2 dropdown-item truncate-text">
                                        Project Page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://medium.com/@vamshi6g/real-time-piano-chord-detection-and-visualization-with-kafka-streams-revolutionizing-music-71ea3f5e3d6a"
                                        target="_blank" className="nav-link more-nav-link px-2 dropdown-item truncate-text">
                                        Real-time Piano 🎹 Chord Detection and Visualization with Kafka Streams: Revolutionizing Music 🎶 Learning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://medium.com/@vamshi6g/understanding-apache-kafka-4a5a1d2d0739" target="_blank" className="nav-link more-nav-link px-2 dropdown-item truncate-text">
                                        Understanding Apache Kafka
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className='mt-2' />
                    {/* Hire Me Button */}
                    <div className="text-center mt-2">
                        <Link to="/contact" className="hire-me-btn btn btn-primary">
                            <FaRegPaperPlane /> Hire Me
                        </Link>
                    </div>
                </div>


            </div>

            <div className={`d-md-none ${isSidebarOpen ? '' : 'add-div'}`}></div>
        </>
    )
}


export default SideBar