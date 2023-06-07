const About = () => {
    return (
        <section className="about section" id="about">
                <h1 className="section__title">About me</h1>
                <span className="section__subtitle">Who I am</span>
                <div className="about__container container grid">
                    <div className="about__img-container">
                        <img src={require("../../assets/images/about.jpeg")} alt="Imagen of myself" className="about__img"></img>
                    </div>
                    <div className="about__data">
                        <p className="about__description">As an Electronic Engineer and passionate self-taught web developer, I am equipped with a diverse and promising skill set. With experience as a Full-Stack Web Developer, hardware and software technician, as well as report management and customer service, I bring a unique blend of technical expertise and interpersonal skills to every project. I am bilingual in Spanish and English, enabling me to effectively communicate with clients and team members from diverse backgrounds. Whether working independently or collaborating within a team setting, I have the ability to self-manage and consistently deliver high-quality work.</p>
                        <div className="about__info">
                            <div>
                                <span className="about__info-title">01+</span>
                                <span className="about__info-name">Year of experience<br></br>as Web Developer</span>
                            </div>
                            <div>
                                <span className="about__info-title">05+</span>
                                <span className="about__info-name">Collaborations<br></br>in Open Source<br></br>Projects</span>
                            </div>
                        </div>
                        <div className="about__buttons">
                            <a href={require("../../assets/MarcoGodoy[ENG].pdf")} aria-label="Download my curriculum in PDF" target="_blank" rel="noreferrer" className="button button--flex">Download CV (ENG)<i className="uil uil-file-download button__icon"></i></a>
                            <a href={require("../../assets/MarcoGodoy[SPA].pdf")} aria-label="Download my curriculum in PDF" target="_blank" rel="noreferrer" className="button button--flex">Download CV (SPA)<i className="uil uil-file-download button__icon"></i></a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export {About}