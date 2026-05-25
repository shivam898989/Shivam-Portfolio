'use client';

import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}
