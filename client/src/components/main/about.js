const About = () => {
    return (
        <section className="about section" id="about">
                <h2 className="section__title">About me</h2>
                <span className="section__subtitle">Who I am</span>
                <div className="about__container container grid">
                    <img src={require("../../assets/images/about.jpeg")} alt="" className="about__img"></img>
                    <div className="about__data">
                        <p className="about__description">I'm an electronic engineer from Venezuela living in Argentina. I started learning 
                        web development in 2020 in my free time and since that I got more and more involve in the area, to the point I decided to switched my career path and start freelancing. I'm Able to effectively self-manage during independent projects, as well as collaborate in a team setting in order to get the work done in the best way possible.</p>
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
                            <a href={require("../../assets/cv.pdf")} target="_blank" rel="noreferrer" className="button button--flex">Download CV<i className="uil uil-file-download button__icon"></i></a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export {About}