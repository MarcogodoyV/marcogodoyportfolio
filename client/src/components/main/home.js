const Home = () => {
    return (
        <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="https://www.linkedin.com/in/marcogdv/" aria-label="Link to my LinkedIn profile" target="_blank" rel="noreferrer" className="home__social-icon">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="https://github.com/MarcogodoyV" aria-label="Link to my GitHub profile" target="_blank" rel="noreferrer" className="home__social-icon">
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://twitter.com/marcogdv" aria-label="Link to my Twitter profile" target="_blank" rel="noreferrer" className="home__social-icon">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>

                        <div className="home__img">
                            <svg className="home__blob" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                                <defs>
                                    <clipPath id="blob">
                                        <path d="M355.5,349.5Q240,459,128.5,349.5Q17,240,128.5,126Q240,12,355.5,126Q471,240,355.5,349.5Z" />
                                    </clipPath>
                                </defs>
                                <image x="0" y="0" width="100%" height="100%" clipPath="url(#blob)" xlinkHref="https://avatars.githubusercontent.com/u/98841303?v=4" preserveAspectRatio="xMidYMid slice"></image>
                            </svg>
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hello!, I&apos;m Marco</h1>
                            <p className="home__subtitle">Web Developer</p>
                            <p className='home__description'>Passionate self taught web developer, bilingual (Spanish and English). Equipped with a diverse and promising skill set and knowledge to make your ideas become real.</p>
                            <a href="#contact" className="button button--flex">
                               Contact me! <i className="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>   
            </section>
    )
}

export {Home}