'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiArrowRight } from 'react-icons/fi';
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sharmashivam4939@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
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
                      <a href={item.href} className={styles.contactValue}>{item.value}</a>
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
                name="name"
                value={formData.name}
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
                name="email"
                value={formData.email}
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
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend /> Send Message
              <FiArrowRight className={styles.btnArrow} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
