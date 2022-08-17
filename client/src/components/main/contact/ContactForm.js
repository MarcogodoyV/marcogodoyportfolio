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
                <label htmlFor="" className="contact_label">Name</label>
                <input onChange={handleChange} type="text" className="contact__input" name="name"/>
            </div>
            <div className="contact__content">
                <label htmlFor="" className="contact_label">Email</label>
                <input onChange={handleChange} type="text" className="contact__input" name="email"/>
            </div>
        </div>
        <div className="contact__content">
            <label htmlFor="" className="contact_label">Organization</label>
            <input onChange={handleChange} type="text" className="contact__input" name="organization"/>
        </div>
        <div className="contact__content">
            <label htmlFor="" className="contact_label">Subject</label>
            <input onChange={handleChange} type="text" className="contact__input" name="subject"/>
        </div>
        <div className="contact__content">
            <label htmlFor="" className="contact_label">Message</label>
            <textarea onChange={handleChange} id="" cols="0" rows="7" className="contact__input" name="message"/>
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
