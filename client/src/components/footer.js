const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Marco</h1>
                        <span className="footer__subtitle">Web Developer</span>
                    </div>
                    <div>
                    <p className="footer__title">Links</p>
                    <ul className="footer__links">
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <p className="footer__title">Social</p>
                        <div className="footer__socials">
                            <a href="https://www.linkedin.com/in/marcogdv/" aria-label="Link to my LinkedIn profile" target="_blank" rel="noreferrer" className="footer__social">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="https://github.com/MarcogodoyV" aria-label="Link to my GitHub profile" target="_blank" rel="noreferrer" className="footer__social">
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://twitter.com/marcogdv" aria-label="Link to my Twitter profile" target="_blank" rel="noreferrer" className="footer__social">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="footer__copy">&#169; Marco Godoy. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer