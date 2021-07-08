import React from 'react';
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { backSkills } from "../data";

const BackSkills = () => {
    return (
        <section id="backSkills">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-5">
                        <h3 className="sm:text-2xl text-3xl font-small title-font text-white mb-4">
                            Back-end
                        </h3>
                    </div>
                    <div className="flex flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {backSkills.map((skill) => (
                            <div key={skill} className="p-2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                {skill}
                                </span>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default BackSkills;