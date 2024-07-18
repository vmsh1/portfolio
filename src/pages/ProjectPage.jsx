import React from 'react'
import Project from '../components/ProjectDetails/ProjectDetails.jsx'

const ProjectPage = ({project}) => {
    return (
        <Project projectdetails={project}/>
    )
}

export default ProjectPage