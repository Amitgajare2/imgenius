import React, { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import './about.css';
import Footer from '../components/Footer';

const pageVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
};

const transition = { duration: 0.4, ease: "easeInOut" };

function Policy() {
    return (
        <motion.divdiv
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={transition}>

            <Navbar />

            <div className="about-container">
                <div className="about-box">
                    <h1 className="about-title">📄 Privacy Policy</h1>

                    <p className="about-text">
                        Welcome to IMGenius (“we,” “our,” or “us”). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
                    </p>

                    {/* 1. Information We Collect */}
                    <h2 className="about-subtitle">1. Information We Collect</h2>
                    <p className="about-text">
                        We do not collect any personal information unless you choose to contact us or interact with features that require it (e.g., feedback forms).
                    </p>
                    <p className="about-text">
                        We may use basic analytics tools (like Google Analytics) to collect non-personal information such as:
                    </p>
                    <ul className="about-list">
                        <li>Browser type</li>
                        <li>Device type</li>
                        <li>Pages visited</li>
                        <li>Time spent on site</li>
                    </ul>
                    <p className="about-text">This helps us improve the site experience.</p>

                    {/* 2. How We Use Your Information */}
                    <h2 className="about-subtitle">2. How We Use Your Information</h2>
                    <p className="about-text">Any information we collect is used solely to:</p>
                    <ul className="about-list">
                        <li>Improve website functionality</li>
                        <li>Understand how users interact with our content</li>
                        <li>Fix bugs and improve performance</li>
                    </ul>
                    <p className="about-text">We do not sell, rent, or share your personal information with third parties.</p>

                    {/* 3. Cookies */}
                    <h2 className="about-subtitle">3. Cookies</h2>
                    <p className="about-text">We may use cookies to:</p>
                    <ul className="about-list">
                        <li>Remember your preferences</li>
                        <li>Analyze site usage</li>
                    </ul>
                    <p className="about-text">You can choose to disable cookies through your browser settings.</p>

                    {/* 4. Third-Party Links */}
                    <h2 className="about-subtitle">4. Third-Party Links</h2>
                    <p className="about-text">
                        Our site may contain links to external sites (e.g., ChatGPT, OpenAI). We are not responsible for the privacy practices or content of those external sites.
                    </p>

                    {/* 5. Children’s Privacy */}
                    <h2 className="about-subtitle">5. Children’s Privacy</h2>
                    <p className="about-text">
                        Our website is not directed at children under 13. We do not knowingly collect any personal information from children.
                    </p>

                    {/* 6. Changes to This Policy */}
                    <h2 className="about-subtitle">6. Changes to This Policy</h2>
                    <p className="about-text">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date.
                    </p>

                    {/* 7. Contact Us */}
                    <h2 className="about-subtitle">7. Contact Us</h2>
                    <p className="about-text">
                        If you have any questions about this Privacy Policy, feel free to contact us at:
                    </p>
                    <p className="about-text">📧 syntaxamit@proton.me</p> {/* Replace with your actual email */}
                </div>
            </div>

            <Footer />

        </motion.divdiv>
    )
}

export default Policy