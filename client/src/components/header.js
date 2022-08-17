import {useState} from "react"

const Header = () => {

    let toggleClass = "nav__menu"
    
    const [toggle, setToggle] = useState(false)

        if(toggle) {
             toggleClass = "nav__menu show__menu"
        }

    return (
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#home" className="nav__logo">Marco</a> 
                    <div className={toggleClass} id="nav__menu" onClick={() => setToggle(s => !s)}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                <i className="uil uil-home  nav__icon"></i> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" id="nav-close"></i>
                    </div>
                    <div className="nav__btns">
                        <div className="nav__toggle" id="nav-toggle" onClick={() => setToggle(s => !s)}>
                        <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export default Header