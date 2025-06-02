import React, { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import './about.css';
import Footer from '../components/Footer';

// Framer Motion variants for page transitions
const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
};

const transition = { duration: 0.4, ease: "easeInOut" };

function About() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={transition}>

            <Navbar />
            <div className="about-container">
                <div className="about-box">
                    <h1 className="about-title">📘 About Us</h1>
                    <p className="about-text">Welcome to IMGenius — your ultimate library for ChatGPT image generation prompts. <br /> <br />

                        We created this platform to make AI image creation accessible, simple, and fun for everyone. Whether you're a designer, artist, developer, content creator, or just curious about AI-generated art, our goal is to help you easily find and copy high-quality prompts to generate stunning visuals using ChatGPT or any other image AI tool.
                    </p>

                    <p className="about-title">🎯 What We Offer</p>
                    <ul className="about-list">
                        <li>📚 A vast collection of curated prompts for various themes and styles</li>
                        <li>🔍 Easy search and filter options to find the perfect prompt</li>
                        <li>✨ User-friendly interface to copy prompts with one click</li>
                        <li>🌟 Regular updates with new prompts and features</li>
                        <li>✅ Free access for all users — no sign-up required</li>
                    </ul>

                    <p className='about-title'>💡 Why We Built This</p>
                    <p className="about-text">We believe that AI can enhance creativity and make art more accessible. By providing a platform where anyone can find inspiration and generate unique images, we hope to empower creators of all backgrounds to explore the possibilities of AI-generated art.</p> <br />
                    <p className="about-text">Thank you for visiting IMGenius! We hope you find the perfect prompts to spark your creativity and bring your ideas to life. If you have any feedback or suggestions, feel free to reach out to us.</p>

                </div>
            </div>

            <Footer />

        </motion.div>
    )
}

export default About