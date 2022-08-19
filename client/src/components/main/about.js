const About = () => {
    return (
        <section className="about section" id="about">
                <h1 className="section__title">About me</h1>
                <span className="section__subtitle">Who I am</span>
                <div className="about__container container grid">
                    <img src={require("../../assets/images/about.jpeg")} alt="Imagen of myself" className="about__img"></img>
                    <div className="about__data">
                        <p className="about__description">I'm an electronic engineer from Venezuela living in Argentina. In 2020 I started learning web development in my free time, and since then I got more and more involved in the area, to the point in which I decided to switch my career path and start freelancing. Now I'm able to effectively self-manage during independent projects, and collaborate in a team setting in order to get the work done in the best way possible.</p>
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
                            <a href={require("../../assets/CV.pdf")} aria-label="Download my curriculum in PDF" target="_blank" rel="noreferrer" className="button button--flex">Download CV<i className="uil uil-file-download button__icon"></i></a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export {About}