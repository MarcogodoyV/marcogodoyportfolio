import {useState} from "react"

export const SkillSet = (props) => {

    let toggleClass ="skills__close"

    const {icon, title, subtitle} = props.mainInfo
    
    const [toggle, setToggle] = useState(true)

    if(toggle) {
        toggleClass = "skills__open"
    }

    return (
        <div className={`skills__content ${toggleClass}`}>
            <div className="skills__header" onClick={() => setToggle(s => !s)}>
                <i className={`${icon} skills__icon`}></i>

                <div>
                    <h2 className="skills__title">{title}</h2>
                    <span className="skills__subtitle">{subtitle}</span>
                </div>

                <i className="uil uil-angle-down skill__arrow"></i>
            </div>
            
            <div className="skills__list grid">
                {props.tools.map((props, index) => {
                    
                    return(
                        <div className="skills__data" key={index}>
                            <div className="skills__titles">
                                <p className="skills__name">{props.tool}</p>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage" style={{width:props.percentage+"%"}}>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}