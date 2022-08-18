export const ContactInfo = (props) => {

    const {icon,title,subtitle} = props.data

    return (
        <div className="contact__information">
            <i className={`${icon} contact__icon`}></i>
            <div>
                <p className="contact__title">{title}</p>
                <span className="contact__subtitle">{subtitle}</span>
            </div>
        </div>
    )
}