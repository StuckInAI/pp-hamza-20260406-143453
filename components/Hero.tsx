import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      <div className={styles.container}>
        <div className={styles.badge}>🚀 Now in Public Beta</div>
        <h1 className={styles.title}>
          Build Faster.<br />
          <span className={styles.gradient}>Ship Smarter.</span>
        </h1>
        <p className={styles.subtitle}>
          NexaFlow is the all-in-one platform that supercharges your workflow.
          Automate, collaborate, and scale your projects with ease.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.primaryBtn}>Start for Free</a>
          <a href="#features" className={styles.secondaryBtn}>
            <span>See How It Works</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>User Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
