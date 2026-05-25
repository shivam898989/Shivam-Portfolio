'use client';

import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiAward, FiLayers } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './About.module.css';

const stats = [
  { icon: <FiCode />, value: '3+', label: 'Projects Built' },
  { icon: <FiBookOpen />, value: '1', label: 'IEEE Publication' },
  { icon: <FiLayers />, value: '10+', label: 'Technologies' },
  { icon: <FiAward />, value: '2', label: 'Internships' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="About Me"
          title="Passionate Developer & Researcher"
          description="Building the future of web with modern technologies and research-driven innovation."
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.bio}>
              I&apos;m an entry-level <strong>Full Stack Web Developer</strong> based in
              Kanpur, India, with hands-on experience in{' '}
              <span className={styles.highlight}>React.js</span>,{' '}
              <span className={styles.highlight}>Node.js</span>,{' '}
              <span className={styles.highlight}>Express.js</span>,{' '}
              <span className={styles.highlight}>PostgreSQL</span>, and{' '}
              <span className={styles.highlight}>Docker</span>.
            </p>
            <p className={styles.bio}>
              As a published <strong>IEEE research author</strong>, I&apos;ve explored
              decentralized identity systems, blockchain anchoring, and
              privacy-preserving verification. My research on the{' '}
              <span className={styles.highlight}>Majdoor Digital Trust-Ledger</span>{' '}
              framework was published at ICSFT 2026 and indexed in IEEE Xplore.
            </p>
            <p className={styles.bio}>
              I&apos;m passionate about building scalable, secure web applications and
              contributing to meaningful engineering projects that make a real-world impact.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Kanpur, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>University</span>
                <span className={styles.infoValue}>AKTU (AKGEC)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Degree</span>
                <span className={styles.infoValue}>B.Tech CS</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>sharmashivam4939@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
