'use client';

import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Education.module.css';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Ajay Kumar Garg Engineering College, Ghaziabad',
    university: 'Dr. A.P.J. Abdul Kalam Technical University',
    period: 'Nov 2022 – Jun 2026',
    icon: '🎓',
  },
  {
    degree: 'Class XII — CBSE',
    institution: 'Jai Narayan Vidya Mandir Inter College',
    university: 'Kanpur, Uttar Pradesh',
    period: '2021',
    score: '88.80%',
    icon: '📚',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          label="Education"
          title="Academic Background"
          description="My educational journey in computer science and engineering."
        />

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <span className={styles.emoji}>{edu.icon}</span>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>
                <FiBook /> {edu.institution}
              </p>
              <p className={styles.university}>
                <FiMapPin /> {edu.university}
              </p>
              <div className={styles.meta}>
                <span className={styles.period}>
                  <FiCalendar /> {edu.period}
                </span>
                {edu.score && (
                  <span className={styles.score}>{edu.score}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
