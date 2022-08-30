import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css'
import Layout from '../../components/layouts/Layout';
import jelena from '../../components/images/avatars/Jelena1.png'

function ContactPage() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7v8m5ak', 'template_t4z3ogl', form.current, 'N8ceZ7vZrFmxTjGtV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <Layout>
      <div className={styles.container}>
        <form ref={form} className={styles.form} onSubmit={sendEmail} autocomplete="off">
          <label className={styles.label}>name:</label>
          <input type="text" name="user_name" className={styles.input}/>
          <label className={styles.label}>email:</label>
          <input type="email" name="user_email" className={styles.input}/>
          <label className={styles.label}>message:</label>
          <textarea name="message" className={styles.inputMessage}/>
          <div className={styles.buttonWrapper}>
            <input type="submit" value="send" className={styles.button}/>
          </div>
        </form>
        <div className={styles.meWrapper}>
        <p className={styles.text}>Hey you, if you want to collaborate with me, send me an email and I will answer you as soon as possible!</p>
        <div className={styles.imgWrapper}>
          <img src={jelena} alt="" className={styles.image} />
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage