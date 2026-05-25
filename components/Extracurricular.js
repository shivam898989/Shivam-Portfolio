'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiStar } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Extracurricular.module.css';

const activities = [
  {
    title: 'Slum Swaraj Foundation (SSF)',
    role: 'Member',
    period: '2023 – Present',
    org: 'AKGEC',
    icon: <FiHeart />,
    color: '#c4536a',
    points: [
      'Organized educational and social outreach programs for underserved communities.',
      'Led community engagement and resource distribution initiatives.',
    ],
  },
  {
    title: 'SSB Interview Candidate',
    role: 'Candidate',
    period: 'Oct 2021',
    org: 'Allahabad',
    icon: <FiShield />,
    color: '#9b1b30',
    points: [
      'Cleared initial SSB screening stages.',
      'Participated in group tasks and leadership assessments.',
    ],
  },
  {
    title: 'NCC \'A\' Certificate — Cadet',
    role: 'Cadet',
    period: '2019',
    org: 'Kanpur Cantt',
    icon: <FiStar />,
    color: '#c9a96e',
    points: [
      'Completed intensive leadership and discipline training camp.',
      'Focused on teamwork and physical endurance.',
    ],
  },
];

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="section">
      <div className="container">
        <SectionHeader
          label="Beyond Code"
          title="Extracurricular Activities"
          description="Leadership, service, and discipline beyond the classroom."
        />

        <div className={styles.grid}>
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{ '--card-accent': act.color }}
            >
              <div className={styles.iconWrap}>{act.icon}</div>
              <h3 className={styles.title}>{act.title}</h3>
              <div className={styles.meta}>
                <span className={styles.role}>{act.role}</span>
                <span className={styles.sep}>•</span>
                <span>{act.org}</span>
                <span className={styles.sep}>•</span>
                <span>{act.period}</span>
              </div>
              <ul className={styles.points}>
                {act.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
