import React from 'react'
import {
    FaReact, FaAngular, FaDocker,
    FaPython, FaHtml5, FaBootstrap
} from "react-icons/fa";
import { FaCss3Alt } from 'react-icons/fa6'
import { IoLogoJavascript } from "react-icons/io5";
import { SiKubernetes } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachekafka } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { ReactComponent as Figma } from '../../assets/figma.svg';
import { ReactComponent as Java } from '../../assets/java.svg';
import { ReactComponent as AWS } from '../../assets/aws.svg';
import { ReactComponent as MySQL } from '../../assets/mysql.svg';

import data from './Skills.json'
import './Skills.css'

const Skills = () => {
    return (
        // What I do
        <section className="mt-2 p-lg-5">
            <div className='container'>
                <h2 className='section-title fw-bold'>
                    What I do
                </h2>
                <div className="mt-2">
                I specialize in leveraging technology to create seamless and intuitive user experiences,
                 whether it's through developing robust full-stack applications or designing engaging and user-friendly interfaces.
                 My passion lies in transforming complex requirements into elegant solutions that enhance user satisfaction and drive business growth.
                </div>
                <div className="row mt-5">
                    {data.map((item, i) => (
                        <div className="item col-6 col-lg-3" key={i}>
                            <div className="item-inner">
                                <div className="item-icon">
                                    {item.icon === 'JS' && (
                                        <>
                                            <FaHtml5 className='svg-inline me-2' color="#DE6E3C" />
                                            <FaCss3Alt className='svg-inline me-2' color="#53A7DC" />
                                            <SiTypescript className='svg-inline me-2' size={26} color='#3178c6' />
                                            <IoLogoJavascript className='svg-inline' color='#c2ae15' />
                                        </>
                                    )}
                                    {item.icon === 'React' && (
                                        <>
                                            <FaReact className='svg-inline me-2' color="#62D4FA" />
                                            <FaAngular className='svg-inline me-2' color="#CA3327" />
                                        </>
                                    )}
                                    {item.icon === 'AWS' && (
                                        <AWS className='svg-inline' fontSize={35} />
                                    )}
                                    {item.icon === 'BOOT' && (
                                        <>
                                            <FaBootstrap className='svg-inline' color='#7d0cf7' />
                                            <Figma className='svg-inline' />
                                        </>
                                    )}
                                    {item.icon === 'Python' && (
                                        <>
                                            <Java className='svg-inline' fontSize={40} />
                                            <SiSpringboot className='svg-inline me-2' color='#8BC34A' />
                                            <FaPython className='svg-inline' color="#456E9C" />
                                        </>
                                    )}
                                    {item.icon === 'SQL' && (
                                        <>
                                            <MySQL className='svg-inline ' fontSize={40} />
                                            <BiLogoPostgresql className='svg-inline me-2' color="#316192" />
                                            <SiRedis className='svg-inline' color="#D82C20" />
                                        </>
                                    )}
                                    {item.icon === 'KUBE' && (
                                        <>
                                            <SiKubernetes className='svg-inline me-2' color="#326CE5" />
                                            <FaDocker className='svg-inline' color='#1393da' />
                                        </>
                                    )}
                                    {item.icon === 'Kafka' && (
                                        <>
                                            <SiApachekafka className='svg-inline me-2' color="#111111" />

                                        </>
                                    )}
                                </div>
                                <h3 className="item-title">{item.title}</h3>
                                <div className="item-desc">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills