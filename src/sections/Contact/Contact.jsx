// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publickey= import.meta.env.VITE_EMAIL;

    const templateParams = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      to_name: 'Portfolio-Website',
      message: form.current.message.value,
    }

    emailjs
      .send(
        serviceid,
        templateid,
        templateParams,
        publickey
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Oops! Something went wrong. Please try again later.
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="user_name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="user_email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input 
          className="hover btn" 
          type="submit" 
          value={isSubmitting ? "Sending..." : "Submit"} 
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
}

export default Contact;