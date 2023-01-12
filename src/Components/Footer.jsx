import React from "react";

const Footer = () => {

    return (
        <footer className="footer-distributed fondoAzul">
            <div className="footer-right">
                <a href="www.facebook.com/Keylog"><img src="images/icon/facebook.svg" alt="facebook" /></a>
                <a href="www.instagram.com/Keylog"><img src="images/icon/instagram.svg" alt="instagram" /></a>
                <a href="www.github.com/Keylog"><img src="images/icon/github.svg" alt="github" /></a>
                <a href="www.linkedin.com/victor-leguizamon"><img src="images/icon/linkedin.svg" alt="linkedin" /></a>
            </div>
            <div className="footer-left">
                <p className="footer-links">
                    <a className="link-1" href="/">Home</a>
                    <a href="/">Blog</a>
                    <a href="/">Pricing</a>
                    <a href="/">About</a>
                    <a href="/">Faq</a>
                    <a href="/">Contact</a>
                </p>
                <img src="/images/logo.jpg" alt="Keylog" width="80px"/>
                <p>Keylog &copy; 2022</p>
            </div>
        </footer>
    )
};

export default Footer;