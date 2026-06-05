'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'sharmashivam4939@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sharmashivam4939@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+91-66306605968', href: 'tel:+9166306605968' },
  { icon: <FiMapPin />, label: 'Location', value: 'Kanpur, India', href: null },
];

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/shivam898989' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-sharma-a5149434b' },
  { icon: <FiMail />, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sharmashivam4939@gmail.com' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [focused, setFocused] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ user_name: '', user_email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or email me directly.');

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoDesc}>
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>

            <div className={styles.contactItems}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{item.value}</a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialLinks}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`${styles.inputGroup} ${focused === 'name' ? styles.focused : ''}`}>
              <label htmlFor="contact-name" className={styles.label}>Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                placeholder="John Doe"
                required
                className={styles.input}
              />
            </div>

            <div className={`${styles.inputGroup} ${focused === 'email' ? styles.focused : ''}`}>
              <label htmlFor="contact-email" className={styles.label}>Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                placeholder="john@example.com"
                required
                className={styles.input}
              />
            </div>

            <div className={`${styles.inputGroup} ${focused === 'message' ? styles.focused : ''}`}>
              <label htmlFor="contact-message" className={styles.label}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className={styles.textarea}
              />
            </div>

            <motion.button
              type="submit"
              className={`${styles.submitBtn} ${status === 'sending' ? styles.sending : ''}`}
              whileHover={status === 'idle' ? { scale: 1.02 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                  <FiArrowRight className={styles.btnArrow} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {statusMessage && (
                <motion.div
                  className={`${styles.toast} ${status === 'success' ? styles.toastSuccess : styles.toastError}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {status === 'success' ? <FiCheck /> : <FiAlertCircle />}
                  {statusMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
