import {ContactInfo} from "../../../utils/contactInfo"
import { ContactForm } from "./ContactForm"

export const Contact = () => {  


    return (
        <section className="contact section" id="contact">
                <h1 className="section__title">Contact Me</h1>
                <span className="section__subtitle">Get in touch</span>
                <div  className="contact__container container grid">
                    <div>
                    <ContactInfo data={
                        {icon:"uil uil-envelope",
                        title:"Email",
                        subtitle:"mrcogdv@gmail.com"}
                        }
                    />
                    <ContactInfo data={
                        {icon:"uil uil-telegram",
                        title:"Telegram",
                        subtitle:"@marcogdv"}
                        }
                    />
                    </div>
                    <ContactForm/>
                </div>
            </section>
    )
}