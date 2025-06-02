import React from 'react'
import '../components/footer.css'
import { FaXTwitter, FaSquareInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <h1>IMGenius</h1>
                        <p>Free ChatGPT image prompts made simple - just copy, paste, and create art.</p>
                        <div className="icons">
                            <a href="https://x.com/AmitGajare4" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="footer-icon" />
                            </a>
                            <a href="https://www.instagram.com/amitgajare_/" target="_blank" rel="noopener noreferrer">
                                <FaSquareInstagram className="footer-icon" />
                            </a>
                            <a href="https://github.com/Amitgajare2" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="footer-icon" />
                            </a>
                            <a href="https://in.linkedin.com/in/amit-gajare-359139290?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="footer-icon" />
                            </a>

                        </div>

                        <div className="made-with">
                            <p>Built with coffee and code</p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <div className="footer-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="mailto: syntaxamit@proton.me">Contact</Link></li>
                                <li><Link to="/policy">Privacy Policy</Link></li>
                            </ul>
                        </div>



                        <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} IMGenius. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer