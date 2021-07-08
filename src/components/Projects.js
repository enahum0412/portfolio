import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
    
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Projects
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Below you can see some projects developed by me during my studies to improve my skills as a developer.
                </p>
                </div>
                <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-100 p-4" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <div className="flex relative">
                        <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            <a
                                href={project.link}
                                rel="noopener noreferrer" 
                                target="_blank"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-green-600 rounded text-sm">
                                    Live
                                </a>
                                <a
                                href={project.github}
                                rel="noopener noreferrer" 
                                target="_blank"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm">
                                    GitHub
                            </a>
                        </div>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;