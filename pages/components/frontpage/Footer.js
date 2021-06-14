import React from 'react'

const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="footer-grid-cont">
            <div className="grid-item"></div>
                <div className="grid-item">
                    <h6 className="footer-headers">Product</h6>
                    <a className="foot-link-item">Get Started</a>
                </div>
                <div className="grid-item">
                    <h6 className="footer-headers">Company</h6>
                    <a className="foot-link-item" href="#">About</a>
                    <a className="foot-link-item" href="#">Jobs</a>
                    <a className="foot-link-item" href="#">Branding</a>
                    <a className="foot-link-item" href="#">News</a>
                </div>
                <div className="grid-item">
                    <h6 className="footer-headers">Resources</h6>
                    <a className="foot-link-item" href="#">College</a>
                    <a className="foot-link-item" href="#">Support</a>
                    <a className="foot-link-item" href="#">Safety</a>
                    <a className="foot-link-item" href="#">Blog</a>
                    <a className="foot-link-item" href="#">Feedback</a>
                    <a className="foot-link-item" href="#">Developer</a>
                </div>
                <div className="grid-item">
                    <h6 className="footer-headers">Policies</h6>
                    <a className="foot-link-item" href="#">Terms</a>
                    <a className="foot-link-item" href="#">Privacy</a>
                    <a className="foot-link-item" href="#">Guidelines</a>
                    <a className="foot-link-item" href="#">Acknowledgements</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
