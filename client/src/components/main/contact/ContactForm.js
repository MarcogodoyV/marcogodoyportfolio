import React, {useState} from 'react'
import { send } from 'emailjs-com';

export const ContactForm = () => {

    const  [formData, setFormData] = useState({
        name:"",
        email:"",
        organization:"",
        subject:"",
        message:""
    })

    const FormSubmit = () => {

        send(
            "service_wsxjhgo",
            "template_aqu03k8",
            {from_name: `${formData.name}`,
            email:`${formData.email}`,
            organization:`${formData.organization}`,
            subject:`${formData.subject}`,
            message:`${formData.message}`},
        "yS5HHuCGuRrvHO1Ln")
        .then(d => {
            console.log(d)
            let alertElement = `
            <div id='alertSent'>
                Message Sent
            </div>`
            document.body.innerHTML +=(alertElement)
            setTimeout(() => {document.getElementById('alertSent').remove()}, 2000)
        })
        .catch (err => {
            console.log(err)
            let alertElement = `
            <div id='alertSent'>
                Message couldn't be sent, please try again
            </div>`
            document.body.innerHTML +=(alertElement)
            setTimeout(() => {document.getElementById('alertSent').remove()}, 2000)
        }).then(
            setFormData({
                name:"",
                email:"",
                organization:"",
                subject:"",
                message:""
            })
         );
        document.getElementById('form__field').reset()
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]: `${e.target.value}`
        })
    }

  return (
    <form action="" id="form__field" className="contact__form grid">
        <div className="contact__inputs grid">
            <div className="contact__content">
                <label htmlFor="name" className="contact_label">Name
                <input onChange={handleChange} id="name" type="text" className="contact__input" name="name"/>
                </label>
            </div>
            <div className="contact__content">
                <label htmlFor="email" className="contact_label">Email
                <input onChange={handleChange} id="email" type="text" className="contact__input" name="email"/>
                </label>
            </div>
        </div>
        <div className="contact__content">
            <label htmlFor="organization" className="contact_label">Organization
            <input onChange={handleChange} id="organization" type="text" className="contact__input" name="organization"/>
            </label>        
        </div>
        <div className="contact__content">
            <label htmlFor="subject" className="contact_label">Subject
            <input onChange={handleChange} id="subject" type="text" className="contact__input" name="subject"/>
            </label>
        </div>
        <div className="contact__content">
            <label htmlFor="message" className="message_label">Message
            <textarea onChange={handleChange} id="message" cols="0" rows="7" className="contact__input" name="message"/>
            </label>        
        </div>
        <div>
            <a href="#contact" className="button button--flex" onClick={() => FormSubmit()}>
                <span>
                    <span>Send Message</span> 
                    <i className="uil uil-message button__icon"></i>
                </span>
            </a>
        </div>
    </form>
  )
}