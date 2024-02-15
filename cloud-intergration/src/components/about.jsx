import React from "react";
// import photo from "../assets/profile-photo.jpg";
import './about.css';

const About = () => {
    return (
        <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-heading font-semibold mb-6">About Me</h2>
            <div className="flex flex-wrap -mx-4">
            <div className="lg:w-1/3 md:w-1/2 px-4 mb-8 md:mb-0">
                {/* <img className="rounded-lg shadow-lg w-full h-auto" src={photo} alt="Profile photo" /> */}
            </div>
            <div className="lg:w-2/3 md:w-1/2 px-4">
                <p className="text-gray-600">
                I'm a web developer with over 5 years of experience building web applications for various industries, including healthcare, finance, and e-commerce. I specialize in building modern, responsive web applications using the latest technologies and best practices.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-2 mt-8">Skills</h3>
                <ul className="list-disc list-inside text-gray-600">
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;