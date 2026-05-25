'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Full Stack Project Management System',
    description:
      'Production-ready project management platform with JWT authentication, role-based access control, and containerized deployment using Docker Compose.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
    highlights: [
      'JWT-based authentication & RBAC',
      'RESTful APIs with PostgreSQL',
      'Docker Compose orchestration',
    ],
    gradient: 'linear-gradient(135deg, #9b1b30, #c4536a)',
  },
  {
    title: 'Majdoor Digital Trust-Ledger (MDTL)',
    description:
      'Decentralized framework for secure digital work credentials for informal workers, with five-layer architecture integrating identity, credential, ledger, privacy, and verification systems.',
    tech: ['Blockchain', 'DIDs', 'Verifiable Credentials', 'ZKPs'],
    highlights: [
      'Five-layer decentralized architecture',
      'Privacy-preserving verification via ZKPs',
      'IEEE ICSFT 2026 published research',
    ],
    gradient: 'linear-gradient(135deg, #722f37, #9b1b30)',
  },
  {
    title: 'Portfolio Website',
    description:
      'Responsive portfolio website built with reusable React components, featuring smooth navigation and mobile-friendly UI design.',
    tech: ['Next.js', 'Framer Motion', 'CSS Modules'],
    highlights: [
      'Next.js 15 App Router architecture',
      'Framer Motion animations',
      'Mobile-first responsive design',
    ],
    gradient: 'linear-gradient(135deg, #c9a96e, #d4a0a0)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills in full-stack development and research."
        />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardGlow} style={{ background: project.gradient }} />
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <FiFolder className={styles.folderIcon} />
                  <div className={styles.cardLinks}>
                    <a href="#" className={styles.cardLink} aria-label="View on GitHub">
                      <FiGithub />
                    </a>
                    <a href="#" className={styles.cardLink} aria-label="View Live">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <ul className={styles.highlights}>
                  {project.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
