import React from 'react';
import { UserIcon } from "@heroicons/react/solid";

const About = () => {
    return (
        <section id="about">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Who I am
                </h1>
            </div>
        </section>
    )
}

export default About;