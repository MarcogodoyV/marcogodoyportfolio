export const PortfolioSet = (props) => {

    const {title,description,imgLink,appLink} = props.data
    return(
        <div>
            <div className="portfolio__img-container">
                <img src={imgLink} className="portfolio__img" alt={title}></img>
            </div>
            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">
                    {description}
                </p>
                <a href={appLink} target="_blank" className="button button--flex button--small portfolio__button">
                    Demo <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </div>
    )
}