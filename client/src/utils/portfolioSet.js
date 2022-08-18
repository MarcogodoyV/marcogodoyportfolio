export const PortfolioSet = (props) => {

    const {title,description,imgLink,appLink} = props.data
    return(
        <>
            <img src={imgLink} className="portfolio__img" alt={title}></img>
            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">
                    {description}
                </p>
                <a href={appLink} className="button button--flex button--small portfolio__button">
                    Demo <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </>
    )
}