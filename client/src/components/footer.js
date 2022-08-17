const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Marco</h1>
                        <span className="footer__subtitle">Web Developer</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/marcogdv/" target="_blank" rel="noreferrer" className="footer__social">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://github.com/MarcogodoyV" target="_blank" rel="noreferrer" className="footer__social">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="https://twitter.com/marcogdv" target="_blank" rel="noreferrer" className="footer__social">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Marco Godoy. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer