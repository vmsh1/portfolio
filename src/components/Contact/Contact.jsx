import React, { useRef, useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { SiLeetcode, SiMedium } from 'react-icons/si'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');


    const templateParams = {
        from_name: name,
        user_email: email,
        to_name: 'Vamshi G',
        message: message,
        subject: subject
    }   


    // function to send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .send('service_96h6j3w', 'template_yo7fdqa', templateParams, 'MkgnEZlv2TwsH8h8j')
        .then(
            () => {
                console.log('SUCCESS!');
                toast.success('Email sent successfully');
                setEmail('');
                setMessage('');
                setName('');
                setSubject('');
            },
            (error) => {
                console.log('FAILED...', error);
                toast.error('Failed to send email. Please try again later.');
            },
        );
        e.target.reset();
    };
    
    return (
        <>
            {/* Header */}
            <section className="bg-light py-5">
                <div className="container text-center single-col-max-width">
                    <h2 className="fw-bold fs-2">Contact</h2>
                    <div className="intro greytext">
                        <p>
                            Interested in hiring me for your project or just want to say hi? 
                            You can fill in the contact form below or send me an email to{' '}
                            <a className="text-link" href="mailto:vgopari@outlook.com">
                            vgopari@outlook.com</a>
                        </p>
                        <p>
                            Want to get connected? Follow me on the social channels below.
                        </p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.linkedin.com/in/vgopari" target='_blank'  className='rounded-icon'>
                                    <FaLinkedinIn className='icon rounded-icon-svg svg-inline fa-fw fa-lg' />
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.github.com/vgopari" target='_blank'  className='rounded-icon'>
                                    <BsGithub className='icon rounded-icon-svg svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://medium.com/@vamshi6g" target='_blank' className='rounded-icon'>
                                        <SiMedium size={18} className='icon rounded-icon-svg svg-inline fa-fw fa-lg' />
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://leetcode.com/u/vgopari/" target='_blank'  className='rounded-icon'>
                                    <SiLeetcode className='icon rounded-icon-svg svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact form */}
            <section className="contact-section px-3 py-5 p-md-5">
                <div className="container">
                    <form id="contact-form" ref={form} className="contact-form col-lg-8 mx-lg-auto" onSubmit={sendEmail}>
                        <h3 className="text-center mb-3">Get In Touch</h3>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="cname" className="sr-only">Name</label>
                                <input 
                                    type="text"
                                    className='form-control'
                                    id="cname"
                                    name="from_name"
                                    placeholder='Name'
                                    minLength={2}
                                    required
                                    aria-required="true"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="cemail" className="sr-only">Email</label>
                                <input 
                                    type="email"
                                    className='form-control'
                                    id="cemail"
                                    name="user_email"
                                    placeholder='Email'
                                    required
                                    aria-required="true"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <input 
                                    type="text"
                                    className='form-control'
                                    id="csubject"
                                    name="subject"
                                    placeholder='Subject: Just wanted to say hi!'
                                    required
                                    aria-required="true"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="cmessage" className="sr-only">Your message</label>
                                <textarea 
                                    className='form-control'
                                    id="cmessage"
                                    name="message"
                                    placeholder='Enter your message'
                                    rows="10"
                                    required
                                    aria-required="true"
                                    data-gramm="false"
                                    wt-ignore-input="true"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <button 
                                    type='submit'
                                    className='btn btn-block btn-primary py-2'
                                >
                                    Send Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact