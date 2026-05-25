'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiCloud } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode />,
    color: '#c4536a',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Tech',
    icon: <FiServer />,
    color: '#9b1b30',
    skills: [
      'React.js', 'Node.js', 'Express.js', 'REST APIs',
      'PostgreSQL', 'MongoDB', 'JWT Auth', 'Blockchain',
      'DIDs', 'Verifiable Credentials',
    ],
  },
  {
    title: 'Developer Tools',
    icon: <FiTool />,
    color: '#c9a96e',
    skills: [
      'Git', 'GitHub', 'GitHub Codespaces', 'Docker',
      'Docker Compose', 'VS Code', 'IntelliJ IDEA',
    ],
  },
  {
    title: 'DevOps',
    icon: <FiCloud />,
    color: '#d4a0a0',
    skills: ['Docker', 'GitHub Actions', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="Skills & Tools"
          title="Technologies I Work With"
          description="A curated toolkit of languages, frameworks, and tools I use to build modern applications."
        />

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{ '--card-color': cat.color }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.tags}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
