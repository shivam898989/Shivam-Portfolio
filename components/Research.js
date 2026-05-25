'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiAward } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from './Research.module.css';

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeader
          label="Research"
          title="Publications & Papers"
          description="Contributing to academic research in decentralized systems and digital identity."
        />

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.cardBadge}>
            <FiAward /> IEEE Conference Publication
          </div>

          <h3 className={styles.title}>
            Majdoor Digital Trust-Ledger (MDTL): A Decentralized Framework for
            Bridging Informal Labor to Formal Economic Inclusion
          </h3>

          <p className={styles.venue}>
            Published in the <strong>2026 IEEE International Conference on Smart Futuristic
            Technology (ICSFT 2026)</strong> — Indexed in IEEE Xplore
          </p>

          <div className={styles.paperId}>
            <FiFileText /> Paper ID: 2520
          </div>

          <div className={styles.topics}>
            <h4 className={styles.topicsTitle}>Research Areas</h4>
            <div className={styles.topicTags}>
              {[
                'Decentralized Identity (DIDs)',
                'Verifiable Credentials (VCs)',
                'Blockchain Anchoring',
                'Ethereum/Polygon',
                'Zero-Knowledge Proofs',
                'Privacy-Preserving Verification',
                'Financial Inclusion',
              ].map((topic) => (
                <span key={topic} className={styles.topicTag}>{topic}</span>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <a
              href="https://ieeexplore.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FiExternalLink /> IEEE Xplore Publication
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkSecondary}
            >
              <FiExternalLink /> Conference Proceedings
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
