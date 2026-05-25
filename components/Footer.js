'use client';

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import styles from './Footer.module.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/shivam898989', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/shivam-sharma-a5149434b', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:sharmashivam4939@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoIcon}>S</span>
              Shivam Sharma
            </span>
            <p className={styles.tagline}>
              Full Stack Developer &amp; IEEE Researcher
            </p>
          </div>

          <div className={styles.navLinks}>
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={styles.navLink}
                onClick={(e) => handleClick(e, href)}
              >
                {label}
              </a>
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
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Shivam Sharma. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FiHeart className={styles.heartIcon} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
