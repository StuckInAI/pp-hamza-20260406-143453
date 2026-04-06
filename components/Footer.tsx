import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span>NexaFlow</span>
            </div>
            <p className={styles.tagline}>
              The platform that helps teams build, ship, and scale — faster than ever.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Roadmap</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} NexaFlow, Inc. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter" className={styles.social}>𝕏</a>
            <a href="#" aria-label="GitHub" className={styles.social}>⌥</a>
            <a href="#" aria-label="LinkedIn" className={styles.social}>in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
