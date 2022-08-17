import { PortfolioSet } from "../../utils/portfolioSet"

export const Portfolio = () => {
    const portfolioData = require("../../utils/portfolioInfo.json").data
    return (
        <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Work I have done</span>

                <div className="portfolio__container container">
                    <div className="portfolio__content grid">
                        {portfolioData.map((d) => <PortfolioSet data={d} key={d.title}/>)}

                    </div>
                </div>
            </section>
    )
}