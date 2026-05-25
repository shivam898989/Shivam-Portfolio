'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Full Stack Web Development Trainee',
    company: 'Orane Consulting Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jul 2025 – Aug 2025',
    points: [
      'Developed full-stack web applications using React.js and Node.js.',
      'Worked with backend APIs and databases to manage client-server communication.',
      'Used Git for version control and debugging workflows.',
      'Collaborated on scalable application development practices.',
    ],
  },
  {
    role: 'Project Based Learning Intern (Front-End Web Development)',
    company: 'IBM SkillsBuild (CSRBOX)',
    location: 'Remote',
    period: 'Jul 2025 – Aug 2025',
    points: [
      'Completed IBM SkillsBuild Front-End Web Development program.',
      'Built responsive web projects using HTML, CSS, and JavaScript.',
      'Strengthened UI development and responsive design fundamentals.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Internship experiences that shaped my development skills."
        />

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className={styles.metaItem}>
                    <FiCalendar /> {exp.period}
                  </span>
                  <span className={styles.metaItem}>
                    <FiMapPin /> {exp.location}
                  </span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>
                  <FiBriefcase /> {exp.company}
                </p>
                <ul className={styles.points}>
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
